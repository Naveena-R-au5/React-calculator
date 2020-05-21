import React from 'react';
// import '../App.css';
class KeypadComponent extends React.Component {
    render(){
        return (
            <div className="button">
                <button className="symbols" name="(" title="(" onClick ={e => this.props.click(e.target.name)}>(</button>
                <button className="symbols" name=")" title=")" onClick={e => this.props.click(e.target.name)}>)</button>
                <button className="symbols" name="CE" title="CE" onClick={e => this.props.click(e.target.name)}>CE</button>
                <button className="symbols" name="C" title="Clear all" onClick={e => this.props.click(e.target.name)}>C</button><br/>


                <button className="val" name="7" title="7" onClick={e => this.props.click(e.target.name)}>7</button>
                <button className="val" name="8" title="8" onClick={e => this.props.click(e.target.name)}>8</button>
                <button className="val" name="9" title="9" onClick={e => this.props.click(e.target.name)}>9</button>
                <button className="symbols" name="*" title="multiplication" onClick={e => this.props.click(e.target.name)}>x</button><br/>


                <button className="val" name="4" title="4" onClick={e => this.props.click(e.target.name)}>4</button>
                <button className="val" name="5" title="5" onClick={e => this.props.click(e.target.name)}>5</button>
                <button className="val" name="6" title="6" onClick={e => this.props.click(e.target.name)}>6</button>
                <button className="symbols" name="-" title="subtraction" onClick={e => this.props.click(e.target.name)}>-</button><br/>

                
                <button className="val" name="1" title="1" onClick={e => this.props.click(e.target.name)}>1</button>
                <button className="val" name="2" title="2" onClick={e => this.props.click(e.target.name)}>2</button>
                <button className="val" name="3" title="3" onClick={e => this.props.click(e.target.name)}>3</button>
                <button className="symbols" name="+" title="addition" onClick={e => this.props.click(e.target.name)}>+</button><br/>



                <button className="symbols" name="." title="point" onClick={e => this.props.click(e.target.name)}>.</button>
                <button className="val" name="0" title="0" onClick={e => this.props.click(e.target.name)}>0</button>
                <button className="symbols" name="/" title="division" onClick={e => this.props.click(e.target.name)}>/</button>
                <button className="symbol" name="=" title="=" onClick={e => this.props.click(e.target.name)}>=</button><br/>
            </div>
        )
    }
}

export default KeypadComponent;