import { createContext, useState, useEffect } from 'react';

const BillContext = createContext();

export const BillProvider = ({ children }) => {
    const [total, setTotal] = useState(0)
    const [bill, setBill] = useState(0)
    const [people, setPeople] = useState(1)
    const [custom, setCustom] = useState('')
    const [tip, setTip] = useState(0)
    const [tipTotal, setTipTotal] = useState(0)

    const handleReset = () => {
        setBill(0)
        setPeople(1)
        setCustom('')
        setTotal(0)
        setTipTotal(0)
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