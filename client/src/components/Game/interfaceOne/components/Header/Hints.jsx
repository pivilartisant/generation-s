

export function Hints(props) {

    console.log(props.hints)
  return (
    <div className="hints">
     <p> Hints : {props.hints}</p>
    </div>
  );
}