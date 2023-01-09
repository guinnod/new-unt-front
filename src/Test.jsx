

import { Navigator } from "./components/navigator";
import { PageSkeleton } from "./components/universals/page-skeleton";





export const Test = () => {
    
    return (
        <PageSkeleton header='working' footer={true}>
           <Navigator />
        </PageSkeleton>
    );
};