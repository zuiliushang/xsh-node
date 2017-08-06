/*exports.world = function(){
    console.log('hello world');
}*/

function Hello(){
    var name;
    this.name = function(thyName){
        name = thyName;
    };
    this.sayHello = function(){
        console.log('Hello' + name);
    };
};
module.exports = Hello;