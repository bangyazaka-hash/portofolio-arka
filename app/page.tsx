"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";

const projects = [
  {
    id: "01",
    title: "VELOZ",
    type: "WEB EXPERIENCE",
    description:
      "A digital catalog for racing bikes and cycling components.",
    image: "/veloz.png",
    tech: "NEXT.JS · TYPESCRIPT · PRISMA",
  },
  {
    id: "02",
    title: "Landing-Page",
    type: "WEB APPLICATION",
    description:
      "A simple Landing page for event",
    image: "/meet.png",
    tech: "LARAVEL · PHP",
  },
  {
    id: "03",
    title: "RESTO SUNDA",
    type: "WEB APPLICATION",
    description:
      "A modern digital experience for a local restaurant.",
    image: "/resto.png",
    tech: "LARAVEL · MYSQL · TAILWIND",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // ================================
    // WEB3FORMS
    // GANTI DENGAN ACCESS KEY KAMU
    // ================================
    data.append("access_key", "55d03e46-4513-439b-a8fc-568e725ec25f");

    data.append(
      "subject",
      "New Portfolio Message — Arka Putra Yazaka"
    );

    data.append(
      "from_name",
      "Arka Putra Yazaka Portfolio"
    );

    // Anti-spam honeypot
    data.append("botcheck", "");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("MESSAGE SENT.");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        form.reset();
      } else {
        setStatus(
          result.message || "FAILED TO SEND. PLEASE TRY AGAIN."
        );
      }
    } catch (error) {
      console.error(error);
      setStatus("FAILED TO SEND. PLEASE TRY AGAIN.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="overflow-hidden bg-[#f4f3ef] text-[#111]">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-0 top-0 z-50 w-full px-5 py-5 text-white mix-blend-difference md:px-8 lg:px-10">

        <div className="flex items-center justify-between">

          <a
            href="#"
            className="text-lg font-semibold tracking-[-0.08em]"
          >
            ARKA®
          </a>

          <div className="hidden items-center gap-10 text-[10px] tracking-[0.2em] md:flex">

            <a
              href="#work"
              className="transition-opacity hover:opacity-50"
            >
              WORK
            </a>

            <a
              href="#about"
              className="transition-opacity hover:opacity-50"
            >
              ABOUT
            </a>

            <a
              href="#contact"
              className="transition-opacity hover:opacity-50"
            >
              CONTACT
            </a>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="h-px w-6 bg-white" />
            <span className="ml-auto h-px w-4 bg-white" />
          </button>

        </div>

        {/* MOBILE MENU */}

        <div
          className={`absolute left-0 top-0 -z-10 w-full bg-[#111] px-5 pt-24 transition-all duration-500 ${
            menuOpen
              ? "h-screen opacity-100"
              : "pointer-events-none h-0 opacity-0"
          }`}
        >

          <div className="flex flex-col">

            {["WORK", "ABOUT", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-6 text-4xl tracking-[-0.05em]"
              >
                {item}
              </a>
            ))}

          </div>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative min-h-screen px-5 pb-10 pt-28 md:px-8 lg:px-10"
      >

        <div
          className={`mx-auto max-w-[1700px] transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >

          {/* TOP META */}

          <div className="flex items-start justify-between">

            <div>
              <p className="text-[9px] tracking-[0.2em] text-black/40">
                PORTFOLIO / 2026
              </p>
            </div>

            <div className="text-right">

              <p className="text-[9px] tracking-[0.2em] text-black/40">
                BANDUNG
              </p>

              <p className="mt-1 text-[9px] tracking-[0.2em] text-black/40">
                INDONESIA
              </p>

            </div>

          </div>


          {/* MAIN HERO */}

          <div className="relative mt-20 md:mt-24">

            <div className="relative z-10">

              <h1 className="text-[17vw] font-medium leading-[0.75] tracking-[-0.085em] md:text-[13vw] lg:text-[10.5vw]">
                ARKA PUTRA
              </h1>

              <div className="flex items-end justify-between">

                <h1 className="text-[17vw] font-medium leading-[0.75] tracking-[-0.085em] md:text-[13vw] lg:text-[10.5vw]">
                  YAZAKA
                </h1>

                <p className="mb-2 hidden max-w-[200px] text-xs leading-5 text-black/50 lg:block">
                  Frontend developer focused on creating modern digital
                  experiences through code and design.
                </p>

              </div>

            </div>


            {/* FLOATING PORTRAIT */}

            <div className="absolute right-[3%] top-[12%] z-20 w-[38vw] max-w-[400px] rotate-[3deg] overflow-hidden bg-black shadow-2xl md:w-[27vw]">

              <div className="relative aspect-[3/4]">

                <Image
                  src="/arka.jpg"
                  alt="Arka Putra Yazaka"
                  fill
                  priority
                  className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                />

              </div>

              <div className="absolute bottom-4 left-4 text-[8px] tracking-[0.2em] text-white">
                ARKA / PORTRAIT
              </div>

            </div>

          </div>


          {/* HERO BOTTOM */}

          <div className="mt-24 flex items-end justify-between border-t border-black/10 pt-5 md:mt-32">

            <div>

              <p className="text-[9px] tracking-[0.2em] text-black/40">
                FRONTEND DEVELOPER
              </p>

              <p className="mt-1 text-[9px] tracking-[0.2em] text-black/40">
                INFORMATICS STUDENT
              </p>

            </div>

            <a
              href="#work"
              className="group flex items-center gap-3 text-[9px] tracking-[0.2em]"
            >
              EXPLORE

              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="px-5 py-32 md:px-8 md:py-48 lg:px-10"
      >

        <div className="mx-auto max-w-[1700px]">

          <div className="grid gap-16 md:grid-cols-[0.25fr_1fr]">

            <p className="text-[9px] tracking-[0.2em] text-black/40">
              ABOUT ME
            </p>

            <div>

              <p className="max-w-6xl text-[8vw] font-medium leading-[0.92] tracking-[-0.065em] md:text-[6vw] lg:text-[5vw]">

                I&apos;M A DEVELOPER WHO ENJOYS TURNING{" "}

                <span className="text-black/25">
                  IDEAS INTO DIGITAL EXPERIENCES.
                </span>

              </p>


              <div className="mt-16 flex flex-col gap-8 md:ml-[25%] md:max-w-lg">

                <p className="text-sm leading-7 text-black/50">
                  Currently studying Informatics at Universitas Komputer
                  Indonesia while exploring frontend development, UI design
                  and modern web technologies.
                </p>

                <a
                  href="#contact"
                  className="w-fit border-b border-black pb-2 text-[9px] tracking-[0.2em] transition-opacity hover:opacity-40"
                >
                  LET&apos;S TALK ↗
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="work"
        className="px-5 pb-32 md:px-8 md:pb-48 lg:px-10"
      >

        <div className="mx-auto max-w-[1700px]">

          {/* HEADER */}

          <div className="mb-16 flex items-end justify-between">

            <div>

              <p className="mb-3 text-[9px] tracking-[0.2em] text-black/40">
                SELECTED
              </p>

              <h2 className="text-7xl font-medium leading-none tracking-[-0.08em] md:text-[10vw]">
                PROJECTS
              </h2>

            </div>

            <span className="hidden text-[9px] tracking-[0.2em] text-black/40 md:block">
              03 / 03
            </span>

          </div>


          {/* PROJECT 01 */}

          <div className="group">

            <div className="relative overflow-hidden bg-[#dddcd6]">

              <div className="relative aspect-[16/9]">

                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

              </div>

              <div className="absolute bottom-5 left-5 rounded-full bg-[#f4f3ef] px-4 py-2 text-[8px] tracking-[0.15em]">
                VIEW PROJECT ↗
              </div>

            </div>


            <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row">

              <div>

                <p className="text-[9px] tracking-[0.2em] text-black/40">
                  01 / {projects[0].type}
                </p>

                <h3 className="mt-2 text-5xl font-medium tracking-[-0.07em] md:text-7xl">
                  VELOZ
                </h3>

              </div>


              <div className="max-w-sm md:text-right">

                <p className="text-sm leading-6 text-black/45">
                  {projects[0].description}
                </p>

                <p className="mt-5 text-[8px] tracking-[0.15em] text-black/40">
                  {projects[0].tech}
                </p>

              </div>

            </div>

          </div>


          {/* PROJECTS 02 / 03 */}

          <div className="mt-32 grid gap-20 md:grid-cols-2 md:gap-10">

            {projects.slice(1).map((project) => (

              <div
                key={project.id}
                className={`group ${
                  project.id === "03" ? "md:mt-40" : ""
                }`}
              >

                <div className="relative overflow-hidden bg-[#dddcd6]">

                  <div className="relative aspect-[4/5]">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-1000 group-hover:scale-105"
                    />

                  </div>

                  <div className="absolute bottom-4 left-4 rounded-full bg-[#f4f3ef] px-3 py-2 text-[8px] tracking-[0.15em]">
                    VIEW ↗
                  </div>

                </div>


                <div className="mt-5">

                  <div className="flex justify-between">

                    <p className="text-[9px] tracking-[0.2em] text-black/40">
                      {project.id} / {project.type}
                    </p>

                    <span className="text-[9px] text-black/30">
                      2026
                    </span>

                  </div>

                  <h3 className="mt-3 text-5xl font-medium tracking-[-0.07em]">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-black/45">
                    {project.description}
                  </p>

                  <p className="mt-5 text-[8px] tracking-[0.15em] text-black/40">
                    {project.tech}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="bg-[#111] px-5 py-32 text-[#f4f3ef] md:px-8 md:py-48 lg:px-10">

        <div className="mx-auto max-w-[1700px]">

          <div className="grid gap-16 md:grid-cols-[0.25fr_1fr]">

            <p className="text-[9px] tracking-[0.2em] text-white/30">
              TOOLBOX
            </p>

            <div>

              <h2 className="text-6xl font-medium leading-[0.85] tracking-[-0.07em] md:text-[9vw]">
                THINGS I
                <br />
                USE.
              </h2>


              <div className="mt-20 grid grid-cols-2 border-t border-white/10 md:grid-cols-3">

                {[
                  "NEXT.JS",
                  "REACT",
                  "TYPESCRIPT",
                  "TAILWIND",
                  "LARAVEL",
                  "PHP",
                  "MYSQL",
                  "PRISMA",
                  "GITHUB",
                ].map((skill, index) => (

                  <div
                    key={skill}
                    className="border-b border-r border-white/10 px-3 py-6 text-sm tracking-[-0.02em] transition-colors duration-300 hover:bg-white hover:text-black md:px-5"
                  >

                    <span className="mr-3 text-[8px] text-white/30">
                      0{index + 1}
                    </span>

                    {skill}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section className="px-5 py-32 md:px-8 md:py-48 lg:px-10">

        <div className="mx-auto max-w-[1700px]">

          <div className="grid gap-16 md:grid-cols-[0.25fr_1fr]">

            <p className="text-[9px] tracking-[0.2em] text-black/40">
              BACKGROUND
            </p>

            <div>

              <div className="grid gap-8 border-t border-black/10 py-8 md:grid-cols-[1fr_auto]">

                <div>

                  <h3 className="text-3xl font-medium tracking-[-0.05em] md:text-5xl">
                    Universitas Komputer Indonesia
                  </h3>

                  <p className="mt-2 text-sm text-black/40">
                    Informatics
                  </p>

                </div>

                <span className="text-[9px] tracking-[0.15em] text-black/40">
                  2026 — PRESENT
                </span>

              </div>

<div>

              <div className="grid gap-8 border-t border-black/10 py-8 md:grid-cols-[1fr_auto]">

                <div>

                  <h3 className="text-3xl font-medium tracking-[-0.05em] md:text-5xl">
                    PT. Jerbee Indonesia
                  </h3>

                  <p className="mt-2 text-sm text-black/40">
                    Fullstack Developer
                  </p>

                </div>

                <span className="text-[9px] tracking-[0.15em] text-black/40">
                  2025 August - 2025 November
                </span>

              </div>


              <div className="grid gap-8 border-t border-black/10 py-8 md:grid-cols-[1fr_auto]">

                <div>

                  <h3 className="text-3xl font-medium tracking-[-0.05em] md:text-5xl">
                    SMK Angkasa 1 Margahayu
                  </h3>

                  <p className="mt-2 text-sm text-black/40">
                    Software Engineering
                  </p>

                </div>

                <span className="text-[9px] tracking-[0.15em] text-black/40">
                  GRADUATED
                </span>

              </div>

            </div>

          </div>

        </div>
        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="bg-[#111] px-5 py-28 text-[#f4f3ef] md:px-8 md:py-40 lg:px-10"
      >

        <div className="mx-auto max-w-[1700px]">

          <p className="mb-16 text-[9px] tracking-[0.2em] text-white/30">
            HAVE A PROJECT?
          </p>


          <h2 className="text-[17vw] font-medium leading-[0.72] tracking-[-0.09em] md:text-[13vw]">
            LET&apos;S
            <br />
            TALK.
          </h2>


          <div className="mt-20 grid gap-16 border-t border-white/10 pt-10 lg:grid-cols-[0.35fr_1fr]">

            {/* CONTACT INFO */}

            <div>

              <p className="max-w-xs text-sm leading-6 text-white/40">
                Have an idea, project, collaboration or just want to say
                hello? Send me a message.
              </p>


              <div className="mt-10">

                <p className="text-[9px] tracking-[0.2em] text-white/30">
                  EMAIL
                </p>

                <p className="mt-2 text-sm">
                  arkaputrayazaka@gmail.com
                </p>

              </div>

            </div>


            {/* CONTACT FORM */}

            <form
              onSubmit={handleSubmit}
              className="max-w-3xl"
            >

              {/* NAME */}

              <div className="border-b border-white/15">

                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  required
                  className="w-full bg-transparent py-5 text-sm tracking-[0.05em] outline-none placeholder:text-white/30"
                />

              </div>


              {/* EMAIL */}

              <div className="border-b border-white/15">

                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  required
                  className="w-full bg-transparent py-5 text-sm tracking-[0.05em] outline-none placeholder:text-white/30"
                />

              </div>


              {/* MESSAGE */}

              <div className="border-b border-white/15">

                <textarea
                  name="message"
                  placeholder="TELL ME ABOUT YOUR PROJECT"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  required
                  rows={5}
                  className="w-full resize-none bg-transparent py-5 text-sm tracking-[0.05em] outline-none placeholder:text-white/30"
                />

              </div>


              {/* HONEYPOT */}

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />


              {/* SUBMIT */}

              <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">

                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-full bg-[#f4f3ef] px-7 py-4 text-[9px] tracking-[0.2em] text-black transition-all duration-300 hover:bg-white hover:px-9 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {sending
                    ? "SENDING..."
                    : "SEND MESSAGE ↗"}
                </button>


                {status && (
                  <p className="text-[9px] tracking-[0.15em] text-white/50">
                    {status}
                  </p>
                )}

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-[#111] px-5 pb-6 text-[#f4f3ef] md:px-8 lg:px-10">

        <div className="mx-auto flex max-w-[1700px] justify-between border-t border-white/10 pt-5 text-[8px] tracking-[0.15em] text-white/30">

          <span>
            © 2026 ARKA PUTRA YAZAKA
          </span>

          <span>
            BUILT WITH NEXT.JS
          </span>

        </div>

      </footer>

    </main>
  );
}