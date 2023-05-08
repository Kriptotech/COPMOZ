import style from "./styles.module.css";

export function EnsinoTecnico({ coursesRef }: any) {
    return (
        <div className={style.container} ref={coursesRef}>
            <div className={style.header}>
                <h1>Perfil dos Nossos Formandos</h1>
                <p>
                    O instituto politecnico oferece uma vasta gama de cursos do
                    ramo da Saude, Informatica e COntabilidade com melhor
                    qualidade de ensino e aprendizagem.Solução, Inovação e
                    Tecnologia
                </p>
            </div>

            <div className={style.box}>
                <div className={style.item}>
                    <img src="/assets/medicina-geral.jpg" alt="" />

                    <h1>Medicina Geral</h1>
                    <a href="/curso1">O Tecnico de TMG</a>
                    <p>
                        É um profissional de saúde com formação prevalente na
                        área clínica e saúde pública e afectação
                        prioritariamente a nível primário e secundário. É
                        considerada sua actividade principal, diagnóstico e
                        tratamento dos doentes ambulatórios e internados. Estas
                        actividades serão desempenhadas em unidades sanitárias
                        onde operam outros profissionais de nível superior,
                        básico e médio , em particular: Enfermeiras de Saúde
                        Materno Infantil (ESMI), Enfermeiros, Agentes de
                        Medicina, Agentes e Técnicos de Laboratório, Agentes e
                        Técnicos de Medicina Preventiva e Saneamento do Meio, e
                        Médicos da Clínica Geral. A possibilidade de colocar o
                        TM como profissional Clínico mais sénior num Centro de
                        Saúde (CdS), torna indispensável uma competência geral
                        em área diferentes da clínica e na prestação de cuidados
                        de Saúde Primários.
                    </p>
                </div>
                <div className={style.item}>
                    <img src="/assets/medicina-geral2.jpg" alt="" />

                    <h1>Saude Materno Infantil</h1>
                    <a href="/curso2">A Tecnica de SMI</a>
                    <p>
                        Ela desenvolve uma função importante no conselhamento e
                        educação em saúde, não só para a mulher, mais também
                        para a familia e a comunidade. O seu trabalho envolve
                        educação pré-natal e preparação para a maternidade e
                        compreende algumas áreas de ginecologia, planeamento
                        familiar e cuidados da criança e do adolescente
                    </p>
                </div>
                <div className={style.item}>
                    <img src="/assets/medicina-geral3.jpg" alt="" />

                    <h1>Suporte Informaticos</h1>
                    <a href="/curso3">O IT</a>
                    <p>
                        Percebe o problema e faz o levantamento de todos os
                        requisitos possiveis,faz a analise dos requisitos
                        levantados,depois da analise, faz um mapeamento das
                        possivies falha e erros que possam impedir a resoluçao
                        do problema. Após o mapeamento, providencia a melhor
                        solução tecnológica possivel de modo a garantir o melhor
                        funcionamento.
                    </p>
                </div>
            </div>
        </div>
    );
}
