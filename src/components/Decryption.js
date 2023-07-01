import { useState } from "react"

//This sections takes the 64 encrypted message and decodes it to plain text. 

export default function Decryption(props) {

    // const [decoded, setDecoded] = useState('')
    
    // function handleDecode(encryptedMessage){
    //     console.log(encryptedMessage)
    //     setDecoded(window.atob(props.encryptedMessage))
    // }
    
    const [messageToDecode, setMessagetoDecode] = useState('')
    const [decodedMessage, setDecodedMessage] =useState('')
    const handleSubmitDecode = (e)=> {
        e.preventDefault();
        setDecodedMessage(window.atob(messageToDecode))
        setMessagetoDecode("") 
    }

    return(
    <div className="decrypt">
        <label className="asterisk">****************************************************************************</label>
        <form onSubmit={handleSubmitDecode} className='main'>
        <label>Входное сообщение для дешифровки:</label>
        <textarea className='input'
            type="textarea"
            value={messageToDecode}
            onChange={(e)=>setMessagetoDecode(e.target.value)}>
        </textarea>
          <div>
            <button type='submit' className="buttons">Зашифровать</button>
          </div>
    </form>
        {/* <label className="main">Расшифруйте свое сообщение</label>  */}
        {/* <button type="submit" className='buttons' onClick={handleDecode}>Расшифровать</button> */}
            <div className="decodeSectionDiv">
                {decodedMessage}
            </div>
    </div>
    )
}