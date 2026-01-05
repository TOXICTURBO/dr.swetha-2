import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="cinema-bars-top" />
        {children}
        <div id="cinema-bars-bottom" />
      </body>
    </html>
  )
}
