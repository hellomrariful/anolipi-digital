import "./globals.css";

export const metadata = {
  title: "Anolipi Digital LLC",
  description: "An all in one digital solution",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat text-zinc-100"
        suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
