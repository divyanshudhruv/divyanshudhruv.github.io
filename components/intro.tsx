"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiOutlineStar } from "react-icons/hi";
import { FaGithub, FaGithubAlt, FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/me.png"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Divyanshu Dhruv.</span>{" "}
        I&apos;m a <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">5+ years</span> of experience. I enjoy
        building <span className="italic">sites</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
          href="https://hellolink.vercel.app/divyanshudhruv"
          download
          target="_blank"
        >
          idk!?{" "}
          <HiOutlineStar className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://linkedin.com/in/divyanshudhruv"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://app.usebraintrust.com/talent/1568465/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 21 21"
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium styles_dashboard-header__icon__mYG2i css-11soq7y"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M11.946 12.495a2.88 2.88 0 0 0 1.32-1.75 2.93 2.93 0 0 0-.282-2.185 2.85 2.85 0 0 0-1.722-1.342 2.828 2.828 0 0 0-2.985 1.027c-.227.3-.393.644-.488 1.01a2.9 2.9 0 0 0 .283 2.186c.377.66.997 1.143 1.723 1.34a2.8 2.8 0 0 0 2.15-.286M8.427 6.304c2.006-1.176 4.582-.476 5.74 1.563.555.98.705 2.145.417 3.238a4.26 4.26 0 0 1-1.955 2.591 4.15 4.15 0 0 1-3.188.426 4.21 4.21 0 0 1-2.552-1.988 4.28 4.28 0 0 1-.419-3.238c.141-.543.387-1.05.723-1.496a4.2 4.2 0 0 1 1.234-1.096m-2.77 6.553a4.32 4.32 0 0 1-.81 5.287 10 10 0 0 1-1.073-.895A2.9 2.9 0 0 0 4.8 15.532a2.92 2.92 0 0 0-.326-1.982 2.9 2.9 0 0 0-.73-.846 2.8 2.8 0 0 0-.992-.496 2.77 2.77 0 0 0-1.783.108 10 10 0 0 1-.225-1.39 4.1 4.1 0 0 1 2.361-.058 4.15 4.15 0 0 1 1.472.735c.438.341.805.768 1.08 1.254m9.322-8.952c.207-.789.634-1.5 1.23-2.049q.568.408 1.073.894a2.908 2.908 0 0 0 .028 4.546 2.8 2.8 0 0 0 2.775.387q.162.69.225 1.386a4.1 4.1 0 0 1-1.266.21q-.557 0-1.094-.147a4.15 4.15 0 0 1-1.471-.735 4.2 4.2 0 0 1-1.08-1.254 4.28 4.28 0 0 1-.42-3.238m-4.451 11.808c2.008 0 3.69 1.44 4.103 3.355q-.64.299-1.3.497a2.9 2.9 0 0 0-.95-1.762 2.8 2.8 0 0 0-1.853-.703c-.68.001-1.337.25-1.851.702a2.9 2.9 0 0 0-.951 1.761 10 10 0 0 1-1.3-.496c.413-1.915 2.094-3.354 4.102-3.354m0-11.426c-2.008 0-3.69-1.44-4.102-3.355Q7.065.633 7.725.435c.099.684.436 1.31.95 1.762a2.8 2.8 0 0 0 1.853.702c1.423 0 2.603-1.072 2.802-2.462q.669.2 1.3.496c-.413 1.915-2.094 3.354-4.102 3.354m7.422 6.582a4.1 4.1 0 0 1 2.36.056 10 10 0 0 1-.227 1.391 2.797 2.797 0 0 0-2.773.388 2.896 2.896 0 0 0-1.012 3.032c.157.6.502 1.13.983 1.513q-.499.482-1.074.894a4.25 4.25 0 0 1-1.228-2.047 4.3 4.3 0 0 1 .42-3.24 4.18 4.18 0 0 1 2.55-1.988zM3.106 9.132a4.2 4.2 0 0 1-1.094.147 4.1 4.1 0 0 1-1.265-.21c.043-.466.119-.93.226-1.384a2.798 2.798 0 0 0 2.773-.388c.296-.231.543-.519.729-.847a2.9 2.9 0 0 0 .283-2.185 2.86 2.86 0 0 0-.984-1.514 10 10 0 0 1 1.074-.894 4.25 4.25 0 0 1 1.229 2.048 4.31 4.31 0 0 1-1.5 4.492 4.15 4.15 0 0 1-1.471.735"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/divyanshudhruv"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
