import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Headline = () => {
  return (
    <section className="container py-12 lg:py-32 max-w-3xl space-y-4 text-center">
      <a href="https://joshua-semana.github.io">
        <Badge variant={"secondary"} className="gap-1 text-sm">
          👋🏻
          <span>Coded by Joshua Semana</span>
          <span>
            <ArrowUpRight className="size-4" />
          </span>
        </Badge>
      </a>
      <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-pretty">
        Welcome to Noted.
      </h1>
      <h3 className="sm:text-xl text-muted-foreground text-pretty pb-2">
        An online notepad with fancy features like authentication, real-time updates, and many more.
      </h3>
      <Button>
        Try Now
        <ArrowRight className="size-5 ml-2" />
      </Button>
    </section>
  );
};

export default Headline;
