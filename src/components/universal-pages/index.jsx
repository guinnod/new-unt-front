import { useNavigate } from 'react-router-dom';
export const UniversalPages = ({ content }) => {
    let navigate = useNavigate();

    async function toPage(path) {
        navigate(`./${path}`, { replace: false });
    }
    return (
        <div>
            {content.title}
            {content.subtypes.map(({ path, text, subText, src }) => (
                <div key={path} onClick={() => { toPage(path) }}>
                    <div>{text}</div>
                    <div>{subText}</div>
                </div>
            ))}
        </div>
    );
};