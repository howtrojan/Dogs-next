import Link from "next/link";
import css from "./header.module.css";
import Image from "next/image";

export default function Header() {
  const user = true;

  return (
    <header className={css.header}>
      <nav className={`${css.nav} container`}>
        <Link href="/" className={css.logo}>
          <Image
            src={"/assets/dogs.svg"}
            alt={"Dogs"}
            width={28}
            height={22}
            sizes={"100vw"}
            priority
          ></Image>
        </Link>
        {user ? (
          <Link href="/conta" className={css.login}>
            Dogs
          </Link>
        ) : (
          <Link href="/login" className={css.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
