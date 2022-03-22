import React from "react";

import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex flex-col h-screen justify-between bg-gray-200">
      <Header />
      <main className="py-12 px-4" >
        {children}
      </main>
      <Footer />
    </div>
  );
}
