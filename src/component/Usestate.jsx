import React, { useState } from 'react'

const Usestate = () => {
    const initailData = 12;
    const [Mynum, setMyData]  = useState(initailData);
  return (

    <>
      <div className='container'>
        <p>{Mynum}</p>
        <button onClick={() => setMyData(Mynum + 1)}>incre</button>
        <button onClick={() => (Mynum > 0 ? setMyData(Mynum - 1) : setMyData(0))}
        >dec</button>

      </div>
    </>
  )
}

export default Usestate;
