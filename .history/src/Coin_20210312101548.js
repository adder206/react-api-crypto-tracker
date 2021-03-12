import React from 'react';

const Coin = ({name, image, symbol, price, volume, market_cap, price_change_percent}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    <p className="coin-marketcap">${market_cap.toLocaleString()}</p>
                    <p className="coin-percentage">%{price_change_percent}</p>
                </div>
            </div>
        </div>
    );
};

export default Coin
