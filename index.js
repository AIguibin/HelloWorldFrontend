require("./libs/require");
// const url = "https://www.someurl.com";

// ;(async () => {
//     const response = await fetch(url)
//     console.log(response)
// })()

(function () {
    console.log("========================")
    require("./libs/require");
})();

define([], function (require, exports) {
    console.log("========================")
    exports.default = {
        bo: function () {
            console.log('======')
        }
    }
});

r.prototype.createDefine = function (n, s) {
    var a = this
        ,u = function () {
        return a.require.apply(a, y.utils.args2Arr(arguments))
    };
    return function () {
        var t, e, r, i = y.utils.args2Arr(arguments);
        n.status = y.ModuleStatus.Defining;
        var o = i.length;
        1 === o ? (r = i[0],
            t = void 0) : 2 === o ? (r = i[1],
            y.utils.isArray(i[0]) ? (e = i[0],
                t = void 0) : e = void 0) : (t = i[0],
            e = i[1],
            r = i[2]),
        t && (n.id = t,
            a.alias[t] = n.src),
            e && "" != e ? a.require(e, function () {
                "function" == y.utils.type(r) ? (n.exports = {},
                    r.call(n.exports, u, n.exports, n)) : n.exports = r,
                    n.status = y.ModuleStatus.Defined,
                    s.progress.work(!0, s.index, n.exports)
            }) : ("function" == y.utils.type(r) ? (n.exports = {},
                r.call(n.exports, u, n.exports, n)) : n.exports = r,
                n.status = y.ModuleStatus.Defined,
                s.progress.work(!0, s.index, n.exports))
    }
}
    ,