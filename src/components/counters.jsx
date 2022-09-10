import React, { Component } from 'react'
import Counter from './counter';

//lifting the state. This component is commpletely controlled


class Counters extends Component {
   
    render() { 
        const {onDelete, onIncrement,onReset} = this.props
        console.log(this.props)
        return (
            <div>
                <button onClick={onReset} className='btn btn-primary sm m-3'>Reset</button> <br/>
                {this.props.counters.map(counter => 
                <Counter  key={counter.id} 
                          onDelete={onDelete}
                          onIncrement ={onIncrement} 
                          counter={counter}/>
                  
                
                )}
               

            </div>
        );
    }
}
 
export default Counters;