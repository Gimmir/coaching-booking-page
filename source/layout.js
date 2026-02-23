import './globals.css'

export const metadata = {
  title: 'Athletic Way',
  description: 'Redeviens athlétique en 90 jours',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
