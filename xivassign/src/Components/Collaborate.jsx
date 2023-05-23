import React from 'react';
import './collaborate.css';
function Collaborate(props) {

    return (

        <div className="parentdiv">


            <div className="maindiv card " >

                <div className=" childMainDiv row ">
                    
                    <div className="leftdiv ">
                        <div className="card-body">
                            <div className='h5Parent'>
                                <h2 className=" h5 ">{props.name}</h2>
                            </div>
                            <div className='h5pParent'>
                               <h3 className=" h5p ">{props.description}</h3>
                            </div>

                        </div>
                    </div>
                    <div className="rightdiv">
                        <div className='rightdivchild'>
                           <img src={props.src} className="rightimg" alt="..." />
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Collaborate




