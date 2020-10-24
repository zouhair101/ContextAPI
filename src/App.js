import React from 'react';
import Contacts from './components/contacts/Contacts';
import {Provider} from './components/context'

function App() {
  return (
    <Provider> 
      <div className="App">
        <Contacts/>
      </div>
    </Provider>
  );
}
export default App;
