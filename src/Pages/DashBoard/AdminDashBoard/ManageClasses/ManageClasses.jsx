import React, { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const handleStatusApprove = (item)=>{
    const {_id,status,classesName} = item ||  {};
    Swal.fire({
        title: 'Are you sure?',
        text: `You Want Approve this ${classesName} Class   !`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Approve!'
      }).then((result) => {
        if (result.isConfirmed) {
           
            fetch(`http://localhost:5000/classes/status/approve/${_id}`,{
                method: 'PATCH'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount>0){
                    Swal.fire(
                        'Approve!',
                        `${classesName} class has been approved.`,
                        'success'
                      )
                      refetch()
                     
                }
            })
          
        }
      })
   
  }
  const handleStatusDeny = (item)=>{
    const {_id,status,classesName} = item ||  {};
    Swal.fire({
        title: 'Are you sure?',
        text: `You Want Deny this ${classesName} Class   !`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Approve!'
      }).then((result) => {
        if (result.isConfirmed) {
           
            fetch(`http://localhost:5000/classes/status/deny/${_id}`,{
                method: 'PATCH'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount>0){
                    Swal.fire(
                        'Approve!',
                        `${classesName} class has been denied.`,
                        'success'
                      )
                      refetch()
                }
            })
          
        }
      })
   
  }
  return (
    <div className="w-full px-20 py-36">
      <p className="py-10 font-bold text-2xl">
        Total Class For Responds {classes?.length}
      </p>
      <div>
        <div className="overflow-x-auto ">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th className="">No.</th>
                <th className="">Class Image </th>
                <th className="">Class Name</th>
                <th className="">Instructor Name</th>
                <th className="">Instructor Email</th>
                <th className="">Available Seats</th>
                <th className="">Price</th>
                <th className="">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {classes?.map((item, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.classesName}</td>
                  <td>{item?.instructorName}</td>
                  <td>{item?.email}</td>
                  <td>{item?.seats}</td>
                  <td>{item?.price}</td>
                  <td>{item?.status == 'approve' && 'Approve' || item?.status == 'pending' && 'Pending' || item?.status =='deny' && 'Denied' }</td>
                  <td className="flex justify-between">
                    <button disabled={item?.status== 'approve' || item?.status == 'deny'} onClick={()=>handleStatusApprove(item)} className="px-4 bg-blue-200 rounded-xl py-1  font-semibold">Approved</button>
                    <button disabled={item?.status == 'deny' || item.status == 'approve'} onClick={()=>handleStatusDeny(item)} className="px-4 bg-red-400 rounded-xl py-1  font-semibold">Deny</button>
                    <Link to={`/dashboard/feedback/${item?._id}`}><button  className="px-4 bg-purple-400 rounded-xl py-1  font-semibold">Send Feedback</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
