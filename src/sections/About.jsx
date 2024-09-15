import React from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button";

const About = () => {
  const [isEmailCopied, setIsEmailCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("swapnil.sachan2003@gmail.com");
    setIsEmailCopied(true);
    setTimeout(() => {
      setIsEmailCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space py-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi! I'm Swapnil</p>
              <p className="grid-subtext">
                With 2 years of experience, I've honed my skills in full-stack
                development with a specialized focus on code quality and
                performant products
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I'm proficient in JavaScript, React, Node.js, and MongoDB. I
                also have experience in Python, Django, and SQL
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                width={326}
                height={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>

            <div>
              <p className="grid-headtext">
                I work remotely across most time zones.
              </p>

              <p className="grid-subtext">
                I am based out of India, and am willing to relocate, if the
                opportunity is exciting enough.
              </p>

              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. I not
                only build products but do competitive programming as well.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={isEmailCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="email"
                />

                <p className="lg:tetx-2xl md:text-xl font-medium text-gray_gradient text-white">
                  {isEmailCopied
                    ? "Email Copied!"
                    : "swapnil.sachan2003@gmail.com"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
