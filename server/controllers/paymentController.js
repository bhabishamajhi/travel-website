const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY
);

const createCheckoutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Gift Card",
            },
            unit_amount: req.body.amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url:
        "http://localhost:5173/payment-success",
      cancel_url:
        "http://localhost:5173/buy-gift-card",
    });

    res.json({
      url: session.url,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCheckoutSession,
};