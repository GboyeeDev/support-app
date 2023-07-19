const express = require('express');
const router = express.Router();
const {
  getTickets,
  getTicket,
  createTicket,
} = require('../tickets/ticketsController');

const { protect } = require('../../middleware/authMiddleware');

router.route('/').get(protect, getTickets).post(protect, createTicket);

router.route('/:id').get(protect, getTicket);

module.exports = router;
