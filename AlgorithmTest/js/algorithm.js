function rot13(str) { // LBH QVQ VG!
    var exp = /[a-zA-Z]/;
    var myArr =  str.split("").filter(function(val){
        if(exp.test(val)){
            return String.fromCharCode(val.charCodeAt(0)-13);
        }else{
            return val;
        }
    });
    //return myArr.join("");
    return myArr;
}

function test(){
    // Change the inputs below to test
    rot13("SERR PBQR PNZC");
}

