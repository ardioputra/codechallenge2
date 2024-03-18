import Link from "next/link";
import Links from "./links/links";
import styles from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.logo} flex flex-row`}>
        <Image width={30} height={30} alt="logo" src="/favicon.svg" className="fill-white"/>
        IDRA
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
