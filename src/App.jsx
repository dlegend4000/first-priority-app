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
    arrivalTime: new Date().toISOString().slice(0, 16),
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
    <div
      className="relative min-h-screen bg-cover bg-center px-6 py-12"
      style={{ backgroundImage: "url('carplane.jpg')" }}
    >
      {/* Mobile-only dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 md:hidden z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
        <div className="text-white max-w-xl text-center md:text-left mb-10 md:mb-0 md:mt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Introducing VIP Airport Services
          </h1>
          <p className="text-base sm:text-lg mt-4 font-light">
            Skip the hassle. Enjoy personal assistance every step of the way.
          </p>
        </div>

        <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-xl w-full max-w-xl mt-8 md:mt-0 md:mt-80">
          <h1 className="text-xl font-semibold mb-4 text-gray-800">
            Book First Priority Service
          </h1>
          {submitted ? (
            <div className="text-green-600">
              Thank you! You will be contacted on WhatsApp for confirmation and payment.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input className="w-full p-3 border rounded-md" name="name" placeholder="Full Name" onChange={handleChange} required />
              <input className="w-full p-3 border rounded-md" name="phone" placeholder="Phone Number" onChange={handleChange} required />
              <input className="w-full p-3 border rounded-md" name="email" placeholder="Email Address" type="email" onChange={handleChange} required />
              <input className="w-full p-3 border rounded-md" name="flightNumber" placeholder="Flight Number" onChange={handleChange} required />
              <input className="w-full p-3 border rounded-md" name="airline" placeholder="Airline" onChange={handleChange} required />
              <input className="w-full p-3 border rounded-md" type="datetime-local" name="arrivalTime" value={form.arrivalTime} onChange={handleChange} required />
              <input className="w-full p-3 border rounded-md" name="airport" placeholder="Airport (e.g., Lagos)" onChange={handleChange} required />
              <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition" type="submit">
                Submit Booking
              </button>
            </form>
          )}
        </div>
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
      <img src="/fpflag2.png" alt="FirstPriority Signage" className="rounded-lg shadow-md w-full h-auto object-cover" />
    </div>

    <div className="grid md:grid-cols-2 gap-6 items-start">
      <img src="/reception2.png" alt="FirstPriority Desk" className="rounded-lg shadow-md w-full h-auto object-cover" />
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
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-wide text-gray-800">First Priority</div>
          <div className="hidden md:flex gap-6 items-center">
            <button className="text-sm text-gray-700 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 transition" onClick={() => setPage("booking")}>Booking</button>
            <button className="text-sm text-gray-700 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 transition" onClick={() => setPage("info")}>Information</button>
            <button className="text-sm text-gray-700 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 transition" onClick={() => setPage("transport")}>Transportation</button>
          </div>

          <div className="md:hidden relative group">
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100 rounded-md hover:bg-gray-200 text-gray-800">
              Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none group-hover:pointer-events-auto">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setPage("booking")}>Booking</button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setPage("info")}>Information</button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setPage("transport")}>Transportation</button>
            </div>
          </div>
          </div>
</header>
      {page === "booking" && <Booking />}
      {page === "info" && <Info />}
      {page === "transport" && <Transportation />}
    </div>
  );
}
