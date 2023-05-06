import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "C#" },
  { skill: "C++" },
  { skill: "Git" },
  { skill: "GitHub" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          À propos de moi 
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Apprendre à me connaître !
            </h1>
            <p>
            Bonjour, je m'appelle Florian et je suis un développeur{" "}
              <span className="font-bold">{" hautement ambitieuse"}</span>,
              <span className="font-bold">{" motivée "}</span>, et
              <span className="font-bold">{" déterminée "}</span>
              vivant a Rivière-du-Loup, QC.
            </p>
            <br />
            <p>
            J'ai obtenu mon diplôme en technique de l'informatique au Cégep à Rivière-du-Loup en 2023.
            </p>
            <br />
            <p>
            J'ai une grande variété de passe-temps et de passions qui me tiennent occupée. Du bricolage, à la pratique de sports, en passant par les voyages et ma passion pour l'automobile, je suis toujours à la recherche de nouvelles expériences et j'adore me tenir engagée et apprendre de nouvelles choses.
            </p>
            <br />
            <p>
            Je crois qu'il ne faut jamais{" "}
              <span className="font-bold text-teal-500">
              cesser de grandir
              </span>{" "}
              et c'est ce que je m'efforce de faire. J'ai une passion pour la technologie et le désir de toujours repousser les limites de ce qui est possible. Je suis enthousiaste de voir où ma carrière me mènera et suis toujours ouverte à de nouvelles opportunités. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mes compétences</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-31 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
