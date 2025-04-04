import React, { useState, useEffect } from "react";

const sendEmail = async (formData) => {
  await fetch("https://formspree.io/f/xzzejkae", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    flightNumber: "",
    airline: "",
    arrivalTime: "",
    airport: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(form);
    setSubmitted(true);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book First Priority Service</h1>
      {submitted ? (
        <div className="text-green-600">
          Thank you! You will be contacted on WhatsApp for confirmation and payment.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input className="p-2 border rounded" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input className="p-2 border rounded" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input className="p-2 border rounded" name="email" placeholder="Email Address" type="email" onChange={handleChange} required />
          <input className="p-2 border rounded" name="flightNumber" placeholder="Flight Number" onChange={handleChange} required />
          <input className="p-2 border rounded" name="airline" placeholder="Airline" onChange={handleChange} required />
          <input className="p-2 border rounded" name="arrivalTime" placeholder="Arrival Date & Time" type="datetime-local" onChange={handleChange} required />
          <input className="p-2 border rounded" name="airport" placeholder="Airport (e.g., Lagos)" onChange={handleChange} required />
          <button className="bg-blue-600 text-white py-2 px-4 rounded" type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

const Info = () => (
  <div className="p-4 max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">About First Priority</h1>
    <p className="mb-2">First Priority gives you premium assistance at Nigerian airports, including:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Fast-track check-in and immigration</li>
      <li>Baggage handling and escort service</li>
      <li>Meet and greet by a professional on arrival</li>
      <li>Priority boarding and transfers</li>
      <li>Confirmation via WhatsApp and payment through WhatsApp</li>
    </ul>
  </div>
);

const BureauDeChange = () => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/NGN")
      .then(res => res.json())
      .then(data => setRates(data.rates));
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bureau de Change</h1>
      {rates ? (
        <ul className="space-y-1">
          {['USD', 'EUR', 'GBP', 'CAD'].map(currency => (
            <li key={currency}>
              1 {currency} = {(1 / rates[currency]).toFixed(2)} NGN
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading exchange rates...</p>
      )}
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState("booking");

  return (
    <div className="min-h-screen">
      <nav className="p-4 bg-gray-100 flex justify-center gap-4">
        <button className="border px-4 py-2 rounded" onClick={() => setPage("booking")}>Booking</button>
        <button className="border px-4 py-2 rounded" onClick={() => setPage("info")}>Information</button>
        <button className="border px-4 py-2 rounded" onClick={() => setPage("exchange")}>Bureau de Change</button>
      </nav>
      {page === "booking" && <Booking />}
      {page === "info" && <Info />}
      {page === "exchange" && <BureauDeChange />}
    </div>
  );
}
