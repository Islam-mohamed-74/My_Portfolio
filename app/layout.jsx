export const metadata = {
  title: "Islam Mohamed - Frontend",
  description: "Portfolio_Islam",
};

import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";
import AppLoader from "./components/AppLoader";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/next.svg" type="image/x-icon" />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </head>

      <body
        className={` ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        <AppLoader />
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
