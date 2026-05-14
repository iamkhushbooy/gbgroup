"use client"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import { useState, useEffect, useRef } from "react"
// import { ClientsMarquee } from "@/components/ClientsMarquee "
// import { HeroCarousel } from "@/components/Hero"

// export default function HomePage() {
//   const textSequence = ["Welcome To GB Group"]
//   const [text, setText] = useState("")
//   const [isDeleting, setIsDeleting] = useState(false)
//   const [loopNum, setLoopNum] = useState(0)
//   const typingSpeed = 150
//   const deletingSpeed = 75
//   const pauseDuration = 2000


//   const typingTimeout = useRef<NodeJS.Timeout | null>(null)

//   useEffect(() => {
//     const handleTyping = () => {
//       const i = loopNum % textSequence.length
//       const fullText = textSequence[i]

//       const updatedText = isDeleting
//         ? fullText.substring(0, text.length - 1)
//         : fullText.substring(0, text.length + 1)
//       setText(updatedText)


//       if (!isDeleting && updatedText === fullText) {
//         typingTimeout.current = setTimeout(() => {
//           setIsDeleting(true)
//         }, pauseDuration)

//       } else if (isDeleting && updatedText === "") {
//         setIsDeleting(false)
//         setLoopNum(loopNum + 1)
//       }
//     }


//     typingTimeout.current = setTimeout(
//       handleTyping,
//       isDeleting ? deletingSpeed : typingSpeed
//     )

//     return () => {
//       if (typingTimeout.current) {
//         clearTimeout(typingTimeout.current)
//       }
//     }
//   }, [text, isDeleting, loopNum])

//   return (
    // <>
      {/* <HeroCarousel />
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 px-8 ">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="max-w-[700px] text-lg text-foreground md:text-xl text-justify"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              className="flex h-20 items-center font-mono text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl lg:text-6xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {text}
              <motion.span
                className="ml-2 h-12 w-1.5 bg-primary"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.h1>

            <p>
              Manufacturers of Railway, Automotive, and Medical Equipment. Our mission is the relentless pursuit of excellence, setting new benchmarks in sectors vital to India's progress. The GB Group, which includes{" "}
              <motion.span
                className="relative inline-block font-semibold text-primary cursor-pointer"

                transition={{ duration: 0.2 }}
              >
                <motion.span className="absolute inset-0 bg-primary/10 rounded px-1 -z-10" />
                G.B. Equipment Systems Limited
              </motion.span>{" "}
              &{" "}
              <motion.span
                className="relative inline-block font-semibold text-primary cursor-pointer"

                transition={{ duration: 0.2 }}
              >
                <motion.span className="absolute inset-0 bg-primary/10 rounded px-1 -z-10" />
                G.B. Herbs Private Limited
              </motion.span>{" "}
              is committed to developing and directing CSR policies toward its employees, customers, suppliers, and
              the environment. The company retains its existing and new customers by delivering quality services,
              ensuring a safe and healthy work environment for its employees. With innovative technologies, ethical
              business practices, and ensuring transparency, accountability, & trust, the company also minimizes
              environmental impacts. The GB Group shares a part of its profit with the underprivileged group and
              impacted many lives positively.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]"
          >
            <Image
              src="/hero/f.jpg"
              alt="Late Amrit Lal Gupta"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </section>
        <section className="container py-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-center font-mono text-3xl font-bold text-primary md:text-4xl"
          >
            WHY US?
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-lg bg-card p-6 shadow-md"
            >
              <h3 className="mb-4 font-mono text-2xl font-semibold text-primary">Our Values</h3>
              <p className="text-foreground">
                At the heart of our success is our unwavering commitment to our values. We believe in creating long-term
                value for our stakeholders while also promoting social and environmental sustainability. We strive to be a
                responsible corporate citizen, investing in the communities where we operate and supporting initiatives
                that promote education, healthcare, and other social causes. We aim to continue to innovate and explore
                new avenues of growth while remaining true to the values. We are committed to making a positive difference
                in the world by standing together with the community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="rounded-lg bg-card p-6 shadow-md"
            >
              <h3 className="mb-4 font-mono text-2xl font-semibold text-primary">Our Purpose</h3>
              <ul className="list-disc space-y-2 pl-5 text-foreground">
                <li>Provide innovative and reliable solutions.</li>
                <li>Foster a culture of integrity and responsibility.</li>
                <li>Contribute to the growth and development of society.</li>
                <li>Focus on excellence to exceed customer expectations.</li>
                <li>Pioneer new solutions to drive progress and change in the industry.</li>
                <li>Value unity and collaboration with stakeholders to achieve common goals.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CSR section */}
        {/* <section className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-8 flex items-center gap-4">
              <motion.h2 className="font-mono text-5xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
                CSR
              </motion.h2>
              <motion.div
                className="h-px flex-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.h3
                className="font-mono text-2xl font-semibold text-primary md:text-3xl"
                whileHover={{ scale: 1.05 }}
              >
                CORPORATE SOCIAL RESPONSIBILITY
              </motion.h3>
            </div>
          </motion.div> */}

          {/* CSR Content Rows */}
          {/* <div className="flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] lg:order-2"
              >
                <Image
                  src="/images/csr.png"
                  alt="Corporate Social Responsibility - Earth"
                  fill
                  className="object-cover hover:scale-110 hover:brightness-110 transition-all duration-700"
                />
              </motion.div>
              <motion.div className="space-y-6 lg:order-1" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                <p className="text-justify text-lg leading-relaxed text-foreground">
                  The GB Group is committed towards developing and directing CSR policies towards our employees,
                  customers, suppliers and the environment. The company retains its existing and new customers by
                  delivering quality services, ensuring safe and healthy working conditions for its employees,
                  minimizing adverse impacts on the environment by employing innovative technologies, following ethical
                  business practices, ensuring transparency, accountability, trust but most importantly promoting
                  equality among all its employees, suppliers, and customers. The company sets aside a part of its
                  profits each year and has influenced the lives of many underprivileged people.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] lg:order-1"
              >
                <Image
                  src="/images/csr1.png"
                  alt="CSR Environmental Activity - Tree Planting"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                />
              </motion.div>
              <motion.div className="space-y-4 lg:order-2" whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
                <p className="text-justify text-lg leading-relaxed text-foreground">
                  As a continuous effort to expand its current operations for social responsibility, the GB Group is
                  running non-governmental organizations known as "DRDS" (Dev Bhoomi Rural Development Society), "ESDA"
                  (Education and Sports Development Association), and the "Blind Judo Association." These NGOs are run
                  by dynamic panel members who aim to promote education, health, family welfare, environmental
                  awareness, sanitation, sports, and the empowerment of women and other marginalized groups.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] lg:order-2"
              >
                <Image
                  src="/images/csr2.png"
                  alt="CSR Community Activity"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                />
              </motion.div>
              <motion.div className="space-y-4 lg:order-1" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                <p className="text-justify text-lg leading-relaxed text-foreground">
                  The GB Group of Companies understands the importance of retaining customers, ensuring high work
                  standards for its employees, maintaining equality, helping the backward sections of society, and
                  preserving the environment for future generations. This initiative aims to lead inclusive, equitable,
                  and sustainable growth, which is crucial for any country in the long run.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] lg:order-1"
              >
                <Image
                  src="/images/csr3.png"
                  alt="CSR Environmental Activity - Tree Planting"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                />
              </motion.div>
              <motion.div className="space-y-4 lg:order-2" whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
                <p className="text-justify text-lg leading-relaxed text-foreground">
                  IMC of ITI, Thatyur, has been set up in PPP mode with the State of Uttarakhand to assist in improving
                  the standard of vocational training and skill development in the country as a whole. The company is
                  also registered under ISO standards ISO 9001:2015 (Quality Management Systems), ISO 14001:2015
                  (Environmental Management System), and OHSAS 18001:2015 (Occupational Health and Safety Management
                  System).
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section> */}

        {/* Gallery Section */}
        {/* <section className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <motion.h2 className="mb-4 text-center font-mono text-4xl font-bold text-primary md:text-5xl" whileHover={{ scale: 1.05 }}>
              GALLERY
            </motion.h2>
            <motion.div
              className="mx-auto mb-8 h-1 w-32 bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="mx-auto max-w-4xl bg-[#2d7a7a] p-6 text-center text-lg text-white md:text-xl rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              An active part of various national & state-organised CSR activities for the betterment of the entire community.
            </motion.p>
          </motion.div>

          <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
            {/* Gallery Items */}
            {/* <motion.div whileHover={{ scale: 1.02 }} className="relative h-[350px] overflow-hidden">
              <Image src="/gallery/1.png" alt="Tree Plantation" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#2d7a7a]/80 backdrop-blur-sm p-4 transition-colors hover:bg-[#2d7a7a]">
                <p className="font-semibold text-white text-sm">Mr Pranav Gupta at Uttarakhand pharma and healthcare conclave and samman 2025</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-[350px] overflow-hidden">
              <Image src="/gallery/2.png" alt="Vijay Bahuguna with VK Gupta" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#2d7a7a]/80 backdrop-blur-sm p-3 transition-colors hover:bg-[#2d7a7a]">
                <p className="text-sm font-semibold text-white">Mr Vineet Kumar Gupta at Uttarakhand pharma and healthcare conclave and samman 2025</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-[350px] overflow-hidden">
              <Image src="/gallery/abhinav.png" alt="Abhinav Kumar with VK Gupta" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#2d7a7a]/80 backdrop-blur-sm p-3 transition-colors hover:bg-[#2d7a7a]">
                <p className="text-sm font-semibold text-white">Abhinav Kumar (DGP Uttarakhand)</p>
                <p className="text-xs text-white/90">VK Gupta (MD The GB house)</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-[350px] overflow-hidden">
              <Image src="/gallery/ma.png" alt="Student Running in Marathon" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#2d7a7a]/80 backdrop-blur-sm p-3 transition-colors hover:bg-[#2d7a7a]">
                <p className="text-sm font-semibold text-white">Student Running in Marathon</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-[350px] overflow-hidden">
              <Image src="/gallery/treeP.png" alt="GB Employees Tree Plantation" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#2d7a7a]/80 backdrop-blur-sm p-3 transition-colors hover:bg-[#2d7a7a]">
                <p className="text-sm font-semibold text-white">GB Employees Tree Plantation</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-[350px] overflow-hidden">
              <Image src="/gallery/vkgupta.png" alt="GB Group Team Meeting" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#2d7a7a]/80 backdrop-blur-sm p-3 transition-colors ">
                <p className="text-sm font-semibold text-white">Vijay Bahuguna (Former CM of Uttarakhand)</p>
                <p className="text-xs text-white/90">VK Gupta (MD, The GB House)</p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <motion.h2 className="mb-4 text-center font-mono text-4xl font-bold text-primary md:text-5xl" whileHover={{ scale: 1.05 }}>
              OUR CERTIFICATE
            </motion.h2>
            <motion.div
              className="mx-auto mb-8 h-1 w-62 bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative overflow-hidden rounded-lg shadow-2xl"
              >
                <Image
                  src="/certificates/c1.png"
                  alt="IRIS Certification - Hydraulic Dampers"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain hover:brightness-110 transition-all duration-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="relative overflow-hidden rounded-lg shadow-2xl "
              >
                <Image
                  src="/certificates/c2.png"
                  alt="IRIS Certification Enclosure - Hydraulic Dampers"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain hover:brightness-110 transition-all duration-500"
                />

              
              </motion.div>

                                  
            </div>
          </motion.div>
        </section>

        
  <section className="container py-8">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
  >
    <motion.h3
      className="mb-4 text-center font-mono text-2xl font-bold text-primary md:text-3xl"
      whileHover={{ scale: 1.05 }}
    >
      CORPORATE DOCUMENTS
    </motion.h3>

    <motion.div
      className="mx-auto mb-8 h-1 w-45 bg-primary"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />
  </motion.div>

  <div className="mx-auto max-w-3xl space-y-6"> */}
  {/* Document 1 */}
    {/* <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{ y: -4 }}
  className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-lg"
>
  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 hover:opacity-100 transition-opacity" />

  <div className="relative z-10 flex items-center justify-between">
    <div>
      <h4 className="font-semibold text-lg text-foreground">
        Notice of Annual General Meeting (AGM)
      </h4>
      <p className="text-sm text-muted-foreground">
        Official AGM notice document
      </p>
    </div>

    <a
      href="/documents/notice-of-AGM.pdf"
      target="_blank"
      className="text-primary font-semibold"
    >
      View PDF →
    </a>
  </div>
</motion.div> */}

  {/* Document 2 */}
    {/* <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{ y: -4 }}
  className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-lg"
>
  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 hover:opacity-100 transition-opacity" />

  <div className="relative z-10 flex items-center justify-between">
    <div>
      <h4 className="font-semibold text-lg text-foreground">
        Annual Return
      </h4>
      <p className="text-sm text-muted-foreground">
        Filed under the Companies Act
      </p>
    </div>
    <a
      href="/documents/annual-return.pdf"
      target="_blank"
      className="text-primary font-semibold "
    >
      View PDF →
    </a>
  </div>
</motion.div>
  </div>
</section>

        <ClientsMarquee />
      </div> */}


      
 
{/* 
    </> 
  )
} */}




import Image from "next/image"

export default function HomePage() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-start justify-center overflow-auto">
      <Image
        src="/maintenance.png"
        alt="Maintenance"
        width={1920}
        height={1080}
        priority
        className="w-full h-auto"
      />
    </div>
  )
}