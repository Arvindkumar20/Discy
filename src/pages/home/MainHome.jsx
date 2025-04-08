import React from "react";
import TabMenu from "./layout/TabMenu";
import QuestionCard from "./QuestionCard";

export default function MainHome(props) {
  return (
    <div className="lg:mx-auto mx-5 lg:w-full w-auto">
      <TabMenu />

      <div>{props.children}</div>
    </div>
  );
}
