export default function Contact() {
  return (
    <section className="p-8 md:p-16 text-center">
      <h2 className="text-3xl font-semibold mb-4 text-[#F49C9C]">Pedidos</h2>
      <p className="text-[#706a64]">A partir de 50 unidades</p>
      <p className="text-[#706a64]">Fechas de entrega a trata sobre pedidos</p>
      <p className="text-[#706a64] mb-6">Se requiere % pago inicial en base a la cantidad </p>

      
      
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Nombre" className="p-2 border rounded-md text-[#706a64]" />
        <input type="email" placeholder="Correo" className="p-2 border rounded-md text-[#706a64]" />
        <input type="number" placeholder="Teléfono" className="p-2 border rounded-md text-[#706a64]" />
        <textarea placeholder="Mensaje" rows="4" className="p-2 border rounded-md text-[#706a64]"></textarea>
        <button className="bg-[#b4825e] text-white py-2 rounded-md hover:bg-[#8e6449]">
          Enviar
        </button>
      </form>
    </section>
  );
}
