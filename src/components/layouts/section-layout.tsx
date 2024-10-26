import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
  view?: {
    url: string;
    label: string;
  };
};

const SectionLayout = ({ title, children, view }: Props) => {
  return (
    <section className="py-16 max-w-6xl mx-auto space-y-8">
      <div className="space-y-4">
        {title && <h2 className="text-5xl font-bold">{title}</h2>}
        {view && (
          <Link
            href={view.url}
            className="text-primary font-bold flex items-center gap-2"
          >
            {view.label} <ChevronRight />
          </Link>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default SectionLayout;