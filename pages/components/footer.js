import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <footer className="bg-emerald-700">
      <div className="text-xl flex justify-self-stretch gap-16 py-3  text-gray-600 dark:text-gray-400 ml-16 decoration-8">
        <div className="ml-36">
          <h1 className="font-bold text-5xl mt-5">E</h1>
          <h3 className="font-bold mt-5 mb-5">Contact</h3>
          <ul className="text-sm">
            <li>Address:fchdhhhdhdhdh</li>
            <li>Phone</li>
            <li>Hours</li>
          </ul>
        </div>
        <div className="ml-36">
          <h3 className="font-bold mb-5 mt-5">About</h3>
          <ul className="text-sm">
            <li>
              <Link href="">About us</Link>
            </li>
            <li>
              <Link href="">Delivery Information</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
            <li>
              <Link href="">Term and Condition</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="ml-36">
          <h3 className="font-bold mb-5 mt-5">My account</h3>
          <ul className="text-sm">
            <li>
              <Link href="">Sign in</Link>
            </li>
            <li>
              <Link href="">View cart</Link>
            </li>
            <li>
              <Link href="">My Wishlist</Link>
            </li>
            <li>
              <Link href="">Track My Order</Link>
            </li>
            <li>
              <Link href="">Help</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold ">Follow us</h3>
        <div className="flex justify-self-stretch gap-8 py-3 text-gray-600 dark:text-gray-400 place-content-center">
          <FacebookOutlinedIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
        <p>&copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
