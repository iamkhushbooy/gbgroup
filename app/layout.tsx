// import type React from "react"
// import { GeistSans, GeistMono } from "geist/font"
// import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { BackgroundSlideshow } from "@/components/Background-slideshow"
// import { title } from "process"
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
//           <div className="overflow-hidden">
//             <BackgroundSlideshow />
//             {/* <Navbar /> */}
//             <main className="">{children}</main>
//             {/* <Footer /> */}
//           </div>

//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

// export const metadata = {
//   title: 'GBGROUP'
// }

import type React from "react"
import { GeistSans, GeistMono } from "geist/font"

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: "GBGROUP",
}