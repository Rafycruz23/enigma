
import './App.css';
import Decryption from './components/Decryption';
import { useEffect, useState } from 'react';



//The App takes an input and returns the encrypted message. the Decryption comp recieves the encrypted message. 
//The app uses the 64-based encoding btoa and decoding atob methods

function App() {
  
  const [today, setDate] = useState(new Date());

  useEffect(()=>{
    const timer = setInterval(()=>{
      setDate(new Date());
    }, 60 * 1);
    return ()=>{
      clearInterval(timer);
    }
  }, []);

  const hour = today.toLocaleTimeString('en-US');
  
  const [message, setMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  
    const handleSubmit = (e)=> {
        console.log(message)
        e.preventDefault();
        setEncryptedMessage(window.btoa(message))
        setMessage("")
    };

    const [decoded, setDecoded] = useState('')


    function handleDecode(encryptedMessage){
      console.log(encryptedMessage)
      setDecoded(window.atob(encryptedMessage))
  }

    // function changeFont(){
    //   document.getElementById("obscuredText").style.setProperty("font-family", "Press Start 2P");
    // }

return (
<div className="main">
  
    <h1>ЭНИГМА {hour}</h1>
    <label className="asterisk">****************************************************************************</label>
    <form onSubmit={handleSubmit} className='main'>
        <label>Введите свое сообщение для шифрования:</label>
        <textarea className='input'
            type="textarea"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}>
        </textarea>
          <div>
            <button type='submit' className="buttons">Зашифровать</button>
          </div>
    </form>
            <button type='submit' onClick="handleDecode()" className="buttons">DECODE</button>
    <label className="asterisk">****************************************************************************</label>
<div className='obscuredTextDiv'>
    <label className='obscuredText'>{message}</label> 
    <label className='obscuredText'>{decoded}</label> 
</div>
<div className='encryptedTxt'>
    <label>Зашифрованное сообщение:</label>
    <label className='obscuredText' id='obscuredText'>{encryptedMessage}</label>   
</div>
  <Decryption encryptedMessage={encryptedMessage}/>
</div>
  );
}

export default App;
