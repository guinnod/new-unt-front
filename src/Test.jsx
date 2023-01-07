import { useContext } from 'react';
import { PageSkeleton } from "./components/universals/page-skeleton";
import { UniversalPages } from './components/universals/universal-pages';
import { DefaultContext } from './Context';
import { getPages } from './data/consts';


export const Test = () => {
    const {language } = useContext(DefaultContext);
    return (
        <PageSkeleton header='home' footer={true}>
            <UniversalPages content={getPages('testing', language)}/>
        </PageSkeleton>
    );
};