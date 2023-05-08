import style from "./styles.module.css";

export function StartNow() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.right} data-aos="fade-right">
                    <h1>Algumas palavras sobre nós</h1>
                    <p>
                        A Qualidade de Formar um Profissional na Area de Saude e
                        Tecnologia, O nosso complexo pedagógico nos orgulha.
                        Temos uma equipe de profissionais de altamente
                        qualificada. O Instituto Politécnico Médio de Moçambique
                        (INSPOM)/ Colegio Politecnico de Moçambique (COPMOZ), é
                        uma instituição privada existente desde o ano de 2019,
                        na Cidade de Nampula.
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
