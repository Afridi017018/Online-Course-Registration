import { useEffect } from "react"
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

     
    
    </div>
    </>
  )
  
}

export default App
