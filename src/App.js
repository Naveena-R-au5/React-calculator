import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/result';
import KeypadComponent from "./components/keypad";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "",
            input:""
        }
    }

    click = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                input: this.state.input + button 
            })
        }
    };


    calculate = () => {
        var input = '';
        var result = '';
            result = this.state.result;
            input = this.state.input;
        try {
            this.setState({
                result: (eval(input))
            },console.log("input",input))
        } catch (e) {
            this.setState({
                result: "incorrect value"
            })

        }
    };

    reset = () => {
        this.setState({
            input: "",
            result:""
        })
    };

    backspace = () => {
        this.setState({
            input: this.state.input.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="body">
                <div className="calculator-body">
                    <h1 className="heading1">React Calculator</h1>
                    <ResultComponent input={this.state.input} result={this.state.result} />
                    <KeypadComponent click={this.click} />
                </div>
            </div>
        );
    }
}

export default App;