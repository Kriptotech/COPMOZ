import style from "./styles.module.css";

export function Shape() {
    return (
        <div className={style.container}>
            <h1 data-aos="fade-down">
                Molde seu futuro no Colégio Politécnico de Moçambique
            </h1>
            <a href="/sobre" data-aos="fade-up">
                SAIBA MAIS
            </a>
        </div>
    );
}
