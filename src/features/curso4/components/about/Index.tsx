import style from "./styles.module.css";

export function About() {
    return (
        <div className={style.container}>
            <h1>Descrição do Curso:</h1>
            <p>
                A "Gestão de Sistemas Informáticos" é um campo de estudo que se
                concentra na administração e gestão de sistemas de informação em
                organizações. Os sistemas de informação incluem hardware,
                software, redes, banco de dados e outros componentes que são
                usados ​​para coletar, processar, armazenar e distribuir
                informações.
            </p>

            <p>
                A gestão de sistemas informáticos envolve o planejamento,
                implementação, operação e manutenção de sistemas de informação
                em organizações. Isso pode incluir a gestão de redes de
                computadores, bancos de dados, segurança da informação,
                desenvolvimento de software e outras atividades relacionadas.
            </p>

            <p>
                Em resumo, a "Gestão de Sistemas Informáticos" é um campo
                importante e em constante evolução que é fundamental para o
                sucesso de organizações modernas que dependem cada vez mais da
                tecnologia de informação para executar suas atividades e atingir
                seus objetivos.
            </p>
        </div>
    );
}
