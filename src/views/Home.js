import React, { useContext } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Card from '../components/Card';
import { GlobalContext } from '../store/appContext';

const Home = ({ history: history2, location: location2, match, ...props }) => {

    const history = useHistory();
    const location = useLocation();
    const params = useParams();

    const { actions: { saludo, despedida, a } } = useContext(GlobalContext);

    return (

        <>
            <h1>Home</h1>
            <button onClick={despedida}>Aqui</button>
            <button onClick={a}>Actualizar</button>
            <Card a={saludo} />
        </>

    )
}

export default Home;