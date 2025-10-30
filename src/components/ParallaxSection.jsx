import { Parallax } from "react-parallax";

export default function ParallaxSection({ isMobile, image, children }) {
  // 46 30
  return (
    <Parallax bgImage={image} strength={400}>
      <div className={`${isMobile?"h-[30vh]":"h-[44vh]"}  flex items-center justify-center text-white text-center bg-black/30 `} >
        {children}
      </div>
    </Parallax>
  );
}