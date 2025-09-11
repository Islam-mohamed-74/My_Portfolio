"use client";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              I'm looking for a next experience
            </h4>
            <span>sep, 2025 - present</span>
            <p className="timeline-text">
              I am looking for a next experience in a company that can help me
              to grow and develop my skills. for now i am trying to learn new
              technologies and improve my skills.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              ITI - Information Technology Institute
            </h4>
            <span>feb, 2025 - aug, 2025</span>
            <p className="timeline-text">
              Front-End and cross-platform mobile development
            </p>
          </li>
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              ERU - Egyption Russian University
            </h4>
            <span>2019 — 2023</span>
            <p className="timeline-text">
              Bachelor of mechatronics engineering (B.Sc)
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        {/* Frontend Skills */}
        <div className="mb-[30px]">
          <h4 className="text-[18px] text-[var(--white-2)] font-[var(--fw-500)] mb-[15px] flex items-center gap-[10px]">
            <div className="w-[4px] h-[20px] bg-[var(--orange-yellow-crayola)] rounded-[2px]"></div>
            Frontend Development
          </h4>
          <div className="bg-[var(--eerie-black-1)] border border-[var(--jet)] rounded-[16px] !p-[20px]">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-[20px]">
              {/* HTML */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-orange-500 to-orange-600 rounded-[12px] flex items-center justify-center text-white text-[20px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  H
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  HTML
                </span>
              </div>

              {/* CSS */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-[12px] flex items-center justify-center text-white text-[20px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  CSS
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  CSS
                </span>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[12px] flex items-center justify-center text-black text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  JS
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  JavaScript
                </span>
              </div>

              {/* TypeScript */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-blue-600 to-blue-700 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  TS
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  TypeScript
                </span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-[12px] flex items-center justify-center text-white text-[20px] mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  ⚛
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  React
                </span>
              </div>

              {/* Next.js */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-gray-800 to-black rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  N
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Next.js
                </span>
              </div>

              {/* Tailwind */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-teal-400 to-teal-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  T
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Tailwind
                </span>
              </div>

              {/* Bootstrap */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  B
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Bootstrap
                </span>
              </div>

              {/* SASS */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-pink-500 to-pink-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  S
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  SASS
                </span>
              </div>

              {/* MongoDB */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-green-600 to-green-700 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  M
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  MongoDB
                </span>
              </div>

              {/* Firebase */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-yellow-500 to-orange-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  F
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Firebase
                </span>
              </div>

              {/* Vite */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-purple-600 to-purple-700 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  V
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Vite
                </span>
              </div>

              {/* Material UI */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  MUI
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Material UI
                </span>
              </div>

              {/* Redux */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  R
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Redux
                </span>
              </div>

              {/* shadcn/ui */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  S
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  shadcn/ui
                </span>
              </div>

              {/* jQuery */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-blue-400 to-blue-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  jQ
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  jQuery
                </span>
              </div>

              {/* Angular */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-red-500 to-red-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  A
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Angular
                </span>
              </div> */}

              {/* Vue */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-green-400 to-green-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  V
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Vue
                </span>
              </div> */}

              {/* Additional Frontend Skills */}
              {/* Vue.js */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-green-400 to-green-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  V
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Vue.js
                </span>
              </div> */}

              {/* Angular */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-red-500 to-red-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  A
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Angular
                </span>
              </div> */}

              {/* Svelte */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-orange-400 to-orange-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  S
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Svelte
                </span>
              </div> */}

              {/* Nuxt.js */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-green-500 to-green-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  N
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Nuxt.js
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-[30px]">
          <h4 className="text-[18px] text-[var(--white-2)] font-[var(--fw-500)] mb-[15px] flex items-center gap-[10px]">
            <div className="w-[4px] h-[20px] bg-[var(--orange-yellow-crayola)] rounded-[2px]"></div>
            Backend Development
          </h4>
          <div className="bg-[var(--eerie-black-1)] border border-[var(--jet)] rounded-[16px] !p-[20px]">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-[20px]">
              {/* Node.js */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-green-500 to-green-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  N
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Node.js
                </span>
              </div>

              {/* Express */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-gray-600 to-gray-700 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  E
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Express
                </span>
              </div> */}

              {/* Python */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-yellow-500 to-blue-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  Py
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Python
                </span>
              </div> */}

              {/* PHP */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  PHP
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  PHP
                </span>
              </div> */}

              {/* Django */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-green-600 to-green-700 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  D
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Django
                </span>
              </div> */}

              {/* Laravel */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-red-400 to-red-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  L
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Laravel
                </span>
              </div> */}

              {/* FastAPI */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-teal-500 to-teal-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  FA
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  FastAPI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Database Skills */}
        <div className="mb-[30px]">
          <h4 className="text-[18px] text-[var(--white-2)] font-[var(--fw-500)] mb-[15px] flex items-center gap-[10px]">
            <div className="w-[4px] h-[20px] bg-[var(--orange-yellow-crayola)] rounded-[2px]"></div>
            Database & Storage
          </h4>
          <div className="bg-[var(--eerie-black-1)] border border-[var(--jet)] rounded-[16px] !p-[20px]">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-[20px]">
              {/* MongoDB */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-green-600 to-green-700 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  M
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  MongoDB
                </span>
              </div>

              {/* MySQL */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-blue-600 to-blue-700 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  SQL
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  MySQL
                </span>
              </div> */}

              {/* PostgreSQL */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  PG
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  PostgreSQL
                </span>
              </div> */}

              {/* Redis */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-red-500 to-red-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  R
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Redis
                </span>
              </div> */}

              {/* Firebase */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-yellow-500 to-orange-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  F
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Firebase
                </span>
              </div>

              {/* Supabase */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-green-400 to-green-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  S
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Supabase
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Tools & Others */}
        <div className="mb-[30px]">
          <h4 className="text-[18px] text-[var(--white-2)] font-[var(--fw-500)] mb-[15px] flex items-center gap-[10px]">
            <div className="w-[4px] h-[20px] bg-[var(--orange-yellow-crayola)] rounded-[2px]"></div>
            Tools & Others
          </h4>
          <div className="bg-[var(--eerie-black-1)] border border-[var(--jet)] rounded-[16px] !p-[20px]">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-[20px]">
              {/* Git */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-orange-600 to-orange-700 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  G
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Git
                </span>
              </div>

              {/* Vite */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-purple-600 to-purple-700 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  V
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Vite
                </span>
              </div>

              {/* Webpack */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  W
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Webpack
                </span>
              </div> */}

              {/* Docker */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-blue-400 to-blue-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  D
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Docker
                </span>
              </div> */}

              {/* AWS */}
              {/* <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-orange-400 to-orange-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  AWS
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  AWS
                </span>
              </div> */}

              {/* Vercel */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-gray-700 to-black rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  V
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Vercel
                </span>
              </div>

              {/* Netlify */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-teal-400 to-teal-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  N
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Netlify
                </span>
              </div>

              {/* Figma */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-purple-400 to-purple-500 rounded-[12px] flex items-center justify-center text-white text-[16px] font-bold mb-[8px] group-hover:scale-110 transition-transform duration-300">
                  F
                </div>
                <span className="text-[12px] text-[var(--light-gray)] text-center">
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
