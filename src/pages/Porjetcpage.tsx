import { Header } from "../components/header/Index";
import { Footer } from "../components/footer/Index";
import { Hero } from "../features/projetcspage/components/hero/Index";
import { Projects } from "../features/projetcspage/components/projects/Index";

export function Projectspage() {
    return (
        <div>
            <Header />
            <Hero />
            <Projects />
            <Footer />
        </div>
    );
}
