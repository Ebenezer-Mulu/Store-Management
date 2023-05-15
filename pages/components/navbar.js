import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-100 sticky top-0 z-40">
      <div className="py-6 flex justify-between ">
        <h2 className="px-10">E</h2>
        <ul className="flex items-center ">
          <li>
            <Link
              href="../"
              className="hover:text-green-700 active:text-violet-700"
            >
              Home
            </Link>
          </li>
          <li className="px-3 ">
            <Link
              href="../components/shop"
              className="hover:text-green-700 active:text-violet-700"
            >
              Shop
            </Link>
          </li>
          <li className="px-3">
            <Link
              href="../components/Shop"
              className="hover:text-green-700 active:text-violet-700"
            >
              Blog
            </Link>
          </li>
          <li className="px-3">
            <Link
              href="../components/Shop"
              className="hover:text-green-700 active:text-violet-700"
            >
              About
            </Link>
          </li>
          <li className="px-3">
            <Link
              href="./components/Shop"
              className="hover:text-green-900 active:bg-violet-700"
            >
              Contact
            </Link>
          </li>
          <li className="px-3">
            <Link
              href="./components/Shop"
              className="hover:text-green-700 active:text-violet-700"
            >
              Shopping card
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
