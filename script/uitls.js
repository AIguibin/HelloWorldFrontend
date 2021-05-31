
(function (global, factory) {
    "use strict";
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "AIguibin requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }
})(typeof window !== "undefined" ? window : this, function( window, noGlobal ){
    var str="q,w,e,r,d,f";
    console.log("字符串分割成数组",str.split(","));
    console.log("数组合称为字符串",str.split(",").join(","));
    var strObj="{key:one,value:1}";
    var strArray="[{key:'one',value:1},{key:'two',value:2}]";
    var obj=JSON.parse(strObj);
    var arr=JSON.parse(strArray);
    console.log("字符串对象转对象",obj);
    console.log("字符串数组转数组",arr);
    console.log("对象转字符串对象",JSON.stringify(obj));
    console.log("数组转字符串数组",JSON.stringify(arr));
});

