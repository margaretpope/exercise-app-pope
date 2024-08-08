import styles from "./style.module.css";
import Link from "next/link";
import useLogout from "../../hooks/useLogout";

export default function Header(props) {
  const logout = useLogout();
  return (
    <header className={styles.container}>
      {props.isLoggedIn ? (
        <>
          <p>
            <Link className={styles.nav} href="/">Home</Link>
            <Link className={styles.nav} href="/search">Exercise Search</Link>
            <Link className={styles.nav} href="/favorites">Saved Exercises</Link>
          </p>
          <div className={styles.container}>
            <p className={styles.name}>Welcome, {props.username}!</p>
            <p className={styles.nav} onClick={logout} style={{ cursor: "pointer" }}>
              Logout
            </p>
          </div>
        </>
      ) : (
        <>
          <p>
            <Link className={styles.nav} href="/">Home</Link>
          </p>
          <p>
            <Link className={styles.nav} href="/login">Login</Link>
          </p>
        </>
      )}
    </header>
  );
}

