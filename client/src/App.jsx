
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import GiftStay from "./pages/GiftStay";
import Inspiration from "./pages/Inspiration";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AddCabin from "./pages/admin/AddCabin";
import EditCabin from "./pages/admin/EditCabin";
import ManageCabins from "./pages/admin/ManageCabins";
import Reservations from "./pages/admin/Reservations";

import ProtectedRoute from "./components/ProtectedRoute";
import Cabins from "./pages/Cabins.jsx";
import CabinDetails from "./pages/CabinDetails";
import Profile from "./pages/Profile";
import BuyGiftCard from "./pages/BuyGiftCard";
import PaymentSuccess from "./pages/PaymentSuccess";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/cabins" element={<Cabins />} />
      <Route path="/gift-stay" element={<GiftStay />} />
      <Route path="/inspiration" element={<Inspiration />} />
      <Route path="/cabins/:id" element={<CabinDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/buy-gift-card" element={<BuyGiftCard />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/reservations/:id" element={<Reservation />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/add"
        element={
          <ProtectedRoute>
            <AddCabin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/edit/:id"
        element={
          <ProtectedRoute>
            <EditCabin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/manage"
        element={
          <ProtectedRoute>
            <ManageCabins />
          </ProtectedRoute>
        }
      />
      <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
   }
  />

  <Route
  path="/admin/reservations"
  element={
    <ProtectedRoute>
      <Reservations />
    </ProtectedRoute>
  }
/>


    </Routes>
    
  );
}

export default App;