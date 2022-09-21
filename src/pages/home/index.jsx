import { useNavigate } from "react-router-dom";

export const Home = () => {

    let navigate = useNavigate();
    async function toPage(path) {
        navigate(`./${path}`, { replace: false })
    }
    return (
        <div>
            Home
            <div onClick={() => { toPage('profile') }}>Profile</div>
            <div onClick={() => { toPage('testing') }}>Testing</div>
            <div onClick={() => { toPage('practice') }}>Practice</div>
            <div onClick={() => { toPage('theory') }}>Theory</div>
            <div onClick={() => { toPage('additional') }}>Additional</div>
        </div>
    );
};