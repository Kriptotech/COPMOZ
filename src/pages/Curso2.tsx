import { Header } from "../components/header/Index";
import { Footer } from "../components/footer/Index";
import { About } from "../features/curso2/components/about/Index";
import { Hero } from "../features/curso2/components/hero/Index";

export function Curso2() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Footer />
        </div>
    );
}
