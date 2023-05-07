import { Bag } from "phosphor-react";
import style from "./styles.module.css";

export function Mission() {
    return (
        <div className={style.container}>
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
                    <h1>Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid veniam perferendis officia non fuga ullam atque
                        nihil iusto? Ullam accusamus, dolores amet totam
                        voluptatibus necessitatibus sit. Sunt delectus sit odio?
                    </p>
                </div>
                <div className={style.item}>
                    <div>
                        <Bag size={30} />
                    </div>
                    <h1>Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid veniam perferendis officia non fuga ullam atque
                        nihil iusto? Ullam accusamus, dolores amet totam
                        voluptatibus necessitatibus sit. Sunt delectus sit odio?
                    </p>
                </div>
                <div className={style.item}>
                    <div>
                        <Bag size={30} />
                    </div>
                    <h1>Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid veniam perferendis officia non fuga ullam atque
                        nihil iusto? Ullam accusamus, dolores amet totam
                        voluptatibus necessitatibus sit. Sunt delectus sit odio?
                    </p>
                </div>
            </div>
        </div>
    );
}
