import React, {useState} from 'react';
import RangeSlider from "./components/RangeSlider/RangeSlider";
import "./components/RangeSlider/rangeslider.css";

const App = () => {
    const [ranges, setRanges] = useState([
        {
            id: 1,
            name: "RangeSlider №1",
            min: 0,
            max: 100,
            value: 0
        },
        {
            id: 2,
            name: "RangeSlider №2",
            min: 0,
            max: 500,
            value: 50
        },
        {
            id: 3,
            name: "RangeSlider №3",
            min: 100,
            max: 800,
            value: 150
        }
    ])

    const changeRanges = (e, id) => {
        setRanges([...ranges.filter(el => el.id === id ? el.value = e.target.value : "0")])
    }

    return (
        <div className="container">
            {ranges.map(({id, name, min, max, value}) =>
                <div key={id} className="ranges">
                    <RangeSlider
                        name={name}
                        min={min}
                        max={max}
                        value={value}
                        onChange={(e) => changeRanges(e, id)}
                    />
                </div>
            )}
        </div>
    );
};

export default App;