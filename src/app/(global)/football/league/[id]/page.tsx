import Navigation from "@/components/football/league/Navigation";
import TeamsNavbar from "@/components/football/league/TeamsNavbar";
import NewsContainer from "@/components/news/NewsContainer";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Navigation
          title="Laliga"
          image="http://localhost:8080/image/football/league/laliga/4.png"
        />
      </div>
      <div>
        <TeamsNavbar />
      </div>
   <div className="px-24 mt-20">
        <NewsContainer/>
      </div>
    </div>
  );
}
