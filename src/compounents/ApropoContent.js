    import React, { useState } from 'react'
    import {RiArrowDownSLine} from "react-icons/ri";
    import {IoIosArrowUp} from "react-icons/io";



    const ApropoContent = ({text, titleText}) => {
        

        const [textState, setTextState] = useState(false);
        const [iconeState, setIconState] = useState(true);
        const [Outline, setOutlineState] = useState(false);

    return (
        <>

<div className='bloc-apropos'>
                    
                    <div className='fiabilité'>
                        <h5> {titleText} </h5>
                    { 
                    
                    iconeState ? <RiArrowDownSLine className="icon-apropos" onClick={() => {
                            setIconState(!iconeState)
                            setOutlineState(true)
                            setTextState(!textState)

                    }}/> :  Outline && <IoIosArrowUp className="icon-apropos" onClick={() => {
                            setTextState(false)
                            setIconState(true)

                    }}/>
                        
                    }
                        
                    </div>
                    {
                            textState &&

                                <div className='text-apropos'>
                                    {text}
                                </div>                                 
                            } 
                    
                </div> 

        
        </>
    )
    }

    export default ApropoContent;