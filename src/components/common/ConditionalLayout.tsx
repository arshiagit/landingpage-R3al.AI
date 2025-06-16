"use client";

import { usePathname } from 'next/navigation';
import NavbarMenu from './Navbar';
import Footer from './Footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isPitchPage = pathname === '/pitch';

  return (
    <>
      {!isPitchPage && <NavbarMenu />}
      {children}
      {!isPitchPage && <Footer />}
    </>
  );
} 