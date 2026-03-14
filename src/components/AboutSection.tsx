import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="border-t border-border py-24">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Institutional Foundation</span>
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl mb-6 text-foreground">
              Bridging Academia and Industry
            </h2>
            <p className="text-lg text-muted-foreground mb-5">
              The Institute of Digital Risk operates at the intersection of theoretical excellence and regulated reality. In partnership with leading UK universities, we translate academic research into deployable risk frameworks for the world's most critical sectors.
            </p>
            <p className="text-lg text-muted-foreground">
              Our practitioners don't just study risk; they manage it within the contexts of finance, healthcare, and national infrastructure, ensuring that AI and digital transformation remain resilient by design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
