// import { React, useState } from "react";
// import TextField from "@mui/material/TextField";
// import ProductCards from "./ProductCards"

// export default function SearchBar({products}) {
//   const [inputText, setInputText] = useState("");
//   let inputHandler = (e) => {
//     //convert input text to lower case
//     var lowerCase = e.target.value.toLowerCase();
//     setInputText(lowerCase);
//   };
// console.log(products)
//   return (
//     <div className="main">
//       <h1>Search</h1>
//       <div className="search">
//         <TextField
//           id="outlined-basic"
//           onChange={inputHandler}
//           variant="outlined"
//           fullWidth
//           label="Search"
//         />
//       </div>
//       <ProductCards products={products} inputText={inputText}/>
//     </div>
//   );
// }
