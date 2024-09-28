export default function Contact() {
  return (
    <section id="contact" className="h-screen p-8 bg-gradient-lavender flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form action="/api/contact" method="POST" className="flex flex-col space-y-4 max-w-lg mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2 border border-gray-300 rounded"
          rows="4"
          required
        />
        <button type="submit" className="p-2 bg-royalblue text-white rounded hover:bg-teal">
          Send Message
        </button>
      </form>
    </section>
  );
}
