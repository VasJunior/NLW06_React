import { createContext, useState } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./Pages/Home";
import { NewRoom } from "./Pages/newRoom";

export const TestContext = createContext({} as any); 

function App() {
  const [value, setValue] = useState('Teste');

  return (
    <BrowserRouter>
      <TestContext.Provider value={{ value, setValue}}>
        <Route path="/" exact component={Home}/>    
        <Route path="/rooms/new" component={NewRoom}/>
      </TestContext.Provider>
    </BrowserRouter>
      
  );
}

export default App;
