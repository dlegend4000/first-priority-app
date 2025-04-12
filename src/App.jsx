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
