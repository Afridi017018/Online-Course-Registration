import { useEffect, useState } from "react"
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";


import fakeData from "./FakeData/fakeData.json"

function App() {

  const [cartData, setCartData] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  return (
    <>
    <div className="container mx-auto">
    <Header />

     <div className="flex gap-5">
     <div className="grid grid-cols-3 gap-5 mb-10">
     {
      fakeData.map((element,index)=>(
        <div key= {index+1}>
          <Card 
          element ={element} 
          cartData={cartData} 
          setCartData={setCartData} 
          totalCredit ={totalCredit}
          setTotalCredit={setTotalCredit}
          remainingCredit={remainingCredit}
          setRemainingCredit={setRemainingCredit}
          />
     
        </div>
      ))
     }
     </div>

    <div>
      <Cart cartData={cartData} totalCredit ={totalCredit} remainingCredit={remainingCredit} />
    </div>

     </div>
    
    </div>
    </>
  )
  
}

export default App
