export default function Greeter({person = "Aditya",from="Iron Man"}) {
  return (
    <>
  <h1>Hi there, {person}</h1>
  <h2>-{from}</h2>
  </>
   )
}