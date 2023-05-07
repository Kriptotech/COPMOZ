import style from "./styles.module.css";

export function About() {
    return (
        <div className={style.container}>
            <h1>Descrição do Curso:</h1>

            <p>
                A "Contabilidade e Gestão" é um campo de estudo que se concentra
                na administração e controle financeiro de uma organização. Esse
                campo envolve a aplicação de princípios contábeis e financeiros
                para gerenciar as finanças da empresa, a fim de garantir a sua
                sustentabilidade e lucratividade.
            </p>

            <p>
                A contabilidade envolve a medição, registro e comunicação das
                atividades financeiras de uma empresa, como a elaboração de
                demonstrações financeiras, balanços patrimoniais, análises de
                custos e outras informações financeiras importantes. Por outro
                lado, a gestão envolve a tomada de decisões estratégicas com
                base nessas informações, visando alcançar os objetivos da
                empresa, seja no curto ou longo prazo.
            </p>

            <p>
                Em resumo, a "Contabilidade e Gestão" é uma disciplina
                fundamental para o sucesso financeiro de uma organização,
                fornecendo informações financeiras precisas e úteis para a
                tomada de decisões estratégicas e a gestão eficiente dos
                recursos financeiros.
            </p>
        </div>
    );
}
