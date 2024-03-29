import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/student/${user?.email}`);
      // console.log("is instructor response", res);
      return res.data.Student;
    },
  });
  return [isStudent, isStudentLoading];
};
export default useStudent;
