// Name = Shubham Sangawat

import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, checkboxClasses, Slider } from "@mui/material";
import "./SortVisualizer.css";
import mergeSort from "../Algorithms/MergeSort.js";
import quickSort from "../Algorithms/QuickSort.js";
import bubbleSort from "../Algorithms/BubbleSort.js";
import selectionSort from "../Algorithms/SelectionSort";
import insertionSort from "../Algorithms/InsertionSort";
import CustomizedSpeedSlider from "../Slider/SpeedSlider";
import CustomizedSizeSlider from "../Slider/SizeSlider";

const SortVisualizer = () =>{
    let [array,setArray] = useState([]);
    const [flag,setflag] = useState(0);
    const [randInt,setRandInt] = useState(0);
    const [prevArrLen,setPrevArrLen] = useState(0);
    const [SpeedMs,setSpeedMs] = useState(80);
    const [arrayLen,setArrayLen] = useState(30);
    const [isDisable,setIsDisable] = useState(false);

    const [sendRequest, setSendRequest] = useState(true);

    useEffect(()=>{
        if(sendRequest){
            function resetArray(){
                const arr = [];
                console.log(arrayLen);
               
                setRandInt(randomIntRange(0,arrayLen-1));
                const stile = document.getElementsByClassName('arr-bar');
                for(let i=0;i<arrayLen;i++){
                    if(i === randInt){
                        arr.push(340);
                        if(flag>0 && i<prevArrLen)
                            stile[i].style.backgroundColor='white';
                        continue;
                    }
                    arr.push(randomIntRange(5,340));
                    if(flag>0 && i<prevArrLen)
                        stile[i].style.backgroundColor='white';
                }
                setPrevArrLen(arrayLen)
                setflag(1);
                setArray(arr);
            }
            console.log(1000);  
            resetArray();
            // setArrayLen(0);
            setSendRequest(false);
        }
    },[sendRequest,flag,arrayLen]);

    
    function randomIntRange(start, end){
        return Math.floor(Math.random()*(end-start+1) + start) ;
    }

    function Merge() {
        const animations = mergeSort(array);
        setIsDisable(true)
        for(let i=0;i<animations.length;i++){
            const arrBar = document.getElementsByClassName('arr-bar');
            const isColorChange = i%3 !==2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                console.log(barOneIdx);
                const barOneStyle = arrBar[barOneIdx].style;
                const barTwoStyle = arrBar[barTwoIdx].style;
                const color = i%3===0? 'red' : 'blue';
                setTimeout(()=>{
                
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                },i*SpeedMs); 
            }
            else{
                setTimeout(()=>{
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrBar[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                },i*SpeedMs);
            }              
        }
        setTimeout(()=>{
            setIsDisable(false);
        },animations.length*SpeedMs);
    }

    function Quick(){
        const animations = quickSort(array);
        setIsDisable(true)
        const arrBar = document.getElementsByClassName('arr-bar');
        for(let i=0;i<animations.length;i++){
            const [index1,index2,prop] = animations[i];
            if(prop === 'pivot'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'yellow';
                },i*SpeedMs)
            }
            else if(prop === 'compare'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'red';
                    // arrBar[index2].style.backgroundColor = 'red';
                },i*SpeedMs)
            }
            else if(prop==='normal'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'white';
                    arrBar[index2].style.backgroundColor = 'white';
                },i*SpeedMs)
            }
            else if(prop==='swap'){
                setTimeout(()=>{
                    const [idx1,height1] = index1;
                    const [idx2,height2] = index2;
                    arrBar[idx1].style.height = `${height2}px`;
                    arrBar[idx2].style.height = `${height1}px`;
                    arrBar[idx1].style.backgroundColor = 'green';
                    arrBar[idx2].style.backgroundColor = 'green';
                },i*SpeedMs)
            }
            else if(prop==='sorted'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'blue';
                },i*SpeedMs)
            }
        }
        setTimeout(()=>{
            setIsDisable(false);
        },animations.length*SpeedMs);
    }

    function Bubble(){
        const animations = bubbleSort(array);
        setIsDisable(true)
        const arrBar = document.getElementsByClassName('arr-bar');
        for(let i=0;i<animations.length;i++){
            const [index1,index2,prop] = animations[i];
            if(prop === 'compare'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'red';
                    arrBar[index2].style.backgroundColor = 'red';
                },i*SpeedMs)
            }
            else if(prop==='normal'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'white';
                    arrBar[index2].style.backgroundColor = 'white';
                },i*SpeedMs)
            }
            else if(prop==='swap'){
                setTimeout(()=>{
                    const [idx1,height1] = index1;
                    const [idx2,height2] = index2;
                    arrBar[idx1].style.height = `${height2}px`;
                    arrBar[idx2].style.height = `${height1}px`;
                    arrBar[idx1].style.backgroundColor = 'green';
                    arrBar[idx2].style.backgroundColor = 'green';
                },i*SpeedMs)
            }
            else if(prop==='sorted'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'blue';
                },i*SpeedMs)
            }
        }
        setTimeout(()=>{
            setIsDisable(false);
        },animations.length*SpeedMs);
    }

    function Selection(){
        const animations = selectionSort(array);
        setIsDisable(true);
        const arrBar = document.getElementsByClassName('arr-bar');
        for(let i=0;i<animations.length;i++){
            const [index1,index2,prop] = animations[i];
            if(prop === 'compare'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'red';
                    arrBar[index2].style.backgroundColor = 'red';
                },i*SpeedMs)
            }
            else if(prop==='normal'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'white';
                    arrBar[index2].style.backgroundColor = 'white';
                },i*SpeedMs)
            }
            else if(prop==='swap'){
                setTimeout(()=>{
                    const [idx1,height1] = index1;
                    const [idx2,height2] = index2;
                    arrBar[idx1].style.height = `${height2}px`;
                    arrBar[idx2].style.height = `${height1}px`;
                    arrBar[idx1].style.backgroundColor = 'green';
                    arrBar[idx2].style.backgroundColor = 'green';
                },i*SpeedMs)
            }
            else if(prop==='sorted'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'blue';
                },i*SpeedMs)
            }
        }
        setTimeout(()=>{
            setIsDisable(false);
        },animations.length*SpeedMs);
    }

    async function Insertion(){
        const animations = insertionSort(array);
        setIsDisable(true)
        const arrBar = document.getElementsByClassName('arr-bar');
        for(let i=0;i<animations.length;i++){
            const [index1,index2,prop] = animations[i];
            if(prop === 'comp'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'red';
                    arrBar[index2].style.backgroundColor = 'red';
                },i*SpeedMs)
            }
            else if(prop==='normal'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'white';
                    arrBar[index2].style.backgroundColor = 'white';
                },i*SpeedMs)
            }
            else if(prop==='sp'){
                setTimeout(()=>{
                    const [idx1,height1] = index1;
                    const [idx2,height2] = index2;
                    arrBar[idx1].style.height = `${height2}px`;
                    arrBar[idx2].style.height = `${height1}px`;
                    arrBar[idx1].style.backgroundColor = 'green';
                    arrBar[idx2].style.backgroundColor = 'green';
                },i*SpeedMs)
            }
            else if(prop==='sorted'){
                setTimeout(()=>{
                    arrBar[index1].style.backgroundColor = 'blue';
                },i*SpeedMs)
            }
        }
        setTimeout(()=>{
            setIsDisable(false);
        },animations.length*SpeedMs);
    }    

    return (
        <>
        <div className="heading">
            <h1>Sorting Visualizer</h1>
        </div>
        <div className="arr-container">
            <div className="slider">
                <div class="title-slider">
                    <div>
                        <div className="title"><h3>Speed</h3> </div>
                        <div className={isDisable ? "disabled" : 'onlySlider'}><CustomizedSpeedSlider  className="speedSlider"  spid={SpeedMs}onSpeedChange={setSpeedMs}/></div>
                    </div>
                    <div>
                        <div className="title"><h3>Size</h3></div>
                        <div className={isDisable ? "disabled" : 'onlySlider'}><CustomizedSizeSlider  className="sizeSlider"   size={arrayLen}  autoChange={setSendRequest}  onSizeChange={setArrayLen}/> </div>   
                    </div>
                </div>
            </div>
        
            <div className="Buttons">
                <ButtonGroup className={isDisable ? "disabledBtn" : ''} variant="outlined" aria-label="outlined button group" >
                    <Button onClick={()=>{Bubble()}}>Bubble Sort</Button>
                    <Button onClick={()=>{Merge()}}>Merge Sort</Button>
                    <Button onClick={()=>{Quick()}}>Quick Sort</Button>
                    <Button onClick={()=>{Selection()}}>Selection Sort</Button>
                    <Button onClick={()=>{Insertion()}}>Insertion Sort</Button>
                </ButtonGroup>
            </div>
            <br/><br/><br/>
            <div className="arrayji">
                {array.map((val,idx)=>(
                    <div className="arr-bar" key={idx} style={{height:`${val}px`, backgroundColor:'white'}}>
                    </div>
                ))}
            </div>

            <br/>
            <Button  className={isDisable ? "disabledBtn" : ''} variant="outlined" onClick={()=>setSendRequest(true)}>Generate Array</Button>
           <p style={{color:'white'}}>© Shubham Sangawat</p>
        </div>
        </>
    )
}

export default SortVisualizer;