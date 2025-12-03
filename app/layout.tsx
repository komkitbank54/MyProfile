import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ikkist",
    description: "Developed by Komkit Nitinuntouchchaporn",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${vt323.className} antialiased`}
            >
                <main className="">
                    {/* <Navbar /> */}
                    {children}
                </main>
            </body>
        </html>
    );
}
