import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     count: this.props.counter.value,
        
    // }

    getBadgeClass (){
      let classes = 'badge p-2 m-5 badge-';
      classes += this.props.counter.value ===0 ? 'warning' : 'primary';
      return classes
    }

    formatCount (){
        const {value} = this.props.counter
        if(value === 0) return "Zero";
        return value;
    }

   
    
    render() { 
       
        return (
            <React.Fragment>
                <span className='p-3'>{this.props.counter.id}</span>
                <span className={this.getBadgeClass()}>{ this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className='btn btn-primary btn-sm'>Increment</button> 
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-5'>Delete</button><br/>
            </React.Fragment>
        );
    }

}
 
export default Counter;