import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLI",
};

export default function CliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
