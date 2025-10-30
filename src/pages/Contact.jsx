export default function Contact() {
  return (
    <section className="p-8 md:p-16 bg-[#fffaf5] text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <p className="text-[#5a4332] mb-6">
        We'd love to hear from you! Send us a message or visit our local store.
      </p>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-2 border rounded-md" />
        <input type="email" placeholder="Email" className="p-2 border rounded-md" />
        <textarea placeholder="Message" rows="4" className="p-2 border rounded-md"></textarea>
        <button className="bg-[#b4825e] text-white py-2 rounded-md hover:bg-[#8e6449]">
          Send
        </button>
      </form>
    </section>
  );
}
