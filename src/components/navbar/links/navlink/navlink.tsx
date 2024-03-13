"use client";

import styles from "./navlink.module.css";
import Link from "next/link";
import { NavLinkProps } from "./navlink.interface";
import { usePathname } from "next/navigation";

export default function NavLink({ item }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      key={item.title}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
}
