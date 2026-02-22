import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  hideHeader = false,
  hideFooter = false,
}) => {
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col font-sans selection:bg-cyan-500/30">
      {!hideHeader && <Header />}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};
