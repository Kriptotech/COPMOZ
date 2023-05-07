import { Header } from "../components/header/Index";
import { Hero } from "../features/homepage/components/hero/Index";
import { StartNow } from "../features/homepage/components/start_now/Index";
import { Mission } from "../features/homepage/components/mission/Index";
import { Courses } from "../features/homepage/components/courses/Index";
import { Footer } from "../components/footer/Index";
import { Shape } from "../features/homepage/components/shape/Index";
import { Testimonials } from "../features/homepage/components/testimonials/Index";
import { WhyChooseUs } from "../features/homepage/components/why_choose/Index";

export function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <Mission />
            <StartNow />
            <Courses />
            <Shape />
            <Testimonials />
            <WhyChooseUs />
            <Footer />
        </div>
    );
}
