/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function About({ mode }) {
  return (
    <section id="About" className={`${!mode && "text-black"} py-6`}>
      <p className="text-center text-sm opacity-[.5]">MY BIO</p>
      <h1 className="text-center text-xl">
        About <span className="text-myColor">Me</span>
      </h1>
      <div className="sm:flex sm:py-6 sm:px-6 gap-2 sm:items-start">
        <motion.div
          variants={fadeIn("right", 0, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="left flex py-6 sm:py-0 lg:w-[50%]"
        >
          <div className="m-auto border-[2px] lg:mt-3 border-solid border-myColor relative rounded-xl w-max p-6 ">
            <img
              src="../../images/dp2.jpeg"
              alt=""
              className="rounded-xl w-[15rem] lg:w-[23rem] border-[2px] border-solid border-myColor"
            />
            <motion.img
              variants={fadeIn("right", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              src="../../images/progIcons/js.webp"
              alt=""
              className="icon top-2 left-5 lg:top-4 lg:left-5"
            />
            <motion.img
              variants={fadeIn("right", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              src="../../images/progIcons/redux.webp"
              alt=""
              className="icon bottom-4 lg:bottom-4"
            />
            <motion.img
              variants={fadeIn("left", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              src="../../images/progIcons/react.webp"
              alt=""
              className="icon right-2 top-2 lg:right-4 lg:top-4"
            />
            <motion.img
              variants={fadeIn("left", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              src="../../images/progIcons/mango.webp"
              alt=""
              className="icon right-2 bottom-4 lg:right-4 lg:bottom-4"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="right flex flex-col gap-6 items-start px-6 lg:w-[50%] lg:px-20  mx-auto"
        >
          <div className="opacity-[.7] text-sm flex flex-col gap-4 lg:text-base">
            <p>
              Greetings! I'm{" "}
              <span className="text-myColor font-medium">Madhur Pathak</span>, a
              passionate and skilled Software Developer and Frontend developer
              with hands-on experience in building dynamic and user-centric web
              applications. Currently pursuing my Master of Computer
              Applications at{" "}
              <span className="text-myColor font-medium">
                Maharana Pratap College of Technology, Gwalior, M.P.
              </span>
              , I have developed a solid foundation in both frontend and backend
              technologies. Over the years, I have worked on diverse projects
              ranging from travel websites to AI-powered content platforms and
              job portals.
            </p>{" "}
            <p>
              My technical expertise includes{" "}
              <span className="text-myColor font-medium">
                React, Next.js, TypeScript, Node.js, MongoDB
              </span>
              , and RESTful services, alongside proficiency in developer tools
              like{" "}
              <span className="text-myColor font-medium">
                Git, GitHub, and Postman
              </span>
              . I am adept at creating responsive and visually appealing designs
              using{" "}
              <span className="text-myColor font-medium">
                TailwindCSS and Shadcn UI
              </span>
              . I continuously strive to optimize user experiences and enhance
              performance, as demonstrated by my recent projects, which have led
              to significant increases in user engagement and satisfaction.
            </p>{" "}
            <p>
              I am also certified as a{" "}
              <span className="text-myColor font-medium">
                React Web Developer
              </span>
              from Udemy, reflecting my commitment to continuous learning and
              staying updated with the latest industry trends. Driven by
              problem-solving and team collaboration, I am dedicated to creating
              impactful solutions that resonate with users.
            </p>
          </div>

          <button>
            <a
              href="../file/Madhur_Pathak.pdf"
              target="_blank"
              className="bg-myColor rounded px-4 py-2 text-black"
            >
              View Resume{" "}
              <i className="fa-solid fa-download text-black ml-2"></i>
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
