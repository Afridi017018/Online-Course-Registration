import { useEffect } from "react"
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";


import fakeData from "./FakeData/fakeData.json"

function App() {

  useEffect(()=>{
    console.log(fakeData[0].image);
  }, [])

  return (
    <>
    <div className="container mx-auto">
    <Header />

     <div className="flex">
     <div className="grid grid-cols-3">
     <Card />
     <Card />
     <Card />
     </div>

    

     </div>
    
    </div>
    </>
  )
  
}

export default App
