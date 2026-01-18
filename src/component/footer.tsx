import Button from "./button";

const Footer = () => {
  return (
    <footer
      className="flex flex-col justify-between items-center w-full px-4 py-4 md:px-10 text-white gap-5 bg-[#121826]"
      role="banner"
    >
      <h1 className="text-2xl font-bold font-space tracking-tight">
        Ready to Start Your Video Editing Journey?
      </h1>

      <nav role="navigation">
        <a href="https://bit.ly/EditwithSABpaid">
          <Button text="Enrol Now" aria-label="Enroll in the course" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
