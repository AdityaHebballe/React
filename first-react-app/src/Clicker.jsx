function hancleClick() {
    console.log('Clicked');
}

function handleHover(){
    console.log('Hovered');

}
export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Click the Button</p>
            <button onClick={hancleClick} >Clicker</button>
        </div>
    )
}