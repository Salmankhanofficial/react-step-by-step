import React, { useState } from 'react'

const Add = () => {
       
   const [curdata, updatedata] = useState(1223);
  return (
    <div>
      <p>{curdata}</p>
      <button onClick={() => updatedata(curdata + 2)}>add</button>
    </div>
  )
}

export default Add;
