"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Globe, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Site footer"
      className="mt-16 bg-header-background text-foreground"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="contact-heading" className="py-10 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start text-center lg:text-left">
            <motion.div
              className="flex flex-col gap-6 items-center lg:items-start"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                <div className="rounded-md bg-muted/40 p-3">
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <address className="not-italic">
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="mt-1 block text-pretty text-lg font-medium leading-relaxed text-primary hover:opacity-80 transition-opacity">
                    C-11/2/2, Industrial Area, Selaqui,
                    <br />
                    Dehradun-248197
                  </p>
                </address>
              </div>

              <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                <div className="rounded-md bg-muted/40 p-3">
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <span className="mt-1 block text-pretty text-lg font-medium text-primary">+91 7831800800</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-6 items-center lg:items-start"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                <div className="rounded-md bg-muted/40 p-3">
                  <Globe className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <Link
                    href="https://www.gbgroup.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-pretty text-lg font-medium text-primary hover:opacity-80 transition-opacity"
                  >
                    www.gbgroup.in
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                <div className="rounded-md bg-muted/40 p-3">
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="mt-1 block text-pretty text-lg font-medium text-primary hover:opacity-80 transition-opacity">
                    marketing@gbgroup.in
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="flex flex-col gap-4 items-center lg:justify-start">
              <div className="p-4">
                <img src="/QRcode.png" alt="QR Code for GB Group contact information" className="h-36 w-36" />
              </div>
              <p className="text-sm text-muted-foreground">Scan to connect with us</p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Bottom bar */}
      <div>
        <div
          className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 lg:flex-row 
          items-center justify-center text-center md:text-left md:justify-between border-t"
          >
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm text-muted-foreground">© 2025 GB Group. All rights reserved.</p>
          </div>
          <div>
             <p className="text-sm text-muted-foreground">
              Developed and Designed by{" "}
              <Link
                href="https://octavision.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Octavision
              </Link>
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </motion.footer>
  )
}
