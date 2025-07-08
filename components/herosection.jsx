"use client"
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() =>{

    const imageElement = imageRef.current ; 

    const handleScroll = () =>{

      const scrollPosition = window.scrollY;
      const scrollThreshold = 100 ; 
  
      if(scrollPosition > scrollThreshold){
        imageElement.classList.add("scrolled"); 
      }
      else{

        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll" , handleScroll);

    return ()=> window.removeEventListener("scroll" , handleScroll);

  } , []);
  return (
    <section className="w-full pt-36 md:pt-48 pb-10 flex flex-col justify-center items-center">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-4xl font-bold text-center">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="text-lg text-center mt-4 text-muted-foreground">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>

        <div className="flex gap-3 mt-6 justify-center">
          <Link href="/dashboard" passHref>
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>

          <Link href="/dashboard" passHref>
            <Button size="lg" className="px-8 hover:bg-blue-300" variant="outline">
              Next Button
            </Button>
          </Link>
        </div>

        <div className="py-2">
          <div ref={imageRef} className="hero-image">
            <Image
            src={"/banner.jpg"}
            width={1280}
            height={720}
            alt="Banner Maestro"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
            ></Image>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
