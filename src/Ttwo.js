import React from "react";

function Ttwo() {

  const max=()=>{
  const a=[50,40,60,70];
  const b=Math.floor(Math.random() *4 )
  return a[b]
}

  return (<div>
    <p>Current Discount {max()}%</p>
    </div>
    );
}
export default Ttwo;