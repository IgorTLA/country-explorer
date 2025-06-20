import { notoSans } from "@/fonts";
import { CountryListProvider } from "@/hooks/useCountryList";
import { FavoritesProvider } from "@/hooks/useFavorites";
import { ToastProvider } from "@/hooks/useToast";
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
        <ToastProvider>
          <CountryListProvider>
            <FavoritesProvider>{children}</FavoritesProvider>
          </CountryListProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
