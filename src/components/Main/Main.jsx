import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} =useContext(Context)
  return (
    <div className='main'>

        <div className="nav">
            <p>HevByte</p>

            <img src={assets.shadow} alt="" />
        </div>


        <div className="main-container">

            {!showResult?
            <>
            <div className="greet">
                <p><span>Hello oh Brilliant one,</span></p>
                <p>How may I help you today ?</p>

            </div>

            <div className="cards">
                <div className="card">
                    <p> Countries that have won the FIFA World Cup</p>
                    <img  src={assets.compass_icon}  alt="" />

                </div>

                <div className="card">
                    <p>Tell me an interesting fact I might not know</p>
                    <img  src={assets.bulb_icon}  alt="" />
                    
                </div>

                <div className="card">
                    <p>Best tourist places to visit in Birmingham </p>
                    <img  src={assets.message_icon}  alt="" />
                    
                </div>

                <div className="card">
                    <p>Recommend a book based on my mood</p>
                    <img  src={assets.code_icon}  alt="" />
                    
                </div>

            </div>
            
            </> 
            :
           <div className="result">
            <div className="result-title">
                <img src={assets.shadow} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.lightning} alt="" />
                {loading?
                <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>:
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }

                
            </div>
           </div>
            }
            

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt'/>
                    <div className="div">
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img  onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    HevByte may display incorrect info ,it's Powered by curiosity, driven by innovation – your journey starts here !🚀  
                </p>
            </div>
        </div>

       
      
    </div>
  )
}

export default Main
