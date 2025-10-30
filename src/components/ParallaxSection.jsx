import { Parallax } from "react-parallax";

export default function ParallaxSection({ image, children }) {
  return (
    <Parallax bgImage={image} strength={400}>
      <div className="h-[70vh] flex items-center justify-center text-white text-center bg-black/30">
        {children}
      </div>
    </Parallax>
  );
}