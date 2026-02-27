import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Weather App</title>
        <meta name="description" content="A beautiful and lightweight weather app." />
      </head>
      <body>
        <nav className="navbar">
          <div className="nav-brand">
            <Link href="/" className="nav-logo">Weather</Link>
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