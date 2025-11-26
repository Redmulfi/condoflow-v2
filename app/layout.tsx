export const metadata = { title: 'CondoFlow v2', description: 'Multi-tenant property management' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: '20px', fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
