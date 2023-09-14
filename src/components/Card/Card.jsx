import React from 'react';
import fakeData from '../../FakeData/fakeData.json'
import { BiDollar, BiBookOpen } from "react-icons/bi";

const Card = () => {
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-2xl">
                <figure className="px-5 py-2">
                    <img src={fakeData[0].image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-base font-medium">{fakeData[0].courseName}</h2>
                    <p className=' text-sm text-gray-500'>{fakeData[0].courseDetails}</p>
                    <div className='flex my-2 text-gray-600 justify-between'>
                        
                    <div className='flex items-center gap-2'>
                    <BiDollar /><p>Price: {fakeData[0].price}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <BiBookOpen /><p>Credit: {fakeData[0].credit}hr</p>
                    </div>
                        
                    </div>
                    <div className="card-actions">
                        <button className=" bg-blue-600 text-white h-10 rounded-md w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;