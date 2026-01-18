import { FaMoneyBill, FaVideo, FaEdit } from "react-icons/fa";
import WhatYouLearn from "./whatYouLearn";
import Who from "./who";

const FeaturesSection = () => {
  const learnings = [
    {
      heading: "Smartphone Videography",
      text: [
        "How to properly set up your smartphone camera",
        "Camera settings explained in simple terms",
        "How to frame your shots like a professional",
        "Shooting smooth videos (even without expensive tripods or gimbals)",
        "Lighting techniques using natural light and affordable tools",
        "How to record clean and clear audio",
        "Shooting videos for social media, interviews, vlogs, and more",
      ],
      Icon: FaVideo,
    },

    {
      heading: "Smartphone Video Editing",
      text: [
        "Best editing apps for Android & iPhone",
        "How to edit videos from scratch",
        "Cutting, trimming, and arranging clips properly",
        "Adding text, subtitles, transitions, and effects",
        "Color correction and basic color grading",
        "Adding music and sound effects professionally",
        "Exporting videos in the best quality for Instagram, TikTok & YouTube.",
        "Typography. ",
        "Basic Motion design.",
        "Stop Motion",
        "Key framing ",
        "Masking ",
        "Storytelling",
        "Capcut A-Z",
        "AI suites for creatives",
        "Mood boards and a lot more.",
      ],
      Icon: FaEdit,
    },
    {
      heading: "Monetization & Opportunities",
      text: [
        "How to use your skills to make money",
        "Freelance opportunities in Nigeria & Africa",
        "Creating content for businesses and brands",
        "Building your personal brand with video",
        "Pricing your services confidently",
        "Starting your career as a mobile videographer",
        "Entering the creators economy",
      ],
      Icon: FaMoneyBill,
    },
  ];

  const targetAudience = [
    "Content creators & influencers",
    "Small business owners",
    "Social media managers",
    "Students & NYSC members",
    "Beginners wanting digital skills",
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-10  mx-auto">
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What You'll &nbsp;
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#EF476F] to-[#FFD166]">
              Learn
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {learnings.map((item, index) => (
            <WhatYouLearn
              key={index}
              heading={item.heading}
              text={item.text}
              Icon={item.Icon}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-linear-to-r from-[#EF476F]/20 to-[#FFD166]/20 text-[#FFD166] font-semibold text-sm">
              Why This Matters
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Why video editing is important in 2026?
            </h2>
            <div className="space-y-4">
              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                In today’s digital world, video is currency. Businesses, brands,
                creators, and organizations across Nigeria and Africa are
                looking for people who can create good videos, but many people
                are held back because they think they need expensive cameras.
                You don’t. Not when you have a phone that can give you a great
                result.
              </p>
              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                Honestly, with the right knowledge, your smartphone can produce
                professional-quality videos that attract attention, build trust,
                and generate passive daily/monthly income for you.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-linear-to-br from-[#1A1F36] to-[#2C2F4F] flex items-center justify-center p-8"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            This Course is &nbsp;
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#EF476F] to-[#FFD166]">
              Perfect For
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {targetAudience.map((text, index) => (
            <Who key={index} text={text} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-[#EF476F]/10 to-[#FFD166]/10 border border-white/10">
            <span className="text-[#FFD166]">🎬</span>
            <span className="text-white font-medium">
              No prior experience needed • Start from absolute zero
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
