export default function ListPicker({values}){
    const randomIndex = Math.floor(Math.random() * values.length)
    const randomValue = values[randomIndex]
    return (
        <div>
            <p>The list of values:{values}</p>
            <p>Random element is {randomValue}</p>
        </div>
    )
}