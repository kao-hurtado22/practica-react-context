import React, { useContext } from 'react';
import { GlobalContext } from '../store/appContext';

const Card = () => {
    const { store, actions} = useContext(GlobalContext);
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea pariatur non, numquam suscipit ipsam minus beatae optio. Eos temporibus maiores quia error nulla ut consectetur corporis ullam at, cum asperiores!
                </p>
                <button className="btn btn-primary" onClick={actions.saludo}>
                    Read More
                </button>
            </div>
        </div>
    )
}

export default Card;