import Billform from './Billform'
import Calculated from './Calculated'

function Card() {
    return (
        <div className='w-full max-w-lg sm:max-w-3xl p-7 rounded-xl shadow-xl bg-[#fff] grid sm:grid-cols-2 gap-8'>
            <Billform />
            <Calculated />
        </div>
    )
}

export default Card