import React, {useState} from 'react'


const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0)
    //variable, function to tell react to update current count
    const handleClick = () => {
        setCurrentCount(currentCount+props.incrementBy)

    }
    const buttonStyles ={
        background: props.buttonColor,
        //border-radius = borderRadius



    }

    return (
    <div >
        <button style={buttonStyles}onClick={handleClick}>+{props.incrementBy}</button>
        <div>{currentCount}</div>

    </div>
    )

}

export default CountButton
