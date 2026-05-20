import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NorthStar Property Maintenance | Manchester Repair Services",
  description:
    "Property repair and maintenance for landlords, HMO owners, letting agents, and homeowners across Manchester.",
  metadataBase: new URL("https://northstarmaintenance.co.uk"),
  openGraph: {
    title: "NorthStar Property Maintenance",
    description:
      "Manchester repair request service with landlord maintenance packages and repair tracker preview.",
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
