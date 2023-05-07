import { List } from "phosphor-react";
import styles from "./styles.module.css";
import { useState } from "react";
import IMG from "./1.png";

export function Header() {
    const [dropped, setDropped] = useState(false);

    return (
        <div className={styles.header} data-aos="fade-down">
            <nav>
                <div className={styles.logo}>
                    <img src={IMG} width="250px" alt="" />
                </div>

                <div className={styles.links}>
                    <a href="/">HOME</a>
                    <a href="/sobre">SOBRE</a>
                    <a href="#">COURSES</a>
                    <a href="#">HISTORY</a>
                    <a href="#">BLOG</a>
                    <a href="#">CONTACTS</a>
                </div>

                <button onClick={() => setDropped(!dropped)}>
                    <List color="#222" weight="fill" size={30} />
                </button>
            </nav>

            {dropped && (
                <div className={styles.mobile_links}>
                    <a href="/">HOME</a>
                    <a href="/sobre">SOBRE</a>
                    <a href="#">COURSES</a>
                    <a href="#">HISTORY</a>
                    <a href="#">BLOG</a>
                    <a href="#">CONTACTS</a>
                </div>
            )}
        </div>
    );
}
