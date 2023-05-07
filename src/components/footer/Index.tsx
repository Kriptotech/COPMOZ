import style from "./styles.module.css";

export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.row}>
                <div>
                    <span>Cursos Técnicos</span>
                    <a href="/curso1">Enfermagem Geral;</a>
                    <a href="/curso2">Saúde Materna Infantil;</a>
                    <a href="/curso3">Técnico de Medicina Geral;</a>
                    <a href="/curso4">Gestão de Sistemas Informáticos;</a>
                    <a href="/curso5">Contabilidade e Gestão.</a>
                </div>
                {/* <div>
                    <span>Cursos de Curta Duração</span>
                    <a href="#">Em Saúde;</a>
                    <a href="#">Em TICs;</a>
                    <a href="#">Em Gestão ;</a>
                    <a href="#">Em Contabilidade;</a>
                </div> */}
                <div>
                    <span>Contactos</span>
                    <p>Muhala Expansão Rua – 2307 Nampula, MZ</p>
                    <p>+258 874545817 | +258 842508080</p>
                    <p>info@copmoz.ac.mz</p>
                    <p>secretaria.copmoz@gmail.com</p>
                </div>
                <div>
                    <span>Ensino Geral</span>
                    <a href="#">Inscrição ensino Geral</a>
                    <a href="#">Inscrição instituto</a>
                </div>
            </div>
        </footer>
    );
}
