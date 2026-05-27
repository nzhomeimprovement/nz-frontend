import "./globals.css";
import Script from "next/script";
import { Raleway } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nzhomeimprovement.com"),
  title: {
    default: "NZ Home Improvement | Renovation & Remodeling Stamford CT",
    template: "%s | NZ Home Improvement",
  },
  description:
    "NZ Home Improvement offers professional home renovation and remodeling services in Stamford, CT. Kitchen, bathroom, basement remodeling. Get free estimates.",
  keywords: [
    "home improvement Stamford CT",
    "home renovation Stamford",
    "kitchen remodeling Connecticut",
    "bathroom remodeling Stamford",
    "basement finishing CT",
    "general contractor Stamford",
    "NZ Home Improvement",
    "Fairfield County contractor",
    "Westchester remodeling",
  ],
  authors: [{ name: "NZ Home Improvement" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NZ Home Improvement",
    url: "https://nzhomeimprovement.com",
    title: "NZ Home Improvement | Renovation & Remodeling Stamford CT",
    description:
      "Professional home renovation and remodeling in Stamford, CT. Kitchen, bathroom, basement, and exterior remodeling. Free estimates.",
    images: [{ url: "/img/logo-color.png", width: 400, height: 200, alt: "NZ Home Improvement" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NZ Home Improvement | Renovation & Remodeling Stamford CT",
    description: "Professional home renovation and remodeling in Stamford, CT.",
  },
  verification: { google: "zrrQM76TKB8aglJ-1jlFL8-dF9THamUxomFiIt-1wSw" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.variable}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
      </head>
      <body>
        <Header />
        <div className="wrapper">{children}</div>
        <Footer />
        <ScrollTop />

        {/* Google Analytics — deferred, never blocks rendering */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JF9Y6YNKSK"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-JF9Y6YNKSK');`}
        </Script>
      </body>
    </html>
  );
}
