import React from "react";
import { Metadata } from "next";

import "../styles/index.scss";
import Menu from "../components/common/Menu";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "mySum",
  description: "Welcome to mySum!",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>{children}</body>
      <Menu />
    </html>
  );
}
