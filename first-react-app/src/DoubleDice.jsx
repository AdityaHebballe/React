export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1
    const num2 = Math.floor(Math.random() * 3) + 1
    const isWinner = num1 === num2
    const styles = {color: isWinner ? "green" : "red", fontSize: "40px"}
    return (
        <div className="DoubkeDice" style={styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3>You win!</h3>}
            <p>Num1:{num1}</p>
            <p>Num1:{num2}</p>
            <p>DOUBLES!</p>
        </div>
    )
    
}

// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1
//     const num2 = Math.floor(Math.random() * 3) + 1
//     return (
//         <div>
//             <h2>{num1 === num2 ? "You win!" : "You lose!"}</h2>
//             <p>Num1:{num1}</p>
//             <p>Num1:{num2}</p>
//             <p>DOUBLES!</p>
//         </div>
//     )
    
// }