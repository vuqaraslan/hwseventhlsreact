import React, { useState } from 'react'
import { allQuestions, allVariants } from '../../Datas/Data';
import './Questions.css'
import Variant from '../Variant/Variant';
import ButtonNumbers from '../ButtonNumbers/ButtonNumbers';

export default function Questions() {

    const [index,setIndex]=useState(0);

     let questionCurrent=allQuestions[index];

    //const [questionCurrent,setQuestionCurrent]=useState(allQuestions[index]);
    
    const hasNext=index < allQuestions.length-1;
    const hasPrevious=index > 0;

    function handlePreviousClick(){
        if(hasPrevious){
            setIndex(index-1);
        }
    }
    
    function handleNextClick(){
        if(hasNext){
            setIndex(index+1);
        }
    }
    
    return (
        <section className='base-section'>
            <h1>Quiz Application UI</h1>

            <section className='quiz-side-section'>
            
                <section className='question-section'>
                    <h4>{questionCurrent.id}.{questionCurrent.text}</h4>
                    {
                        questionCurrent.variants.map((v,index)=>
                            <Variant currentQuestion={questionCurrent} variant={v} index={index}></Variant>)
                    }

                    {hasPrevious && <button onClick={handlePreviousClick}>Previous</button>}
                    {hasNext && <button onClick={handleNextClick}>Next</button>}
                </section>

                <section className='question-no-section'>
                    {
                        allQuestions.map((q)=>(
                            <ButtonNumbers questionCurrentNo={questionCurrent.no} currentQuestion={q}
                            ></ButtonNumbers>
                        ))
                    }

                </section>

            </section>
        </section>
  )
}
