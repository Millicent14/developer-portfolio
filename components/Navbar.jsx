import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { HiOutlineHome } from "react-icons/hi";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={style.navbar}>
      <ul>
        <Link href="/" passHref>
          <li className={style.navbar_home}>
            <HiOutlineHome />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
