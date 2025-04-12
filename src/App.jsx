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
    <div className="relative min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-6 py-12" style={{ backgroundImage: "url('carplane.jpg')" }}>
      <div className="text-white max-w-xl md:text-left text-center mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Introducing VIP Airport Services</h1>
        <p className="text-lg mt-4 font-light">Skip the hassle. Enjoy personal assistance every step of the way.</p>
      </div>

      <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-xl w-full max-w-xl">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">Book First Priority Service</h1>
        {submitted ? (
          <div className="text-green-600">
            Thank you! You will be contacted on WhatsApp for confirmation and payment.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input className="p-3 border rounded-md" name="name" placeholder="Full Name" onChange={handleChange} required />
            <input className="p-3 border rounded-md" name="phone" placeholder="Phone Number" onChange={handleChange} required />
            <input className="p-3 border rounded-md" name="email" placeholder="Email Address" type="email" onChange={handleChange} required />
            <input className="p-3 border rounded-md" name="flightNumber" placeholder="Flight Number" onChange={handleChange} required />
            <input className="p-3 border rounded-md" name="airline" placeholder="Airline" onChange={handleChange} required />
            <input className="p-3 border rounded-md" name="arrivalTime" placeholder="Arrival Date & Time" type="datetime-local" onChange={handleChange} required />
            <input className="p-3 border rounded-md" name="airport" placeholder="Airport (e.g., Lagos)" onChange={handleChange} required />
            <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition" type="submit">
              Submit Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const Info = () => (
  <div className="p-6 w-full max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">First Priority</h1>
    <p className="mb-4">Get priority access at more than 1,000 airports within the First Priority team! With First Priority, you enjoy seamless service every step of the way — from check-in, baggage drop-off, and delivery, to security and boarding.</p>

    <div className="grid md:grid-cols-2 gap-6 items-start mb-10">
      <div>
        <h2 className="text-xl font-semibold mb-2">Fast, Priority Access at the Airport</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Baggage check-in and drop-off in dedicated areas</li>
          <li>Priority line for security and immigration clearance (in some airports)</li>
          <li>Dedicated line at ticket offices and transfer desks</li>
          <li>Priority boarding or boarding at your leisure</li>
          <li>Priority baggage delivery</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">First Priority signs are displayed throughout airports to guide you every step of your way.</p>
      </div>
      <img src="/fplogo.png" alt="FirstPriority Signage" className="rounded-lg shadow-md w-full h-auto object-cover" />
    </div>

    <div className="grid md:grid-cols-2 gap-6 items-start">
      <img src="/Screenshot 2025-04-04 at 16.30.04.png" alt="FirstPriority Desk" className="rounded-lg shadow-md w-full h-auto object-cover" />
      <div>
        <h2 className="text-xl font-semibold mb-2">An Exclusive Service</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>First Priority Team Elite Plus members</li>
          <li>Passengers in the La Première, Business, and Premium cabins</li>
          <li>Passengers traveling with Flex tickets between France and Europe or North Africa</li>
          <li>Passengers with a Discount Passholder fare</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">If eligible, your boarding pass will show the First Priority logo. Just follow the signs at the airport.</p>
      </div>
    </div>
  </div>
);


const Transportation = () => {
  const vehicles = [
    {
      name: "Mercedes-Benz S-Class (Luxury Sedan)",
      image: "/sclass.jpg"
    },
    {
      name: "Mercedes-Benz E-Class (Executive Sedan)",
      image: "/eclass.jpg"
    },
    {
      name: "Mercedes-Benz V-Class (7-seater Luxury Van)",
      image: "/vclass.jpg"
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Airport Transfer Fleet</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img src={vehicle.image} alt={vehicle.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{vehicle.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState("booking");

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="p-4 bg-white shadow flex justify-center gap-4">
        <button className="border px-4 py-2 rounded" onClick={() => setPage("booking")}>Booking</button>
        <button className="border px-4 py-2 rounded" onClick={() => setPage("info")}>Information</button>
        <button className="border px-4 py-2 rounded" onClick={() => setPage("transport")}>Transportation</button>
      </nav>
      {page === "booking" && <Booking />}
      {page === "info" && <Info />}
      {page === "transport" && <Transportation />}
    </div>
  );
}