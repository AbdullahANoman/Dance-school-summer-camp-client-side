import React, { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Payment from "../Payment/Payment";

const SelectedClass = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClass = [], refetch } = useQuery(
    ["student"],
    async () => {
      const res = await axiosSecure.get(`student/${user?.email}`);
      return res.data;
    }
  );
  console.log(selectedClass);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/student/${user?.email}/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                refetch()
            }
          });
      }
    });
  };

//   const handlePay = item =>{
//     fetch(`http://localhost:5000/student/${user?.email}/${item._id}`)
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//   }

  return (
    <div className="w-full ">
      <p className="text-2xl font-bold m-5">
        My selected class {selectedClass?.length}
      </p>
      <div className="py-10">
        <div className="overflow-x-auto">
          <table className="table w-2/3 mx-auto ">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Available Seats</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedClass.map((selectClass, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={selectClass?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{selectClass?.classesName}</td>
                  <td>{selectClass?.price}</td>
                  <td>{selectClass?.seats}</td>
                  <td>
                   <Link to={`/dashboard/pay/${selectClass?._id}`}><button className="btn  btn-primary" > Pay</button></Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(selectClass)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
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

export default SelectedClass;
