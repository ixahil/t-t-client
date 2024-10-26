import SiteFooter from "@/components/footer";
import { SiteHeader } from "@/components/header";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 min-h-screen">{children}</main>
      <SiteFooter />
    </>
  );
}
