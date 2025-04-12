import React from "react";
import TabMenu from "./layout/TabMenu";
import QuestionCard from "./QuestionCard";
import LeftSidebar from "./layout/LeftSidebar";
import RightSidebar from "./layout/RightSideBar";

export default function MainHome({children}) {
  return (
    <div className="md:flex flex-1 items-start justify-between">
        <div className="lg:flex hidden">
          <LeftSidebar />
        </div>
        <div className="lg:w-2/3 w-full">
          {" "}
          <div className="lg:mx-auto mx-5 lg:w-full w-auto">
      <TabMenu />

      <div>{children}</div>
    </div>
        </div>
        <RightSidebar />
      </div>
  );
}
