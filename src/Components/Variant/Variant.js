import React, { useEffect, useRef, useState } from 'react';
import './Variant.css'

export default function Variant(props) {

    let myref=useRef(null);
    let letter=['A','B','C','D'];

     const [isAnsweredTrue,setIsAnsweredTrue]=useState(false);
    // const [isClicked,setIsClicked]=useState(false);


    // const [allRefs,setAllRefs]=useState([]);
    // useEffect(()=>{
    //     setAllRefs(prevRefs=>[
    //         ...prevRefs,
    //         myref
    //     ]);
    //     console.log('useEffect working !');
    //     // console.log(allRefs);
    //     // console.log(arr);
    // },[])

    // useEffect(() => {
    //     console.log(allRefs); // Log the updated refs after state change
    //   }, [allRefs]);


    function handleVariantClick(e){
        console.log('curQuestion>> ',props.currentQuestion);
        console.log('e.tgr>> ',e.target);
        // setAllRefs([e.target]);
        // setAllRefs([...arr,myref]);
        
        //arr.push(myref);
        // console.log('arr>> ',arr);

        // setIsClicked(true);
        let selectedCell=myref.current.innerHTML.split('.')[1];
        console.log('SCll>> ',selectedCell);
        console.log('CAWR>> ',props.currentQuestion.answer);
        console.log('myref>> ',myref);
        if(selectedCell===props.currentQuestion.answer){
            alert('Answer is right !');
             setIsAnsweredTrue(true);
            props.currentQuestion.hasFinded=true;
        }
        else{
            alert('Answer is wrong !');
        }
        // console.log(allRefs);
    }

    
  return (


    <h6 key={props.index} className='variant' onClick={(e)=>handleVariantClick(e)} ref={myref}
            // style={{backgroundColor:isAnsweredTrue ? 'green' : 'red' ,pointerEvents:isClicked ? 'none' : 'auto'}}
            style={{backgroundColor:isAnsweredTrue && props.currentQuestion.hasFinded ? 'green' : 'red'}}
            >{letter[props.index]}.{props.variant}</h6> 
  )
}
