import { ReactNode } from "react";

interface BackgroundLayoutProps {
  children: ReactNode;
  className?: string;
}

const BackgroundLayout = ({
  children,
  className = "",
}: BackgroundLayoutProps) => {
  return (
    <main
      className={`flex justify-center text-center min-h-screen bg-linear-to-r from-[#1A1F36] via-[#38406d] to-[#3f4470] text-white overflow-x-hidden w-full ${className}`}
      role="main"
    >
      <div className="w-full h-full mx-auto">{children}</div>
    </main>
  );
};

export default BackgroundLayout;
