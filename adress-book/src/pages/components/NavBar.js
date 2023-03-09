import Link from "next/link";

const NavBar = () => {
  return (
      <div className="dropdown">
        <label tabIndex="0" className="btn m-1">
          Menu
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/" passHref legacyBehavior>
              <a className="link decoration-transparent">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/AddressListPage" passHref legacyBehavior>
              <a className="link decoration-transparent">Address List</a>
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default NavBar;
