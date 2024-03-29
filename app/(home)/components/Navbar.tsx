import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {
  const socials = [
    {
      link: "https://github.com/ft-johan",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/johan-george-/",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://www.instagram.com/ft._johan/",
      label: " Instagram",
      icon: SiInstagram,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center",className)}>
      <h1 className="text-2xl font-bold">Johan George</h1>
      <div className="flex item-center gap-10">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-10 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
