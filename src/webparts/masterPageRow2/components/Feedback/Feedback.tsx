import * as React from 'react'
import './Feedback.scss'
// import {IoMdSend} from "react-icons/io";
import { getSP } from '../pnpConfig';
import { SPFI } from '@pnp/sp';
import "@pnp/sp/sputilities";
// import { IFeedbackprops } from './IFeedbackprops';

import { IItemAddResult } from "@pnp/sp/items";

const Feedback = (props:any) => {

const [fb, setFb] = React.useState<any>()
  const postFeedback = async() =>{
    // alert("a");
    let _sp: SPFI = getSP(props.context);
    const list:IItemAddResult = await _sp.web.lists.getByTitle("FeedBackForm-List").items.add({
      Complients_x002f_Comments: fb,
      DepartmentNameId: props.depID
    });
    console.log(list)
    
    _sp.utility.sendEmail({
      To:[props.repman],
      Subject:"Recived Feedback ",
      Body:"You got feedback",
      AdditionalHeaders:{
        "content-type":"text/html"
      }
    })



  }

console.log(fb);

  return (
    <div className='rowMains'>
            <div className="feedbackTitle">
              <p>Enter Feedback:</p>
            </div>
            <div className='formDiv'>
                  
                    <div className="field"><textarea placeholder='Feedback......' onChange={(e)=>setFb(e.target.value)}></textarea></div> 
                    <div className='submitBtn'><button onClick={()=>postFeedback()}>Submit Feedback</button></div>
                </div>
            </div>

    // <div><h4>Opinion Poll</h4></div>
  )
}

export default Feedback