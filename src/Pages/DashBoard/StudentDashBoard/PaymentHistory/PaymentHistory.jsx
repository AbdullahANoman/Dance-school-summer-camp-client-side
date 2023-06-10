import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: paymentHistories = [], refetch } = useQuery(
    ["payments"],
    async () => {
      const res = await axiosSecure.get("payments");
      return res.data;
    }
  );
  console.log(paymentHistories);
  return (
    <div className="w-full">
      <p className="text-2xl font-semibold m-5">My total payments {paymentHistories?.length}</p>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-2/3 mx-auto ">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Email</th>
                <th>Class Name</th>
                <th>Transaction Id</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                paymentHistories.map((paymentHistory,index)=>(
                    <tr>
                  <th>{index+1}</th>
                  <td>{paymentHistory?.email}</td>
                  <td>{paymentHistory?.classesName}</td>
                  <td>{paymentHistory?.transactionId}</td>
                  <td>{paymentHistory?.price}</td>
                </tr>
                )) 
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
