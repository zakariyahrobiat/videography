import { IconType } from "react-icons";

interface WhatYouLearnProps {
  heading: string;
  text: string[];
  Icon: IconType;
  index?: number;
}

const WhatYouLearn = ({
  heading,
  text,
  Icon,
  index = 0,
}: WhatYouLearnProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-[#3f4470] via-[#2D3360] to-[#1A1F36] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />

      <div className="relative p-6 md:p-8">
        <div className="flex items-start gap-4 md:gap-6 mb-4">
          <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-linear-to-br from-[#EF476F]/20 to-[#FFD166]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#FFD166]" />
          </div>

          <h3 className="font-roboto text-xl md:text-2xl font-bold leading-tight pt-1">
            {heading}
          </h3>
        </div>

        <p className="text-[#E0E0E0] font-inter text-base md:text-lg leading-relaxed text-left">
          {text.map((item) => {
            return <li key={index}>{item}</li>;
          })}
        </p>
      </div>
    </div>
  );
};

export default WhatYouLearn;
