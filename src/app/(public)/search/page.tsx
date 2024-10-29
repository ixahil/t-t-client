"use client";
import SectionLayout from "@/components/layouts/section-layout";
import { Card, CardContent } from "@/components/ui/card";
import { searchList } from "@/config/data";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const filteredList = searchList.filter((item) => {
    const lowerQuery = query?.toLowerCase() as string;
    const byCity = item.destination.toLowerCase().includes(lowerQuery);
    const byName = item.title.toLowerCase().includes(lowerQuery);
    return byCity || byName;
  });

  if (!filteredList) {
    <SectionLayout title={`Search Results for ${query}`}>
      <p>No Result Found</p>
    </SectionLayout>;
  }

  return (
    <SectionLayout title={`Search Results for ${query}`}>
      <div className="grid grid-cols-5 gap-4">
        {filteredList.map((item, idx) => (
          <Card key={item.title + idx}>
            <CardContent className="relative rounded-lg overflow-hidden flex aspect-square items-center justify-center shadow-lg transition-transform transform hover:scale-105">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                className="object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="text-sm">{item.package}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default SearchPage;
