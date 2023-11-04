import React,{useState} from 'react'
import '../App.css';

export default function Child() {

        function Onchangefunction(event){
            settext(event.target.value);
        }

        function Capitalize(){
            let newtext=text.toUpperCase();
            settext(newtext)
        }
        function Lowercase(){
            let newtext=text.toLowerCase();
            settext(newtext)
        }
        function ClearText(){
            let newtext=text.toLowerCase();
            settext(" ")
        }




        const [text,settext]=useState(" this is default text ")
    return (
        <div>
            <div className='mb-3 container '>

                    <label for="my-box" className='form-label label'>
                        Textarea
                    </label>
                    <textarea className='form-control textarea' id="my-box" value={text} onChange={Onchangefunction} rows="3">
                    </textarea>
                    <div>
                        <button  className="btn button" onClick={Capitalize}>Change to uppecase</button>
                        <button  className="btn button" onClick={Lowercase}>Change to Lowercase</button>
                        <button  className="btn button" onClick={ClearText}>ClearText</button>
                    </div>
            </div>

            <div className='mb-3 container '>
                <h1>YOUR TEST SUMMERY</h1>
                <p>{text.split(" ").length} words</p>
                <p>{text.length} charecters</p>
                <p>{0.008 * text.split(" ").length} minutes to read </p>
            </div>
        </div>
    )
}
