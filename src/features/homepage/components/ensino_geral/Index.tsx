import style from "./styles.module.css";

export function EnsinoGeral({ coursesRef }: any) {
    return (
        <div className={style.container} ref={coursesRef}>
            <div className={style.header}>
                <h1>ENSINO GERAL</h1>
            </div>

            <div className={style.box}>
                <div className={style.item}>
                    <img src="/assets/copmoz.jpg" alt="" />

                    <h1>Secundario: 7ª classe a 12ª classe</h1>
                    <p>
                        Os nossos docentes são profissionais altamente
                        qualificados
                    </p>
                    <a href="/curso1">Inscreva-se ja</a>
                </div>
                <div className={style.item}>
                    <img src="/assets/copmoz alunos.jpg" alt="" />

                    <h1>Ensino Primario: 1ª classe a 6ª classe</h1>
                    <p>
                        Dispomos de de uma salas de Aulas atendendo ao padrao
                        moderno escolar
                    </p>
                    <a href="/curso1">Inscreva-se ja</a>
                </div>
                <div className={style.item}>
                    <img src="/assets/sala de inofr.jpg" alt="" />

                    <h1>
                        Aulas de Informatica desde a 3ª classe ate 12ª classe
                    </h1>
                    <p>
                        Dispomos de de uma sala de informática totalmente
                        equipada com computadores da última geração.{" "}
                    </p>
                    <a href="/curso1">Inscreva-se ja</a>
                </div>
            </div>
        </div>
    );
}
