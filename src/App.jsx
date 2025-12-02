// if unused, remove this line or comment it out
// const sampleProjects = [...]

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import heroImg from './assets/MY PHOTO.png';
import crazeonImg from './assets/crazeonsystem.png';
import traveling from './assets/travel.png';
import music from './assets/music.png';
export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">PRINCE RAVAL</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="home" className="py-5 bg-dark text-light">
      <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
        <div className="flex-grow-1">
          <h1 className="display-5 fw-bold">Welcome to My  Portfolio web side</h1>
          <p className="lead text-muted">
            Experience elegance and sophistication in web and app development.
          </p>
          <div className="mt-3">
            <a href="#projects" className="btn btn-gold me-2" style={{backgroundColor: '#b8860b', color: '#fff'}}>View Projects</a>
            <a href="#contact" className="btn btn-outline-light">Get in touch</a>
          </div>
        </div>
        <div className="text-center">
          <div className="rounded-circle border border-3 border-gold p-1" style={{width: 160, height: 160, overflow: 'hidden'}}>
            <img src={heroImg} alt="Profile" className="img-fluid rounded-circle" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="h3 mb-3">About Me</h2>
        <p className="text-muted">
          I'm a full-stack web & app developer with experience building modern web apps using React, Node.js,
          and mobile frameworks. I enjoy solving problems, shipping features quickly and writing maintainable code.
        </p>
        <div className="row mt-4">
          <div className="col-md-4">
            <h5 className="mb-1">Skills</h5>
            <ul className="list-unstyled text-muted">
              <li> frontend: React.js / bootstrap/html/css/javascript/react/Tailwind CSS/ jQuery /TypeScript</li>
              <li> backend: Node.js / Express </li>
              <li> databases: MongoDB / MySQL / php </li>
              <li> mobile: React Native  </li>
             </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-1">Tools</h5>
            <ul className="list-unstyled text-muted">
              <li>Git / GitHub</li>
              <li>Vercel / Netlify</li>
              <li>Docker</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-1">Process</h5>
            <ul className="list-unstyled text-muted">
              <li>User-centered design</li>
              <li>Test-driven development</li>
              <li>Continuous delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const sampleProjects = [
  {
    id: 1,
    title: "Project One",
    desc: "A responsive web app built with React and Bootstrap.",
    img: heroImg,
    link: "#"
  },
  {
    id: 2,
    title: "Project Two",
    desc: "Mobile-first application with performant UX.",
    img: heroImg,
    link: "#"
  },
  {
    id: 3,
    title: "Project Three",
    desc: "API-driven platform with real-time features.",
    img: heroImg,
    link: "#"
  }
];

function Projects() {

  const projectA = {
    id: 1,
    title: "music website",
    desc: "Replace this with a short description of Project A.",
    img: music, 
    link: "https://chaibeatz.vercel.app/" 
  };

  const projectB = {
    id: 2,
    title: "traveling website",
    desc: "A website for travel enthusiasts to explore destinations and plan trips.",
    img: traveling,
    link: "https://travel-project-sand.vercel.app/"
  };
  const projectC = {
    id: 3,
    title: "crazeonsystem",
    desc: "An online platform connecting clients and providing services like web & mobile development and digital marketing.",
    img: crazeonImg,
    link: "https://crazeonsystem.vercel.app/"
  };

  const Card = ({p}) => (
    <div className="card h-100 shadow-sm">
      <img src={p.img} className="card-img-top" alt={p.title} style={{objectFit: 'cover', height: 220}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{p.title}</h5>
        <p className="card-text text-muted flex-grow-1">{p.desc}</p>
        <div className="mt-2">
          <a className="btn btn-outline-primary btn-sm" href={p.link} target="_blank" rel="noopener noreferrer">View</a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-5">
      <div className="container mb-4">
        <h2 className="h3">Selected Projects</h2>
      </div>

      {/* Container 1 - Project A */}
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card p={projectA} />
          </div>
        </div>
      </div>

      {/* Container 2 - Project B */}
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card p={projectB} />
          </div>
        </div>
      </div>

      {/* Container 3 - Project C */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card p={projectC} />
          </div>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  const myEmail = "ravalprince1706@gmail.com";
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState(null); // success | error | null
  const [method, setMethod] = React.useState("mailto"); // "mailto" | "formspree" | "emailjs"

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const openMailClient = (subject, body, to = myEmail, cc) => {
    const params = new URLSearchParams();
    if (cc) params.append("cc", cc);
    if (subject) params.append("subject", subject);
    if (body) params.append("body", body);
    const query = params.toString();
    const mailto = `mailto:${encodeURIComponent(to)}${query ? `?${query}` : ""}`;
    window.location.href = mailto;
  };

  const sendViaFormspree = async (subject, body) => {
    // Replace the URL with your Formspree endpoint: https://formspree.io/f/{yourId}
    const FORMSPREE_URL = "https://formspree.io/f/yourFormId";
    try {
      const payload = {
        name: formData.name,
        email: formData.email || "no-reply",
        subject,
        message: formData.message,
      };
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus({ type: "success", msg: "Message sent via Formspree. Thank you!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Formspree error");
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Formspree send failed: " + err.message });
    }
  };

  const sendViaEmailJS = async (subject, body) => {
    // Replace these with your EmailJS service/template/user IDs (or Public Key)
    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const USER_ID = "your_user_or_public_key";
    const endpoint = "https://api.emailjs.com/api/v1.0/email/send";
    try {
      const payload = {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: USER_ID,
        template_params: {
          from_name: formData.name,
          from_email: formData.email || "no-reply",
          to_email: myEmail,
          subject,
          message: formData.message,
        },
      };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus({ type: "success", msg: "Message sent via EmailJS. Check your inbox." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.text();
        throw new Error(data || "EmailJS error");
      }
    } catch (err) {
      setStatus({ type: "error", msg: "EmailJS send failed: " + err.message });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus({ type: "error", msg: "Please provide your name and a message." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      setStatus({ type: "error", msg: "Please enter a valid reply email or leave it blank." });
      return;
    }

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `From: ${formData.email || "no-reply"}\n\nMessage:\n${formData.message}`;

    if (method === "mailto") {
      if (window.confirm("Open your mail client to send this message?")) {
        try {
          openMailClient(subject, body, myEmail, formData.email || "");
          setStatus({ type: "success", msg: "Mail client opened. If it didn't open, use the copy button below." });
          setFormData({ name: "", email: "", message: "" });
        } catch (err) {
          setStatus({ type: "error", msg: "Unable to open mail client. Use copy or download vCard." });
        }
      }
      return;
    }

    // For serverless options attempt to send directly
    setStatus({ type: null, msg: "Sending..." });
    if (method === "formspree") {
      await sendViaFormspree(subject, body);
    } else if (method === "emailjs") {
      await sendViaEmailJS(subject, body);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      setStatus({ type: "success", msg: "Email copied to clipboard." });
    } catch {
      setStatus({ type: "error", msg: "Copy failed. Please copy manually: " + myEmail });
    }
  };

  const downloadVCard = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Prince Raval",
      `EMAIL;TYPE=INTERNET;TYPE=WORK:${myEmail}`,
      "TITLE:Full-stack Developer",
      "END:VCARD",
    ].join("\n");
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Prince_Raval.vcf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    setStatus({ type: "success", msg: "vCard downloaded." });
  };

  // color tokens
  const colors = {
    sectionText: "#e8f1ff",
    paragraph: "rgba(232,241,255,0.85)",
    primary: "#0d6efd", // blue
    accent: "#0d9488", // teal
    success: "#198754",
    secondary: "#6c757d",
    mutedBtnText: "#ffffff",
  };

  return (
    <section id="contact" className="py-5" style={{ background: "linear-gradient(180deg,#0f1724 0%, #0b1220 100%)", color: colors.sectionText }}>
      <div className="container">
        <div
          className="mx-auto"
          style={{
            maxWidth: 900,
            borderRadius: 12,
            padding: 24,
            background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
            boxShadow: "0 8px 30px rgba(2,6,23,0.6)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div className=" flex-md-row align-items-center gap-4">
          

              <form className="space-y-3 flex flex-col">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className=" bg-slate-950 border-slate-700 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="bg-slate-950 border-slate-700 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message..."
                  required
                  className="bg-slate-950 border-slate-700 rounded-xl px-3 py-2 text-sm sm:text-base resize-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 py-2 rounded-xl font-medium hover:bg-blue-500 active:scale-95 transition"
                >
                  Send Message
                </button>
              </form>
          </div>
        </div>

        <div className="text-center mt-3" style={{ color: "rgba(232,241,255,0.72)" }}>
          You can also reach me at <strong style={{ color: "#fff" }}>{myEmail}</strong>.
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-3 bg-light">
      <div className="container d-flex justify-content-between">
        <span className="text-muted">© {new Date().getFullYear()} My Portfolio</span>
        <div>
          <a href="#" className="text-muted me-3">GitHub</a>
          <a href="#" className="text-muted">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

