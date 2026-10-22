import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'MealFit MX | Tu comida, tu súper', description: 'Prototipo de planificación alimenticia y compras mexicanas' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es-MX"><body>{children}</body></html>; }