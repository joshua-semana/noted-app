import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";

const Navbar = () => {
  const NavigationLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <header className="z-50 sticky top-0 w-full bg-background/80 backdrop-blur-sm border-b border-muted">
      <div className="container h-14 flex items-center justify-between">
        <div className="flex gap-8">
          <a href="/" className="flex gap-2 items-center">
            <Paperclip size={"20px"} />
            <p className="font-semibold">Noted</p>
          </a>
          <nav className="hidden sm:block">
            <ul className="flex gap-8 text-muted-foreground">
              {NavigationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="hover:text-foreground">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Button variant={"secondary"}>Login</Button>
      </div>
    </header>
  );
};

export default Navbar;
