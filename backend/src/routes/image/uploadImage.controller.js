const axios = require('axios')
const AWS = require('aws-sdk')
const stream = require('stream')
const sharp = require('sharp')

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  endpoint: 'https://storage.yandexcloud.net',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
})

const uploadImage = async (req, res) => {
  try {
    const { imageUrl } = req.body
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })

    const webpBuffer = await sharp(response.data).webp().toBuffer()

    const passThrough = new stream.PassThrough()
    passThrough.end(webpBuffer)

    const timeStamp = Date.now().toString()
    const shortenedTimeStamp = timeStamp.substring(4)

    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${shortenedTimeStamp}.webp`,
      Body: passThrough,
      ContentType: 'image/webp',
    }

    const uploadResponse = await s3.upload(params).promise()

    res.json({ imageUrl: uploadResponse.Location })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({
        error: `An error occurred while uploading the image: ${error.message}`,
      })
  }
}

module.exports = uploadImage
