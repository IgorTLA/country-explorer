import "@/styles/globals.scss";
import Template from "@/domain/template/Template";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Template>{children}</Template>;
}
