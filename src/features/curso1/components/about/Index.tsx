import style from "./styles.module.css";

export function About() {
    return (
        <div className={style.container}>
            <h1>Descrição do Curso:</h1>
            <p>
                O/a Enfermeiro/a Geral é um profissional da saúde com formação
                de nível médio que executa acções de promoção, prevenção e
                recuperação da saúde dos utentes das Unidades Sanitárias do
                Sistema Nacional de Saúde, através da implementação,
                coordenação, monitorização e avaliação dos cuidados de
                enfermagem. O enfermeiro um profissional preparado para actuar
                nas áreas assistenciais, de gestão e de formação.
            </p>
            <p>
                O/A Enfermeiro/a Geral pode desenvolver suas actividades em
                Hospitais de diversos níveis de complexidade e em Centros de
                Saúde Urbano (CSU) e Rural Tipo I (CSR Tipo I) existentes no
                país, prestando cuidados gerais e especializados ao utente
                hospitalizado ou que procura por consulta externa, salas de
                tratamento e bancos de socorros.
            </p>
        </div>
    );
}
