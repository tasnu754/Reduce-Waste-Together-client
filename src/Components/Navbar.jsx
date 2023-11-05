import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = (
      <>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/availableFoods"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Available Foods
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/addFoods"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Add Food
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/manageMyFoods"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Manage My Foods
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/myFoodsRequest"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            My Food Request
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Register
          </NavLink>{" "}
        </li>
      </>
    );


    return (
      <div className="px-10">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2 text-lg font-semibold"
              >
                {links}
              </ul>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full ">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src="https://i.ibb.co/xXhVJ8x/30823294-7737611.jpg"
                  alt=""
                />
              </div>
              <p className=" normal-case text-xl font-bold">
                Reduce Waste <br />
                <span>Together</span>
              </p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-lg px-1 gap-2 font-semibold">{links}</ul>
          </div>
          <div className="navbar-end">
            <NavLink
              to="/signin"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <button className="btn rounded-sm text-lg font-semibold">Signin</button>
            </NavLink>{" "}
          </div>
        </div>
      </div>
    );
};

export default Navbar;