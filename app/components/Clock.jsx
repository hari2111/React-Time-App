//err if its a functional component

var React=require('react');
var Clock=React.createClass({
  getDefaultProps:function(){
    totalSeconds:0
  },
  propTypes:{
    totalSeconds:React.PropTypes.number
  },
  formatSeconds:function(totalSeconds) {
    var Seconds=totalSeconds%60;
    var minutes=Math.floor(totalSeconds/60);
    if(Seconds<10){
      Seconds='0'+ Seconds;
    }
    if(minutes<10){
      minutes='0'+ minutes;
    }
    return minutes + ':' + Seconds
  },
  render:function(){
    var {totalSeconds}=this.props
    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
}
});

module.exports=Clock;
