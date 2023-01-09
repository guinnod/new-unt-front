
import { CardMain } from './components/card-main';
import { PageSkeleton } from "./components/universals/page-skeleton";
import { testing } from './media';



export const Test = () => {
    
    return (
        <PageSkeleton header='home' footer={true}>
            <CardMain image={testing} text='Testing' path='testing'/>
        </PageSkeleton>
    );
};