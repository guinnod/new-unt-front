
import { Card } from "./components/card";
import { PageSkeleton } from "./components/universals/page-skeleton";





export const Test = () => {
    
    return (
        <PageSkeleton header='working' footer={true}>
           <Card>
            
            
           </Card>
        </PageSkeleton>
    );
};