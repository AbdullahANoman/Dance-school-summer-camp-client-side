import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: regUsers = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleUpdateAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You Want to update this  ${user?.name} as Admin`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update As A Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user?._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire("Updated!", "Your user now admin.", "success");
              refetch();
            }
          });
      }
    });
  };

  const handleUpdateInstructor = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You Want to update   ${user?.name} as Instructor `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update As A Instructor",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/instructor/${user?._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire("Updated!", "Your user now Instructor.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="w-full mx-10">
      <p className="text-4xl font-bold m-5">Total Users : {regUsers?.length}</p>
      <div className="overflow-x-auto  ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {regUsers?.map((regUser, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{regUser?.name}</td>
                <td>{regUser?.email}</td>
                <td>
                  <button
                    onClick={() => handleUpdateAdmin(regUser)}
                    className="btn btn-primary"
                    disabled={regUser?.role === "admin"}
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleUpdateInstructor(regUser)}
                    className="btn btn-accent"
                    disabled={regUser?.role ==='instructor'}
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
