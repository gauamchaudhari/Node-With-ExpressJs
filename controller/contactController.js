const asyncHandler = require("express-async-handler");

/**
 * @desc    Get all contacts
 * @route   GET /api/contacts
 * @access  Public
 */
const getAllContacts = asyncHandler(async (req, res) => {
  const bodyData = req.body;
  return res.status(200).json({
    message: "Get All contacts",
  });
});

/**
 * @desc    Get a single contact
 * @route   GET /api/contacts/:id
 * @access  Public
 */
const getContact = asyncHandler(async (req, res) => {
  console.log("ID::", req.params.id);
  return res.status(200).json({
    message: "Get on single contact",
  });
});

/**
 * @desc    Create new contact
 * @route   POST /api/contacts
 * @access  Public
 */
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  res.status(201).json({
    message: "POST Routes",
  });
});

/**
 * @desc    Update contact
 * @route   PUT /api/contacts/:id
 * @access  Public
 */
const updateContact = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Update Routes",
  });
});

/**
 * @desc    Delete contact
 * @route   DELETE /api/contacts/:id
 * @access  Public
 */
const deleteContact = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Delete Routes",
  });
});

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
