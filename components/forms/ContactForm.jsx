export default function ContactForm() {
  return (
    <form action="/api/contact" method="POST" className="flex flex-col space-y-4 max-w-lg mx-auto">
      <input type="text" name="name" placeholder="Your Name" className="p-2 border border-gray-300 rounded" required />
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
  );
}
