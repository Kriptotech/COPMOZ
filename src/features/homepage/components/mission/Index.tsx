import { Bag } from "phosphor-react";
import style from "./styles.module.css";

export function Mission() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Rigor, Qualidade e Inovação</h1>
                <p>
                    A nossa missão é de garantir a formação de profissionais de
                    saude nas areas de Enfermagem geral, Técnicos de medicina
                    geral, Técnicos de Suporte Informatico, Enfermagem em saude
                    materna e infantil e Contabilidade
                </p>
            </div>

            <div className={style.box}>
                <div className={style.item}>
                    <div>
                        <Bag size={30} />
                    </div>
                    <h1>Valor</h1>
                    <p>
                        Respeitos às diferenças;Competência responsabilidade;
                        Profissionalismo; Solidariedade e Ética
                    </p>
                </div>
                <div className={style.item}>
                    <div>
                        <Bag size={30} />
                    </div>
                    <h1>Visão</h1>
                    <p>
                        Ser uma referência nacional e internacional na formação
                        de técnicos com competência de saber ser, saber fazer,
                        saber estar para a prestação de serviços com qualidade.
                    </p>
                </div>
                <div className={style.item}>
                    <div>
                        <Bag size={30} />
                    </div>
                    <h1>Missão</h1>
                    <p>
                        Atuar com exigência servir por excelência para a
                        satisfação e desenvolvimento de uma sociedade livre,
                        autónoma, responsável e solidária.
                    </p>
                </div>
            </div>
        </div>
    );
}
