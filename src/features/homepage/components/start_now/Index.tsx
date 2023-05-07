import style from "./styles.module.css";
import IMG from "./1.jpg";

export function StartNow() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.right} data-aos="fade-right">
                    <h1>Algumas palavras sobre nós</h1>
                    <p>
                        No Chester College, nosso objetivo é oferecer educação e
                        treinamento de alta qualidade que atenda às necessidades
                        de empregadores e indivíduos. Estamos trabalhando para
                        oferecer cursos que são desenvolvidos em conjunto com os
                        empregadores.
                    </p>
                    <a href="/sobre">VER MAIS</a>
                </div>

                <div className={style.left} data-aos="fade-left">
                    <img src={IMG} alt="" />
                </div>
            </div>
        </div>
    );
}
