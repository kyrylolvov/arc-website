import { RiDiscordFill, RiGithubFill, RiLinkedinBoxFill, RiQuestionMark } from "@remixicon/react";
import Link from "next/link";

import { footerLinks } from "~/utils/footer";

import { Button } from "./ui/button";
import FooterThemeSwitch from "./ui/footer-theme-switch";

export default function Footer() {
  return (
    <footer className="grid-cols-footer grid gap-12 border-t px-6 py-12">
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <RiQuestionMark className="h-7 " />
          <div className="flex items-center gap-1 text-sm font-light text-muted-foreground">
            <span className="text-base">©</span> 2024
          </div>
        </div>
        <div className="-ml-2.5 flex gap-1">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <RiGithubFill className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <RiLinkedinBoxFill className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <RiDiscordFill className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {footerLinks.map((section) => (
        <div key={section.label}>
          <div className="mt-1 text-sm font-medium">{section.label}</div>
          <ul className="mt-2 grid list-none grid-cols-1 xl:grid-cols-2">
            {section.links.map((link) => (
              <li
                key={link.label}
                className="w-fit py-1.5 text-sm font-light text-muted-foreground transition-colors hover:text-primary"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <div className="mt-1 pl-2 text-sm font-medium">Preferences</div>
        <FooterThemeSwitch />
      </div>
    </footer>
  );
}
