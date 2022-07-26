import Billform from './Billform'
import Calculated from './Calculated'

function Card() {
    return (
        <div className='w-full sm:max-w-3xl p-7 rounded-xl shadow-xl bg-[#fff] grid grid-cols-2 gap-8'>
            <Billform />
            <Calculated />
        </div>
    )
}

export default Card