import { useState } from "react"



export default function Decryption(props) {

    const [decoded, setDecoded] = useState('')

    function handleDecode(encryptedMessage){
        console.log(encryptedMessage)
        setDecoded(window.atob(props.encryptedMessage))
    }

    return(
    <div>
        <label className="main">Расшифруйте свое сообщение</label> 
        <button className='buttons' onClick={handleDecode}>Расшифровать</button>
            <div className="decodeSection">
                {decoded}
            </div>
    </div>
    )
}