"use client";

import { useState, useEffect } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Control sort direction here: "asc" or "desc". Sorting is based on the numeric value of `num`.
  const SORT_DIRECTION = "asc"; // change to "desc" to reverse order
  const PROJECTS = [
    {
      num: "01",
      img: 1,
      title: "ITIANS",
      cat: "Next.js",
      stack: [{ name: "next" }, { name: "firebase" }],
      live: "https://itians-oye3y6e3b-wafaa-samirs-projects.vercel.app/login",
      Github: "https://github.com/ITI-Graduation-2025/ITIANS",
    },
    {
      num: "02",
      img: 2,
      title: "React blog mui",
      cat: "React",
      stack: [{ name: "react" }, { name: "material ui" }, { name: "vite" }],
      live: "https://react-blog-mui.vercel.app/",
      Github: "https://github.com/Islam-mohamed-74/React-blog-mui",
    },
    {
      num: "03",
      img: 3,
      title: "React blog",
      cat: "React",
      stack: [{ name: "react" }, { name: "json-sever" }, { name: "vite" }],
      live: "https://react-blog-theta-vert.vercel.app/",
      Github: "https://github.com/Islam-mohamed-74/React-blog",
    },
    {
      num: "04",
      img: 4,
      title: "Crowdfunding Platform",
      cat: "JavaScript",
      stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "javaScript" }],
      live: "https://islam-mohamed-74.github.io/Crowdfunding_Platform/public/index.html",
      Github: "https://github.com/Islam-mohamed-74/Crowdfunding_Platform.git",
    },
    {
      num: "05",
      img: 5,
      title: "Weather App",
      cat: "JavaScript",
      stack: [
        { name: "bootstrap" },
        { name: "ApiWeather" },
        { name: "javaScript" },
      ],
      live: "https://islam-mohamed-74.github.io/Weather-App/",
      Github: "https://github.com/Islam-mohamed-74/Weather-App",
    },
    {
      num: "06",
      img: 6,
      title: "Egg Catcher - Bird-Shooter",
      cat: "JavaScript",
      stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "javaScript" }],
      live: "https://islam-mohamed-74.github.io/Egg-Catcher_Bird-Shooter/",
      Github: "https://github.com/Islam-mohamed-74/Egg-Catcher_Bird-Shooter",
    },
    {
      num: "07",
      img: 7,
      title: "promptopia",
      cat: "Next",
      stack: [{ name: "NextAPI" }, { name: "MongoDB" }, { name: "NextAuth" }],
      live: "https://project-promptopia-psi-one.vercel.app/",
      Github: "https://github.com/Islam-mohamed-74/project_promptopia",
    },
    {
      num: "08",
      img: 8,
      title: "Burger Restaurant UI ",
      cat: "Landing Page",
      stack: [{ name: "Html" }, { name: "css" }, { name: "tailwind" }],
      live: "https://islam-mohamed-74.github.io/Burger-Restaurant-UI/",
      Github: "https://github.com/Islam-mohamed-74/Burger-Restaurant-UI",
    },
    {
      num: "09",
      img: 9,
      title: "dashboard-shadcn ",
      cat: "Next.js",
      stack: [{ name: "next" }, { name: "shadcn" }, { name: "tailwind" }],
      live: "https://dashboard-shadcn-azure.vercel.app/",
      Github: "https://github.com/Islam-mohamed-74/dashboard-shadcn",
    },
    {
      num: "10",
      img: 10,
      title: "Dashboard",
      cat: "Landing Page",
      stack: [{ name: "Html" }, { name: "Css" }],
      live: "https://islam-mohamed-74.github.io/HTML_CSS_Dashboard/",
      Github: "https://github.com/Islam-mohamed-74/HTML_CSS_Dashboard",
    },
    {
      num: "11",
      img: 11,
      title: "Dashboard",
      cat: "Landing Page",
      stack: [{ name: "Html" }, { name: "Css" }, { name: "tailwind" }],
      live: "https://islam-mohamed-74.github.io/Tailwind_Dashboard/",
      Github: "https://github.com/Islam-mohamed-74/Tailwind_Dashboard",
    },
    {
      num: "12",
      img: 12,
      title: "Bootsrap-templete",
      cat: "Landing Page",
      stack: [{ name: "Html" }, { name: "Css" }, { name: "bootstrap" }],
      live: "https://islam-mohamed-74.github.io/Bootsrap-templete/",
      Github: "https://github.com/Islam-mohamed-74/Bootsrap-templete",
    },
    {
      num: "13",
      img: 13,
      title: "fruts shiop",
      cat: "Landing Page",
      stack: [{ name: "Html" }, { name: "Css" }],
      live: "https://islam-mohamed-74.github.io/Html_and_Css_template_ui/",
      Github: "https://github.com/Islam-mohamed-74/Html_and_Css_template_ui",
    },
    {
      num: "14",
      img: 14,
      title: "Islam World",
      cat: "Landing Page",
      stack: [{ name: "Html" }, { name: "Css" }],
      live: "https://islam-mohamed-74.github.io/Html_and_Css_template/",
      Github: "https://github.com/Islam-mohamed-74/Html_and_Css_template",
    },
    {
      num: "15",
      img: 15,
      title: "kasper",
      cat: "Landing Page",
      stack: [{ name: "Html" }, { name: "Css" }],
      live: "https://islam-mohamed-74.github.io/Web-Template/",
      Github: "https://github.com/Islam-mohamed-74/Web-Template",
    },
    {
      num: "16",
      img: 16,
      title: "templete",
      cat: "Landing Page",
      stack: [{ name: "Html" }, { name: "Css" }],
      live: "https://islam-mohamed-74.github.io/Simple_Web_UI/",
      Github: "https://github.com/Islam-mohamed-74/Simple_Web_UI",
    },
    // {
    //   num: "02",
    //   img: 2,
    //   title: "Dashboard",
    //   cat: "Landing Page",
    //   stack: [{ name: "Html" }, { name: "CSS" }],
    //   live: "https://islam-mohamed-74.github.io/HTML_CSS_Dashboard/index.html",
    //   Github: "https://github.com/Islam-mohamed-74/HTML_CSS_Dashboard.git",
    // },
  ];

  const categories = ["All", "Landing Page", "JavaScript", "React", "Next.js"];

  // فلترة المشاريع
  useEffect(() => {
    const toNumber = (n) => Number(String(n).replace(/[^0-9]/g, ""));
    const base =
      activeFilter === "All"
        ? [...PROJECTS]
        : PROJECTS.filter((project) => project.cat === activeFilter);
    base.sort((a, b) => {
      const an = toNumber(a.num);
      const bn = toNumber(b.num);
      return SORT_DIRECTION === "desc" ? bn - an : an - bn;
    });
    setFilteredProjects(base);
  }, [activeFilter]);

  // وظيفة تغيير الفلتر
  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setDropdownOpen(false);
  };

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest(".filter-select-box")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <article
      className="bg-[var(--eerie-black-2)] active border border-[var(--jet)] rounded-[20px] p-[15px] shadow-[var(--shadow-1)] z-[1] block"
      data-page="portfolio"
    >
      <header>
        <h2 className="text-[24px] text-[var(--white-2)] capitalize relative pb-[7px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-[var(--text-gradient-yellow)] after:rounded-[3px]">
          Portfolio
        </h2>
      </header>

      <section className="projects">
        <ul className="hidden md:flex justify-start items-center gap-[25px] pl-[5px] !my-[35px]">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? PROJECTS.length
                : PROJECTS.filter((project) => project.cat === cat).length;
            return (
              <li className="filter-item" key={cat}>
                <button
                  className={`text-[15px] text-[var(--light-gray)] transition-[var(--transition-1)] hover:text-[var(--light-gray-70)] flex items-center gap-[8px]${
                    activeFilter === cat
                      ? " !text-[var(--orange-yellow-crayola)]"
                      : ""
                  }`}
                  onClick={() => handleFilterChange(cat)}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[12px] px-[6px] py-[2px] rounded-[4px] ${
                      activeFilter === cat ? "" : ""
                    }`}
                  >
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* 🔹 Filter Dropdown */}
        <div className="relative mb-[25px] md:hidden">
          <button
            className={`bg-[var(--eerie-black-2)] text-[14px] text-[var(--light-gray)] flex justify-between items-center w-full p-[12px_16px] border border-[var(--jet)] rounded-[14px] font-[var(--fw-300)] ${
              dropdownOpen ? "after:rotate-180" : ""
            }`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="select-value" data-selecct-value>
              {activeFilter}
            </div>
            <div className="select-icon transition-transform">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          <ul
            className={`absolute top-[calc(100%+6px)] w-full p-[6px] border border-[var(--jet)] rounded-[14px] z-[2] transition-[0.15s_ease-in-out] ${
              dropdownOpen
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
            } bg-[var(--eerie-black-2)]`}
          >
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter((project) => project.cat === cat).length;
              return (
                <li className="select-item" key={cat}>
                  <button
                    onClick={() => handleFilterChange(cat)}
                    className={`bg-[var(--eerie-black-2)] text-[14px] text-[var(--light-gray)] font-[var(--fw-300)] capitalize w-full p-[8px_10px] rounded-[8px] hover:bg-[hsl(240,2%,20%)] flex items-center justify-between ${
                      cat === activeFilter
                        ? "text-[var(--orange-yellow-crayola)] bg-[var(--eerie-black-1)]"
                        : ""
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[11px] px-[4px] py-[1px] rounded-[3px] ${
                        cat === activeFilter
                          ? "bg-[var(--orange-yellow-crayola)] text-[var(--eerie-black-2)]"
                          : "bg-[var(--jet)] text-[var(--light-gray-70)]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 🔹 Projects List */}
        <ul className="grid grid-cols-1 gap-[20px] mb-[10px] md:grid-cols-2 lg:grid-cols-3 md:gap-[25px] lg:gap-[30px]">
          {filteredProjects.map((p, index) => (
            <li
              key={p.img}
              className="block animate-[scaleUp_0.25s_ease_forwards]"
              data-filter-item
              data-category={p.cat}
            >
              <div className="w-full">
                <a href={p.live} target="_blank" className="w-full block">
                  <figure className="relative w-full h-full rounded-[16px] overflow-hidden mb-[15px] group">
                    <div className="absolute top-0 left-0 w-full h-full bg-transparent z-[1] transition-[var(--transition-1)] group-hover:bg-[hsla(0,0%,0%,0.5)]"></div>
                    <div className="bg-[var(--jet)] text-[var(--orange-yellow-crayola)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.8] text-[20px] p-[18px] !rounded-[12px] opacity-0 z-[1] transition-[var(--transition-1)] group-hover:scale-100 group-hover:opacity-100">
                      <ion-icon
                        name="eye-outline"
                        stroke-width="50px"
                      ></ion-icon>
                    </div>
                    <img
                      src={
                        `/images/project-photo/${p.img}.png` ||
                        `https://picsum.photos/seed/${p.img}/600/400`
                      }
                      alt={p.title}
                      className="h-full w-full rounded-[16px]  object-contain transition-[var(--transition-1)] group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = `https://picsum.photos/seed/${p.img}/600/400`;
                      }}
                      // loading="lazy"
                    />
                  </figure>
                </a>
                <h3 className="text-[15px] !mt-4 text-[var(--white-2)] font-[var(--fw-400)] capitalize leading-[1.3]  !ml-[10px]">
                  <a href={p.live} target="_blank" className="hover:underline">
                    {p.title}
                  </a>
                </h3>
                <div className="flex items-center gap-2 !ml-[10px]">
                  {p.stack?.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[14px] text-[var(--light-gray-70)] font-[var(--fw-300)] capitalize"
                    >
                      {tech.name}
                    </span>
                  ))}
                  <div className="flex justify-end w-auto ml-auto">
                    <a
                      href={`${p.Github}`}
                      target="_blank"
                      className="text-[var(--light-gray-70)] text-[18px] hover:text-[var(--light-gray)]"
                    >
                      <ion-icon size="large" name="logo-github"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
