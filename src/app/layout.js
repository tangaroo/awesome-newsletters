"use client";
import "../../styles/styles.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Awesome Newletters</title>
      <link rel="icon" href="/favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
