// src/pages/Industries/Industries.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2, GraduationCap, TrendingUp, Fuel, Landmark, Truck, Hammer, ShoppingCart,
  ArrowRight, CheckCircle, Lightbulb, Target, Rocket, Wrench, Shield, Zap, BarChart3,
  Users, Globe, Database, Layers
} from 'lucide-react';

// -------------------------------------------------
// 1. INDUSTRY DATA
// -------------------------------------------------
const industries = [
  { name: 'Banking', path: '/focus-areas/banking', Icon: Building2, tagline: 'Secure core-banking, digital portals & fraud-proof solutions.' },
  { name: 'Education', path: '/focus-areas/education', Icon: GraduationCap, tagline: 'LMS, virtual classrooms & student analytics platforms.' },
  { name: 'Investment', path: '/focus-areas/investment', Icon: TrendingUp, tagline: 'Portfolio management, real-time analytics & robo-advisors.' },
  { name: 'Oil & Gas', path: '/focus-areas/oil-gas', Icon: Fuel, tagline: 'Asset monitoring, predictive maintenance & supply-chain optimisation.' },
  { name: 'Public Sector', path: '/focus-areas/public-sector', Icon: Landmark, tagline: 'Citizen portals, e-governance & transparent budgeting tools.' },
  { name: 'Supply Chain & Logistics', path: '/focus-areas/logistics', Icon: Truck, tagline: 'Real-time tracking, warehouse automation & route optimisation.' },
  { name: 'Construction', path: '/focus-areas/construction', Icon: Hammer, tagline: 'BIM integration, project dashboards & safety compliance.' },
  { name: 'Ecommerce', path: '/focus-areas/ecommerce', Icon: ShoppingCart, tagline: 'Scalable storefronts, payment gateways & AI-driven recommendations.' },
];

// -------------------------------------------------
// 2. COMPONENT
// -------------------------------------------------
const Industries = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
  const cardHover = { scale: 1.04, y: -8 };

  // Process Steps
  const processSteps = [
    { step: '01', title: 'Discovery & Strategy', desc: 'Deep dive into your industry challenges, goals, and competitive landscape to build a tailored roadmap.', icon: Lightbulb },
    { step: '02', title: 'Design & Prototyping', desc: 'User-centric wireframes, UI/UX mockups, and interactive prototypes to validate ideas fast.', icon: Target },
    { step: '03', title: 'Development & Testing', desc: 'Agile sprints, clean code, CI/CD pipelines, and rigorous QA for flawless delivery.', icon: Rocket },
    { step: '04', title: 'Support & Growth', desc: 'Ongoing maintenance, performance optimization, and feature expansion as you scale.', icon: Wrench },
  ];

  // Tech Stack
  const techStack = [
    'React / Next.js', 'Node.js / NestJS', 'Python / FastAPI', 'Flutter / React Native',
    'AWS / GCP / Azure', 'Docker / Kubernetes', 'PostgreSQL / MongoDB',
    'TensorFlow / PyTorch', 'GraphQL / REST', 'Figma / Tailwind'
  ];

  // Stats
  const stats = [
    { value: '150+', label: 'Enterprise Clients' },
    { value: '8', label: 'Industries Served' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24/7', label: 'Global Support' },
  ];

  return (
    <div className="min-h-screen bg-[#1C2526] text-[#F5F6F5] overflow-x-hidden font-sans">

      {/* ====================== HERO ====================== */}
      <section className="relative py-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1C2526] via-[#2E7D7B] to-[#1C2526]">
        <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyRTdENEIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Industries We Power
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-[#EEF4F1]"
          >
            From banking to logistics, we deliver secure, scalable and future-ready digital solutions
            tailored to the unique challenges of each sector.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
          >
            <Link
              to="/contact"
              className="inline-block bg-[#2E7D7B] hover:bg-[#266966] text-[#F5F6F5] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====================== INDUSTRY GRID ====================== */}
      <section id="industry-grid" className="py-20 bg-[#F5F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible['industry-grid'] ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {industries.map((industry, i) => {
              const Icon = industry.Icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={cardHover}
                  className="group relative bg-[#2E7D7B] rounded-xl overflow-hidden border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all duration-300"
                >
                  <Link to={industry.path} className="block p-6 h-full flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-[#F5F6F5] rounded-lg mr-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-[#1C2526]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#F5F6F5]">{industry.name}</h3>
                      </div>
                      <p className="text-sm text-[#EEF4F1] leading-relaxed">{industry.tagline}</p>
                    </div>
                    <div className="mt-6 flex items-center text-[#F5F6F5] font-medium text-sm">
                      Explore <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ====================== CHALLENGES & SOLUTIONS ====================== */}
      <section id="challenges" className="py-20 bg-[#1C2526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F6F5] mb-4">
              Industry Challenges We Solve
            </h2>
            <p className="text-lg text-[#B0B7B4] max-w-4xl mx-auto">
              Every sector faces unique digital hurdles. We turn complexity into competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Legacy Systems', desc: 'Modernize outdated infrastructure without disrupting operations.' },
              { title: 'Data Silos', desc: 'Unify fragmented data for real-time insights and decision-making.' },
              { title: 'Regulatory Compliance', desc: 'Built-in audit trails, encryption, and compliance reporting.' },
              { title: 'Scalability', desc: 'Cloud-native architecture that grows with your business.' },
              { title: 'User Adoption', desc: 'Intuitive UX/UI that drives engagement and reduces training time.' },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-4 bg-[#2E7D7B]/20 p-6 rounded-xl border border-[#2E7D7B]/30"
              >
                <CheckCircle className="w-6 h-6 text-[#2E7D7B] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#F5F6F5]">{c.title}</h3>
                  <p className="text-sm text-[#B0B7B4] mt-1">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== OUR APPROACH ====================== */}
      <section id="approach" className="py-20 bg-[#F5F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141313] mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-lg text-[#1B211E] max-w-3xl mx-auto">
              A proven, transparent process from idea to launch and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#2E7D7B] p-6 rounded-2xl border border-[#2E7D7B]/30 text-center"
                >
                  <div className="text-5xl font-bold text-[#F5F6F5] mb-2">{step.step}</div>
                  <div className="bg-[#F5F6F5] p-3 rounded-full w-fit mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#1C2526]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F6F5] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#EEF4F1]">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================== TECH STACK ====================== */}
      <section id="tech-stack" className="py-20 bg-[#1C2526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F6F5] mb-4">
              Built With Cutting-Edge Tech
            </h2>
            <p className="text-lg text-[#B0B7B4] max-w-3xl mx-auto">
              We use the best tools to deliver fast, secure, and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#2E7D7B] p-6 rounded-xl border border-[#2E7D7B]/30 hover:border-[#2E7D7B] transition-all flex items-center justify-center text-center group"
              >
                <span className="text-sm font-medium text-[#F5F6F5] group-hover:text-[#F5F9F9] transition-colors">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== STATS ====================== */}
      <section className="py-20 bg-[#2E7D7B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#F5F6F5]">{stat.value}</div>
                <div className="text-sm sm:text-base text-[#EEF4F1] mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== WHY CHOOSE US ====================== */}
      <section id="why-us" className="py-20 bg-[#F5F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141313] mb-4">
              Why Greatodeal?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Industry Expertise', icon: Shield, desc: 'Deep domain knowledge across 8+ sectors.' },
              { title: 'Agile & Transparent', icon: Zap, desc: 'Weekly demos, clear roadmaps, no surprises.' },
              { title: 'Scalable Architecture', icon: Layers, desc: 'Built to grow from MVP to enterprise.' },
              { title: 'Security First', icon: Database, desc: 'ISO 27001, SOC 2, GDPR compliant.' },
              { title: '24/7 Support', icon: Globe, desc: 'Global teams, always-on monitoring.' },
              { title: 'Proven Results', icon: BarChart3, desc: '150+ successful digital transformations.' },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-4 bg-[#2E7D7B] p-6 rounded-xl border border-[#2E7D7B]/30"
                >
                  <div className="bg-[#F5F6F5] p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-[#1C2526]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F5F6F5]">{b.title}</h3>
                    <p className="text-sm text-[#EEF4F1]">{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================== FINAL CTA ====================== */}
      <section className="py-20 bg-gradient-to-br from-[#1C2526] to-[#2E7D7B] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#F5F6F5]">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg text-[#B0B7B4] mb-8">
            Let’s discuss how our expertise can drive growth in your sector.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#2E7D7B] hover:bg-[#266966] text-[#F5F6F5] px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ------------------- GLOBAL STYLES ------------------- */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
};

export default Industries;