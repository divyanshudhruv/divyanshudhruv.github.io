"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClickSpark from "@/blocks/Animations/ClickSpark/ClickSpark";

import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

import Footer from "../components/Footer";
import ScrollTextFooter from "../components/ScrollTextFooter";
import { Column } from "@once-ui-system/core";

export default function Home() {
  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={11}
        sparkRadius={20}
        sparkCount={6}
        duration={500}
      >
        <Navbar />
        <Hero />
        <Column fillWidth id="projectandskills">
          <LocoScrollImg />
          <Projects /> <Skills />
        </Column>
        <Column fillWidth id="experiencesandcontact">
          <LocoScrollFlatImg />
          <Experience />
          <Contact />
          <ScrollTextFooter />
        </Column>
        <Footer />
      </ClickSpark>
    </>
  );
}
function LocoScrollImg() {
  gsap.registerPlugin(ScrollTrigger);

  // 6 images, 3 per side, fixed order
  const images = [
    { src: "/donut.svg", alt: "Donut" },
    { src: "/pyramid.svg", alt: "Pyramid" },
    { src: "/pill.svg", alt: "Pill" },
    { src: "/sphere.svg", alt: "Sphere" },
    { src: "/cube.svg", alt: "Cube" },
    { src: "/donut.svg", alt: "Donut" },
  ];
  const count = 3;
  const sides = ["left", "right"];
  // Fixed speed factors for each image (can be customized)
  const speedFactorsBySide = [
    [1.5, 2.0, 2.5],
    [1.8, 2.2, 2.7],
  ];
  // Rotation directions: alternate between 1 and -1 for each image
  const rotationDirectionsBySide = [
    [1, -1, 1],
    [-1, 1, -1],
  ];

  // Refs for all images
  const imgRefs = useRef<(HTMLImageElement | null)[][]>(
    Array.from({ length: sides.length }, () => Array(count).fill(null))
  );

  useEffect(() => {
    imgRefs.current.forEach((sideRefs, sideIdx) => {
      sideRefs.forEach((img, idx) => {
        if (!img) return;
        const speed = speedFactorsBySide[sideIdx][idx];
        const rotationDir = rotationDirectionsBySide[sideIdx][idx];
        gsap.to(img, {
          y: () => `-${speed * 200}px`,
          rotation: () => rotationDir * 30,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Assign first 3 images to left, next 3 to right, fixed order
  return (
    <>
      {sides.map((side, sideIdx) => {
        const imgs = images.slice(sideIdx * count, sideIdx * count + count);
        const speedFactors = speedFactorsBySide[sideIdx];
        return imgs.map((img, idx) => {
          const baseGap = 30; // percent
          const offset = side === "left" ? 10 : 20;
          const top = `${offset + idx * baseGap}%`;
          const size = 160 + speedFactors[idx] * 85; // px
          return (
            <img
              key={side + "-" + img.src + "-" + idx}
              ref={(el) => {
                imgRefs.current[sideIdx][idx] = el;
              }}
              src={img.src}
              alt={img.alt}
              style={{
                position: "absolute",
                [side]: 0,
                top,
                width: size,
                height: size,
                zIndex: 1,
                pointerEvents: "none",
                opacity: 1,
                userSelect: "none",
              }}
              draggable={true}
            />
          );
        });
      })}
    </>
  );
}

function LocoScrollFlatImg() {
  gsap.registerPlugin(ScrollTrigger);

  // 6 images, 3 per side, fixed order
  const images = [
    { src: "/shape1.svg", alt: "Shape 1" },
    { src: "/shape2.svg", alt: "Shape 2" },
    { src: "/shape3.svg", alt: "Shape 3" },
    { src: "/shape4.svg", alt: "Shape 4" },
    { src: "/shape5.svg", alt: "Shape 5" },
    { src: "/shape1.svg", alt: "Shape 6" },
  ];
  const count = 3;
  const sides = ["left", "right"];
  // Fixed speed factors for each image (can be customized)
  const speedFactorsBySide = [
    [1.5, 2.0, 2.5],
    [1.8, 2.2, 2.1],
  ];
  // Rotation directions: alternate between 1 and -1 for each image
  const rotationDirectionsBySide = [
    [1, -1, 1],
    [1, -1, -1],
  ];

  // Refs for all images
  const imgRefs = useRef<(HTMLImageElement | null)[][]>(
    Array.from({ length: sides.length }, () => Array(count).fill(null))
  );

  useEffect(() => {
    imgRefs.current.forEach((sideRefs, sideIdx) => {
      sideRefs.forEach((img, idx) => {
        if (!img) return;
        const speed = speedFactorsBySide[sideIdx][idx];
        const rotationDir = rotationDirectionsBySide[sideIdx][idx];
        gsap.to(img, {
          y: () => `-${speed * 200}px`,
          rotation: () => rotationDir * 40,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Assign first 3 images to left, next 3 to right, fixed order
  return (
    <>
      {sides.map((side, sideIdx) => {
        const imgs = images.slice(sideIdx * count, sideIdx * count + count);
        const speedFactors = speedFactorsBySide[sideIdx];
        return imgs.map((img, idx) => {
          const baseGap = 30; // percent
          const offset = side === "left" ? 10 : 20;
          const top = `${offset + idx * baseGap}%`;
          const size = 75 + speedFactors[idx] * 85; // px
          return (
            <img
              key={side + "-" + img.src + "-" + idx}
              ref={(el) => {
                imgRefs.current[sideIdx][idx] = el;
              }}
              src={img.src}
              alt={img.alt}
              style={{
                position: "absolute",
                [side]: 0,
                top,
                width: size,
                height: size,
                zIndex: 1,
                pointerEvents: "none",
                userSelect: "none",
                transition: "opacity 0.3s, transform 0.3s",
                opacity: 1,
              }}
              draggable={true}
            />
          );
        });
      })}
    </>
  );
}
