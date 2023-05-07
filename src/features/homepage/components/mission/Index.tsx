import { Bag } from "phosphor-react";
import style from "./styles.module.css";

export function Mission({ programsRef }: any) {
    return (
        <div className={style.container} ref={programsRef}>
            <div className={style.header}>
                <h1>Programas acadêmicos</h1>
                <p>
                    Em nossa faculdade, você encontrará turmas pequenas, tópicos
                    de cursos fascinantes e uma variedade de programas de
                    graduação personalizados.
                </p>
            </div>

            <div className={style.box}>
                <div className={style.item}>
                    <div>
                        <Bag size={30} />
                    </div>
                    <h1>Valor</h1>
                    <p>
                        Oferecemos cursos técnicos e profissionalizantes em
                        diversas áreas, como tecnologia de informação, gestão
                        empresarial, engenharia, saúde e educação.
                    </p>
                </div>
                <div className={style.item}>
                    <div>
                        <Bag size={30} />
                    </div>
                    <h1>Visão</h1>
                    <p>
                        A visão do Colégio Politécnico de Moçambique é ser uma
                        instituição líder em educação técnica e
                        profissionalizante em Moçambique, reconhecida nacional e
                        internacionalmente pela excelência acadêmica, inovação,
                        inclusão e compromisso com o desenvolvimento sustentável
                        do país.
                    </p>
                </div>
                <div className={style.item}>
                    <div>
                        <Bag size={30} />
                    </div>
                    <h1>Missão</h1>
                    <p>
                        A missão do Colégio Politécnico de Moçambique é fornecer
                        educação técnica e profissionalizante de alta qualidade,
                        que prepara os alunos para o mercado de trabalho,
                        promove a inclusão e a diversidade, e contribui para o
                        desenvolvimento econômico e social do país.
                    </p>
                </div>
            </div>
        </div>
    );
}
