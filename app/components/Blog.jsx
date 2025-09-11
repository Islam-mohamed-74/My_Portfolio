"use client";

export default function Blog() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <li key={n} className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src={`https://picsum.photos/seed/b${n}/600/400`}
                    alt="Blog"
                    loading="lazy"
                  />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">Sample post {n}</h3>
                  <p className="blog-text">Short description of the post.</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
