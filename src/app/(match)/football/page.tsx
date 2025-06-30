import Header from "@/components/football/Header";
import NewsContainer from "@/components/news/NewsContainer";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />

      <div className="px-24 mt-20">
       <NewsContainer />
      </div>
    </div>
  );
}
