const AWS = require('aws-sdk')
const db = require('../../db/models')

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  endpoint: 'https://storage.yandexcloud.net',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
})

const deleteImage = async (req, res) => {
  try {
    const { imageUrl } = req.body // Мы ожидаем, что полное изображение URL придет в запросе
    const key = imageUrl.split('/').pop() // Используем только имя файла

    // Удаляем изображение из хранилища
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: key,
    }

    await s3
      .deleteObject(params, (err, data) => {
        if (err) console.log(err, err.stack) // an error occurred
        else console.log(err, data) // successful response
      })
      .promise()

    // Удаляем ссылку на изображение из БД
    const photo = await db.LocationPhoto.findOne({
      where: { url: imageUrl },
    })
    if (photo) {
      await photo.destroy()
    }

    res.json({ message: 'Image deleted successfully.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `An error occurred while deleting the image: ${error.message}`,
    })
  }
}

module.exports = deleteImage
