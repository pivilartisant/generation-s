export function Timer (props){
    return (
        <div className="timer">
            <p> Timer {props.timer || ": 45s"}</p>
        </div>
    )
}