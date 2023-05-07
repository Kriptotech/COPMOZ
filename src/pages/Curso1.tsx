import { Header } from "../components/header/Index";
import { Footer } from "../components/footer/Index";
import { About } from "../features/curso1/components/about/Index";
import { Hero } from "../features/curso1/components/hero/Index";

export function Curso1() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Footer />
        </div>
    );
}
