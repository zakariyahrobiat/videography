interface WhoProps {
  text: string;
  index?: number;
}

const Who = ({ text, index = 0 }: WhoProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-[#EF476F] to-[#FF9A5A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-5 md:p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 rounded-full bg-linear-to-r from-[#EF476F] to-[#FF9A5A] shrink-0" />
          <p className="text-[#1A1F36] font-inter font-medium text-sm md:text-base leading-relaxed">
            {text}
          </p>
        </div>

        {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-xs text-[#EF476F] font-semibold tracking-wider uppercase">
            Perfect Fit ✓
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Who;
