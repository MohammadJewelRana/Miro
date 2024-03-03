import React, { useEffect } from "react";
import useWork from "../../Hooks/useWork";
import Loading from "../../Shared/Loading";
import Card from "./Card";
 


const WorkManage = () => {
  const [workAll, isLoading] = useWork();
  if (isLoading) {
    return <Loading></Loading>;
  }
  const brainstromingData = workAll.filter(
    (item) => item.title === "Brainstorming"
  );
 
  return (
    <div className="md:max-w-7xl " >   
      <Card
        heading={"Built for the way you work"}
        firstData={brainstromingData}
        data={workAll}
      ></Card>
    </div>
  );
};

export default WorkManage;
