import { FaCalendar, FaClock, FaLaptop } from "react-icons/fa";

const Class = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-12 text-left md:grid-cols-2 px-4 md:px-10 ">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Upcoming Class Details
        </h1>

        <div className="space-y-3">
          <div className="flex items-center gap-4 p-5 border-b border-white">
            <div className="p-3 rounded-lg bg-linear-to-br from-[#EF476F] to-[#FF9A5A] shadow-md">
              <FaCalendar className="text-xl text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#E0E0E0]">
                Start Date
              </h3>
              <p className="text-2xl font-bold text-white mt-1">
                January 30, 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 border-b border-white">
            <div className="p-3 rounded-lg bg-linear-to-br from-[#EF476F] to-[#FF9A5A] shadow-md">
              <FaClock className="text-xl text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#E0E0E0]">Duration</h3>
              <p className="text-2xl font-bold text-white mt-1">8 Weeks</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 border-b border-white">
            <div className="p-3 rounded-lg bg-linear-to-br from-[#EF476F] to-[#FF9A5A] shadow-md">
              <FaLaptop className="text-xl text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#E0E0E0]">Mode</h3>
              <p className="text-2xl font-bold text-white mt-1">Virtual</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 h-full">
          <div className="text-center mb-8">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-linear-to-r from-[#EF476F] to-[#FF9A5A] text-white text-sm font-bold uppercase tracking-wider">
              Exclusive Bonuses
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#EF476F] to-[#FF9A5A] text-transparent bg-clip-text">
              Join the Video Editing Class
            </h1>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "Free shooting angles guide",
              "Editing templates or presets",
              "AI prompting and video generation",
              "Content ideas for Nigerian businesses",
              "WhatsApp support group",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-linear-to-r from-[#EF476F]/5 to-[#FF9A5A]/5 hover:from-[#EF476F]/10 hover:to-[#FF9A5A]/10 transition-all duration-300 group"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-linear-to-r from-[#EF476F] to-[#FF9A5A] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="font-medium text-gray-800 group-hover:text-[#EF476F] transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <div className="inline-block relative">
              <div className="absolute -top-3 -right-3 bg-linear-to-r from-[#EF476F] to-[#FF9A5A] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                Special Price
              </div>
              <p className="text-6xl md:text-7xl font-bold bg-linear-to-r from-[#EF476F] to-[#FF9A5A] text-transparent bg-clip-text">
                ₦30,000
              </p>
              <p className="text-gray-600 mt-2 font-medium">
                One-time payment • Lifetime access
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
