var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');
var Countdown=require('Countdown');

describe('countdown should exist',()=>{
  it('should countdown the count',()=>{
      expect(Countdown).toExist();
    });
    describe('handleSetCountdown',()=>{
      it('should set state started and countdown',(done)=>{
      var countdown=TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
    //  expect(countdown.state.count).toBe(1);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      },1001);
    });
    it('should not',(done)=>{
    var countdown=TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(1);

    setTimeout(()=>{
      expect(countdown.state.count).toBe(0);
      done();
    },3001);
  });
  });
});
