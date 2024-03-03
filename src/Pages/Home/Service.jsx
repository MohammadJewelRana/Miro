import React from "react";
import useService from "../../Hooks/useService";
import Loading from "../../Shared/Loading";
import Card from "./Card";

const Service = () => {
  const [serviceAll, serviceLoading] = useService();
  if (serviceLoading) {
    return <Loading></Loading>;
  }

//   console.log(serviceAll);
  const ux = serviceAll.filter((item) => item.path === "ux");
   // console.log(ux);

  return (
    <div>
      <Card
        heading={"Built for all kinds of teams"}
        firstData={ux}
        data={serviceAll}
        status={true}
      ></Card>
    </div>
  );
};

export default Service;
