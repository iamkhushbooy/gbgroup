"use client"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 px-8 ">
      <section className="container mx-auto max-w-8xl grid items-center gap-6 pb-8 pt-6 md:py-10 lg:grid-cols-2 lg:gap-12 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-4"
        >
          <h1 className="font-mono text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="max-w-[700px] text-lg text-foreground md:text-xl">
            We'd love to hear from you! Reach out to us for any inquiries or collaborations.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-foreground">
            <p>
              <strong>Email:</strong> marketing@gbgroup.in
            </p>
            <p>
              <strong>Phone:</strong> +91 7831800800
            </p>
            <p>
              <strong>Address:</strong>C-11/2/2, Industrial Area, Selaqui, Dehradun-248197
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md rounded-lg bg-card p-6 shadow-md  
          md:mx-20 md:max-w-lg"
        >
          <h2 className="mb-6 text-center font-mono text-2xl font-bold text-primary">Send us a message</h2>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Subject of your message" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="w-full py-20 relative">
        <div className="mx-auto md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4">
              Find Us{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#208d8e] to-[#208d8e]">Here</span>
            </h3>
            <p className="text-white/70">Visit our office for a face-to-face consultation</p>
          </div>

          <div className="bg-black/30 backdrop-blur-2xl border border-white/20 overflow-hidden">
            <div className="p-0">
              <div className="h-150 ">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6884.888096043861!2d77.85087214632416!3d30.366746349051116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s11%2F2%2F2%2C%20Industrial%20Area%2C%20Selaqui%2C%20Dehradun-248197!5e0!3m2!1sen!2sin!4v1759122675477!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}  

