/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  MessageCircle, 
  ExternalLink, 
  Video, 
  Edit3, 
  Monitor, 
  User, 
  ChevronDown, 
  Send,
  Facebook,
  Smartphone
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          FKG
        </motion.div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-white/70">
          {["About", "Presence", "Content", "Skills", "Vision", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => {
                e.preventDefault();
                const targetId = item.toLowerCase();
                const element = document.getElementById(targetId);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-apple-blue transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <motion.a 
          href="https://wa.me/923476804165"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-apple-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
        >
          Connect
        </motion.a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-gradient"
        >
          Fahad Raza Gopang
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/60 font-light mb-10 max-w-2xl mx-auto"
        >
          Building a Professional Digital Identity
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-apple-white transition-colors duration-300 group"
          >
            <span>Explore More</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-white/40 text-lg max-w-xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const About = () => (
  <section id="about" className="py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionTitle>About Me</SectionTitle>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 md:p-12 rounded-3xl leading-relaxed text-lg md:text-xl text-white/80 space-y-6"
      >
        <p>
          I am <span className="text-white font-semibold">Fahad Raza Gopang</span>, living in a village and currently studying an Islamic scholar course (Aalim Course). I belong to a family of 7 members including my parents, three brothers, and two sisters.
        </p>
        <p>
          Alongside my religious education, I have a strong interest in IT and digital content creation. I am passionate about building my professional identity online and bridging the gap between traditional values and modern technology.
        </p>
      </motion.div>
    </div>
  </section>
);

const SocialPresence = () => {
  const socials = [
    { 
      name: "TikTok", 
      icon: <Smartphone className="w-6 h-6" />, 
      url: "https://www.tiktok.com/@fahadrazagopang8", 
      color: "hover:text-[#ff0050]" 
    },
    { 
      name: "Facebook", 
      icon: <Facebook className="w-6 h-6" />, 
      url: "https://www.facebook.com/share/1EgitGdq4M/", 
      color: "hover:text-[#1877f2]" 
    },
    { 
      name: "WhatsApp", 
      icon: <MessageCircle className="w-6 h-6" />, 
      url: "https://wa.me/923476804165", 
      color: "hover:text-[#25d366]" 
    }
  ];

  return (
    <section id="presence" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Let's build something meaningful together.">Connect With Me</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socials.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass p-10 rounded-3xl flex flex-col items-center justify-center space-y-4 group transition-all duration-500 ${social.color}`}
            >
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors duration-300">
                {social.icon}
              </div>
              <span className="text-xl font-medium">{social.name}</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Content = () => (
  <section id="content" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionTitle subtitle="Showcasing my digital journey and creative expressions.">My Content</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* TikTok Embed Placeholders - In a real app, use TikTok embed code */}
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="aspect-[9/16] glass rounded-3xl overflow-hidden relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Video className="w-12 h-12 text-white/20 group-hover:text-apple-blue transition-colors duration-300" />
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm font-medium text-white/60 mb-2">TikTok Content #{i}</p>
              <h3 className="text-lg font-semibold">Creative Digital Storytelling</h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 glass p-12 rounded-3xl text-center border-dashed border-white/20"
      >
        <h3 className="text-2xl font-semibold mb-4">YouTube Coming Soon</h3>
        <p className="text-white/40">I'm currently preparing long-form educational and IT-related content.</p>
      </motion.div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { name: "Social Media Content Creation", icon: <Smartphone className="w-6 h-6" />, desc: "Crafting engaging stories for modern platforms." },
    { name: "Video Editing", icon: <Video className="w-6 h-6" />, desc: "Professional editing with a focus on pacing and impact." },
    { name: "IT Skills", icon: <Monitor className="w-6 h-6" />, desc: "Proficient in digital tools and modern computing." },
    { name: "Personal Branding", icon: <User className="w-6 h-6" />, desc: "Building a consistent and professional online identity." }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Combining technical proficiency with creative vision.">What I Do</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl flex items-start space-x-6 hover:bg-white/10 transition-colors duration-500"
            >
              <div className="p-4 bg-apple-blue/10 rounded-2xl text-apple-blue">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-white/50">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Vision = () => (
  <section id="vision" className="py-32 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <SectionTitle>My Vision</SectionTitle>
      <motion.p 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-light leading-relaxed text-white/80"
      >
        "I believe in the power of digital presence to bridge cultures and share knowledge. My goal is to grow as a content creator who blends religious wisdom with modern IT expertise, creating a unique professional identity that inspires others to pursue their passions regardless of their background."
      </motion.p>
    </div>
  </section>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! I will get back to you soon.");
      setFormState({ name: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Have a project in mind or just want to say hi?">Get In Touch</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-semibold">Let's Talk</h3>
            <p className="text-white/50 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
              <a 
                href="https://wa.me/923476804165"
                className="flex items-center space-x-4 glass p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="p-3 bg-green-500/10 text-green-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40">WhatsApp</p>
                  <p className="text-lg font-medium">0347 6804165</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl space-y-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 px-1">Name</label>
              <input 
                type="text" 
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-apple-blue transition-colors duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 px-1">Message</label>
              <textarea 
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="How can I help you?"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-apple-blue transition-colors duration-300 resize-none"
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-apple-blue text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity duration-300 disabled:opacity-50"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              {!isSubmitting && <Send className="w-4 h-4" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <div className="text-2xl font-bold tracking-tighter">FKG</div>
      <div className="text-white/40 text-sm">
        © {new Date().getFullYear()} Fahad Raza Gopang. All rights reserved.
      </div>
      <div className="flex space-x-6 text-white/40 text-sm">
        <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
        <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
      </div>
    </div>
  </footer>
);

const LoadingScreen = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-apple-black flex items-center justify-center"
  >
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-4xl font-bold tracking-tighter"
    >
      FKG
    </motion.div>
  </motion.div>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <SocialPresence />
            <Content />
            <Skills />
            <Vision />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
