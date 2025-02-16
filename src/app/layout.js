export const metadata = {
    title: 'Hello World',
    description: 'Hello World com Next.js 13',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="pt-BR">
        <body>{children}</body>
      </html>
    );
  }
  