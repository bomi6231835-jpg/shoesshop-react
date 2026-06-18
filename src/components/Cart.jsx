import React, { useEffect, useState } from 'react'

const Cart = (props) => {
    const [count, setCount] = useState(0);

    // 컴포넌트 마운트 될 때 한번만
    useEffect(() => {
        console.log('Start')
        
    }, [])

    useEffect(() => {
        console.log('Hello');
        console.log(count)

        return () => {
            //clean up function
            console.log('초기화')
        }
    },[count])

    return (
        <div>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-blue-700" onClick={() => {
                setCount(Count+1)
            }}>버튼</button>
        </div>
    )
}
export default Cart