"use client";

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p className="capitalize">
          <span className="font-bold text-xl capitalize">Hi there, 👋🏻</span>
          <br /> I'm Islam Mohamed — a Front-End Developer passionate about
          crafting elegant, fast, and custom web solutions. I focus on creating
          user-friendly designs that don’t just look great, but also perform
          seamlessly across devices. From modern portfolios to scalable web
          applications,
        </p>
        <p>
          I deliver tailored front-end development that transforms ideas into
          interactive, real-world products. Feel free to explore my work and see
          how I blend clean design with high performance to build experiences
          that truly stand out.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/window.svg" alt="design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/globe.svg" alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          {/* <li className="service-item">
            <div className="service-icon-box">
              <img src="/vercel.svg" alt="mobile app icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>
              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/next.svg" alt="camera icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li> */}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">
          Testimonials{" "}
          <span className=" text-xs text-gray-300">
            you can add your own testimonials here soon ...😊
          </span>
        </h3>
        <ul className="testimonials-list has-scrollbar">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={`https://i.pravatar.cc/80?img=${n}`}
                    alt="Avatar"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  {n === 1
                    ? "Daniel lewis"
                    : n === 2
                    ? "Jessica miller"
                    : n === 3
                    ? "Emily evans"
                    : "Henry william"}
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>
            <img src="/file.svg" alt="quote icon" />
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>
            <time dateTime="2021-06-14">14 June, 2021</time>
            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <li key={n} className="clients-item">
              <a href="#">
                <img src={`/images/logo-${n}-color.png`} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </article>
  );
}
