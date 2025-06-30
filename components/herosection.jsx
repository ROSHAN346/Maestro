import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10 flex flex-col justify-center items-center">
      <div>
        <div>
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
            <Button size="lg" className="px-8" variant="outline">
              Next Button
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
