import style from "./styles.module.css";
import IMG from "./1.jpg";

export function Testimonials() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Testemunhos</h1>
            </div>

            <div className={style.box}>
                <div className={style.item}>
                    <img src={IMG} alt="" />
                    <h1>Paul Johnston</h1>
                    <span>Aluna</span>
                    <p>
                        Sempre senti que tive muita sorte de ser aluno desta
                        faculdade, e não de nenhuma outra escola particular ou
                        pública. O que mais admiro é o apoio que recebi aqui.
                    </p>
                </div>
                <div className={style.item}>
                    <img src={IMG} alt="" />
                    <h1>Paul Johnston</h1>
                    <span>Aluna</span>
                    <p>
                        Sempre senti que tive muita sorte de ser aluno desta
                        faculdade, e não de nenhuma outra escola particular ou
                        pública. O que mais admiro é o apoio que recebi aqui.
                    </p>
                </div>
                <div className={style.item}>
                    <img src={IMG} alt="" />
                    <h1>Paul Johnston</h1>
                    <span>Aluna</span>
                    <p>
                        Sempre senti que tive muita sorte de ser aluno desta
                        faculdade, e não de nenhuma outra escola particular ou
                        pública. O que mais admiro é o apoio que recebi aqui.
                    </p>
                </div>
            </div>
        </div>
    );
}
