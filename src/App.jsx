import { useEffect, useState } from "react"
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {

  const [fakeData, setFakeData] = useState([])
  const [cartData, setCartData] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  useEffect(() => {

    fetch(`fakeData.json`)
      .then(res => res.json())
      .then(data => setFakeData(data))

  }, [])



  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container mx-auto">
        <Header />

        <div className="lg:flex lg:flex-row lg:items-start gap-5 flex flex-col items-center justify-center mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              fakeData.map((element, index) => (
                <div key={index + 1}>
                  <Card
                    element={element}
                    cartData={cartData}
                    setCartData={setCartData}
                    totalCredit={totalCredit}
                    setTotalCredit={setTotalCredit}
                    remainingCredit={remainingCredit}
                    setRemainingCredit={setRemainingCredit}
                  />

                </div>
              ))
            }
          </div>

          <div>
            <Cart cartData={cartData} totalCredit={totalCredit} remainingCredit={remainingCredit} />
          </div>

        </div>

      </div>
    </>
  )

}

export default App
