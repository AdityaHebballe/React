import './App.css'
// import Chicken from './Chicken'
import Die from './Die'
import DoubleDice from './DoubleDice'
import Greeter from './Greeter'
import Heading from './Heading'
import ListPicker from './ListPicker'
import ColorList from './ColorList'
import ShoppingList from './ShoppingList'
import Clicker from './Clicker'
import Form from './Form'

const data  =[
  {id:1,item:"eggs",quantity:2,completed:false},
  {id:2,item:"milk",quantity:2,completed:true},
  {id:3,item:"carrots",quantity:5,completed:false},
  {id:4,item:"cucumber",quantity:4,completed:true}
]

function App() {
  return (
  <div>
    <Form/>
    <Clicker/>
    {/* <ShoppingList items={data}/> */}
    {/* <Heading color='magenta' text="magenta" fontSize="40px"/>
    <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/>
    <ColorList colors={["red","pink","purple","teal"]}/>
    <ColorList colors={["olive","orangered","aliceblue"]}/> */}
    {/* <ListPicker values = {[1,2,3,4]}/>
    <ListPicker values = {['a','b','c']}/>
    <Greeter person="Aditya" from="Colt"/>
    <Greeter person="John" from="John Wick"/>
    <Greeter/>
    <Die numSides = {20}/>
    <Die numSides = {10}/>
    <Die/> */}
  </div>
  )
}
export default App
