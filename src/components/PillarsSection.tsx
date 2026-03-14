import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Shield, Scale } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Academy",
    description: "Intensive bootcamps and executive training designed to upskill professionals in cyber resilience and AI safety protocols.",
  },
  {
    icon: Shield,
    title: "Innovation",
    description: "Incubating proprietary IP and AI governance tools to automate compliance with emerging global regulations.",
  },
  {
    icon: Scale,
    title: "Advisory",
    description: "Strategic deployment of NIST, ISO 27001, and NIS2 frameworks tailored for high-stakes regulated environments.",
  },
];

const PillarsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pillars" className="bg-muted py-24">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Service Pillars</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">Our Core Workstreams</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="group relative overflow-hidden bg-card p-10 rounded-xl border border-transparent shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-border transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
              <pillar.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading text-2xl mb-4 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground text-[0.95rem]">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
