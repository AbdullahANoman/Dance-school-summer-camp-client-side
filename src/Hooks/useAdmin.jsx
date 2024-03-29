import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";



const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure()
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("is admin response", res);
      return res.data.Admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
