//events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装
//通过require("events");来访问该模块。
//var EventEmitter = require('events').EventEmitter; 
//var event = new EventEmitter(); 
//创建 eventEmitter 对象

/*event.on('some_event', function(){
    console.log('事件触发');
});*/


//setTimeout(function(){
//    event.emit('some_event');
//},1000);


var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1,arg2){
    console.log('listener1',arg1,arg2);
});
emitter.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});
emitter.addListener('someEvent',function(){
    console.log('listener11111')
});
emitter.emit('someEvent','arg1 参数','arg2 参数');
