import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Weather-Now</title>
        <meta name="description" content="A beautiful and lightweight weather app." />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☁️</text></svg>" />
      </head>
      <body>
        <nav className="navbar">
          <div className="nav-brand">
            <Link href="/" className="nav-logo">Weather-Now</Link>
          </div>
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Me</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}