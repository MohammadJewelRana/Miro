import React from "react";
import { useQuery } from "react-query";

const useWork = () => {
  const {
    data: workAll = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["work"],
    // enabled: loading,

    queryFn: async () => {
      const res = await fetch("workData.json");
      // console.log(res);
      return res.json();
    },
  });

  return [workAll, isLoading, refetch];
};

export default useWork;
