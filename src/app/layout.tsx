import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Método Fontoura™ | Desbloqueie a Frequência da Virada",
  description: "Descubra o Método Fontoura™, uma sequência de ativações criada por Elyas Fontoura para quem está pronto para assumir protagonismo, presença e prosperidade. Não é para todos. É para os inevitáveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrrat.variable} antialiased font-montserrat box-border flex flex-col`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
