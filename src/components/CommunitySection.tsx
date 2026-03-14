import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sectors = [
  "Global Financial Services",
  "Critical National Infrastructure",
  "Regulated AI Development",
  "Governmental Policy Units",
];

const CommunitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="border-t border-border py-24">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Network</span>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl mb-6 text-foreground">
                A Community of Practitioners
              </h2>
              <p className="text-muted-foreground text-lg">
                IDR serves as the hub for students, researchers, and professionals in finance and critical infrastructure. We provide the ecosystem for continuous upskilling in an era of perpetual digital volatility.
              </p>
            </div>
            <div className="bg-foreground text-background p-10 rounded-xl">
              <h4 className="text-primary font-heading font-semibold mb-4">Sector Focus</h4>
              <ul className="grid gap-3">
                {sectors.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="text-primary">→</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
