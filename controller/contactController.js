const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

/**
 * @desc    Get all contacts
 * @route   GET /api/contacts
 * @access  Public
 */
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  return res.status(200).json({
    message: "Get All contacts",
    data: contacts,
  });
});

/**
 * @desc    Get a single contact
 * @route   GET /api/contacts/:id
 * @access  Public
 */
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const { name, email, phone } = contact;
  return res.status(200).json({
    success: true,
    message: "Contact retrieved successfully",
    data: { name, email, phone },
  });
});

/**
 * @desc    Create new contact
 * @route   POST /api/contacts
 * @access  Public
 */
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  const errors = [];
  if (!name) errors.push({ field: "name", message: "Name is required" });
  if (!email) errors.push({ field: "email", message: "Email is required" });
  if (!phone) errors.push({ field: "phone", message: "Phone is required" });
  if (errors.length > 0) {
    res.status(400);
    const error = new Error("Validation Failed");
    error.errors = errors;
    throw error;
  }

  const contact = await Contact.create({ name, email, phone });
  res.status(201).json({
    message: "Contact created successfully",
    data: contact,
  });
});

/**
 * @desc    Update contact
 * @route   PUT /api/contacts/:id
 * @access  Public
 */
const updateContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { name, email, phone },
    { new: true }
  );

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  return res.status(200).json({
    message: "Contact updated successfully",
    data: contact,
  });
});

/**
 * @desc    Delete contact
 * @route   DELETE /api/contacts/:id
 * @access  Public
 */
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  return res.status(200).json({
    message: "Contact deleted successfully",
    data: contact,
  });
});

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
