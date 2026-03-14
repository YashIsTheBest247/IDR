import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => (
  <section className="container py-20 md:py-32">
    <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
          Advancing the Future of Digital Risk
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-[540px]">
          IDR trains and deploys the next generation of digital risk practitioners through deep academic collaboration and rigorous industry practice.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="#pillars">Explore Programs</a>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:grid aspect-square bg-muted rounded-3xl place-items-center border border-border"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 30L170 65V135L100 170L30 135V65L100 30Z" stroke="hsl(var(--primary))" strokeWidth="2" />
          <path d="M100 30V100L170 65M100 100L30 65M100 100V170" stroke="hsl(var(--foreground))" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
