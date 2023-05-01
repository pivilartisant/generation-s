import "./validateButton.css"

export function ValidateButton (props) {
    function handleClick () {
        props.setIsValid(true)
        console.log(props.isValid)
    }

    return (
        <button onClick={()=>handleClick()} className="validate-button">
            Validate
        </button>
    )
}