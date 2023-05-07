import style from "./styles.module.css";

export function About() {
    return (
        <div className={style.container}>
            <h1>Descrição do Curso:</h1>
            <p>
                O TM é um profissional de saúde com formação prevalente na área
                clínica e saúde pública e afectação prioritariamente a nível
                primário e secundário. É considerada sua actividade principal,
                diagnóstico e tratamento dos doentes ambulatórios e internados.
                Estas actividades serão desempenhadas em unidades sanitárias
                onde operam outros profissionais de nível superior, básico e
                médio , em particular: Enfermeiras de Saúde Materno Infantil
                (ESMI), Enfermeiros, Agentes de Medicina, Agentes e Técnicos de
                Laboratório, Agentes e Técnicos de Medicina Preventiva e
                Saneamento do Meio, e Médicos da Clínica Geral. A possibilidade
                de colocar o TM como profissional Clínico mais sénior num Centro
                de Saúde (CdS), torna indispensável uma competência geral em
                área diferentes da clínica e na prestação de cuidados de Saúde
                Primários.
            </p>
        </div>
    );
}
