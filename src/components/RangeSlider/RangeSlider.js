import React from 'react';
import "./rangeslider.css";

const RangeSlider = ({min, max, name, value, onChange}) => {
    return (
        <div className="ranges-item">
            <div className="ranges-item__description">
                <span>Название: <strong>{name}</strong></span>
                <span>Значение диапазона: <strong>{value}</strong></span>
            </div>
            <div className="ranges-item__input">
                <input type="range" min={min} max={max} value={value} onChange={onChange} />
            </div>
            <div className="ranges-item__meaning">
                <span>Мин. значение: <strong>{min}</strong></span>
                <span>Макс. значение: <strong>{max}</strong></span>
            </div>
        </div>
    );
};

export default RangeSlider;