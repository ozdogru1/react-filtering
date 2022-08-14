import React from 'react'

const OrderSummary = () => {
  return (
    <div>
         <div id="summary" className=" py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span className='pr-12'>$600</span>
              </div>
              <button className="bg-blue-500 rounded font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
    </div>
  )
}

export default OrderSummary