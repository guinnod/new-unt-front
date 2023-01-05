import { Footer } from "../../footer";
import { Header } from "../../header";
import { HeaderHome } from "../../header-home";
import { HeaderWorking } from "../../header-working";


export const PageSkeleton = ({ header, footer, children }) => {
    return (
        <>
            <div>
                PageSkeleton
            </div>
            {header == 'home' ? <HeaderHome /> : header == 'working' ? <HeaderWorking /> : <Header />}
            {children}
            {footer ? <Footer /> : <></>}
        </>
    );
};