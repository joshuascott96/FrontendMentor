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

    return (
        <div className='card-blue max-w-lg w-full rounded-xl px-10 py-10 text-center'>
            <h3 className='uppercase neon tracking-[0.3em] font-bold text-xs'>Advice #{advice.slip?.id}</h3>
            <p className='pt-8'>{advice.slip?.advice}</p>
        </div>
    )
}

export default Card