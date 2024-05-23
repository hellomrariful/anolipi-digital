import "./globals.css";

export const metadata = {
  title: "Anolipi Digital LLC",
  description: "An all in one digital solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body lassName="font-montserrat bg-quaternary text-zinc-100"
        suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
