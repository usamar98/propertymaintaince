import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NorthStar Property Maintenance | Manchester Repair Services",
  description:
    "Responsive demo website for UK property maintenance companies, landlord repairs, HMO maintenance, and letting-agent repair contractors.",
  metadataBase: new URL("https://northstarmaintenance.co.uk"),
  openGraph: {
    title: "NorthStar Property Maintenance",
    description:
      "Manchester repair request website demo with landlord maintenance packages and repair tracker preview.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
