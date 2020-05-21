import React from 'react';

class resultComponent extends React.Component {


    render() {
        let {result} = this.props;
        let {input} = this.props
        return (
         <div>
            <label className="heading"><strong>Enter value</strong></label>
               <div className="result">
                 <p title="value">{input}</p>
               </div>
            <label className="heading"><strong>Result</strong></label>
               <div className="result">
                 <p title="result">{result}</p>
               </div>
         </div>
    )
        ;
    }
}


export default resultComponent;