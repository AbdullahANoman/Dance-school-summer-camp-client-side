import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

import useInstructor from "../../../Hooks/useInstructor";
import useStudent from "../../../Hooks/useStudent";
import useAdmin from "../../../Hooks/useAdmin";
// import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const user = false
  const { user, logOut } = useContext(AuthContext);
  // console.log(userName, userPhotoUrl);
  // console.log(user);
  // const {photoURL,displayName} = user
  // console.log(user)
  const handleLogout = () => {
    logOut();
  };

  // const isStudent = regUsers.find((regUser) => regUser?.email == user?.email);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

  // console.log('in nav' , isAdmin,isInstructor, isStudent)

  return (
    <div className="absolute mt-0  bg-transparent   z-10 w-full text-white ">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center">
            <div className="flex items-center gap-2">
              <img
                className=" "
                src="https://dtdance.wpenginepowered.com/wp-content/uploads/2017/08/dance-logo-dark-1.png"
                alt=""
              />
            </div>
          </Link>

          {/* Nav Items Section */}
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active1" : "default")}
                title="Home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={({ isActive }) => (isActive ? "active1" : "default")}
                title="Instructors"
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({ isActive }) => (isActive ? "active1" : "default")}
                title="Classes"
              >
                Classes
              </NavLink>
            </li>
            {isStudent && (
              <>
                <li>
                  <NavLink
                    to="/dashBoard/student"
                    className={({ isActive }) =>
                      isActive ? "active1" : "default"
                    }
                    title="My Toys"
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <NavLink
                    to="/dashBoard/addClass"
                    className={({ isActive }) =>
                      isActive ? "active1" : "default"
                    }
                    title="My Toys"
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <NavLink
                    to="/dashBoard/manageClasses"
                    className={({ isActive }) =>
                      isActive ? "active1" : "default"
                    }
                    title="My Toys"
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="hidden lg:flex">
            <div
              className={({ isActive }) => (isActive ? "active1" : "default")}
            >
              {user ? (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-10  rounded-full">
                      <img
                        src={user?.photoURL}
                        className="rounded-full "
                        title={user?.displayName}
                      />
                    </div>

                    <button
                      onClick={handleLogout}
                      className="me-3 mb-5 btn bg-[#32BDF2] border-none hover:bg-[#FF6A98] "
                      variant="light"
                    >
                      Log Out
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/login">
                  <button className="btn  border-none hover:bg-[#571F9C] hidden lg:flex ">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            {!isMenuOpen && (
              <button
                aria-label="Open Menu"
                title="Open Menu"
                onClick={() => setIsMenuOpen(true)}
              >
                <Bars3BottomRightIcon
                  size={36}
                  className="w-8 font-bold text-white"
                />
              </button>
            )}
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Dance School
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-black" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="text-black"
                      >
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="text-black"
                      >
                        <Link to="/instructors" className="default">
                          Instructors
                        </Link>
                      </li>
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="text-black"
                      >
                        <Link to="/classes" className="default">
                          Classes
                        </Link>
                      </li>
                      {user && (
                        <>
                          <li
                            onClick={() => setIsMenuOpen(false)}
                            className="text-black"
                          >
                            <Link to="/dashboard" className="default">
                              Dashboard
                            </Link>
                          </li>
                        </>
                      )}

                      <li>
                        <div
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          {user ? (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="w-8  rounded-full">
                                  <img
                                    src={user?.photoURL}
                                    className="rounded-full "
                                    title={user?.displayName}
                                  />
                                </div>

                                <div onClick={() => setIsMenuOpen(false)}>
                                  <button
                                    onClick={handleLogout}
                                    className="me-3 mb-5 btn-primary"
                                    variant="light"
                                  >
                                    Log Out
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <Link
                              onClick={() => setIsMenuOpen(false)}
                              to="/login"
                            >
                              <button className="btn-primary hidden lg:flex ">
                                Login
                              </button>
                            </Link>
                          )}
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
