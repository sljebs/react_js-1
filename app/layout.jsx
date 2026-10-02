import "./globals.css";

export const metadata = {
  title: "Products",
  description: "Fake Store Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}