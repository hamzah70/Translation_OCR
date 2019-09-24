import React from "react"
import "./style.css"
import {Tesseract} from "tesseract.ts";
import PageContent from "./PageContent"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
                        image:'',
                        converting:false,
                        flag:'0',
                        // result:'result this side'
                    }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(event){
        const file = this.state.image
        console.log(file)
        console.log(this.state.converting)
        console.log(this.state.flag)
        this.setState({
                converting:true,
                flag:'1'
            })
        var temp;
        console.log(this.state.flag)
        console.log(this.state.converting)
        Tesseract.recognize(file)
            .then(function(result){
                var contentArea = document.getElementById('document-content');
                console.log(result.text);
                temp=result.text;
                this.setState({
                    converting:false,
                    flag:'0',
                    result:temp
                })
            }.bind(this))
            .catch(function(err){
                console.error(err);
            });
        
    }
    
    handleChange(event){
        this.setState({
            image :event.target.files[0]
        })
    }

    render(){
        return(
            <div className="ToDoList">
                <div >
                    <PageContent 
                        handleChange={this.handleChange} 
                        handleClick={this.handleClick} 
                        converting ={this.state.converting}
                        />
                </div>
                <p>{this.state.result}</p>
            </div>
        )
    }
}

export default App
