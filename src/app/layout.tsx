import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans", subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaveSurge - Budgeting & Expense Tracking",
  description: "SaveSurge helps you track expenses, create budgets, and gain insights into your financial health. Securely connect your bank accounts and take control of your money.",
  keywords: "budgeting, expense tracking, finance app, money management, personal finance, bank integration",
  authors: {name: "SaveSurge", url: "https://savesurge.app"},
  openGraph: {
    title: "SaveSurge - Smarter Budgeting & Expense Tracking",
    description: "Manage your finances with SaveSurge. Connect your bank, track expenses, and stay within budget effortlessly.",
    url: 'https://savesurge.app',
    type: 'website',
    images: [
      {
        url: 'https://savesurge.app/og-image.png',
        width: 800,
        height: 600,
      }
    ],
  }
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <title></title>
  </head>
  <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  >
  {children}
  </body>
  </html>);
}
