export const metadata = {
  title: "Purpefct Match",
  description: "Find your purfect puppy for you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
