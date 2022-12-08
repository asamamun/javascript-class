const obj = (function(){
    function sq(n){return n*n}
    function sqrt(n){return Math.sqrt(n);}
    return {sq, sqrt}
}())
//this fx will used and called only once
const anotherobj = (function(){
    function asq(n){return n*n}
    function asqrt(n){return Math.sqrt(n);}
    return {asq, asqrt}
}())