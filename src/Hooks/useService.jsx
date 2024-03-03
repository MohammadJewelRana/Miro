import React from 'react';
import { useQuery } from 'react-query';

const useService = () => {
    const {
        data: serviceAll = [],
        isLoading:serviceLoading,
        refetch,
      } = useQuery({
        queryKey: ["service"],
        // enabled: loading,
    
        queryFn: async () => {
          const res = await fetch("serviceData.json");
          // console.log(res);
          return res.json();
        },
      });
    
      return [serviceAll, serviceLoading, refetch];
};

export default useService;