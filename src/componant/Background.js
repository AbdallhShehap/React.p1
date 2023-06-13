// import React from "react";

// import Carousel from "react-bootstrap/Carousel";

// function Background() {
//   return (
//     <Carousel variant="dark w-100">
//       <Carousel.Item className="landing">
//         <img
//           className="w-100 img1"
//           src={require("./imgs/amain.jpg")}
//           alt="First slide" style={{objectFit: "cover"}}
//         />
//         {/* <Carousel.Caption
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             color: "white",
//           }}
//         >
//           <h5>BMW</h5>
//           <p>X5 V8 Engine</p>
//         </Carousel.Caption> */}
//       </Carousel.Item>
//       <Carousel.Item className="landing">
//         <img
//           className="w-100"
//           src={require("./imgs/car-race-ge04c0c78a_640.jpg")}
//           alt="First slide" style={{ objectFit: "cover" }}
//         />
//         {/* <Carousel.Caption
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             color: "white",
//           }}
//         >
//           <h5>Mosteng</h5>
//           <p> V6 Engine</p>
//         </Carousel.Caption> */}
//       </Carousel.Item>
//       <Carousel.Item className="landing">
//         <img
//           className="w-100"
//           src={require("./imgs/auto-g11c6c8335_640.jpg")}
//           alt="First slide"
//         />
//         {/* <Carousel.Caption
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             color: "white",
//           }}
//         >
//           <h5>Marcedce-Benz</h5>
//           <p> V6 Engine</p>
//         </Carousel.Caption> */}
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Background;




import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Background() {
  return (
    <Carousel variant="dark w-100">
      <Carousel.Item className="landing">
        <img
          className="w-100 img1"
          src={require("./imgs/amain.jpg")}
          alt="First slide"
          style={{ objectFit: "fill" , height: "90vh" }}
        />
      </Carousel.Item>
      <Carousel.Item className="landing">
        <img
          className="w-100"
          src={require("./imgs/car-race-ge04c0c78a_640.jpg")}
          alt="First slide"
          style={{ objectFit: "cover", height: "100vh" }}
        />
      </Carousel.Item>
      <Carousel.Item className="landing">
        <img
          className="w-100"
          src={require("./imgs/auto-g11c6c8335_640.jpg")}
          alt="First slide"
          style={{ objectFit: "fill", height: "100vh" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Background;
