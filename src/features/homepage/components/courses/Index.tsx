import style from "./styles.module.css";

export function Courses({ coursesRef }: any) {
    return (
        <div className={style.container} ref={coursesRef}>
            <div className={style.header}>
                <h1>Nossos cursos em destaque</h1>
            </div>

            <div className={style.box}>
                <div className={style.item}>
                    <img src="/assets/c1.jpg" alt="" />

                    <h1>Enfermagem Geral</h1>
                    <a href="/curso1">Sobre o curso</a>
                </div>
                <div className={style.item}>
                    <img src="/assets/medicina-geral2.jpg" alt="" />

                    <h1>Saúde Materna Infantil</h1>
                    <a href="/curso2">Sobre o curso</a>
                </div>
                <div className={style.item}>
                    <img
                        src="/assets/copmoz assistencia medica instantanea.jpg"
                        alt=""
                    />

                    <h1>Técnico de Medicina Geral</h1>
                    <a href="/curso3">Sobre o curso</a>
                </div>
                <div className={style.item}>
                    <img src="/assets/c4.jpg" alt="" />

                    <h1>Gestão de Sistemas Informáticos</h1>
                    <a href="/curso4">Sobre o curso</a>
                </div>
                <div className={style.item}>
                    <img src="/assets/c5.jpg" alt="" />

                    <h1>Contabilidade e Gestão</h1>
                    <a href="/curso5">Sobre o curso</a>
                </div>
            </div>
        </div>
    );
}
