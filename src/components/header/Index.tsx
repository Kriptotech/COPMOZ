import { List } from "phosphor-react";
import styles from "./styles.module.css";
import IMG from "./1.png";
import { useState } from "react";

export function Header({ programsRef, coursesRef }: any) {
    const [dropped, setDropped] = useState(false);

    const scrollToSection = (elementRef: any) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 100,
        });
    };

    return (
        <div className={styles.header} data-aos="fade-down">
            <nav>
                <div className={styles.logo}>
                    <img src={IMG} width="250px" alt="" />
                </div>

                <div className={styles.links}>
                    <a href="/">HOME</a>
                    <a href="/sobre">SOBRE</a>
                    <a onClick={() => scrollToSection(programsRef)}>
                        PROGRAMAS
                    </a>
                    <a onClick={() => scrollToSection(coursesRef)}>CURSOS</a>
                    {/* <a onClick={() => scrollToSection(testimonialsRef)}>
                        TESTEMUNHOS
                    </a> */}
                </div>

                <button onClick={() => setDropped(!dropped)}>
                    <List color="#222" weight="fill" size={30} />
                </button>
            </nav>

            {dropped && (
                <div className={styles.mobile_links}>
                    <a href="/">HOME</a>
                    <a href="/sobre">SOBRE</a>
                    <a onClick={() => scrollToSection(programsRef)}>
                        PROGRAMAS
                    </a>
                    <a href="/curso1">Enfermagem Geral;</a>
                    <a href="/curso2">Saúde Materna Infantil;</a>
                    <a href="/curso3">Técnico de Medicina Geral;</a>
                    <a href="/curso4">Gestão de Sistemas Informáticos;</a>
                    <a href="/curso5">Contabilidade e Gestão.</a>
                    {/* <a onClick={() => scrollToSection(testimonialsRef)}>
                        TESTEMUNHOS
                    </a> */}
                </div>
            )}
        </div>
    );
}
