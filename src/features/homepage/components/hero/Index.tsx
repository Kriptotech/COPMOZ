import style from "./styles.module.css";

export function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.content} data-aos="fade-up">
                <strong>ENSINO DE QUALIDADE</strong>
                <h1>
                    Qualquer carreira de sucesso começa com{" "}
                    <span>uma boa educação</span>
                </h1>

                <a href="/sobre">VER MAIS</a>
            </div>
        </div>
    );
}
