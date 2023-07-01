import { useState } from "react"



export default function Decryption(props) {

    const [decoded, setDecoded] = useState('')

    function handleDecode(encryptedMessage){
        console.log(encryptedMessage)
        setDecoded(window.atob(props.encryptedMessage))
    }

    return(
    <div className="decrypt">
        <label className="asterisk">****************************************************************************</label>
        <label className="main">Расшифруйте свое сообщение</label> 
        <button type="submit" className='buttons' onClick={handleDecode}>Расшифровать</button>
            <div className="decodeSectionDiv">
                {decoded}
            </div>
    </div>
    )
}