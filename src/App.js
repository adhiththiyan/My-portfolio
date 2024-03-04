









import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routers/About";
import Contact from "./routers/Contact";
import Home from "./routers/Home";
import Project from "./routers/Project";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



















// import { Route, Routes } from "react-router-dom";
// import About from "./routers/About";
// import Contact from "./routers/Contact";
// import Home from "./routers/Home";
// import Project from "./routers/Project";


// function App() {
//   return (
//     <div>
//       <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/project" element={<Project/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/contact" element={<Contact/>}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;
