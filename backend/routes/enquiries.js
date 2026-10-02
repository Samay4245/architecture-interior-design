const express = require('express');
const router = express.Router();
const db = require('../config/db');

// POST /api/enquiries — Submit a new enquiry
router.post('/', async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      project_type,
      location,
      budget,
      description
    } = req.body;

    // Validate required fields
    if (!name || !phone || !project_type || !description) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields: name, phone, project_type, description'
      });
    }

    const sql = `
      INSERT INTO enquiries
      (name, phone, email, project_type, location, budget, description)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(sql, [
      name,
      phone,
      email || null,
      project_type,
      location || null,
      budget || null,
      description
    ]);

    console.log(`[Enquiry] New enquiry inserted - ID: ${result.insertId}, Name: ${name}, Phone: ${phone}`);

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      enquiryId: result.insertId
    });

  } catch (error) {
    console.error('[Enquiry Error]', error.message);
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Failed to submit enquiry. Please try again later.'
    });
  }
});

module.exports = router;
