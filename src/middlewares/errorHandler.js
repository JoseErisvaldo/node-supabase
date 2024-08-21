module.exports = (err, req, res, next) => {
  console.error('Internal server error:', err.message);
  res.status(500).json({ error: 'An internal server error occurred' });
};
