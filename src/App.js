// import { Box } from "@mui/material";
// function App() {
//   return (
//     <DataProvider>
//       <Header />
//       {/* because material ui sets default position fixed so we want only header to be fixed so we use Box  */}
      
//     </DataProvider>
//   );
// }

// export default App;


import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import DataProvider from './context/DataProvider';
import DetailView from "./Components/details/Detailview";
import Cart from "./Components/cart/Cart";

// import ContextProvider from "./context/ContextProvider";
import { Box } from "@mui/material";



import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
   
     <DataProvider>
         <BrowserRouter>
            <Header />
            <Box style={{marginTop:54}}>
              <Routes>

                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<DetailView />} />
                  <Route path="/cart" element={<Cart />} />

              </Routes>
            </Box>
         </BrowserRouter>
     </DataProvider>
     
    
  );
}

export default App;
