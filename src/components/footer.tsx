import { RiDiscordFill, RiGithubFill, RiLinkedinBoxFill, RiQuestionMark } from "@remixicon/react";
import Link from "next/link";

import { footerLinks } from "~/utils/footer";
import generateId from "~/utils/uuid";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import FooterThemeSwitch from "./ui/footer-theme-switch";

export default function Footer() {
  return (
    <footer className="bg-background-accent grid w-full gap-8 border-t px-4 pb-6 pt-6 sm:px-6 lg:pt-12">
      <div className="mx-auto hidden w-full max-w-screen-2xl gap-8 lg:grid">
        <div className="grid grid-cols-footer gap-12">
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <RiQuestionMark className="h-7 " />
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.id}>
              <div className="mt-1 text-sm font-medium">{section.label}</div>
              <ul className="mt-2 grid list-none grid-cols-1">
                {section.links.map((link) => (
                  <li
                    key={link.id}
                    className="w-fit py-1.5 text-sm font-light text-secondary-foreground transition-colors hover:text-primary"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="mt-1 pl-2 text-sm font-medium">Preferences</div>
            <div className="mt-2">
              <FooterThemeSwitch />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pr-3.5">
          <p className="text-xs text-secondary-foreground">© 2024 Arc Compute Ltd. All Rights Reserved.</p>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary-foreground hover:bg-transparent hover:text-primary"
            >
              <RiGithubFill className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary-foreground hover:bg-transparent hover:text-primary"
            >
              <RiLinkedinBoxFill className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary-foreground hover:bg-transparent hover:text-primary"
            >
              <RiDiscordFill className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full lg:hidden">
        <RiQuestionMark className="h-7 " />

        <Accordion type="multiple" className="mt-4 w-full">
          {footerLinks.map((link) => (
            <AccordionItem value={link.label} key={generateId()}>
              <AccordionTrigger className="text-sm" hideChevron>
                {link.label}
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-2">
                {link.links.map((link) => (
                  <Link
                    key={generateId()}
                    href={`/${link.href}`}
                    className="flex py-1.5 text-sm text-secondary-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}

          <AccordionItem value="preferences">
            <AccordionTrigger className="text-sm" hideChevron>
              Preferences
            </AccordionTrigger>
            <AccordionContent className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-[34px] w-[34px] text-secondary-foreground hover:bg-transparent"
                >
                  <RiGithubFill className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-[34px] w-[34px] text-secondary-foreground hover:bg-transparent"
                >
                  <RiLinkedinBoxFill className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-[34px] w-[34px] text-secondary-foreground hover:bg-transparent"
                >
                  <RiDiscordFill className="h-5 w-5" />
                </Button>
              </div>
              <FooterThemeSwitch />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </footer>
  );
}
