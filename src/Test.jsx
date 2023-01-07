import { useSelector } from 'react-redux';
import { PageSkeleton } from "./components/universals/page-skeleton";
import { UniversalPages } from './components/universals/universal-pages';
import { getPages } from './data/consts';


export const Test = () => {
    const language = useSelector((state)=> {
        return state.language;
    })
    return (
        <PageSkeleton header='home' footer={true}>
            <UniversalPages content={getPages('testing', language)}/>
        </PageSkeleton>
    );
};