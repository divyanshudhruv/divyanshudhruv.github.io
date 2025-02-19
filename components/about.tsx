"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a passionate full-stack developer who loves{" "}
        <span className="font-medium">coding</span>. I enjoy building innovative
        projects, exploring new technologies, and working with{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, and Supabase
        </span>
        . <span className="italic">My favorite part of coding</span> is
        designing clean and efficient UI/UX while solving complex problems. I{" "}
        <span className="underline">love</span> experimenting with new
        frameworks and constantly improving my skills. Besides coding, I play{" "}
        <span className="font-medium">guitar and piano</span>, creating my own
        music. I also enjoy gaming, with{" "}
        <span className="font-medium">Minecraft</span> being one of my all-time
        favorites.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and dabbling with{" "}
        <span className="font-medium">Arduino</span>. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Web3 and DSA</span>. I'm also
        learning how to play the guitar like a  <span className="underline">pro</span>.
      </p>
    </motion.section>
  );
}
