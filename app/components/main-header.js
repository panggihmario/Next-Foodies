import Link from "next/link";
import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImage.src} alt="A plate" />
        NextLevel Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/meals"}>Browse meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
