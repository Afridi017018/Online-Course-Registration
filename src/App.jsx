import { useEffect } from "react"


import fakeData from "./FakeData/fakeData.json"

function App() {

  useEffect(()=>{
    console.log(fakeData[0].image);
  }, [])

  return (
    <>
    <h1>hi</h1>
    </>
  )
}

export default App
