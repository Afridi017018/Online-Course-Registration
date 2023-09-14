
import { BiDollar, BiBookOpen } from "react-icons/bi";




import PropTypes from 'prop-types';

const Card = ({element, cartData, setCartData, totalCredit, setTotalCredit, remainingCredit, setRemainingCredit}) => {


const handleSelect = (e)=>{

    cartData.includes(e.courseName) || setCartData([...cartData, e.courseName]);
    setTotalCredit(totalCredit + e.credit);
    setRemainingCredit(remainingCredit - e.credit);
}
   
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-2xl">
                <figure className="px-5 pt-5">
                    <img src={element.image} alt="Shoes" className="rounded-xl w-64 h-36" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-base font-bold">{element.courseName}</h2>
                    <p className=' text-sm text-gray-500'>{element.courseDetails}</p>
                    <div className='flex my-2 text-gray-600 justify-between'>
                        
                    <div className='flex items-center gap-2'>
                    <BiDollar /><p>Price: {element.price}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <BiBookOpen /><p>Credit: {element.credit}hr</p>
                    </div>
                        
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handleSelect(element)} className=" bg-blue-600 text-white h-10 rounded-md w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    element: PropTypes.shape({
      image: PropTypes.string.isRequired,
      courseName: PropTypes.string.isRequired,
      courseDetails: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      credit: PropTypes.number.isRequired,
    }).isRequired,
    cartData: PropTypes.arrayOf(PropTypes.string).isRequired,
    setCartData: PropTypes.func.isRequired,
    totalCredit: PropTypes.number.isRequired,
    setTotalCredit: PropTypes.func.isRequired,
    remainingCredit: PropTypes.number.isRequired,
    setRemainingCredit: PropTypes.func.isRequired,
  };

export default Card;