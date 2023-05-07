import { Header } from "../components/header/Index";
import { Footer } from "../components/footer/Index";
import { About } from "../features/aboutpage/components/about/Index";
import { Hero } from "../features/aboutpage/components/hero/Index";

export function Aboutpage() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Footer />
        </div>
    );
}
