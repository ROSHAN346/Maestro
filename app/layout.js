import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import HeroSection from "@/components/herosection";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maestro - AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header></Header>

            <main className="min-h-screen">{children}</main>

            <Toaster></Toaster>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Branding */}
    <div>
      <h2 className="text-xl font-bold text-white mb-4">Maestro</h2>
      <p className="text-sm">Empowering your business with smart tools and scalable infrastructure.</p>
    </div>

    {/* Product Links */}
    <div>
      <h3 className="text-white font-semibold mb-3">Product</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Features</a></li>
        <li><a href="#" className="hover:underline">Pricing</a></li>
        <li><a href="#" className="hover:underline">Integrations</a></li>
        <li><a href="#" className="hover:underline">API</a></li>
      </ul>
    </div>

    {/* Company Links */}
    <div>
      <h3 className="text-white font-semibold mb-3">Company</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
        <li><a href="#" className="hover:underline">Blog</a></li>
        <li><a href="#" className="hover:underline">Press</a></li>
      </ul>
    </div>

    {/* Support Links */}
    <div>
      <h3 className="text-white font-semibold mb-3">Support</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Help Center</a></li>
        <li><a href="#" className="hover:underline">Contact Us</a></li>
        <li><a href="#" className="hover:underline">Status</a></li>
        <li><a href="#" className="hover:underline">Terms & Privacy</a></li>
      </ul>
    </div>
  </div>

  {/* Divider */}
  <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} Maestro Inc. All rights reserved.
  </div>
</footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
