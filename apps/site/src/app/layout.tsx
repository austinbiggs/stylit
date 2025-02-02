import './global.css';

export const metadata = {
  title: 'Stylit | Dead simple CSS-in-JS style React primitives for (S)CSS modules',
  description: 'Dead simple CSS-in-JS style React primitives for (S)CSS modules',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <meta name="apple-mobile-web-app-title" content="Stylit" />
    </head>
    <body>{children}</body>
    </html>
  );
}
