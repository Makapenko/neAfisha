const express = require('express');

const router = express.Router();

// Import routes
const indexRouter = require('./src/routes/index.router');
const authRouter = require('./src/routes/auth.router');
const accountRouter = require('./src/routes/account.router');
const addEventRouter = require('./src/routes/addEvent.router');
const locationRouter = require('./src/routes/location/location.router');
const eventRouter = require('./src/routes/event/event.router');
const imageRouter = require('./src/routes/image/image.router');

// Routes
router.use('/', indexRouter);
router.use('/auth', authRouter);
router.use('/account', accountRouter);
router.use('/location', locationRouter);
router.use('/event', eventRouter);
router.use('/addEvent', addEventRouter);
router.use('/image', imageRouter);

module.exports = router;
