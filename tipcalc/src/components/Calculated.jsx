import { useContext } from 'react'
import BillContext from '../context/BillContext'

function Calculated() {
    const { total, handleReset, custom, tipTotal } = useContext(BillContext)

    return (
        <div className='calc-content rounded-xl px-8 pt-10 pb-8 text-[#fff]'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-sm'>Tip Amount</h3>
                    <p className='text-xs opacity-50 pt-1'>/ person</p>
                </div>
                <div>
                    <h2 className='text-4xl'>${tipTotal.toLocaleString()}</h2>
                </div>
            </div>
            <div className='flex justify-between mt-12'>
                <div>
                    <h3 className='text-sm'>Total</h3>
                    <p className='text-xs opacity-50 pt-1'>/ person</p>
                </div>
                <div>
                    <h2 className='text-4xl'>${total.toLocaleString()}</h2>
                </div>
            </div>
            <div className='mt-20 w-full text-center'>
                <button onClick={handleReset} className='btn-primary w-full py-2 rounded-lg'>RESET</button>
            </div>
        </div>
    )
}

export default Calculated