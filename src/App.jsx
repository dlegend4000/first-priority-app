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
  <div className="p-6 w-full space-y-14">
    <img src="/fp.jpg" alt="First Priority Header" className="w-full rounded-2xl shadow-lg object-cover max-h-[450px]" />

    <section className="grid md:grid-cols-2 gap-6 items-start">
      <div>
        <p className="text-lg font-medium mb-4 text-gray-800">Fast-track Check-in and Immigration</p>
        <p className="text-gray-700">Avoid the hassle of long queues and breeze through the airport like a VIP with our exclusive fast-track service. Designed for travelers who value efficiency, comfort, and exceptional service, this premium offering ensures a stress-free airport experience from start to finish. Whether you're jetting off on an international adventure or arriving at your destination after a long flight, our fast-track service allows you to bypass the usual delays and skip the crowds with confidence and ease.

          From the moment you enter the terminal, our professional agents are there to greet you and personally escort you through every step of the process. You won’t have to worry about deciphering airport signs or navigating confusing corridors — we handle all the logistics, so you can simply relax. At check-in, we assist with your documents, baggage, and boarding passes, ensuring everything is handled swiftly and smoothly. Then, you’re guided directly to the priority lanes at immigration and security, where our team works to minimize wait times and help you clear formalities with remarkable speed.</p>
      </div>
      <img src="/escort.jpg" alt="Check-in Service" className="rounded-xl shadow w-full h-48 object-cover md:h-64 lg:h-72 aspect-video" />
    </section>

    <section className="grid md:grid-cols-2 gap-6 items-start">
      <img src="/officer.jpg" alt="Escort Service" className="rounded-xl shadow w-full h-48 object-cover md:h-64 lg:h-72 aspect-video" />
      <div>
        <p className="text-lg font-medium mb-4 text-gray-800">Baggage Handling and Escort Service</p>
        <p className="text-gray-700">Our professional staff are ready to assist you the moment you arrive, ensuring a smooth and stress-free transition through the airport. From lifting and managing heavy luggage to expertly navigating the often-busy baggage claim area, our dedicated team is there to take the burden off your shoulders — quite literally. You won’t need to search for carts or struggle with multiple bags; we handle it all with care and efficiency.

          With our personalized escort service, you’ll never feel lost, rushed, or overwhelmed in unfamiliar surroundings. Our staff will guide you step by step, answering questions and making sure you feel confident and supported at every stage of the process. Whether you’re a first-time visitor unfamiliar with the airport layout or a seasoned traveler looking for a more comfortable experience, we tailor our service to meet your needs.</p>
      </div>
    </section>

    <section className="grid md:grid-cols-2 gap-6 items-start">
      <div>
        <p className="text-lg font-medium mb-4 text-gray-800">Meet and Greet</p>
        <p className="text-gray-700">Upon your arrival, you'll be warmly greeted by one of our dedicated representatives, easily identifiable by a personalized sign bearing your name. This thoughtful touch is designed to make you feel recognized and at ease from the very first moment you step into the terminal. Our professional and friendly staff are not only there to welcome you but to ensure that your journey through the airport is as smooth and stress-free as possible.

          From the moment you disembark, our team will be by your side to assist you every step of the way. Whether you're navigating through immigration, collecting your luggage, or finding your way to ground transportation, you can rely on our guidance and support. We understand that airports can be overwhelming, especially after a long flight, so our goal is to make the transition effortless and reassuring.

          Our representatives are trained to anticipate your needs, offering assistance with forms, language translation if needed, or simply a friendly face to ease your travel fatigue.</p>
      </div>
      <img src="/meeting.jpg" alt="Meet and Greet" className="rounded-xl shadow w-full h-48 object-cover md:h-64 lg:h-72 aspect-video" />
    </section>

    <section className="grid md:grid-cols-2 gap-6 items-start">
      <img src="/istockphoto.jpg" alt="Priority Boarding" className="rounded-xl shadow w-full h-48 object-cover md:h-64 lg:h-72 aspect-video" />
      <div>
        <p className="text-lg font-medium mb-4 text-gray-800">Priority Boarding and Transfers</p>
        <p className="text-gray-700">We provide fast-lane boarding and seamless flight transition support, ensuring your travel experience is smooth, efficient, and free of unnecessary delays. Our dedicated team is on hand to guarantee that you receive priority access at boarding gates, allowing you to skip long lines and board your flight with ease and comfort. Whether you’re traveling for business or leisure, this service offers a premium level of convenience tailored to your schedule.

          For those with connecting flights, tight layovers, or last-minute gate changes, our staff will coordinate every detail of your transfer. We assist with domestic or international connections, monitor your flight status, and make real-time adjustments when needed to help you stay on track. If delays or changes arise, we’re there to provide guidance, manage rebookings, and ensure your luggage is correctly transferred.</p>
      </div>
    </section>

    <section className="grid md:grid-cols-2 gap-6 items-start">
      <div>
        <p className="text-lg font-medium mb-4 text-gray-800">WhatsApp Confirmation and Support</p>
        <p className="text-gray-700">We simplify communication by using WhatsApp for confirmations, updates, and payment instructions. Our support team is responsive and available to assist before, during, and after your flight — giving you peace of mind and real-time updates when it matters most.</p>
      </div>
      <img src="/whatsapp.jpg" alt="WhatsApp Support" className="rounded-xl shadow w-full h-48 object-cover md:h-64 lg:h-72 aspect-video" />
    </section>
  </div>
);

const Transportation = () => {
  const vehicles = [
    {
      name: "Toyota Corolla (4-seater)",
      image: "/vehicles/corolla.jpg"
    },
    {
      name: "Toyota Sienna (7-seater)",
      image: "/vehicles/sienna.jpg"
    },
    {
      name: "Mercedes-Benz V-Class (7-seater Luxury)",
      image: "/vehicles/vclass.jpg"
    },
    {
      name: "Toyota Hiace (14-seater)",
      image: "/vehicles/hiace.jpg"
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