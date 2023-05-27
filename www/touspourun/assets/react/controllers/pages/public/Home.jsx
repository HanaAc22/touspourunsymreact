import React from "react";
import "../../../../styles/app.css";
import "../../../../styles/homeStyle.css";
import { WhoWeAre } from "../../components/public/WhoWeAre";
import { CardHome } from "../../components/public/CardHome";

export default function Home() {
  return (
    <div className="containerHome">
      <WhoWeAre />
      <CardHome />
    </div>
  );
}
