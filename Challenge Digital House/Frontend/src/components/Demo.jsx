import React from 'react';
function Demo({ title }){

    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <h1> 
                { title }
            </h1>
            <ul>
                {
                    programmers.map((programmer, index)=>{
                        if(true){
                            console.log('dentro de if')
                        }
                        return(
                            <li key={index}>
                                {programmer}
                            </li>
                            
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Demo;  