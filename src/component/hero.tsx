import Button from "./button";

const Hero = () => {
  return (
    <section className="font-roboto grid lg:grid-cols-2 text-left px-4 py-8 md:px-10 md:py-20 gap-10 md:gap-16">
      <div className="flex flex-col gap-6 md:gap-8 justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          The Best Smartphone Videography & Video Editing Masterclass in 2026!
        </h1>
        <p className="text-[#E0E0E0] text-lg md:text-xl leading-relaxed opacity-90">
          Learn to create professional-quality videos using just your
          smartphone. No expensive camera needed. Unlock the full potential of
          the device you're already holding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
          <Button
            text="Enrol Now"
            className="w-full sm:w-auto"
            variant="primary"
          />
          <Button
            text="View Curriculum"
            variant="outline"
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="aspect-video bg-linear-to-br from-[#FFD166]/20 to-[#EF476F]/20 flex items-center justify-center">
          {/* <div className="text-center p-8">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-linear-to-r from-[#FFD166] to-[#EF476F] flex items-center justify-center">
              <span className="text-2xl md:text-3xl">🎬</span>
            </div>
            <p className="text-white/80 font-medium">Hero Video/Image</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
