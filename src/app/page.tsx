"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import $ from "jquery"; // Install jQuery with `npm install jquery`

const Home: React.FC = () => {
  useEffect(() => {
    // Filter functionality
    $(document).ready(function () {
      $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value === "all") {
          $(".post-box").show(1000);
        } else {
          $(".post-box").not("." + value).hide(1000);
          $(".post-box").filter("." + value).show(1000);
        }
      });
      // Active filter toggle
      $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
      });
    });

    // Shadow toggle for header on scroll
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (header) {
        header.classList.toggle("shadow", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const posts = [
    {
      src: "/post-1.jpg",
      category: "Mobile",
      profile: "/profile-1.jpg",
      title: "Top Mobile Development Trends in 2024",
      description: "Discover the latest trends in mobile development for 2024.",
      profileName: "John Doe",
      href: "./pages/blog1"
    },
    {
      src: "/post-2.jpg",
      category: "Tech",
      profile: "/profile-2.jpg",
      title: "AI Revolution in Technology",
      description: "Explore how AI is reshaping the technology landscape.",
      profileName: "Jane Smith",
      href: "./pages/blog2"
    },
    {
      src: "/post-3.jpg",
      category: "Mobile",
      profile: "/profile-3.jpg",
      title: "Best Practices for Mobile App Security",
      description: "Learn how to secure your mobile apps effectively.",
      profileName: "Mike Johnson",
      href: "./pages/blog3"
    },
    {
      src: "/post-4.jpg",
      category: "Design",
      profile: "/profile-1.jpg",
      title: "Mastering UX Design with Adobe XD",
      description: "A guide to creating exceptional UX designs with Adobe XD.",
      profileName: "Alice Brown",
      href: "./pages/blog4"
    },
    {
      src: "/post-5.jpg",
      category: "Tech",
      profile: "/profile-2.jpg",
      title: "Cloud Computing: The Future of IT",
      description: "Understand the role of cloud computing in modern IT.",
      profileName: "Charlie Davis",
      href: "./pages/blog5"
    },
    {
      src: "/post-6.jpg",
      category: "Design",
      profile: "/profile-3.jpg",
      title: "Creating Stunning Visuals with Figma",
      description: "Learn how to use Figma to create breathtaking visuals.",
      profileName: "Emily White",
      href: "./pages/blog6"
    },
    {
      src: "/post-7.jpg",
      category: "Tech",
      profile: "/profile-1.jpg",
      title: "Blockchain Beyond Cryptocurrency",
      description: "Discover the potential applications of blockchain technology.",
      profileName: "Robert Miller",
      href: "./pages/blog7"
    },
    {
      src: "/post-8.jpg",
      category: "Mobile",
      profile: "/profile-2.jpg",
      title: "5 Tips for Optimizing Mobile User Experience",
      description: "Ensure your app provides the best experience for users.",
      profileName: "Sophia Taylor",
      href: "./pages/blog8"
    },
    {
      src: "/post-9.jpg",
      category: "Design",
      profile: "/profile-3.jpg",
      title: "Designing for Accessibility",
      description: "A guide to making your designs accessible for everyone.",
      profileName: "Daniel Wilson",
      href: "./pages/blog9"
    },
  ];


  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
        </head>
        <body>
          <header>
            <div className="nav container">
              <a href="#" className="logo">
                AI <span>Blog</span>
              </a>
              <a href="#" className="login">
                Login
              </a>
            </div>
          </header>

          <section className="home" id="home">
            <div className="home-text container">
              <h2 className="home-title">THE AI BLOG</h2>
              <span className="home-subtitle">Your source for great content</span>
            </div>
          </section>

          <div className="post-filter container">
            <span className="filter-item active-filter" data-filter="all">
              ALL
            </span>
            <span className="filter-item" data-filter="design">
              Design
            </span>
            <span className="filter-item" data-filter="tech">
              Tech
            </span>
            <span className="filter-item" data-filter="mobile">
              Mobile
            </span>
          </div>

          <section className="post container">
            {posts.map((post, index) => (
              <div className={`post-box ${post.category.toLowerCase()}`} key={index}>
                <Image
                  src={post.src}
                  alt={`Post ${index + 1}`}
                  className="post-img"
                  width={400}
                  height={300}
                />
                <h2 className="category">{post.category}</h2>
                <a href={post.href} className="post-title">
                  {post.title}
                </a>
                <span className="post-date">11 Nov 2024</span>
                <p className="post-description">{post.description}</p>
                <div className="profile">
                  <Image
                    src={post.profile}
                    alt={`Profile ${index + 1}`}
                    className="profile-img"
                    width={50}
                    height={50}
                  />
                  <span className="profile-name">{post.profileName}</span>
                </div>
              </div>
            ))}
          </section>

          <div className="footer container">
            <p>&#169; AI-BLOGS All Rights Reserved</p>
            <div className="social">
              <a href="https://www.facebook.com/profile.php?id=100059563837220&mibextid=ZbWKwL">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://x.com/Muzaffar401?t=5Oo42XPN4flIP3PEomc2Vg&s=09">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://www.instagram.com/muzaffar______ahmed/?igsh=MXN5amZzcWU4eDRtZg%3D%3D">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/muzaffar-ahmed-b8652b2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default Home;
