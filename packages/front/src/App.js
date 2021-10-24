import { useEffect, useState } from 'react';
import { joinPath } from '@monoapp/utils';
import {
    SERVER_DEV_URL,
    API_DEFAULT_URL,
} from '@monoapp/variables';

export const App = () => {
    const [data, setData] = useState('');
    console.log(joinPath(1,2,3));
    console.log(SERVER_DEV_URL, API_DEFAULT_URL);
    console.log(joinPath(SERVER_DEV_URL, API_DEFAULT_URL));
    useEffect(() => {
        fetch(joinPath(SERVER_DEV_URL, API_DEFAULT_URL))
            .then(request => request.json())
            .then(greeting => setData(greeting))
            .catch(error => setData(`Error: '${error.message}'`));
    });
    return (
        <h1>{data}</h1>
    );
}

export default App;
