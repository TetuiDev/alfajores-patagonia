import ParallaxSection from "../components/ParallaxSection";

export default function Home() {
  return (
    <div>
      <ParallaxSection image="/images/alfajores-bg.jpg">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">Alfajores Patagonia</h1>
          <p className="mt-4 text-lg">Sweet tradition from the South</p>
        </div>
      </ParallaxSection>

      <section className="p-8 md:p-16 text-center bg-[#fffaf5]">
        <div className="max-w-3xl mx-auto">
          <img
            src="/images/alfajor-product.jpg"
            alt="Alfajores"
            className="w-48 mx-auto mb-6 rounded-full shadow-lg"
          />
          <h2 className="text-3xl font-semibold mb-4">Handcrafted Delicacy</h2>
          <p className="text-lg text-[#5a4332]">
            Taste the authentic flavor of Patagonia in every bite — made with 
            rich chocolate, smooth dulce de leche, and artisanal passion.
          </p>
        </div>
      </section>
    </div>
  );
}