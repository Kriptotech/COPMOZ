import { List } from "phosphor-react";
import styles from "./styles.module.css";
import IMG from "./logo.jpg";
import { useState } from "react";

export function Header() {
    const [dropped, setDropped] = useState(false);
    const [clicked, setClicked] = useState(false);

    return (
        <div className={styles.header} data-aos="fade-down">
            <nav>
                <div className={styles.logo}>
                    <img src={IMG} alt="" />
                </div>

                <div className={styles.links}>
                    <a href="/">HOME</a>
                    <a onClick={() => setClicked(!clicked)}>
                        CURSOS{" "}
                        {clicked && (
                            <div>
                                <a href="/curso1">Enfermagem Geral;</a>
                                <a href="/curso2">Saúde Materna Infantil;</a>
                                <a href="/curso3">Técnico de Medicina Geral;</a>
                                <a href="/curso4">
                                    Gestão de Sistemas Informáticos;
                                </a>
                                <a href="/curso5">Contabilidade e Gestão.</a>
                            </div>
                        )}
                    </a>
                    <a href="/sobre">SOBRE</a>
                    <a>PORTAL ACADEMICO</a>
                    <a>LOGIN</a>
                </div>

                <button onClick={() => setDropped(!dropped)}>
                    <List color="#222" weight="fill" size={30} />
                </button>
            </nav>

            {dropped && (
                <div className={styles.mobile_links}>
                    <a href="/">HOME</a>
                    <a href="/sobre">SOBRE</a>
                    <a>PROGRAMAS</a>
                    <a href="/curso1">Enfermagem Geral;</a>
                    <a href="/curso2">Saúde Materna Infantil;</a>
                    <a href="/curso3">Técnico de Medicina Geral;</a>
                    <a href="/curso4">Gestão de Sistemas Informáticos;</a>
                    <a href="/curso5">Contabilidade e Gestão.</a>
                    {/* <a >
                        TESTEMUNHOS
                    </a> */}
                </div>
            )}
        </div>
    );
}
