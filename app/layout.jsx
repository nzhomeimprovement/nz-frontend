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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://nzhomeimprovement.com/#business",
  "name": "NZ Home Improvement",
  "url": "https://nzhomeimprovement.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://nzhomeimprovement.com/img/logo-color.png"
  },
  "image": "https://nzhomeimprovement.com/img/full/09.jpg",
  "description": "NZ Home Improvement is a trusted general contractor in Stamford CT offering kitchen remodeling, bathroom renovation, basement finishing, home additions, and commercial construction services.",
  "telephone": "+12035247974",
  "email": "build@nzhomeimprovement.net",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1372 Summer St",
    "addressLocality": "Stamford",
    "addressRegion": "CT",
    "postalCode": "06905",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.0534,
    "longitude": -73.5387
  },
  "areaServed": [
    { "@type": "City", "name": "Stamford", "addressRegion": "CT" },
    { "@type": "City", "name": "Greenwich", "addressRegion": "CT" },
    { "@type": "City", "name": "Norwalk", "addressRegion": "CT" },
    { "@type": "City", "name": "Darien", "addressRegion": "CT" }
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/n.z_homeimprovement",
    "https://www.facebook.com/NZHOMEIMPROVEMENT"
  ]
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <div className="wrapper">{children}</div>
        <Footer />
        <ScrollTop />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2TBDRPSYBY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-2TBDRPSYBY');`}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","xazhf13iv4");`}
        </Script>

        {/* Tawk.to live chat */}
        <Script id="tawkto-init" strategy="afterInteractive">
          {`var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/6a7b241673934d1d3e07b855/1jvog9uib';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`}
        </Script>
      </body>
    </html>
  );
}
