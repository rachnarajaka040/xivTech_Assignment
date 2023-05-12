import React from 'react';
import './collaborate.css';
function Collaborate(props) {

    return (

        <div className="parentdiv">


            <div className="maindiv card " >

                <div className=" childMainDiv row g-0">
                    
                    <div className="leftdiv col-md-8">
                        <div className="card-body">
                            <div className='h5Parent'>
                                <h2 className=" h5 card-title">{props.name}</h2>
                            </div>
                            <div className='h5pParent'>
                               <h3 className=" h5p card-text">{props.des}</h3>
                            </div>

                        </div>
                    </div>
                    <div className=" rightdiv col-md-4" >
                        <div className='rightdivchild'>
                           <img  src={props.src} className="rightimg img-fluid " alt="..." />
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Collaborate