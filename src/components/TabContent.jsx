import React, { useContext, useEffect, useState } from 'react'
import { Context1 } from '../App';

const TabContent = ({ tab }) => {
    const [ fade, setFade ] = useState('')
    const {remain, shoes} = useContext(Context1);
 

    useEffect(() => {
        const aniTimer = setTimeout(() => { setFade('end') }, 50)
        return () => {
            setFade('')
            clearTimeout(aniTimer)
        }
    }, [tab])

    return (
            <div className= {"text-center start " + fade}>
                {[<div>내용0<br />{remain[0]}{shoes[0].title}</div>,
                <div>내용1</div>, <div>내용2</div>]
                [tab]}
            </div>
    )
}

export default TabContent