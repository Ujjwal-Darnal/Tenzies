export default function Dice(props){
    const styles = {
        backgroundColor:props.isHeld?"#2ff308":"white"
    }
return(
    <button 
    onClick={props.hold}
    style={styles}
    aria-pressed = {props.isHeld} 
    aria-label={`Dice with value ${props.value},${props.isHeld? "held":"not held"}`}>
        {props.value}</button>
)
}