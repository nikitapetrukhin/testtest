export const metadata = {
  title: 'React',
  description: 'Mastering React',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
