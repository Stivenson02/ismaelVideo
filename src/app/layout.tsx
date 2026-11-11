import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ismael Studio · Historias en movimiento',
  description: 'Estudio local para escribir, animar y producir historias breves de Ismael.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
