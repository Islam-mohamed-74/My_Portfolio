"use client";

export default function Navbar({ activePage, onNavigate }) {
  const pages = ["about", "resume", "portfolio", "blog", "contact"];
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li key={page} className="navbar-item">
            {page === "blog" ? (
              <span
                className={`navbar-link opacity-60 cursor-not-allowed`}
                title="Coming soon"
              >
                Blog (Soon)
              </span>
            ) : (
              <button
                className={`navbar-link${activePage === page ? " active" : ""}`}
                aria-current={activePage === page ? "page" : undefined}
                onClick={() => onNavigate?.(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
