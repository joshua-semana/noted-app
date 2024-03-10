import { ThemeToggle } from "@/components/theme-toggle";
import { Paperclip } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="container py-8 md:py-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-center gap-2">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 px-8 md:px-0">
          <Paperclip size={"20px"} />
          <p className="text-sm text-pretty leading-loose">
            Created by{" "}
            <a href="/" className="font-semibold underline underline-offset-4">
              Joshua Semana
            </a>
            . Hosted on{" "}
            <a href="/" className="font-semibold underline underline-offset-4">
              Vercel
            </a>
            . Still work in progress.
          </p>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;
