var React=require('react');
var Clock=require('Clock');
var CountDownForm=require('CountDownForm');
var Countdown=require('Countdown');
var Controls=require('Controls');
var Timer=React.createClass({
  getInitialState:function(){
    return{
      count:0,
      countdownStatus:'stopped'
    }
  },
  componentDidUpdate:function(prevProps,prevState){
    if(this.state.countdownStatus!==prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.handleStart()
          break;
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer=undefined;
          break;
      }
    }
  },
  componentWillUnmount:function(){
    clearInterval(this.timer)
  },
  handleStart:function(){
    this.timer=setInterval(()=>{
      this.setState({count:this.state.count+1})
    },1000);
  },
  handleStatusChange:function(newCountdownstatus){
    this.setState({
      countdownStatus:newCountdownstatus
    })
  },
  render:function(){
      var {count,countdownStatus}=this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports=Timer;
