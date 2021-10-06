import React from "react"
import ReactDom from "react-dom"
import "./index.css"


let currDate=new Date(2021,10,6,4);
 currDate=currDate.getHours();
let greeting={

};
const cssStyle={
    backbroundColor:"red"
    
};


if(currDate>=1 && currDate< 12){
    greeting= "Good morning";
    cssStyle.color="green";

}else if(currDate>=12 && currDate<19){

    greeting="Good Evenning";
    cssStyle.color="blue";

} 
else {
    greeting="Good Night";
    cssStyle.color="blue";
}




ReactDom.render(
    <>
    <h1 > Hello,sir <span style={cssStyle}> {greeting} </span> </h1>
    </>



    ,document.getElementById("root"));










