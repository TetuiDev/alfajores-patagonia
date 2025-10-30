import ParallaxSection from "../components/ParallaxSection";

export default function Home({isMobile}) {
  return (
    <div>
      <ParallaxSection isMobile={isMobile} image="/Fondo.jpg">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold font-['Helbetica']">Alfajores Patagonia</h1>
          <p className="mt-4 text-lg font-['Helbetica']">Tradicionales alfajores caseros</p>
        </div>
      </ParallaxSection>

      <section className="p-8 md:p-16 text-center ">
        <div className="max-w-3xl mx-auto">
          <img
            src="/Logo.png"
            alt="Alfajores"
            className="w-48 mx-auto mb-6 rounded-full shadow-lg"
          />
          <h2 className="text-3xl font-semibold mb-4 text-[#F49C9C]">Delicadeza artesanal</h2>
          <p className="text-lg text-[#706a64]">
            Disfruta del auténtico sabor del sur del mundo en cada bocado — elaborado con
            maicena, harina, suave dulce de leche, coco, y pasión artesanal.            
          </p>
        </div>
      </section>
    </div>
  );
}