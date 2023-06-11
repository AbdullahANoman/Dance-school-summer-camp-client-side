import React, { useContext } from "react";
import BannerClasses from "../BannerClasses/BannerClasses";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";

const Classes = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const filteredClasses = classes.filter(
    (singleClass) => singleClass.status === "approve"
  );
  console.log("filtered class ", filteredClasses);

  const [isAdmin] =useAdmin();
  const [isInstructor] = useInstructor();

  console.log('from classes page ', isAdmin, isInstructor)
  const handleSelect = (item) =>{
    const userEmail = `${user?.email}`
    const {_id,classesName,instructorName,status,price,image,email,seats} = item || {}
    if (user && user?.email) {
      const selectItem = {
        selectItemId: _id,
        classesName,
        instructorName,
        status,
        email,
        seats,
        image,
        price,
        userEmail
      };
      fetch(`http://localhost:5000/student/${user?.email}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your food added in the cart ",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to login first ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login '
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state :{from:location}})
        }
      })
    }
    
    // fetch(`http://localhost:5000/student/${user?.email}`,{
    //     method:'POST',
    //     headers:{
    //         'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify(item)
    // })
    // .then(res=>res.json())
    // .then(data=>console.log(data))
  }
  return (
    <div>
      <BannerClasses></BannerClasses>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-10 mx-10 justify-evenly py-20">
        {filteredClasses.map((classes) => (
          <div className={(classes?.seats == 0 ? "card w-96 bg-base-100 shadow-xl shadow-red-800" : "card w-96 bg-base-100 shadow-xl")}>
          <figure className="px-10 pt-10">
            <img src={classes?.image} alt="Shoes"className="object-cover w-full h-48 mt-2 rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{classes?.classesName}</h2>
            <h2 className="text-[18px] font-semibold">Instructor Name : {classes?.instructorName}</h2>
            <h2 className="text-[18px] font-semibold">Available Seats : {classes?.seats}</h2>
            <p>Price : $ {classes?.price}</p>
            <div className="card-actions">
              <button onClick={()=>handleSelect(classes)} disabled={classes?.seats==0 || isAdmin || isInstructor} className="btn btn-primary">Select</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
