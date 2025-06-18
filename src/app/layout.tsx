import { notoSans } from "@/fonts";
import "@/styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <title>Country Explorer</title>
      </head>
      <body suppressHydrationWarning className={notoSans.className}>
        {children}
      </body>
    </html>
  );
}
