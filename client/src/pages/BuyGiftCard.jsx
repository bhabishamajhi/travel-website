import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_xxxxxxxxxxxxxxxxx"
);

const BuyGiftCard = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: 100,
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "amount"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending payment request...");

      const res = await fetch(
        "http://localhost:5000/api/payment/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           name: form.name,
           email: form.email,
           amount: Number(form.amount),
           message: form.message,
          }),
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server Error:", errorText);
        alert("Server error: " + errorText);
        return;
      }

      const data = await res.json();
      console.log("Session data:", data);

  
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Stripe session URL missing");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed: " + error.message);
    }
  };

  return (
    <div className="bg-[#f8f5f0] min-h-screen">
      <section
        className="relative text-white py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Buy Gift Card
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto">
            Send the gift of relaxation, nature, and unforgettable cabin stays.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            Gift Card Details
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Recipient Name"
              className="w-full border p-3 rounded-lg mb-4"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Recipient Email"
              className="w-full border p-3 rounded-lg mb-4"
              required
            />

            <select
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-4"
            >
              <option value={50}>$50</option>
              <option value={100}>$100</option>
              <option value={200}>$200</option>
              <option value={500}>$500</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message (optional)"
              className="w-full border p-3 rounded-lg mb-6"
              rows="4"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Complete Purchase
            </button>
          </form>
        </div>

        {/* Summary */}
        <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
          <h2 className="text-3xl font-bold mb-6">Summary</h2>

          <p><b>Recipient:</b> {form.name || "-"}</p>
          <p><b>Email:</b> {form.email || "-"}</p>
          <p><b>Amount:</b> ${form.amount}</p>
          <p><b>Message:</b> {form.message || "No message"}</p>

          <div className="mt-6 border-t pt-4">
            <h3 className="text-xl font-bold">
              Total: ${form.amount}
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyGiftCard;