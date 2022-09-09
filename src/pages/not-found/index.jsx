export const NotFound = () => {
    const toMain = () => {
        window.open('http://localhost:3000/', '_self')
    }
    return (
        <div>
            Page not found
            <div onClick={toMain}>
                to Main
            </div>
        </div>
    );
};