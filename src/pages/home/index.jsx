import { useSelector } from "react-redux";
import { CardMain } from "../../components/card-main";
import { TopText } from "../../components/top-text";
import { PageSkeleton } from "../../components/page-skeleton";
import { add, practice, testing, theory } from "../../media";
import './home.css';
export const Home = () => {

    const language = useSelector(state => state.language.value.home);
    const homePages = [
        {
            image: testing,
            text: language.testing,
            path: 'testing'
        }, {
            image: practice,
            text: language.practice,
            path: 'practice'
        }, {
            image: theory,
            text: language.theory,
            path: 'theory'
        }, {
            image: add,
            text: language.additional,
            path: 'additional'
        },
    ];


    return (
        <PageSkeleton header='main' footer={true}>
            <TopText text={language.typesOf} />
            <div className='home__anchor'>
                {homePages.map(({ image, text, path }, index) => {
                    return (
                        <CardMain key={index} image={image} text={text} path={path} />
                    );
                })}
            </div>
        </PageSkeleton>

    );
};