import { useContext, useEffect, useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaCartPlus,
  FaWallet,
  FaBars,
  FaShoppingBag,
  FaMailBulk,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useStudent from "../../Hooks/useStudent";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const DashBoard = () => {
  //   const [isAdmin] = useAdmin();
  //   console.log(isAdmin);
  const {user} = useContext(AuthContext)
    
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

  console.log('admin inst',isAdmin,isInstructor,isStudent)

  console.log("user of dashboard" , user )
  return (
    <div className="drawer lg:drawer-open h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col sm:items-center md:items-start  ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden "
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#D1A054] uppercase pt-10">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="flex justify-center ">
          <img src={user?.photoURL} alt="" className="w-40 rounded-full " />
        </div>
        <p className="text-center mt-5 font-semibold">{user?.displayName}</p>
        <p className="text-center mt-2 font-bold ">{isStudent&& 'Student' || isAdmin && 'Admin' || isInstructor && 'Instructor'}</p>
        <ul className="menu p-4 w-80 h-full text-base-content bg-[#D1A054] uppercase">
          {isStudent && (
            <>
              <li>
                <NavLink to="/dashBoard/student">
                  <FaHome></FaHome> My Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledClass">
                  <ImSpoonKnife></ImSpoonKnife> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <ImSpoonKnife></ImSpoonKnife> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaBars></FaBars>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          )}

          {isInstructor && (
            <>
              <li>
                <NavLink to="/dashBoard/addClass">
                  <FaHome></FaHome> Add a class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClass">
                  <ImSpoonKnife></ImSpoonKnife> My Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaBars></FaBars>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashBoard/manageClasses">
                  <FaHome></FaHome> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <ImSpoonKnife></ImSpoonKnife> Manage users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaBars></FaBars>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          )}

          <div className="border-b my-5 border-2"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaBars></FaBars>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaShoppingBag></FaShoppingBag> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaMailBulk></FaMailBulk> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
