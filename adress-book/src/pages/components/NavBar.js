import Link from "next/link";

const NavBar = () => {
  return (
      <div class="dropdown">
        <label tabindex="0" class="btn m-1">
          Menu
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
