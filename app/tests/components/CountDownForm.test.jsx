var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jQuery');
var TestUtils=require('react-addons-test-utils');
var CountDownForm=require('CountDownForm');

describe('CountDownForm',()=>{
  it('should exist',()=>{
    expect(CountDownForm).toExist();
  });
  it('should call if seconds enterted',()=>{
    var spy=expect.createSpy();
    var form=TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy}/>);
    var $el=$(ReactDOM.findDOMNode(form));
    form.refs.seconds.value='109';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalled(109)
  })
});
