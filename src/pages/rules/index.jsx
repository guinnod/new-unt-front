export const Rules = ({content, setRules}) => {   
    return (
        <div>
            Rules
            <div>
                {content}
            </div>
            <div onClick={()=>{setRules(false)}}>Start</div>
        </div>
    );
};