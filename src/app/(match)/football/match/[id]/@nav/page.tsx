import LiveComment from "@/components/football/matches/Live-Comment";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-5">
      <LiveComment
        type={"Red Card"}
        minute={"61"}
        title={
          "Red card Gizo Mamageishvili (Iberia 1999) is shown the red card for violent conduct."
        }
        match=""
      />
      <LiveComment
        type={"Goal"}
        minute={"54"}
        title={
          "Goal! Malmö 1, Iberia 1999 0. Taha Ali (Malmö) right footed shot. Assisted by Lasse Berg Johnsen."
        }
        match=""
      />
        <LiveComment
          type={"Substitution"}
          minute={"45"}
          title={"Substitution, Malmö. Nils Zätterström replaces Johan Karlsson."}
          match=""
        />
        <LiveComment
          type={""}
          minute={"45"}
          title={"Second Half begins Malmö 0, Iberia 1999 0."}
          match=""
        />
      <LiveComment
        type={""}
        minute={"46"}
        title={"First Half ends, Malmö 0, Iberia 1999 0."}
        match=""
      />
      <LiveComment
        type={""}
        minute={"44"}
        title={"Fourth official has announced 1 minutes of added time."}
        match=""
      />
      <LiveComment
        type={"Yellow Card"}
        minute={"33"}
        title={
          "Lasse Berg Johnsen (Malmö) is shown the yellow card for a bad foul."
        }
        match=""
      />
      <LiveComment
        type={""}
        minute={""}
        title={"First Half begins."}
        match=""
      />
    </div>
  );
}
