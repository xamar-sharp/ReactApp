import { useRouteError } from 'react-router-dom';
function ErrorElement() {
    const errorObj = useRouteError();
    console.error(errorObj);
    return <div>
        <h2>{errorObj.statusText}</h2>
        <b>{errorObj.data}</b>
    </div>;
}
export default ErrorElement;