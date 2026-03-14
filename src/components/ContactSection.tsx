import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Interest registered successfully!");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Connect</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">Register Your Interest</h2>
          <form onSubmit={handleSubmit} className="max-w-xl mt-10 space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">Full Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">Professional Email</label>
              <input
                type="email"
                placeholder="jane@organization.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">Inquiry Type</label>
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors">
                <option>Academy & Training</option>
                <option>Advisory Services</option>
                <option>University Partnership</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">Message</label>
              <textarea
                placeholder="Tell us about your interest..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <Button variant="hero" size="lg" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Submit Inquiry"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
