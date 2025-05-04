import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Docs Encontrados',
  description: 'Sistema para facilitar a devolução de documentos perdidos.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <nav style={{ padding: '10px', background: '#f0f0f0' }}>
          <Link href="/">Início</Link> |{' '}
          <Link href="/login">Login</Link> |{' '}
          <Link href="/lost-documents">Cadastrar Documento Perdido</Link> |{' '}
          <Link href="/found-documents">Documentos Encontrados</Link> |{' '}
          <Link href="/match">Possíveis Matches</Link> |{' '}
          <Link href="/support-point">Pontos de Apoio</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}

