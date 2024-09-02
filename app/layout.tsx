import type { Metadata } from "next";
import { Gideon_Roman, Lora, Licorice, Montserrat } from "next/font/google";

import "./globals.css";

const gideonRoman = Gideon_Roman({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-gideonRoman",
});

const lora = Lora({
    subsets: ["latin"],
    weight: ["500", "700"],
    variable: "--font-lora",
});

const licorice = Licorice({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-licorice",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Pousada Velho Chico",
    description:
        "Descubra a Pousada Velho Chico, localizada na charmosa Serra da Canastra, em Minas Gerais. Experimente a autêntica vida rural e conheça de perto o processo artesanal de fabricação do famoso Queijo Canastra. Relaxe em meio às belezas naturais da região, explore trilhas, cachoeiras e aproveite momentos únicos em uma pousada que ainda preserva as tradições e atividades de fazenda. Venha vivenciar a tranquilidade e o charme do interior de Minas Gerais.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${gideonRoman.variable} ${lora.variable} ${licorice.variable} ${montserrat.variable} font-lora`}
            >
                {children}
            </body>
        </html>
    );
}
