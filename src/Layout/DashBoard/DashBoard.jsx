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
  FaCcAmazonPay,
  FaHeart,
  FaHouseUser,
  FaDotCircle,
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
  const { user, logOut } = useContext(AuthContext);

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

  const handleLogout = () => {
    logOut();
  };

  console.log("admin inst", isAdmin, isInstructor, isStudent);

  console.log("user of dashboard", user);
  return (
    <div className="drawer lg:drawer-open h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col sm:items-start md:items-start  ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden "
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side uppercase pt-10 bg-gradient-to-r from-[rgba(2,15,29,1)] text-white to-[rgba(0,212,255,1)]">
        <label htmlFor="my-drawer-2" className="drawer-overlay">
          <div className="ml-8 md:ml-0">
            <div className="flex md:justify-center ">
              <img
                src={user?.photoURL}
                alt=""
                className="w-20 md:w-40 rounded-full "
              />
            </div>
            <p className="md:text-center mt-5 font-semibold">
              {user?.displayName}
            </p>
            <p className="md:text-center mt-2 font-bold ">
              {(isStudent && "Student") ||
                (isAdmin && "Admin") ||
                (isInstructor && "Instructor")}
            </p>
          </div>
          <ul className="menu  p-4 w-80 h-full  uppercase">
            {isStudent && (
              <>
                <li>
                  <NavLink to="/dashBoard/student">
                    <FaHome></FaHome> My Selected Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledClass">
                    <FaHeart></FaHeart> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaCcAmazonPay></FaCcAmazonPay> Payment History
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
                    <FaDotCircle></FaDotCircle> My Classes
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
                    <FaHouseUser></FaHouseUser> Manage users
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
              <NavLink to="/instructors">
                <FaBars></FaBars>Instructors
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaShoppingBag></FaShoppingBag> Classes
              </NavLink>
            </li>
            <li onClick={() => handleLogout()}>
              <NavLink to="/">
                <FaMailBulk></FaMailBulk> LogOut
              </NavLink>
            </li>
          </ul>
        </label>
      </div>
    </div>
  );
};

export default DashBoard;
