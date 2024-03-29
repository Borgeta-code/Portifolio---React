import React from "react";
import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";
import html from "../../public/img/html5.svg";
import css from "../../public/img/css3-alt.svg";
import react from "../../public/img/react.svg";
import git from "../../public/img/github.svg";
import php from "../../public/img/php.svg";
import js from "../../public/img/js.svg";
import laravel from "../../public/img/laravel.svg";
import tailwind from "../../public/img/tailwindcss.svg";
import next from "../../public/img/next-js.svg";
import angular from "../../public/img/angular.svg";
import typescript from "../../public/img/typescript.svg";
import sql from "../../public/img/mysql.svg";
import nodejs from "../../public/img/nodejs.svg";
import bootstrap from "../../public/img/bootstrap.svg";
import PageTitle from "../PageTitle";

export function Skills() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="flex items-center justify-center h-screen relative">
      <PageTitle title="Tecnologias" />

      <div className="flex justify-center items-center ">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col w-max justify-center items-center gap-1"
        >
          <div className="flex justify-center items-center p-4 gap-6 sm:gap-10">
            <SkillCard src={html} skill="HTML" w="w-8  sm:w-14" />
            <SkillCard src={css} skill="CSS" w="w-8 mb-1 sm:w-14" />
            <SkillCard src={js} skill="JAVASCRIPT" w="w-10  sm:w-16" />
            <SkillCard src={php} skill="PHP" w="w-12 mb-1 sm:w-20 sm:mb-2" />
            <SkillCard src={react} skill="REACT" w="w-12  sm:w-20" />
          </div>

          <div className="flex justify-center items-center w-max p-4 gap-4 sm:gap-6">
            <SkillCard src={next} skill="NEXT" w="w-8 mb-1 sm:w-16 sm:mb-3" />
            <SkillCard
              src={laravel}
              skill="LARAVEL"
              w="w-12  sm:w-24 sm:mb-2"
            />
            <SkillCard src={sql} skill="MYSQL" w="w-10 sm:mb-1 sm:w-[70px]" />
            <SkillCard
              src={tailwind}
              skill="TAILWIND"
              w="w-12  sm:w-24 sm:mb-2"
            />
            <SkillCard
              src={git}
              skill="GITHUB"
              w="w-8 mb-0.5 sm:w-16 sm:mb-3"
            />
          </div>

          <div className="flex justify-center items-center p-4 gap-6 sm:gap-10">
            <SkillCard
              src={typescript}
              skill="TYPESCRIPT"
              w="w-8 mb-2 sm:mb-3 sm:w-16"
            />
            <SkillCard src={nodejs} skill="NODEJS" w="w-10 sm:w-20" />
            <SkillCard src={angular} skill="ANGULAR" w="w-10 sm:w-20" />
            <SkillCard src={bootstrap} skill="BOOTSTRAP" w="w-10 sm:w-20" />
          </div>
        </motion.ul>
      </div>
    </section>
  );
}
