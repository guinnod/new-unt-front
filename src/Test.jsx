import { Footer } from "./components/footer";
import { HeaderHome } from "./components/header-home";
import { HeaderMain } from "./components/header-main";
import { HeaderWorking } from "./components/header-working";
import { TopText } from "./components/top-text";
import { Header } from "./components/universals/header";


export const Test = () => {
    return (
        <div >
            <Header />
            <HeaderMain />
            <HeaderHome />
            <HeaderWorking />
            <Footer />
            <TopText text={'Test'}/>
        </div>
    );
};