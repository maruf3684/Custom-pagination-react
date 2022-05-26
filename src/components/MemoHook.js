// import React, { useMemo, useState } from "react";

// const MemoHook = () => {
//   const[count,setCount]=useState(0);
//   const[item,setItem]=useState(0);
  
//   function multiCount(){
//     console.log("multicount");
//     return count*100;
//   }

//   const multiCountWithMemo=useMemo(multiCount, [item]);
 
//   console.log("render");
//   console.log(multiCountWithMemo);

// 	return (
// 		<>
// 			<div>Paginate</div>

//       <h1>{count}</h1>
//       <h1>{item}</h1>

//       <h1>Multicount:{multiCountWithMemo}</h1>


//       <button onClick={(e)=>{setCount(count+1)}}>update count</button>
//       <button onClick={(e)=>{setItem(count*5)}}>update item</button>


// 		</>
// 	);
// };

// export default MemoHook;
   