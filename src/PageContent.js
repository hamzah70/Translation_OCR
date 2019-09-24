import React from "react"
import image from "./giphy.gif"

function PageContent(props){
    if(!props.converting){
        return(
            <div>
                <label for="fileInput">Choose File for OCR:</label>
                <input type="file" id="fileInput" name="fileInput" onChange={props.handleChange} />
                <br />
                <br />
                <button type="button" id="Convert" onClick={props.handleClick}>Convert!</button>
                <div id="document-content"></div>
            </div>
        )
    }
    else{
        return(
            <div>
                <img src={image}></img>
            </div>
        )
    }
}

export default PageContent