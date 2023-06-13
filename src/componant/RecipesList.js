// import { recipesList } from "./data";
// import React, { useState } from 'react'

// export default function RecipesList() {
//     const [filteredList , setFilteredList] = useState(recipesList)

//    function search(e){

//     let s = e.target.value ;
//     console.log(s);
//     let updatedList = recipesList.filter((item)=>{
//         return item.name.toLocaleLowerCase().includes(s.toLocaleLowerCase())
//     })
//     setFilteredList(updatedList)

//    }

//   return (
//     <>
//      <input type="text" placeholder="Enter you meal" onChange={search} />
//     {/* {recipesList.map((recipe,index) =>{
//        return <div className='recipe-card__header' key={index}>
//         <h6> {recipe.name}</h6>
//         <img width={200} src={recipe.image}/>
//         </div>
//     })} */}

//         </>
//   )
// }











// import React, { useState } from "react";
// import { recipesList } from "./data";
// import "./Recipes.css";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// export default function RecipesList() {
//   const [meal, setMeal] = useState(recipesList);

//   const search = (event) => {
//     let query = event.target.value;

//     let updatedList = recipesList.filter((item) => {
//       return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
//     });
//     setMeal(updatedList);
//   };

//   return (
//     <div className="app">
//       <input
//         type="search"
//         className="form-control"
//         placeholder="text"
//         aria-label="Search"
//         onChange={search}
//       />

//       <br />
//       <br />

//       {meal.map((recipe, index) => {
//         return (
//           <div Card>
//             <div className="recipe-card__header" key={index}>
//               <h6> {recipe.name}</h6>
//               <img width={200} src={recipe.image} />
           
//             </div>
       
//           </div>
//         );
//       })}
//     </div>
//   );
// }






import React, { useState } from "react";
import { recipesList } from "./data";
import "./Recipes.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { left } from "@popperjs/core";

export default function RecipesList() {
  const [meal, setMeal] = useState(recipesList);

  const search = (event) => {
    let query = event.target.value;

    let updatedList = recipesList.filter((item) => {
      return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });
    setMeal(updatedList);
  };

  return (
    <div className="app">
      <input
        type="search"
        className="" style={{width:"30rem" , borderRadius:"20px" , paddingLeft:"10rem"}}
        placeholder="Search for Your Favorite Car "
        aria-label="Search"
        onChange={search}
      />

      <br />
      <br />

      <Container fluid>
        <Row>
          {meal.map((recipe, index) => {
            return (
              <Col md={4} key={index}>
                <div className="recipe-card__header" >
                  <h6 style={{fontSize:"25px"}}>{recipe.name}</h6>
                  <img width={350} src={recipe.image} style={{borderRadius:"20px" ,}} />
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <br></br>
      <br></br>
    </div>
  );
}
