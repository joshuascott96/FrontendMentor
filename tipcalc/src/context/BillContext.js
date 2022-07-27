import { createContext, useState, useEffect } from 'react';

const BillContext = createContext();

export const BillProvider = ({ children }) => {
    const [total, setTotal] = useState('')
    const [bill, setBill] = useState('')
    const [people, setPeople] = useState('')
    const [custom, setCustom] = useState('')
    const [tip, setTip] = useState('')
    const [tipTotal, setTipTotal] = useState('')

    const handleReset = () => {
        setBill('')
        setPeople('')
        setCustom('')
        setTotal('0.00')
        setTipTotal('0.00')
    }

    useEffect(() => {
        calculation()
    }, [bill, people, tip, custom]);

    const calculation = () => {
        setTotal(bill / people)
        if (custom === '' || null) {
            setTipTotal(total * tip)
        } else {
            setTipTotal((total * custom) / 100)
        }
    }

    return <BillContext.Provider value={{
        bill,
        setBill,
        total,
        people,
        setPeople,
        handleReset,
        custom,
        setCustom,
        tip,
        setTip,
        tipTotal,
        setTipTotal
    }}>
        {children}
    </BillContext.Provider>
}

export default BillContext