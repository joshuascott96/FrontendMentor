import axios from 'axios'
import { useState, useEffect } from 'react'

function Card() {

    const [advice, setAdvice] = useState('')
    const url = 'https://api.adviceslip.com/advice'

    useEffect(() => {
        axios.get(url).then((response) => {
            setAdvice(response.data)
        })
    }, [url])

    const getAdvice = () => {
        axios.get(url).then((response) => {
            setAdvice(response.data)
        })
    }

    return (
        <div className='opacity-80 shadow-2xl card-blue max-w-md sm:max-w-lg sm:min-w-[500px] rounded-xl'>
            <div className='py-10 text-center'>
                <div className='px-12'>
                    <h3 className='uppercase neon tracking-[0.3em] font-bold text-xs'>Advice #{advice.slip?.id}</h3>
                    <p className='py-8 quote'>{advice.slip?.advice}</p>
                </div>
                <div className='pb-4 flex justify-center'>
                    <svg class="w-[295px] sm:w-[0px] h-4 sm:h-0" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
                    <svg class="w-[0px] sm:w-[444px] h-0 sm:h-4" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
                </div>
            </div>
            <div className='relative -translate-x-7 -translate-y-6 left-1/2'>
                <button onClick={getAdvice} className='absolute p-4 rounded-full neon-bg'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg></button>
            </div>
        </div >
    )
}

export default Card