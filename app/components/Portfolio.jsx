"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useFetchProjects } from "./useFetchProjects";
import ButtonHover from "./ButtonHover";
import { motion } from "framer-motion";
import Loader from "./Loader";

// Simple mapper for GitHub repos -> Portfolio shape
function mapGithubRepos(rawArray) {
  return rawArray.map((repo, idx) => {
    const id = repo.id ?? idx + 1;

    // Determine category based on topics
    let category = "Landing page"; // Default category
    if (Array.isArray(repo.topics)) {
      if (repo.topics.includes("react")) {
        category = "React";
      } else if (
        repo.topics.includes("next") ||
        repo.topics.includes("nextjs")
      ) {
        category = "Next.js";
      } else if (repo.topics.includes("javascript")) {
        category = "JavaScript";
      }
    }

    return {
      num: String(id).padStart(2, "0"),
      img: `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/${repo.default_branch}/image.jpg`,
      title: repo.name || `Project ${id}`,
      cat: category,
      description: repo.description || "",
      updated: repo.updated_at || new Date().toISOString(),
      stack: Array.isArray(repo.topics)
        ? repo.topics.map((t) => ({ name: t }))
        : [],
      live: repo.homepage || repo.html_url || "#",
      Github: repo.html_url || "#",
    };
  });
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const SORT_DIRECTION = "desc"; // or "desc"
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const excludedProjects = [
    "My_Portfolio",
    "PWA",
    "project-react-native",
    "Socail_App",
    "My-Portfolio",
    "Islam-mohamed-74",
    "Tailwind-Games",
    // Static projects (ITIANS) are NOT excluded - they will appear in portfolio
  ];

  const { projects, loading, error } = useFetchProjects(mapGithubRepos);

  // Static projects (manually added)
  const staticProjects = [
    {
      num: "01",
      img: "/images/project-photo/1.png",
      title: "ITIANS",
      cat: "Next.js",
      description:
        "ITIANS is a full‑stack Next.js platform that connects graduates, mentors, and companies. It provides role‑based dashboards, real‑time chat, job postings and applications, profile management with file uploads, analytics, and push notifications.",
      updated: "2025-08-20T00:00:00Z",
      stack: [
        { name: "Next.js" },
        { name: "Firebase" },
        { name: "shadcn" },
        { name: "Cloudinary" },
      ],
      live: "https://itians-oye3y6e3b-wafaa-samirs-projects.vercel.app/login",
      Github: "https://github.com/ITI-Graduation-2025/ITIANS",
    },
  ];

  // Memoized excluded projects to prevent recalculation
  const excludedProjectsSet = useMemo(() => new Set(excludedProjects), []);

  // Combine static projects with GitHub projects
  const allProjects = useMemo(() => {
    return [...staticProjects, ...projects];
  }, [staticProjects, projects]);

  // Memoized withoutExcluded
  const withoutExcluded = useMemo(
    () => allProjects.filter((p) => !excludedProjectsSet.has(p.title)),
    [allProjects, excludedProjectsSet]
  );

  // Dynamic categories based on actual project data
  const categories = useMemo(() => {
    const base = new Set(["All"]);
    withoutExcluded.forEach((p) => {
      if (p.cat) {
        base.add(p.cat);
      }
    });
    return Array.from(base);
  }, [withoutExcluded]);

  // ===== MANUAL PROJECT ORDERING =====
  // Customize these arrays to control project display order

  // Priority projects (will always appear at the very top)
  const priorityProjects = [
    "My_Portfolio", // Your main portfolio project
    "PWA", // Progressive Web App
    "ITIANS", // ITIANS project - always position 3
  ];

  // Manual order for other projects (in order of preference)
  const manualOrder = [
    "Instagram-Clone",
    "Anime",
    "project_promptopia",
    "ITIANS",
    "Car_ShowCase",
    "React-blog",
    "React-blog-mui",
    "Crowdfunding_Platform",
    "dashboard-shadcn",
    "Weather-App",
    // Add more project names here in your preferred order
    // Projects not listed will be sorted by update date (newest first)
  ];

  // Memoized filtered projects to prevent unnecessary re-renders
  const filteredProjects = useMemo(() => {
    const base =
      activeFilter === "All"
        ? withoutExcluded
        : withoutExcluded.filter((project) => project.cat === activeFilter);

    // Custom sorting function with priority system
    const sorted = [...base].sort((a, b) => {
      // Check if projects are in priority list
      const aIsPriority = priorityProjects.includes(a.title);
      const bIsPriority = priorityProjects.includes(b.title);

      // Priority projects always come first
      if (aIsPriority && !bIsPriority) return -1;
      if (!aIsPriority && bIsPriority) return 1;

      // If both are priority, sort by priority order
      if (aIsPriority && bIsPriority) {
        const aPriorityIndex = priorityProjects.indexOf(a.title);
        const bPriorityIndex = priorityProjects.indexOf(b.title);
        return aPriorityIndex - bPriorityIndex;
      }

      // Check if projects are in manual order
      const aIndex = manualOrder.indexOf(a.title);
      const bIndex = manualOrder.indexOf(b.title);

      // If both are in manual order, sort by manual order
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }

      // If only one is in manual order, prioritize it
      if (aIndex !== -1 && bIndex === -1) return -1;
      if (aIndex === -1 && bIndex !== -1) return 1;

      // If neither is in manual order, sort by updated date (newest first)
      return new Date(b.updated) - new Date(a.updated);
    });

    return sorted;
  }, [withoutExcluded, activeFilter, manualOrder]);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setDropdownOpen(false);
  };

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
      className="bg-[var(--eerie-black-2)] active border border-[var(--jet)] relative rounded-[20px] p-[15px] shadow-[var(--shadow-1)] z-[1] block"
      data-page="portfolio"
    >
      <header>
        <h2 className="text-[24px] text-[var(--white-2)] capitalize relative pb-[7px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-[var(--text-gradient-yellow)] after:rounded-[3px]">
          Portfolio
        </h2>
      </header>

      <section className="projects ">
        {loading && (
          <div className="">
            <Loader />
          </div>
        )}

        {!loading && error && (
          <div className="my-[20px] mx-[5px] p-[12px] rounded-[12px] border border-red-500 bg-[rgba(239,68,68,0.1)] text-red-400">
            Failed to load projects: {error.message}
          </div>
        )}

        {!loading && !error && (
          <>
            <ul className="hidden md:flex justify-start items-center gap-[25px] pl-[5px] !my-[35px]">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? withoutExcluded.length
                    : withoutExcluded.filter((project) => project.cat === cat)
                        .length;
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
                        className={`text-[12px] px-[6px] py-[2px] rounded-[4px]`}
                      >
                        {count}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="filter-select-box relative mb-[25px] md:hidden">
              <button
                className={`bg-[var(--eerie-black-2)] text-[14px] text-[var(--light-gray)] flex justify-between items-center w-full p-[12px_16px] border border-[var(--jet)] rounded-[14px] font-[var(--fw-300)]`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="select-value">{activeFilter}</div>
                <div
                  className={`select-icon transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                >
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
                      ? withoutExcluded.length
                      : withoutExcluded.filter((project) => project.cat === cat)
                          .length;
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

            <ul className="grid grid-cols-1 gap-2 mb-[10px] md:grid-cols-2 lg:grid-cols-3 md:gap-[25px] lg:gap-4">
              {filteredProjects.length === 0 ? (
                <div className="">
                  <Loader />
                </div>
              ) : (
                filteredProjects.map((p, index) => (
                  <motion.li
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    transition={{
                      delay: index * 0.3,
                      ease: "easeInOut",
                      duration: 0.5,
                    }}
                    viewport={{ amount: 0 }}
                    key={`${p.title}-${p.num}`}
                    className="block animate-[scaleUp_0.25s_ease_forwards]"
                    data-filter-item
                    data-category={p.cat}
                  >
                    <div className="relative group/card">
                      <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br   opacity-60 blur-[6px] transition-opacity duration-300 group-hover/card:opacity-100"></div>

                      <div className="relative rounded-[18px] border border-[var(--jet)] bg-[rgba(255,255,255,0.04)] backdrop-blur-[6px] shadow-[0_8px_30px_rgba(0,0,0,0.25)] overflow-hidden transition-transform duration-300 ease-out ">
                        <a
                          href={p.live}
                          target="_blank"
                          className="w-full block"
                        >
                          <figure className="relative w-full aspect-[16/10] overflow-hidden">
                            <div className="absolute inset-0 bg-transparent z-[1] transition-[var(--transition-1)] group-hover/card:bg-[hsla(0,0%,0%,0.35)]"></div>
                            <div className="bg-[var(--jet)] text-[var(--orange-yellow-crayola)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.8] text-[20px] p-[10px] !rounded-full opacity-0 z-[2] transition-[var(--transition-1)] group-hover/card:scale-100 group-hover/card:opacity-100">
                              <ion-icon
                                name="eye-outline"
                                stroke-width="50px"
                              ></ion-icon>
                            </div>
                            <img
                              src={
                                (typeof p.img === "string" && p.img) ||
                                `https://picsum.photos/seed/${p.img}/1200/800`
                              }
                              alt={p.title}
                              className="h-full w-full object-fill transition-[var(--transition-1)] group-hover/card:scale-110"
                              loading="lazy"
                              onError={(e) => {
                                if (
                                  e.currentTarget.src.includes(
                                    "/images/project-photo/"
                                  )
                                ) {
                                  e.currentTarget.src = `https://picsum.photos/seed/${p.img}/1200/800`;
                                }
                              }}
                            />
                            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-[radial-gradient(1200px_800px_at_0%_0%,rgba(255,219,112,0.18),transparent_50%)]"></div>
                          </figure>
                        </a>

                        <div className="p-4">
                          <div className="flex items-start gap-3">
                            <h3 className="h4 mt-1 mb-2 text-white capitalize leading-[1.3]">
                              <a
                                href={p.live}
                                target="_blank"
                                className="hover:underline"
                              >
                                {p.title}
                              </a>
                            </h3>
                          </div>

                          <p className="text-[13px] text-[var(--light-gray)]/90 line-clamp-3">
                            {p.description}
                          </p>

                          <div className="flex gap-2 w-full flex-wrap my-4">
                            {p.stack?.map((tech, index) => (
                              <span
                                key={index}
                                className="px-[10px] py-[4px] text-[10px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] text-[var(--light-gray)] hover:border-[rgba(255,219,112,0.35)] transition-colors"
                              >
                                {tech.name || tech}
                              </span>
                            ))}
                          </div>
                          <span className="text-[10px] text-[var(--light-gray)]">
                            last updated: {p.updated.slice(0, 10)}
                          </span>

                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex justify-start w-auto mr-auto">
                              <a
                                href={`${p.Github}`}
                                target="_blank"
                                className="text-[var(--light-gray-70)] text-[20px] hover:text-[var(--light-gray)] transition-colors"
                                aria-label="Open GitHub repository"
                              >
                                <ion-icon
                                  size="large"
                                  name="logo-github"
                                ></ion-icon>
                              </a>
                            </div>
                            <div className="flex justify-end w-auto">
                              <a href={p.live} target="_blank" className="">
                                <ButtonHover />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))
              )}
            </ul>
          </>
        )}
      </section>
    </article>
  );
}
