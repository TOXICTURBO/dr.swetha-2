import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="cinema-top" />
        {children}
        <div className="cinema-bottom" />
      </body>
    </html>
  )
}