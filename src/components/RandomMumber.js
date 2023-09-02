import {useState} from "react";
import generateRandomNum from "../utils/generateRandomNum";

function RandomMumber(){
    const [randomNum, serRandomNum] = useState(generateRandomNum())
    const changeRandomMum = () => {
        serRandomNum(generateRandomNum())
    }
    return(
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomMum}>Genetate new random number</button>
        </div>
    )
}

export default RandomMumber
