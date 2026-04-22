import "./globals.css";

export const metadata = {
  title: "JAKAREYA AHMED — Full Stack Developer",
  description:
    "Portfolio of Jakareya Ahmed — Full Stack Developer. Next.js, Node.js, Cloud.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-void text-paper antialiased font-[family-name:var(--font-display)]">
        <div className="grain min-h-screen">{children}</div>
      </body>
    </html>
  );
}
