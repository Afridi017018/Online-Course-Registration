import PropTypes from 'prop-types';



const Cart = ({cartData, totalCredit, remainingCredit}) => {

    
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title text-base font-bold text-blue-500">Credit Hour Remaining {remainingCredit} hr</h2>
                    <hr />
                    <h2 className='text-lg font-bold'>Course Name</h2>
                    <div>
                        <ol className='list-decimal pl-4 text-gray-500'>
                            {
                                cartData.map((courseName,index)=>(
                                    <li key={index+1}>{courseName}</li>
                                ))
                            }
                        </ol>
                    </div>
                    <hr />
                    <div>
                        <h3 className='text-base font-medium text-gray-600'>Total Credit Hour: {totalCredit}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cartData: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalCredit: PropTypes.number.isRequired,
    remainingCredit: PropTypes.number.isRequired,
  };

export default Cart;