export const metadata = {
  title: "Pupfect Match",
  description: "Find your purrfect puppy for you!",
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
