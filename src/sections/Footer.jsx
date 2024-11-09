import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <div>
          © {date}
          <span className="font-normal text-neutral-400"> Swapnil Sachan</span>,
          inspired by JSMastery
        </div>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <img src="assets/github.svg" alt="github" className="w-6 h-6" />
        </div>
        <div className="social-icon">
          <img src="assets/twitter.svg" alt="twitter" className="w-6 h-6" />
        </div>
        <div className="social-icon">
          <img src="assets/instagram.svg" alt="linkedin" className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
