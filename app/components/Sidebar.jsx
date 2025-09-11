"use client";

import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [isContactsVisible, setIsContactsVisible] = useState("");
  const toggleContacts = () => {
    setIsContactsVisible(!isContactsVisible);
  };

  return (
    <aside
      className={`sidebar ${isContactsVisible ? "active" : ""}`}
      data-sidebar
    >
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/images/Islam.jpg"
            alt="Islam Mohamed"
            width="250"
            height="250"
            className="rounded-full w-full h-full"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Islam Mohamed">
            Islam Mohamed
          </h1>
          <p className="title !text-xl capitalize">Frontend developer</p>
        </div>

        <button
          className="info_more-btn "
          onClick={toggleContacts}
          data-sidebar-btn
        >
          <span>{isContactsVisible ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon
            name="chevron-down"
            className={`transition-transform duration-300 ${
              isContactsVisible ? "rotate-180" : "rotate-0"
            }`}
          ></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:islam.mohamed.alrfa3i@gmail.com"
                className="contact-link"
              >
                islam.alrfa3i.22@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">
                +20 1018552517
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1998-06-23">Feb 24, 2001</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Cairo, Egypt</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.facebook.com/islam.mohamed.329423/"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://x.com/Islam_Mohamed_0"
              className="social-link"
              target="_blank"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/islam_mohamed__22/"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/islam-mohamed-038240210/"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://wa.me/201018552517"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/Islam-mohamed-74"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
