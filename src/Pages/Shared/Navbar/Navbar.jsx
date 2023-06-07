import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = true
//   const {user, logOut} = useContext(AuthContext);
  // console.log(userName, userPhotoUrl);
//   console.log(user)
//   const handleLogout = () => {
//     logOut();
//   };
const handleLogout = ()=>{
    console.log('noman')
}
  return (
    <div className="bg-base-200 mt-0 text-black bg-transparent bg-fixed">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-10 "
                src="https://i.ibb.co/Kbb9BWV/6951198.png"
                alt=""
              />
              <p className="text-xl font-bold">
                <span className="text-[#32BDF2]">Toy</span>
                <span className="text-[#FF6A98]">Tutors</span>
              </p>
            </div>
          </Link>

          {/* Nav Items Section */}
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
                title="Home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allToys"
                className={({ isActive }) => (isActive ? "active" : "default")}
                title="All Toys"
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/myToys"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    title="My Toys"
                  >
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addToys"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    title="Add Toys"
                  >
                    Add Toys
                  </NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
                title="Blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <div className="hidden lg:flex">
            <div
              className={({ isActive }) => (isActive ? "active" : "default")}
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
                  <button className="btn bg-[#32BDF2] border-none hover:bg-[#FF6A98] hidden lg:flex ">Login</button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="w-5 text-black" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          ToyTutors
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
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li className="text-black">
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="/allToys" className="default">
                          All Toys
                        </Link>
                      </li>
                      {user && (
                        <>
                          <li className="text-black">
                            <Link to="/myToys" className="default">
                              My Toys
                            </Link>
                          </li>
                          <li className="text-black">
                            <Link to="/addToys" className="default">
                              Add Toys
                            </Link>
                          </li>
                        </>
                      )}
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Blog
                        </Link>
                      </li>
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
                                    src={userPhotoUrl}
                                    className="rounded-full "
                                    title={userName}
                                  />
                                </div>

                                <button
                                  onClick={handleLogout}
                                  className="me-3 mb-5 btn-primary"
                                  variant="light"
                                >
                                  Log Out
                                </button>
                              </div>
                            </>
                          ) : (
                            <Link to="/login">
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
