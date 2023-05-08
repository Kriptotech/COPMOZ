import style from "./styles.module.css";

export function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.content} data-aos="fade-up">
                <h1>Técnico de Medicina Geral</h1>
                <a href="#">Inscreva-se</a>
            </div>
        </div>
    );
}
