"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import $ from "jquery"; // Install jQuery with `npm install jquery`

const PostPage: React.FC = () => {
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
                            <a href="/" className="logo">
                                AI <span>Blog</span>
                            </a>

                            <a href="#" className="login">
                                Login
                            </a>
                        </div>
                    </header>

                    <section className="post-header">
                        <div className="header-content post-container">
                            <a href="/" className="back-home">
                                Back to Home
                            </a>

                            <h1 className="header-title">
                                How To Create Best UX Design With Adobe XD
                            </h1>

                            <Image
                                src="/post-8.jpg"
                                alt="Post Header Image"
                                className="header-img"
                                width={800}
                                height={450}
                            />
                        </div>
                    </section>

                    <section className="post-content post-container">
                        <h2 className="sub-heading">Create Best UX Design</h2>
                        <p className="post-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam eum eaque ipsum consequuntur ut
                            a quibusdam laudantium! Nostrum aliquam facere omnis vero doloremque fugiat blanditiis soluta doloribus earum
                            provident.
                        </p>
                        <p className="post-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam eum eaque ipsum consequuntur ut
                            a quibusdam laudantium! Nostrum aliquam facere omnis vero doloremque fugiat blanditiis soluta doloribus earum
                            provident.
                        </p>
                        <h2 className="sub-heading">Create Best UX Design</h2>
                        <p className="post-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam eum eaque ipsum consequuntur ut
                            a quibusdam laudantium! Nostrum aliquam facere omnis vero doloremque fugiat blanditiis soluta doloribus earum
                            provident.
                        </p>
                        <p className="post-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam eum eaque ipsum consequuntur ut
                            a quibusdam laudantium! Nostrum aliquam facere omnis vero doloremque fugiat blanditiis soluta doloribus earum
                            provident.
                        </p>
                        <p className="post-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam eum eaque ipsum consequuntur ut
                            a quibusdam laudantium! Nostrum aliquam facere omnis vero doloremque fugiat blanditiis soluta doloribus earum
                            provident.
                        </p>
                    </section>

                    <div className="share post-container">
                        <span className="share-title">Share this article</span>
                        <div className="social">
                            <a href="#">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer container">
                        <p>&#169; AI-BLOGS All Right Reserved</p>
                        <div className="social">
                            <a href="#">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </body>
            </html>
        </>
    );
};

export default PostPage;
