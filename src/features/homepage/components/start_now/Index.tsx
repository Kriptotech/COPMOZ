import style from "./styles.module.css";

export function StartNow() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.right} data-aos="fade-right">
                    <h1>Algumas palavras sobre nós</h1>
                    <p>
                        O Colégio Politécnico de Moçambique (CPM) é uma
                        instituição de ensino superior técnico-profissional
                        localizada na cidade de Maputo, capital de Moçambique.
                        Fundado em 1996, o CPM tem como objetivo fornecer
                        formação técnica de alta qualidade para estudantes
                        moçambicanos e estrangeiros, contribuindo para o
                        desenvolvimento econômico e social do país.
                    </p>
                    <a href="/sobre">VER MAIS</a>
                </div>

                <div className={style.left} data-aos="fade-left">
                    <img src="/assets/noticia director vs pca.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}
