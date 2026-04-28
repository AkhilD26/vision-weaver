import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MessageCircle, Instagram } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const text = `Hi Akhil! I'm ${form.name} (${form.email}).%0A%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919032855330?text=${text}`, "_blank");
  };

  const inputClass =
    "w-full bg-transparent border-b border-border px-0 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors";

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label justify-center">Contact</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4">
            Let's <em className="italic">create</em> something
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Drop a message and I'll get back to you on WhatsApp within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-2 max-w-2xl mx-auto"
        >
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={inputClass + " resize-none"}
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-3">
              <a href="https://wa.me/919032855330" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-6 pr-2 py-2 font-medium hover:opacity-90 transition-opacity">
              Send message
              <span className="w-10 h-10 rounded-full bg-primary-foreground text-primary flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
