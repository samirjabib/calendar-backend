const express = require('express');
const { authRouter } = require('../components/auth/auth.routes');
const { eventRouter } = require('../components/events/events.routes')


const router = express.Router();

router.use('/auth', authRouter );
router.use('/events', eventRouter);


module.exports = { router };

