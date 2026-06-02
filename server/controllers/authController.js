const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "admin123") {
    return res.json({
      success: true,
      token: "admin-token-123",
      user: {
        name: "Admin",
        email: "admin@gmail.com",
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
};

module.exports = {
  loginAdmin,
};