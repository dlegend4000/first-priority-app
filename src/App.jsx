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
  <div className="p-6 w-full space-y-14">
    <img src="/lagos-airport-image.jpg" alt="First Priority Header" className="w-full rounded-2xl shadow-lg object-cover max-h-[450px]" />

    <section className="grid md:grid-cols-2 gap-6 items-start">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Fast-track Check-in and Immigration</h2>
        <p className="text-gray-700">
          Avoid long queues with our exclusive fast-track access through check-in counters and immigration control. Our agents guide you quickly through all necessary formalities.
        </p>
      </div>
      <img src="/checkin-service.png" alt="Check-in Service" className="rounded-xl shadow w-full max-h-72 object-cover" />
    </section>

    <section className="grid md:grid-cols-2 gap-6 items-start">
      <img src="/escort-service.jpg" alt="Escort Service" className="rounded-xl shadow w-full max-h-72 object-cover" />
      <div>
        <h2 className="text-2xl font-semibold mb-2">Baggage Handling and Escort Service</h2>
        <p className="text-gray-700">
          Our staff assist with your luggage from arrival gate to baggage claim and escort you through the airport for a stress-free experience.
        </p>
      </div>
    </section>

    <section className="grid md:grid-cols-2 gap-6 items-start">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Meet and Greet</h2>
        <p className="text-gray-700">
          A professional greeter awaits you on arrival with a personalized sign, ready to help you navigate the airport with ease.
        </p>
      </div>
      <img src="/meet-greet.jpg" alt="Meet and Greet" className="rounded-xl shadow w-full max-h-72 object-cover" />
    </section>

    <section className="grid md:grid-cols-2 gap-6 items-start">
      <img src="/priority-boarding.jpg" alt="Priority Boarding" className="rounded-xl shadow w-full max-h-72 object-cover" />
      <div>
        <h2 className="text-2xl font-semibold mb-2">Priority Boarding and Transfers</h2>
        <p className="text-gray-700">
          Skip the line with priority boarding options. We also assist with domestic transfers and flight changes if needed.
        </p>
      </div>
    </section>

    <section className="grid md:grid-cols-2 gap-6 items-start">
      <div>
        <h2 className="text-2xl font-semibold mb-2">WhatsApp Confirmation and Support</h2>
        <p className="text-gray-700">
          Once booked, our team will confirm your service and coordinate payment via WhatsApp — ensuring real-time updates and support.
        </p>
      </div>
      <img src="/whatsapp-support.jpg" alt="WhatsApp Support" className="rounded-xl shadow w-full max-h-72 object-cover" />
    </section>
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
