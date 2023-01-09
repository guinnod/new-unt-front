import { Provider } from "react-redux";
import store from "../../../store/quiz";
import { UniversalTestingContent } from "./content";

export const UniversalTesting = ({ content }) => {
    
    return (
        <Provider store={store}>
            <UniversalTestingContent content={content} />
        </Provider>
    );
};