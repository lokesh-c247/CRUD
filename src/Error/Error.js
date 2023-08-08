import { useRouteError } from "react-router-dom";
import  "./Error.scss";

const Error = () => {
    const error = useRouteError();
    return (
                <div className={"errorCard-container"}>
                    <div className="errorCard">
                        <h1>Oops!</h1>
                        <p>Sorry, an unexpected error has occurred.</p>
                        <p><i>{error.statusText || error.message}</i></p>
                    </div>
                </div>
    )
}

export default Error;