
import './App.css';
import Decryption from './components/Decryption';
import { useState } from 'react';


//The App takes an input and returns the encrypted message. the Decryption comp recieves the encrypted message. 
//The app uses the 64-based encoding btoa and decoding atob methods

function App() {
  
  const [message, setMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  
    const handleSubmit = (e)=> {
        console.log(message)
        e.preventDefault();
        setEncryptedMessage(window.btoa(message))
    };

return (
<div className="App">
  <div>
    <form onSubmit={handleSubmit}>
        <label>Enter your message to encrypt:</label>
        <input 
            type="text"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}>
        </input>
            <button>Encrypt</button>
    </form>

  </div>
      <Decryption encryptedMessage={encryptedMessage}/>
</div>
  );
}

export default App;
