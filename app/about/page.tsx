"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 px-8">
       <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-4"
           >
          <h1 className="font-mono text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl lg:text-6xl mb-5">
            About Us
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="max-w-[700px] text-lg text-foreground md:text-xl text-justify">
              We feel honoured to introduce{" "}
              <motion.span
                className="relative inline-block font-semibold text-primary cursor-pointer"
                transition={{ duration: 0.2 }}>
                <motion.span
                  className="absolute inset-0 bg-primary/10 rounded px-1 -z-10"
                  transition={{ duration: 0.2 }} />
                G.B. Equipment Systems Ltd.
              </motion.span>{" "}
              as a leading manufacturer of high quality medical
              devices adhering to global standards, following the best practices. The GB Group founded by Late {" "}
              <motion.span
                className="relative inline-block font-semibold text-primary cursor-pointer"
                transition={{ duration: 0.2 }}>
                <motion.span
                  className="absolute inset-0 bg-primary/10 rounded px-1 -z-10"
                  transition={{ duration: 0.2 }} />
                Amrit Lal Gupta
              </motion.span>{" "}
              is amongst India’s few business houses serving the Indian Railways, Defence Sector, Power Sector,
              Heavy Earth Moving Equipment, Oil Sector etc. GB Group, exports its products to South East Asia, Europe &
              the Middle East.
            </p>
            <p className="max-w-[700px] text-lg text-foreground md:text-xl text-justify">
              At GB
              Group, we only focus on markets where our contribution will be signiﬁcant. We
              {" "}
              <motion.span
                className="relative inline-block font-semibold text-primary cursor-pointer"
                transition={{ duration: 0.2 }}>
                <motion.span
                  className="absolute inset-0 bg-primary/10 rounded px-1 -z-10"
                  transition={{ duration: 0.2 }} />
                aim to be the largest producer
              </motion.span>{" "}
              of various equipments globally, in terms of both, quality and turnover. We provide the most economical
              equipments through continual improvement and development in technology. We work towards the
              preservation and growth of ﬂora and fauna, making GB Group a truly sustainable company.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="relative h-[300px] w-full md:h-[400px] lg:h-[460px]"
        >
          <Image
            src="/lal.png"
            alt="Welcome to GB Family"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
          />
        </motion.div>
      </section>

      <section className="container py-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center font-mono text-3xl font-bold text-primary md:text-4xl"
        >
          People of GB
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border bg-card p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-foreground">Sustainable by Design</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We build responsibly—prioritizing safe workplaces, reduced impact, and long‑term value.
              This principle means the company integrates environmental and social responsibility into the very foundation of its operations and output. They commit to building responsibly, with a focus on prioritizing safe workplaces, minimizing environmental impact, and creating long-term value in everything they do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-xl border bg-card p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-foreground">Community First</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              CSR with real outcomes through DRDS, ESDA and Blind Judo Association initiatives.
              This emphasizes that the company’s success is intertwined with the well-being of its surrounding communities. Their commitment to CSR (Corporate Social Responsibility) focuses on achieving real outcomes through specific, active initiatives like supporting DRDS, ESDA, and the Blind Judo Association, ensuring their efforts tangibly benefit the larger community and their employees' welfare.


            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl border bg-card p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-foreground">Global Standards</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              ISO‑aligned systems, ethical practices, and transparent operations across the group.
              This confirms GB Group’s dedication to quality, ethics, and accountability on an international level. They maintain highly professional operations through ISO-aligned systems, adhere to strict ethical practices, and ensure complete transparent operations across the entire group, thereby meeting or exceeding global benchmarks for responsible business conduct.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-8 text-center font-mono text-3xl font-bold text-primary md:text-4xl"
  >
    Leadership
  </motion.h2>

  <div className="grid gap-8 md:grid-cols-2 md:gap-6">
    {/* Vineet Gupta */}
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="flex flex-col items-center gap-4 p-6 text-center shadow-sm"
    >
      {/* CAMBIO: Se hizo la imagen más pequeña en móvil (h-60 w-60) y más grande en desktop (md:h-80 md:w-80) */}
      <div className="relative h-60 w-60 overflow-hidden rounded-full ring-2 ring-primary/20 md:h-80 md:w-80">
        <Image src="/vineet.png" alt="Vineet Gupta portrait" fill className="object-cover" />
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-foreground">Vineet Gupta</h3>
        <p className="text-sm font-medium text-primary">Director</p>
        <p className="text-sm text-muted-foreground">
          Director is ICWA and heads finance department with more than 30 years of experience. Government compliances / Bank dealings are core areas of his strength. He is leading team for diversification into medical device field. A member of the CII Uttarakhand Chapter, Mr Gupta has been awarded with the Udyog Rattan Award to honour his outstanding contribution to the development of the Industry. He is also the chairman of the Blind Judo Association of India.
        </p>
      </div>
    </motion.article>

    {/* Pranav Gupta */}
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.05 }}
      className="flex flex-col items-center gap-4 p-6 text-center shadow-sm"
    >
      {/* CAMBIO: Se hizo la imagen más pequeña en móvil (h-60 w-60) y más grande en desktop (md:h-80 md:w-80) */}
      <div className="relative h-60 w-60 overflow-hidden rounded-full ring-2 ring-primary/20 md:h-80 md:w-80">
        <Image src="/pranav.png" alt="Pranav Gupta portrait" fill className="object-cover" />
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-foreground">Pranav Gupta</h3>
        <p className="text-sm font-medium text-primary">Director</p>
        <p className="text-sm text-muted-foreground">
          The Director of GB is a BMS graduate with a brief experience in corporate law from National Law University, Bombay. The production and expansion activities of GB have come under his purview and area of expertise for the last four years. Being an active member of YI (CII) and a recipient of the International Award for Young People, and he is also a social entrepreneur who is currently heading the NGO, Blind Judo Association of India (BJAI).
        </p>
      </div>
    </motion.article>
  </div>
</section>
    </div>
  )
}
