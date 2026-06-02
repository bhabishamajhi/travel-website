import { useEffect } from "react";
import axios from "axios";

const PaymentSuccess = () => {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get("session_id");

    if (sessionId) {
      axios.post("http://localhost:5000/api/payment/verify", {
        sessionId,
      });
    }
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful 
      </h1>
    </div>
  );
};

export default PaymentSuccess;