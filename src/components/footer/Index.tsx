import style from "./styles.module.css";

export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.row}>
                <div>
                    <span>Cursos Técnicos</span>
                    <a href="#">Saúde Materno Infantil;</a>
                    <a href="#">Técnico de Medicina Geral;</a>
                    <a href="#">Enfermagem Geral;</a>
                    <a href="#">Gestão de Sistemas Informáticos;</a>
                    <a href="#">Contabilidade e Gestão.</a>
                </div>
                <div>
                    <span>Cursos de Curta Duração</span>
                    <a href="#">Em Saúde;</a>
                    <a href="#">Em TICs;</a>
                    <a href="#">Em Gestão ;</a>
                    <a href="#">Em Contabilidade;</a>
                    <a href="#">...</a>
                </div>
                <div>
                    <span>Contactos</span>
                    <p>Muhala Expansão Rua – 2307 Nampula, MZ</p>
                    <p>+258 874545817 | +258 842508080</p>
                    <p>info@copmoz.ac.mz</p>
                    <p>secretaria.copmoz@gmail.com</p>
                </div>
                <div>
                    <span>Ensino Geral</span>
                    <a href="https://copmoz.ac.mz/pages/geral/index.html">
                        Ensino Geral
                    </a>
                    <a href="https://copmoz.ac.mz/pages/geral/index.html">
                        Ensino Secundário Completo
                    </a>
                </div>
            </div>
        </footer>
    );
}
