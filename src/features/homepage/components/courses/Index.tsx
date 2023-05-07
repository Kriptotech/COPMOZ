import style from "./styles.module.css";
import IMG1 from "./1.jpg";

export function Courses() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Nossos cursos em destaque</h1>
            </div>

            <div className={style.box}>
                <div className={style.item}>
                    <img src={IMG1} alt="" />
                    <span>
                        Professor/a: <span>Maria Howard</span>
                    </span>
                    <h1>Curso Analista Financeiro</h1>
                </div>
                <div className={style.item}>
                    <img src={IMG1} alt="" />
                    <span>
                        Professor/a: <span>Maria Howard</span>
                    </span>
                    <h1>Curso Analista Financeiro</h1>
                </div>
                <div className={style.item}>
                    <img src={IMG1} alt="" />
                    <span>
                        Professor/a: <span>Maria Howard</span>
                    </span>
                    <h1>Curso Analista Financeiro</h1>
                </div>
                <div className={style.item}>
                    <img src={IMG1} alt="" />
                    <span>
                        Professor/a: <span>Maria Howard</span>
                    </span>
                    <h1>Curso Analista Financeiro</h1>
                </div>
                <div className={style.item}>
                    <img src={IMG1} alt="" />
                    <span>
                        Professor/a: <span>Maria Howard</span>
                    </span>
                    <h1>Curso Analista Financeiro</h1>
                </div>
                <div className={style.item}>
                    <img src={IMG1} alt="" />
                    <span>
                        Professor/a: <span>Maria Howard</span>
                    </span>
                    <h1>Curso Analista Financeiro</h1>
                </div>
            </div>
        </div>
    );
}
