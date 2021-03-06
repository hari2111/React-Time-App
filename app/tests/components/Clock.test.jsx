var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');
var Clock=require('Clock');

describe('Clock',()=>{
  it('should exist',()=>{
    expect(Clock).toExist();
  });
  describe('render',()=>{
    it('should render clock to outpur',()=>{
        var clock=TestUtils.renderIntoDocument(<Clock totalSeconds={50}/>);
        var $el=$(ReactDOM.findDOMNode(clock));
        var actualText=$el.find('.clock-text').text();
        expect(actualText).toBe('00:50')
    });
  });







  describe('formatSeconds',()=>{
    it('should formatSeconds',()=>{
      var clock=TestUtils.renderIntoDocument(<Clock/>);
      var seconds=61;
      var expected='01:01';
      var actual=clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  })
})
