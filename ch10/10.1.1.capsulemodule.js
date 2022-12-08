const modules = {};
function require(moduleName) { return modules[moduleName]; }
modules['obj.js'] = (function(){
    function sq(n){return n*n}
    function sqrt(n){return Math.sqrt(n);}
    return {sq, sqrt}
}());
modules['anotherobj.js'] = (function(){
    function asq(n){return n*n}
    function asqrt(n){return Math.sqrt(n);}
    return {asq, asqrt}
}());