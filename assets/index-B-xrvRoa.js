(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var vf = { exports: {} },
  _s = {},
  xf = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var si = Symbol.for("react.element"),
  Ng = Symbol.for("react.portal"),
  Tg = Symbol.for("react.fragment"),
  Cg = Symbol.for("react.strict_mode"),
  Pg = Symbol.for("react.profiler"),
  Eg = Symbol.for("react.provider"),
  bg = Symbol.for("react.context"),
  Ag = Symbol.for("react.forward_ref"),
  Mg = Symbol.for("react.suspense"),
  Vg = Symbol.for("react.memo"),
  Rg = Symbol.for("react.lazy"),
  $u = Symbol.iterator;
function Dg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($u && e[$u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kf = Object.assign,
  Sf = {};
function sr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Sf),
    (this.updater = n || wf));
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jf() {}
jf.prototype = sr.prototype;
function gl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Sf),
    (this.updater = n || wf));
}
var yl = (gl.prototype = new jf());
yl.constructor = gl;
kf(yl, sr.prototype);
yl.isPureReactComponent = !0;
var Hu = Array.isArray,
  Nf = Object.prototype.hasOwnProperty,
  vl = { current: null },
  Tf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Nf.call(t, r) && !Tf.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: si,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: vl.current,
  };
}
function Lg(e, t) {
  return {
    $$typeof: si,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === si;
}
function Ig(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wu = /\/+/g;
function uo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ig("" + e.key)
    : t.toString(36);
}
function Oi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case si:
          case Ng:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + uo(o, 0) : r),
      Hu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Wu, "$&/") + "/"),
          Oi(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (xl(i) &&
            (i = Lg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Wu, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Hu(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + uo(s, a);
      o += Oi(s, t, n, l, i);
    }
  else if (((l = Dg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      ((s = s.value), (l = r + uo(s, a++)), (o += Oi(s, t, n, l, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function gi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Oi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function zg(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  _i = { transition: null },
  Og = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: _i,
    ReactCurrentOwner: vl,
  };
function Pf() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: gi,
  forEach: function (e, t, n) {
    gi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
z.Component = sr;
z.Fragment = Tg;
z.Profiler = Pg;
z.PureComponent = gl;
z.StrictMode = Cg;
z.Suspense = Mg;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Og;
z.act = Pf;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = kf({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = vl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Nf.call(t, l) &&
        !Tf.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: si, type: e.type, key: i, ref: s, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: bg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Eg, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Cf;
z.createFactory = function (e) {
  var t = Cf.bind(null, e);
  return ((t.type = e), t);
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Ag, render: e };
};
z.isValidElement = xl;
z.lazy = function (e) {
  return { $$typeof: Rg, _payload: { _status: -1, _result: e }, _init: zg };
};
z.memo = function (e, t) {
  return { $$typeof: Vg, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = _i.transition;
  _i.transition = {};
  try {
    e();
  } finally {
    _i.transition = t;
  }
};
z.unstable_act = Pf;
z.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Te.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
z.useId = function () {
  return Te.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Te.current.useRef(e);
};
z.useState = function (e) {
  return Te.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Te.current.useTransition();
};
z.version = "18.3.1";
xf.exports = z;
var C = xf.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _g = C,
  Fg = Symbol.for("react.element"),
  Bg = Symbol.for("react.fragment"),
  Ug = Object.prototype.hasOwnProperty,
  $g = _g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ef(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Ug.call(t, r) && !Hg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Fg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: $g.current,
  };
}
_s.Fragment = Bg;
_s.jsx = Ef;
_s.jsxs = Ef;
vf.exports = _s;
var u = vf.exports,
  bf = { exports: {} },
  Fe = {},
  Af = { exports: {} },
  Mf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, D) {
    var I = E.length;
    E.push(D);
    e: for (; 0 < I; ) {
      var B = (I - 1) >>> 1,
        ne = E[B];
      if (0 < i(ne, D)) ((E[B] = D), (E[I] = ne), (I = B));
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var D = E[0],
      I = E.pop();
    if (I !== D) {
      E[0] = I;
      e: for (var B = 0, ne = E.length, pi = ne >>> 1; B < pi; ) {
        var nn = 2 * (B + 1) - 1,
          lo = E[nn],
          rn = nn + 1,
          mi = E[rn];
        if (0 > i(lo, I))
          rn < ne && 0 > i(mi, lo)
            ? ((E[B] = mi), (E[rn] = I), (B = rn))
            : ((E[B] = lo), (E[nn] = I), (B = nn));
        else if (rn < ne && 0 > i(mi, I)) ((E[B] = mi), (E[rn] = I), (B = rn));
        else break e;
      }
    }
    return D;
  }
  function i(E, D) {
    var I = E.sortIndex - D.sortIndex;
    return I !== 0 ? I : E.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    y = !1,
    v = !1,
    w = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(E) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= E)
        (r(c), (D.sortIndex = D.expirationTime), t(l, D));
      else break;
      D = n(c);
    }
  }
  function x(E) {
    if (((w = !1), g(E), !v))
      if (n(l) !== null) ((v = !0), gt(N));
      else {
        var D = n(c);
        D !== null && tn(x, D.startTime - E);
      }
  }
  function N(E, D) {
    ((v = !1), w && ((w = !1), m(j), (j = -1)), (y = !0));
    var I = h;
    try {
      for (
        g(D), f = n(l);
        f !== null && (!(f.expirationTime > D) || (E && !_()));
      ) {
        var B = f.callback;
        if (typeof B == "function") {
          ((f.callback = null), (h = f.priorityLevel));
          var ne = B(f.expirationTime <= D);
          ((D = e.unstable_now()),
            typeof ne == "function" ? (f.callback = ne) : f === n(l) && r(l),
            g(D));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var pi = !0;
      else {
        var nn = n(c);
        (nn !== null && tn(x, nn.startTime - D), (pi = !1));
      }
      return pi;
    } finally {
      ((f = null), (h = I), (y = !1));
    }
  }
  var P = !1,
    k = null,
    j = -1,
    V = 5,
    R = -1;
  function _() {
    return !(e.unstable_now() - R < V);
  }
  function ee() {
    if (k !== null) {
      var E = e.unstable_now();
      R = E;
      var D = !0;
      try {
        D = k(!0, E);
      } finally {
        D ? se() : ((P = !1), (k = null));
      }
    } else P = !1;
  }
  var se;
  if (typeof p == "function")
    se = function () {
      p(ee);
    };
  else if (typeof MessageChannel < "u") {
    var en = new MessageChannel(),
      Pe = en.port2;
    ((en.port1.onmessage = ee),
      (se = function () {
        Pe.postMessage(null);
      }));
  } else
    se = function () {
      S(ee, 0);
    };
  function gt(E) {
    ((k = E), P || ((P = !0), se()));
  }
  function tn(E, D) {
    j = S(function () {
      E(e.unstable_now());
    }, D);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), gt(N));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (V = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (E) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = h;
      }
      var I = h;
      h = D;
      try {
        return E();
      } finally {
        h = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, D) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var I = h;
      h = E;
      try {
        return D();
      } finally {
        h = I;
      }
    }),
    (e.unstable_scheduleCallback = function (E, D, I) {
      var B = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? B + I : B))
          : (I = B),
        E)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = I + ne),
        (E = {
          id: d++,
          callback: D,
          priorityLevel: E,
          startTime: I,
          expirationTime: ne,
          sortIndex: -1,
        }),
        I > B
          ? ((E.sortIndex = I),
            t(c, E),
            n(l) === null &&
              E === n(c) &&
              (w ? (m(j), (j = -1)) : (w = !0), tn(x, I - B)))
          : ((E.sortIndex = ne), t(l, E), v || y || ((v = !0), gt(N))),
        E
      );
    }),
    (e.unstable_shouldYield = _),
    (e.unstable_wrapCallback = function (E) {
      var D = h;
      return function () {
        var I = h;
        h = D;
        try {
          return E.apply(this, arguments);
        } finally {
          h = I;
        }
      };
    }));
})(Mf);
Af.exports = Mf;
var Wg = Af.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kg = C,
  Oe = Wg;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Vf = new Set(),
  Or = {};
function Tn(e, t) {
  (Qn(e, t), Qn(e + "Capture", t));
}
function Qn(e, t) {
  for (Or[e] = t, e = 0; e < t.length; e++) Vf.add(t[e]);
}
var jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  qo = Object.prototype.hasOwnProperty,
  Gg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ku = {},
  Gu = {};
function Yg(e) {
  return qo.call(Gu, e)
    ? !0
    : qo.call(Ku, e)
      ? !1
      : Gg.test(e)
        ? (Gu[e] = !0)
        : ((Ku[e] = !0), !1);
}
function Xg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Qg(e, t, n, r) {
  if (t === null || typeof t > "u" || Xg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ce(e, t, n, r, i, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wl = /[\-:]([a-z])/g;
function kl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wl, kl);
    ge[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wl, kl);
    ge[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(wl, kl);
  ge[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Sl(e, t, n, r) {
  var i = ge.hasOwnProperty(t) ? ge[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Qg(t, n, i, r) && (n = null),
    r || i === null
      ? Yg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pt = Kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yi = Symbol.for("react.element"),
  bn = Symbol.for("react.portal"),
  An = Symbol.for("react.fragment"),
  jl = Symbol.for("react.strict_mode"),
  Jo = Symbol.for("react.profiler"),
  Rf = Symbol.for("react.provider"),
  Df = Symbol.for("react.context"),
  Nl = Symbol.for("react.forward_ref"),
  ea = Symbol.for("react.suspense"),
  ta = Symbol.for("react.suspense_list"),
  Tl = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  Lf = Symbol.for("react.offscreen"),
  Yu = Symbol.iterator;
function dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yu && e[Yu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  co;
function wr(e) {
  if (co === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      co = (t && t[1]) || "";
    }
  return (
    `
` +
    co +
    e
  );
}
var fo = !1;
function ho(e, t) {
  if (!e || fo) return "";
  fo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((fo = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function Zg(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = ho(e.type, !1)), e);
    case 11:
      return ((e = ho(e.type.render, !1)), e);
    case 1:
      return ((e = ho(e.type, !0)), e);
    default:
      return "";
  }
}
function na(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case An:
      return "Fragment";
    case bn:
      return "Portal";
    case Jo:
      return "Profiler";
    case jl:
      return "StrictMode";
    case ea:
      return "Suspense";
    case ta:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Df:
        return (e.displayName || "Context") + ".Consumer";
      case Rf:
        return (e._context.displayName || "Context") + ".Provider";
      case Nl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Tl:
        return (
          (t = e.displayName || null),
          t !== null ? t : na(e.type) || "Memo"
        );
      case At:
        ((t = e._payload), (e = e._init));
        try {
          return na(e(t));
        } catch {}
    }
  return null;
}
function qg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return na(t);
    case 8:
      return t === jl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function If(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Jg(e) {
  var t = If(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function vi(e) {
  e._valueTracker || (e._valueTracker = Jg(e));
}
function zf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = If(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function is(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ra(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Xu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Of(e, t) {
  ((t = t.checked), t != null && Sl(e, "checked", t, !1));
}
function ia(e, t) {
  Of(e, t);
  var n = Wt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? sa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && sa(e, t.type, Wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Qu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function sa(e, t, n) {
  (t !== "number" || is(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kr = Array.isArray;
function Hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Wt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function oa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (kr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function _f(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function qu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ff(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function aa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ff(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var xi,
  Bf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xi = xi || document.createElement("div"),
          xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xi.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  e0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tr).forEach(function (e) {
  e0.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]));
  });
});
function Uf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
      ? ("" + t).trim()
      : t + "px";
}
function $f(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Uf(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var t0 = q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function la(e, t) {
  if (t) {
    if (t0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function ua(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ca = null;
function Cl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var da = null,
  Wn = null,
  Kn = null;
function Ju(e) {
  if ((e = li(e))) {
    if (typeof da != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Hs(t)), da(e.stateNode, e.type, t));
  }
}
function Hf(e) {
  Wn ? (Kn ? Kn.push(e) : (Kn = [e])) : (Wn = e);
}
function Wf() {
  if (Wn) {
    var e = Wn,
      t = Kn;
    if (((Kn = Wn = null), Ju(e), t)) for (e = 0; e < t.length; e++) Ju(t[e]);
  }
}
function Kf(e, t) {
  return e(t);
}
function Gf() {}
var po = !1;
function Yf(e, t, n) {
  if (po) return e(t, n);
  po = !0;
  try {
    return Kf(e, t, n);
  } finally {
    ((po = !1), (Wn !== null || Kn !== null) && (Gf(), Wf()));
  }
}
function Fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Hs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var fa = !1;
if (jt)
  try {
    var fr = {};
    (Object.defineProperty(fr, "passive", {
      get: function () {
        fa = !0;
      },
    }),
      window.addEventListener("test", fr, fr),
      window.removeEventListener("test", fr, fr));
  } catch {
    fa = !1;
  }
function n0(e, t, n, r, i, s, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Cr = !1,
  ss = null,
  os = !1,
  ha = null,
  r0 = {
    onError: function (e) {
      ((Cr = !0), (ss = e));
    },
  };
function i0(e, t, n, r, i, s, o, a, l) {
  ((Cr = !1), (ss = null), n0.apply(r0, arguments));
}
function s0(e, t, n, r, i, s, o, a, l) {
  if ((i0.apply(this, arguments), Cr)) {
    if (Cr) {
      var c = ss;
      ((Cr = !1), (ss = null));
    } else throw Error(T(198));
    os || ((os = !0), (ha = c));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Xf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ec(e) {
  if (Cn(e) !== e) throw Error(T(188));
}
function o0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (ec(i), e);
        if (s === r) return (ec(i), t);
        s = s.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (a === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (a === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Qf(e) {
  return ((e = o0(e)), e !== null ? Zf(e) : null);
}
function Zf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qf = Oe.unstable_scheduleCallback,
  tc = Oe.unstable_cancelCallback,
  a0 = Oe.unstable_shouldYield,
  l0 = Oe.unstable_requestPaint,
  te = Oe.unstable_now,
  u0 = Oe.unstable_getCurrentPriorityLevel,
  Pl = Oe.unstable_ImmediatePriority,
  Jf = Oe.unstable_UserBlockingPriority,
  as = Oe.unstable_NormalPriority,
  c0 = Oe.unstable_LowPriority,
  eh = Oe.unstable_IdlePriority,
  Fs = null,
  ft = null;
function d0(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(Fs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : p0,
  f0 = Math.log,
  h0 = Math.LN2;
function p0(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((f0(e) / h0) | 0)) | 0);
}
var wi = 64,
  ki = 4194304;
function Sr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ls(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Sr(a)) : ((s &= o), s !== 0 && (r = Sr(s)));
  } else ((o = n & ~i), o !== 0 ? (r = Sr(o)) : s !== 0 && (r = Sr(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - rt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function m0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function g0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - rt(s),
      a = 1 << o,
      l = i[o];
    (l === -1
      ? (!(a & n) || a & r) && (i[o] = m0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function pa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function th() {
  var e = wi;
  return ((wi <<= 1), !(wi & 4194240) && (wi = 64), e);
}
function mo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function oi(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n));
}
function y0(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - rt(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function El(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var F = 0;
function nh(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var rh,
  bl,
  ih,
  sh,
  oh,
  ma = !1,
  Si = [],
  zt = null,
  Ot = null,
  _t = null,
  Br = new Map(),
  Ur = new Map(),
  Vt = [],
  v0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function nc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      _t = null;
      break;
    case "pointerover":
    case "pointerout":
      Br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ur.delete(t.pointerId);
  }
}
function hr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = li(t)), t !== null && bl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function x0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((zt = hr(zt, e, t, n, r, i)), !0);
    case "dragenter":
      return ((Ot = hr(Ot, e, t, n, r, i)), !0);
    case "mouseover":
      return ((_t = hr(_t, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (Br.set(s, hr(Br.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        Ur.set(s, hr(Ur.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function ah(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Xf(n)), t !== null)) {
          ((e.blockedOn = t),
            oh(e.priority, function () {
              ih(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ga(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ca = r), n.target.dispatchEvent(r), (ca = null));
    } else return ((t = li(n)), t !== null && bl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function rc(e, t, n) {
  Fi(e) && n.delete(t);
}
function w0() {
  ((ma = !1),
    zt !== null && Fi(zt) && (zt = null),
    Ot !== null && Fi(Ot) && (Ot = null),
    _t !== null && Fi(_t) && (_t = null),
    Br.forEach(rc),
    Ur.forEach(rc));
}
function pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ma ||
      ((ma = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, w0)));
}
function $r(e) {
  function t(i) {
    return pr(i, e);
  }
  if (0 < Si.length) {
    pr(Si[0], e);
    for (var n = 1; n < Si.length; n++) {
      var r = Si[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    zt !== null && pr(zt, e),
      Ot !== null && pr(Ot, e),
      _t !== null && pr(_t, e),
      Br.forEach(t),
      Ur.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    ((r = Vt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    (ah(n), n.blockedOn === null && Vt.shift());
}
var Gn = Pt.ReactCurrentBatchConfig,
  us = !0;
function k0(e, t, n, r) {
  var i = F,
    s = Gn.transition;
  Gn.transition = null;
  try {
    ((F = 1), Al(e, t, n, r));
  } finally {
    ((F = i), (Gn.transition = s));
  }
}
function S0(e, t, n, r) {
  var i = F,
    s = Gn.transition;
  Gn.transition = null;
  try {
    ((F = 4), Al(e, t, n, r));
  } finally {
    ((F = i), (Gn.transition = s));
  }
}
function Al(e, t, n, r) {
  if (us) {
    var i = ga(e, t, n, r);
    if (i === null) (To(e, t, r, cs, n), nc(e, r));
    else if (x0(i, e, t, n, r)) r.stopPropagation();
    else if ((nc(e, r), t & 4 && -1 < v0.indexOf(e))) {
      for (; i !== null; ) {
        var s = li(i);
        if (
          (s !== null && rh(s),
          (s = ga(e, t, n, r)),
          s === null && To(e, t, r, cs, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else To(e, t, r, null, n);
  }
}
var cs = null;
function ga(e, t, n, r) {
  if (((cs = null), (e = Cl(r)), (e = un(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Xf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((cs = e), null);
}
function lh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (u0()) {
        case Pl:
          return 1;
        case Jf:
          return 4;
        case as:
        case c0:
          return 16;
        case eh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null,
  Ml = null,
  Bi = null;
function uh() {
  if (Bi) return Bi;
  var e,
    t = Ml,
    n = t.length,
    r,
    i = "value" in Dt ? Dt.value : Dt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Bi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ui(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ji() {
  return !0;
}
function ic() {
  return !1;
}
function Be(e) {
  function t(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ji
        : ic),
      (this.isPropagationStopped = ic),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ji));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ji));
      },
      persist: function () {},
      isPersistent: ji,
    }),
    t
  );
}
var or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vl = Be(or),
  ai = q({}, or, { view: 0, detail: 0 }),
  j0 = Be(ai),
  go,
  yo,
  mr,
  Bs = q({}, ai, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Rl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mr &&
            (mr && e.type === "mousemove"
              ? ((go = e.screenX - mr.screenX), (yo = e.screenY - mr.screenY))
              : (yo = go = 0),
            (mr = e)),
          go);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : yo;
    },
  }),
  sc = Be(Bs),
  N0 = q({}, Bs, { dataTransfer: 0 }),
  T0 = Be(N0),
  C0 = q({}, ai, { relatedTarget: 0 }),
  vo = Be(C0),
  P0 = q({}, or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  E0 = Be(P0),
  b0 = q({}, or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  A0 = Be(b0),
  M0 = q({}, or, { data: 0 }),
  oc = Be(M0),
  V0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  R0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  D0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function L0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = D0[e]) ? !!t[e] : !1;
}
function Rl() {
  return L0;
}
var I0 = q({}, ai, {
    key: function (e) {
      if (e.key) {
        var t = V0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? R0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rl,
    charCode: function (e) {
      return e.type === "keypress" ? Ui(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ui(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  z0 = Be(I0),
  O0 = q({}, Bs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ac = Be(O0),
  _0 = q({}, ai, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rl,
  }),
  F0 = Be(_0),
  B0 = q({}, or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  U0 = Be(B0),
  $0 = q({}, Bs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  H0 = Be($0),
  W0 = [9, 13, 27, 32],
  Dl = jt && "CompositionEvent" in window,
  Pr = null;
jt && "documentMode" in document && (Pr = document.documentMode);
var K0 = jt && "TextEvent" in window && !Pr,
  ch = jt && (!Dl || (Pr && 8 < Pr && 11 >= Pr)),
  lc = " ",
  uc = !1;
function dh(e, t) {
  switch (e) {
    case "keyup":
      return W0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function fh(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Mn = !1;
function G0(e, t) {
  switch (e) {
    case "compositionend":
      return fh(t);
    case "keypress":
      return t.which !== 32 ? null : ((uc = !0), lc);
    case "textInput":
      return ((e = t.data), e === lc && uc ? null : e);
    default:
      return null;
  }
}
function Y0(e, t) {
  if (Mn)
    return e === "compositionend" || (!Dl && dh(e, t))
      ? ((e = uh()), (Bi = Ml = Dt = null), (Mn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ch && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var X0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function cc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!X0[e.type] : t === "textarea";
}
function hh(e, t, n, r) {
  (Hf(r),
    (t = ds(t, "onChange")),
    0 < t.length &&
      ((n = new Vl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Er = null,
  Hr = null;
function Q0(e) {
  Nh(e, 0);
}
function Us(e) {
  var t = Dn(e);
  if (zf(t)) return e;
}
function Z0(e, t) {
  if (e === "change") return t;
}
var ph = !1;
if (jt) {
  var xo;
  if (jt) {
    var wo = "oninput" in document;
    if (!wo) {
      var dc = document.createElement("div");
      (dc.setAttribute("oninput", "return;"),
        (wo = typeof dc.oninput == "function"));
    }
    xo = wo;
  } else xo = !1;
  ph = xo && (!document.documentMode || 9 < document.documentMode);
}
function fc() {
  Er && (Er.detachEvent("onpropertychange", mh), (Hr = Er = null));
}
function mh(e) {
  if (e.propertyName === "value" && Us(Hr)) {
    var t = [];
    (hh(t, Hr, e, Cl(e)), Yf(Q0, t));
  }
}
function q0(e, t, n) {
  e === "focusin"
    ? (fc(), (Er = t), (Hr = n), Er.attachEvent("onpropertychange", mh))
    : e === "focusout" && fc();
}
function J0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Us(Hr);
}
function ey(e, t) {
  if (e === "click") return Us(t);
}
function ty(e, t) {
  if (e === "input" || e === "change") return Us(t);
}
function ny(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : ny;
function Wr(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!qo.call(t, i) || !ot(e[i], t[i])) return !1;
  }
  return !0;
}
function hc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pc(e, t) {
  var n = hc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = hc(n);
  }
}
function gh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? gh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function yh() {
  for (var e = window, t = is(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = is(e.document);
  }
  return t;
}
function Ll(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ry(e) {
  var t = yh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ll(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = pc(n, s)));
        var o = pc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var iy = jt && "documentMode" in document && 11 >= document.documentMode,
  Vn = null,
  ya = null,
  br = null,
  va = !1;
function mc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  va ||
    Vn == null ||
    Vn !== is(r) ||
    ((r = Vn),
    "selectionStart" in r && Ll(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (br && Wr(br, r)) ||
      ((br = r),
      (r = ds(ya, "onSelect")),
      0 < r.length &&
        ((t = new Vl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vn))));
}
function Ni(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Rn = {
    animationend: Ni("Animation", "AnimationEnd"),
    animationiteration: Ni("Animation", "AnimationIteration"),
    animationstart: Ni("Animation", "AnimationStart"),
    transitionend: Ni("Transition", "TransitionEnd"),
  },
  ko = {},
  vh = {};
jt &&
  ((vh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Rn.animationend.animation,
    delete Rn.animationiteration.animation,
    delete Rn.animationstart.animation),
  "TransitionEvent" in window || delete Rn.transitionend.transition);
function $s(e) {
  if (ko[e]) return ko[e];
  if (!Rn[e]) return e;
  var t = Rn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in vh) return (ko[e] = t[n]);
  return e;
}
var xh = $s("animationend"),
  wh = $s("animationiteration"),
  kh = $s("animationstart"),
  Sh = $s("transitionend"),
  jh = new Map(),
  gc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Qt(e, t) {
  (jh.set(e, t), Tn(t, [e]));
}
for (var So = 0; So < gc.length; So++) {
  var jo = gc[So],
    sy = jo.toLowerCase(),
    oy = jo[0].toUpperCase() + jo.slice(1);
  Qt(sy, "on" + oy);
}
Qt(xh, "onAnimationEnd");
Qt(wh, "onAnimationIteration");
Qt(kh, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(Sh, "onTransitionEnd");
Qn("onMouseEnter", ["mouseout", "mouseover"]);
Qn("onMouseLeave", ["mouseout", "mouseover"]);
Qn("onPointerEnter", ["pointerout", "pointerover"]);
Qn("onPointerLeave", ["pointerout", "pointerover"]);
Tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function yc(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), s0(r, t, void 0, e), (e.currentTarget = null));
}
function Nh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          (yc(i, a, c), (s = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          (yc(i, a, c), (s = l));
        }
    }
  }
  if (os) throw ((e = ha), (os = !1), (ha = null), e);
}
function W(e, t) {
  var n = t[ja];
  n === void 0 && (n = t[ja] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Th(t, e, 2, !1), n.add(r));
}
function No(e, t, n) {
  var r = 0;
  (t && (r |= 4), Th(n, e, r, t));
}
var Ti = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Ti]) {
    ((e[Ti] = !0),
      Vf.forEach(function (n) {
        n !== "selectionchange" && (ay.has(n) || No(n, !1, e), No(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ti] || ((t[Ti] = !0), No("selectionchange", !1, t));
  }
}
function Th(e, t, n, r) {
  switch (lh(t)) {
    case 1:
      var i = k0;
      break;
    case 4:
      i = S0;
      break;
    default:
      i = Al;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !fa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function To(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = un(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Yf(function () {
    var c = s,
      d = Cl(n),
      f = [];
    e: {
      var h = jh.get(e);
      if (h !== void 0) {
        var y = Vl,
          v = e;
        switch (e) {
          case "keypress":
            if (Ui(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = z0;
            break;
          case "focusin":
            ((v = "focus"), (y = vo));
            break;
          case "focusout":
            ((v = "blur"), (y = vo));
            break;
          case "beforeblur":
          case "afterblur":
            y = vo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = sc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = T0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = F0;
            break;
          case xh:
          case wh:
          case kh:
            y = E0;
            break;
          case Sh:
            y = U0;
            break;
          case "scroll":
            y = j0;
            break;
          case "wheel":
            y = H0;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = A0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ac;
        }
        var w = (t & 4) !== 0,
          S = !w && e === "scroll",
          m = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var p = c, g; p !== null; ) {
          g = p;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x),
              m !== null && ((x = Fr(p, m)), x != null && w.push(Gr(p, x, g)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((h = new y(h, v, null, n, d)), f.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ca &&
            (v = n.relatedTarget || n.fromElement) &&
            (un(v) || v[Nt]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = c),
              (v = v ? un(v) : null),
              v !== null &&
                ((S = Cn(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = c)),
          y !== v)
        ) {
          if (
            ((w = sc),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = ac),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (S = y == null ? h : Dn(y)),
            (g = v == null ? h : Dn(v)),
            (h = new w(x, p + "leave", y, n, d)),
            (h.target = S),
            (h.relatedTarget = g),
            (x = null),
            un(d) === c &&
              ((w = new w(m, p + "enter", v, n, d)),
              (w.target = g),
              (w.relatedTarget = S),
              (x = w)),
            (S = x),
            y && v)
          )
            t: {
              for (w = y, m = v, p = 0, g = w; g; g = Pn(g)) p++;
              for (g = 0, x = m; x; x = Pn(x)) g++;
              for (; 0 < p - g; ) ((w = Pn(w)), p--);
              for (; 0 < g - p; ) ((m = Pn(m)), g--);
              for (; p--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                ((w = Pn(w)), (m = Pn(m)));
              }
              w = null;
            }
          else w = null;
          (y !== null && vc(f, h, y, w, !1),
            v !== null && S !== null && vc(f, S, v, w, !0));
        }
      }
      e: {
        if (
          ((h = c ? Dn(c) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var N = Z0;
        else if (cc(h))
          if (ph) N = ty;
          else {
            N = J0;
            var P = q0;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (N = ey);
        if (N && (N = N(e, c))) {
          hh(f, N, n, d);
          break e;
        }
        (P && P(e, h, c),
          e === "focusout" &&
            (P = h._wrapperState) &&
            P.controlled &&
            h.type === "number" &&
            sa(h, "number", h.value));
      }
      switch (((P = c ? Dn(c) : window), e)) {
        case "focusin":
          (cc(P) || P.contentEditable === "true") &&
            ((Vn = P), (ya = c), (br = null));
          break;
        case "focusout":
          br = ya = Vn = null;
          break;
        case "mousedown":
          va = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((va = !1), mc(f, n, d));
          break;
        case "selectionchange":
          if (iy) break;
        case "keydown":
        case "keyup":
          mc(f, n, d);
      }
      var k;
      if (Dl)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Mn
          ? dh(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      (j &&
        (ch &&
          n.locale !== "ko" &&
          (Mn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Mn && (k = uh())
            : ((Dt = d),
              (Ml = "value" in Dt ? Dt.value : Dt.textContent),
              (Mn = !0))),
        (P = ds(c, j)),
        0 < P.length &&
          ((j = new oc(j, e, null, n, d)),
          f.push({ event: j, listeners: P }),
          k ? (j.data = k) : ((k = fh(n)), k !== null && (j.data = k)))),
        (k = K0 ? G0(e, n) : Y0(e, n)) &&
          ((c = ds(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new oc("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = k))));
    }
    Nh(f, t);
  });
}
function Gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ds(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Fr(e, n)),
      s != null && r.unshift(Gr(e, s, i)),
      (s = Fr(e, t)),
      s != null && r.push(Gr(e, s, i))),
      (e = e.return));
  }
  return r;
}
function Pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Fr(n, s)), l != null && o.unshift(Gr(n, l, a)))
        : i || ((l = Fr(n, s)), l != null && o.push(Gr(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var ly = /\r\n?/g,
  uy = /\u0000|\uFFFD/g;
function xc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ly,
      `
`,
    )
    .replace(uy, "");
}
function Ci(e, t, n) {
  if (((t = xc(t)), xc(e) !== t && n)) throw Error(T(425));
}
function fs() {}
var xa = null,
  wa = null;
function ka(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Sa = typeof setTimeout == "function" ? setTimeout : void 0,
  cy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wc = typeof Promise == "function" ? Promise : void 0,
  dy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wc < "u"
        ? function (e) {
            return wc.resolve(null).then(e).catch(fy);
          }
        : Sa;
function fy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Co(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), $r(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  $r(t);
}
function Ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function kc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ar = Math.random().toString(36).slice(2),
  dt = "__reactFiber$" + ar,
  Yr = "__reactProps$" + ar,
  Nt = "__reactContainer$" + ar,
  ja = "__reactEvents$" + ar,
  hy = "__reactListeners$" + ar,
  py = "__reactHandles$" + ar;
function un(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nt] || n[dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = kc(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = kc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function li(e) {
  return (
    (e = e[dt] || e[Nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Hs(e) {
  return e[Yr] || null;
}
var Na = [],
  Ln = -1;
function Zt(e) {
  return { current: e };
}
function K(e) {
  0 > Ln || ((e.current = Na[Ln]), (Na[Ln] = null), Ln--);
}
function H(e, t) {
  (Ln++, (Na[Ln] = e.current), (e.current = t));
}
var Kt = {},
  we = Zt(Kt),
  Me = Zt(!1),
  xn = Kt;
function Zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ve(e) {
  return ((e = e.childContextTypes), e != null);
}
function hs() {
  (K(Me), K(we));
}
function Sc(e, t, n) {
  if (we.current !== Kt) throw Error(T(168));
  (H(we, t), H(Me, n));
}
function Ch(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(T(108, qg(e) || "Unknown", i));
  return q({}, n, r);
}
function ps(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
    (xn = we.current),
    H(we, e),
    H(Me, Me.current),
    !0
  );
}
function jc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  (n
    ? ((e = Ch(e, t, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Me),
      K(we),
      H(we, e))
    : K(Me),
    H(Me, n));
}
var xt = null,
  Ws = !1,
  Po = !1;
function Ph(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function my(e) {
  ((Ws = !0), Ph(e));
}
function qt() {
  if (!Po && xt !== null) {
    Po = !0;
    var e = 0,
      t = F;
    try {
      var n = xt;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((xt = null), (Ws = !1));
    } catch (i) {
      throw (xt !== null && (xt = xt.slice(e + 1)), qf(Pl, qt), i);
    } finally {
      ((F = t), (Po = !1));
    }
  }
  return null;
}
var In = [],
  zn = 0,
  ms = null,
  gs = 0,
  Ue = [],
  $e = 0,
  wn = null,
  wt = 1,
  kt = "";
function on(e, t) {
  ((In[zn++] = gs), (In[zn++] = ms), (ms = e), (gs = t));
}
function Eh(e, t, n) {
  ((Ue[$e++] = wt), (Ue[$e++] = kt), (Ue[$e++] = wn), (wn = e));
  var r = wt;
  e = kt;
  var i = 32 - rt(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - rt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (wt = (1 << (32 - rt(t) + i)) | (n << i) | r),
      (kt = s + e));
  } else ((wt = (1 << s) | (n << i) | r), (kt = e));
}
function Il(e) {
  e.return !== null && (on(e, 1), Eh(e, 1, 0));
}
function zl(e) {
  for (; e === ms; )
    ((ms = In[--zn]), (In[zn] = null), (gs = In[--zn]), (In[zn] = null));
  for (; e === wn; )
    ((wn = Ue[--$e]),
      (Ue[$e] = null),
      (kt = Ue[--$e]),
      (Ue[$e] = null),
      (wt = Ue[--$e]),
      (Ue[$e] = null));
}
var Ie = null,
  Le = null,
  Y = !1,
  nt = null;
function bh(e, t) {
  var n = He(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Nc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (Le = Ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: wt, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ta(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ca(e) {
  if (Y) {
    var t = Le;
    if (t) {
      var n = t;
      if (!Nc(e, t)) {
        if (Ta(e)) throw Error(T(418));
        t = Ft(n.nextSibling);
        var r = Ie;
        t && Nc(e, t)
          ? bh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Ie = e));
      }
    } else {
      if (Ta(e)) throw Error(T(418));
      ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Ie = e));
    }
  }
}
function Tc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Pi(e) {
  if (e !== Ie) return !1;
  if (!Y) return (Tc(e), (Y = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ka(e.type, e.memoizedProps))),
    t && (t = Le))
  ) {
    if (Ta(e)) throw (Ah(), Error(T(418)));
    for (; t; ) (bh(e, t), (t = Ft(t.nextSibling)));
  }
  if ((Tc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = Ie ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Ah() {
  for (var e = Le; e; ) e = Ft(e.nextSibling);
}
function qn() {
  ((Le = Ie = null), (Y = !1));
}
function Ol(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
var gy = Pt.ReactCurrentBatchConfig;
function gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Ei(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Cc(e) {
  var t = e._init;
  return t(e._payload);
}
function Mh(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) (t(m, p), (p = p.sibling));
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      (p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling));
    return m;
  }
  function i(m, p) {
    return ((m = Ht(m, p)), (m.index = 0), (m.sibling = null), m);
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function a(m, p, g, x) {
    return p === null || p.tag !== 6
      ? ((p = Do(g, m.mode, x)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function l(m, p, g, x) {
    var N = g.type;
    return N === An
      ? d(m, p, g.props.children, x, g.key)
      : p !== null &&
          (p.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === At &&
              Cc(N) === p.type))
        ? ((x = i(p, g.props)), (x.ref = gr(m, p, g)), (x.return = m), x)
        : ((x = Xi(g.type, g.key, g.props, null, m.mode, x)),
          (x.ref = gr(m, p, g)),
          (x.return = m),
          x);
  }
  function c(m, p, g, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Lo(g, m.mode, x)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function d(m, p, g, x, N) {
    return p === null || p.tag !== 7
      ? ((p = mn(g, m.mode, x, N)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function f(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = Do("" + p, m.mode, g)), (p.return = m), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case yi:
          return (
            (g = Xi(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = gr(m, null, p)),
            (g.return = m),
            g
          );
        case bn:
          return ((p = Lo(p, m.mode, g)), (p.return = m), p);
        case At:
          var x = p._init;
          return f(m, x(p._payload), g);
      }
      if (kr(p) || dr(p))
        return ((p = mn(p, m.mode, g, null)), (p.return = m), p);
      Ei(m, p);
    }
    return null;
  }
  function h(m, p, g, x) {
    var N = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return N !== null ? null : a(m, p, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case yi:
          return g.key === N ? l(m, p, g, x) : null;
        case bn:
          return g.key === N ? c(m, p, g, x) : null;
        case At:
          return ((N = g._init), h(m, p, N(g._payload), x));
      }
      if (kr(g) || dr(g)) return N !== null ? null : d(m, p, g, x, null);
      Ei(m, g);
    }
    return null;
  }
  function y(m, p, g, x, N) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((m = m.get(g) || null), a(p, m, "" + x, N));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case yi:
          return (
            (m = m.get(x.key === null ? g : x.key) || null),
            l(p, m, x, N)
          );
        case bn:
          return (
            (m = m.get(x.key === null ? g : x.key) || null),
            c(p, m, x, N)
          );
        case At:
          var P = x._init;
          return y(m, p, g, P(x._payload), N);
      }
      if (kr(x) || dr(x)) return ((m = m.get(g) || null), d(p, m, x, N, null));
      Ei(p, x);
    }
    return null;
  }
  function v(m, p, g, x) {
    for (
      var N = null, P = null, k = p, j = (p = 0), V = null;
      k !== null && j < g.length;
      j++
    ) {
      k.index > j ? ((V = k), (k = null)) : (V = k.sibling);
      var R = h(m, k, g[j], x);
      if (R === null) {
        k === null && (k = V);
        break;
      }
      (e && k && R.alternate === null && t(m, k),
        (p = s(R, p, j)),
        P === null ? (N = R) : (P.sibling = R),
        (P = R),
        (k = V));
    }
    if (j === g.length) return (n(m, k), Y && on(m, j), N);
    if (k === null) {
      for (; j < g.length; j++)
        ((k = f(m, g[j], x)),
          k !== null &&
            ((p = s(k, p, j)),
            P === null ? (N = k) : (P.sibling = k),
            (P = k)));
      return (Y && on(m, j), N);
    }
    for (k = r(m, k); j < g.length; j++)
      ((V = y(k, m, j, g[j], x)),
        V !== null &&
          (e && V.alternate !== null && k.delete(V.key === null ? j : V.key),
          (p = s(V, p, j)),
          P === null ? (N = V) : (P.sibling = V),
          (P = V)));
    return (
      e &&
        k.forEach(function (_) {
          return t(m, _);
        }),
      Y && on(m, j),
      N
    );
  }
  function w(m, p, g, x) {
    var N = dr(g);
    if (typeof N != "function") throw Error(T(150));
    if (((g = N.call(g)), g == null)) throw Error(T(151));
    for (
      var P = (N = null), k = p, j = (p = 0), V = null, R = g.next();
      k !== null && !R.done;
      j++, R = g.next()
    ) {
      k.index > j ? ((V = k), (k = null)) : (V = k.sibling);
      var _ = h(m, k, R.value, x);
      if (_ === null) {
        k === null && (k = V);
        break;
      }
      (e && k && _.alternate === null && t(m, k),
        (p = s(_, p, j)),
        P === null ? (N = _) : (P.sibling = _),
        (P = _),
        (k = V));
    }
    if (R.done) return (n(m, k), Y && on(m, j), N);
    if (k === null) {
      for (; !R.done; j++, R = g.next())
        ((R = f(m, R.value, x)),
          R !== null &&
            ((p = s(R, p, j)),
            P === null ? (N = R) : (P.sibling = R),
            (P = R)));
      return (Y && on(m, j), N);
    }
    for (k = r(m, k); !R.done; j++, R = g.next())
      ((R = y(k, m, j, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && k.delete(R.key === null ? j : R.key),
          (p = s(R, p, j)),
          P === null ? (N = R) : (P.sibling = R),
          (P = R)));
    return (
      e &&
        k.forEach(function (ee) {
          return t(m, ee);
        }),
      Y && on(m, j),
      N
    );
  }
  function S(m, p, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === An &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case yi:
          e: {
            for (var N = g.key, P = p; P !== null; ) {
              if (P.key === N) {
                if (((N = g.type), N === An)) {
                  if (P.tag === 7) {
                    (n(m, P.sibling),
                      (p = i(P, g.props.children)),
                      (p.return = m),
                      (m = p));
                    break e;
                  }
                } else if (
                  P.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === At &&
                    Cc(N) === P.type)
                ) {
                  (n(m, P.sibling),
                    (p = i(P, g.props)),
                    (p.ref = gr(m, P, g)),
                    (p.return = m),
                    (m = p));
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            g.type === An
              ? ((p = mn(g.props.children, m.mode, x, g.key)),
                (p.return = m),
                (m = p))
              : ((x = Xi(g.type, g.key, g.props, null, m.mode, x)),
                (x.ref = gr(m, p, g)),
                (x.return = m),
                (m = x));
          }
          return o(m);
        case bn:
          e: {
            for (P = g.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  (n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p));
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            ((p = Lo(g, m.mode, x)), (p.return = m), (m = p));
          }
          return o(m);
        case At:
          return ((P = g._init), S(m, p, P(g._payload), x));
      }
      if (kr(g)) return v(m, p, g, x);
      if (dr(g)) return w(m, p, g, x);
      Ei(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = Do(g, m.mode, x)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return S;
}
var Jn = Mh(!0),
  Vh = Mh(!1),
  ys = Zt(null),
  vs = null,
  On = null,
  _l = null;
function Fl() {
  _l = On = vs = null;
}
function Bl(e) {
  var t = ys.current;
  (K(ys), (e._currentValue = t));
}
function Pa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yn(e, t) {
  ((vs = e),
    (_l = On = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (be = !0), (e.firstContext = null)));
}
function Ye(e) {
  var t = e._currentValue;
  if (_l !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
      if (vs === null) throw Error(T(308));
      ((On = e), (vs.dependencies = { lanes: 0, firstContext: e }));
    } else On = On.next = e;
  return t;
}
var cn = null;
function Ul(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function Rh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ul(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Mt = !1;
function $l(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Dh(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function St(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ul(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function $i(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), El(e, n));
  }
}
function Pc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function xs(e, t, n, r) {
  var i = e.updateQueue;
  Mt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    ((l.next = null), o === null ? (s = c) : (o.next = c), (o = l));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    ((o = 0), (d = c = l = null), (a = s));
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            w = a;
          switch (((h = t), (y = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                f = v.call(y, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (h = typeof v == "function" ? v.call(y, f, h) : v),
                h == null)
              )
                break e;
              f = q({}, f, h);
              break e;
            case 2:
              Mt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        ((y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = y), (l = f)) : (d = d.next = y),
          (o |= h));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((Sn |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function Ec(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(T(191, i));
        i.call(r);
      }
    }
}
var ui = {},
  ht = Zt(ui),
  Xr = Zt(ui),
  Qr = Zt(ui);
function dn(e) {
  if (e === ui) throw Error(T(174));
  return e;
}
function Hl(e, t) {
  switch ((H(Qr, t), H(Xr, e), H(ht, ui), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : aa(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = aa(t, e)));
  }
  (K(ht), H(ht, t));
}
function er() {
  (K(ht), K(Xr), K(Qr));
}
function Lh(e) {
  dn(Qr.current);
  var t = dn(ht.current),
    n = aa(t, e.type);
  t !== n && (H(Xr, e), H(ht, n));
}
function Wl(e) {
  Xr.current === e && (K(ht), K(Xr));
}
var Q = Zt(0);
function ws(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Eo = [];
function Kl() {
  for (var e = 0; e < Eo.length; e++)
    Eo[e]._workInProgressVersionPrimary = null;
  Eo.length = 0;
}
var Hi = Pt.ReactCurrentDispatcher,
  bo = Pt.ReactCurrentBatchConfig,
  kn = 0,
  Z = null,
  ae = null,
  ue = null,
  ks = !1,
  Ar = !1,
  Zr = 0,
  yy = 0;
function ye() {
  throw Error(T(321));
}
function Gl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function Yl(e, t, n, r, i, s) {
  if (
    ((kn = s),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hi.current = e === null || e.memoizedState === null ? ky : Sy),
    (e = n(r, i)),
    Ar)
  ) {
    s = 0;
    do {
      if (((Ar = !1), (Zr = 0), 25 <= s)) throw Error(T(301));
      ((s += 1),
        (ue = ae = null),
        (t.updateQueue = null),
        (Hi.current = jy),
        (e = n(r, i)));
    } while (Ar);
  }
  if (
    ((Hi.current = Ss),
    (t = ae !== null && ae.next !== null),
    (kn = 0),
    (ue = ae = Z = null),
    (ks = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Xl() {
  var e = Zr !== 0;
  return ((Zr = 0), e);
}
function lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ue === null ? (Z.memoizedState = ue = e) : (ue = ue.next = e), ue);
}
function Xe() {
  if (ae === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = ue === null ? Z.memoizedState : ue.next;
  if (t !== null) ((ue = t), (ae = e));
  else {
    if (e === null) throw Error(T(310));
    ((ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      ue === null ? (Z.memoizedState = ue = e) : (ue = ue.next = e));
  }
  return ue;
}
function qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ao(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = ae,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      c = s;
    do {
      var d = c.lane;
      if ((kn & d) === d)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (Z.lanes |= d),
          (Sn |= d));
      }
      c = c.next;
    } while (c !== null && c !== s);
    (l === null ? (o = r) : (l.next = a),
      ot(r, t.memoizedState) || (be = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (Z.lanes |= s), (Sn |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Mo(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== i);
    (ot(s, t.memoizedState) || (be = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Ih() {}
function zh(e, t) {
  var n = Z,
    r = Xe(),
    i = t(),
    s = !ot(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (be = !0)),
    (r = r.queue),
    Ql(Fh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jr(9, _h.bind(null, n, r, i, t), void 0, null),
      de === null)
    )
      throw Error(T(349));
    kn & 30 || Oh(n, t, i);
  }
  return i;
}
function Oh(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function _h(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Bh(t) && Uh(e));
}
function Fh(e, t, n) {
  return n(function () {
    Bh(t) && Uh(e);
  });
}
function Bh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function Uh(e) {
  var t = Tt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function bc(e) {
  var t = lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = wy.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function Jr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $h() {
  return Xe().memoizedState;
}
function Wi(e, t, n, r) {
  var i = lt();
  ((Z.flags |= e),
    (i.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ks(e, t, n, r) {
  var i = Xe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ae !== null) {
    var o = ae.memoizedState;
    if (((s = o.destroy), r !== null && Gl(r, o.deps))) {
      i.memoizedState = Jr(t, n, s, r);
      return;
    }
  }
  ((Z.flags |= e), (i.memoizedState = Jr(1 | t, n, s, r)));
}
function Ac(e, t) {
  return Wi(8390656, 8, e, t);
}
function Ql(e, t) {
  return Ks(2048, 8, e, t);
}
function Hh(e, t) {
  return Ks(4, 2, e, t);
}
function Wh(e, t) {
  return Ks(4, 4, e, t);
}
function Kh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Ks(4, 4, Kh.bind(null, t, e), n)
  );
}
function Zl() {}
function Yh(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Xh(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qh(e, t, n) {
  return kn & 21
    ? (ot(n, t) || ((n = th()), (Z.lanes |= n), (Sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n));
}
function vy(e, t) {
  var n = F;
  ((F = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = bo.transition;
  bo.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((F = n), (bo.transition = r));
  }
}
function Zh() {
  return Xe().memoizedState;
}
function xy(e, t, n) {
  var r = $t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qh(e))
  )
    Jh(t, n);
  else if (((n = Rh(e, t, n, r)), n !== null)) {
    var i = Ne();
    (it(n, e, r, i), ep(n, t, r));
  }
}
function wy(e, t, n) {
  var r = $t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qh(e)) Jh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), ot(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), Ul(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Rh(e, t, i, r)),
      n !== null && ((i = Ne()), it(n, e, r, i), ep(n, t, r)));
  }
}
function qh(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function Jh(e, t) {
  Ar = ks = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function ep(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), El(e, n));
  }
}
var Ss = {
    readContext: Ye,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  ky = {
    readContext: Ye,
    useCallback: function (e, t) {
      return ((lt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ye,
    useEffect: Ac,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wi(4194308, 4, Kh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = lt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = lt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = xy.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = lt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: bc,
    useDebugValue: Zl,
    useDeferredValue: function (e) {
      return (lt().memoizedState = e);
    },
    useTransition: function () {
      var e = bc(!1),
        t = e[0];
      return ((e = vy.bind(null, e[1])), (lt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        i = lt();
      if (Y) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(T(349));
        kn & 30 || Oh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Ac(Fh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Jr(9, _h.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = lt(),
        t = de.identifierPrefix;
      if (Y) {
        var n = kt,
          r = wt;
        ((n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Zr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = yy++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Sy = {
    readContext: Ye,
    useCallback: Yh,
    useContext: Ye,
    useEffect: Ql,
    useImperativeHandle: Gh,
    useInsertionEffect: Hh,
    useLayoutEffect: Wh,
    useMemo: Xh,
    useReducer: Ao,
    useRef: $h,
    useState: function () {
      return Ao(qr);
    },
    useDebugValue: Zl,
    useDeferredValue: function (e) {
      var t = Xe();
      return Qh(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Ao(qr)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ih,
    useSyncExternalStore: zh,
    useId: Zh,
    unstable_isNewReconciler: !1,
  },
  jy = {
    readContext: Ye,
    useCallback: Yh,
    useContext: Ye,
    useEffect: Ql,
    useImperativeHandle: Gh,
    useInsertionEffect: Hh,
    useLayoutEffect: Wh,
    useMemo: Xh,
    useReducer: Mo,
    useRef: $h,
    useState: function () {
      return Mo(qr);
    },
    useDebugValue: Zl,
    useDeferredValue: function (e) {
      var t = Xe();
      return ae === null ? (t.memoizedState = e) : Qh(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Mo(qr)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ih,
    useSyncExternalStore: zh,
    useId: Zh,
    unstable_isNewReconciler: !1,
  };
function et(e, t) {
  if (e && e.defaultProps) {
    ((t = q({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ea(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Gs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = $t(e),
      s = St(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Bt(e, s, i)),
      t !== null && (it(t, e, i, r), $i(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = $t(e),
      s = St(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Bt(e, s, i)),
      t !== null && (it(t, e, i, r), $i(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = $t(e),
      i = St(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Bt(e, i, r)),
      t !== null && (it(t, e, r, n), $i(t, e, r)));
  },
};
function Mc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Wr(n, r) || !Wr(i, s)
        : !0
  );
}
function tp(e, t, n) {
  var r = !1,
    i = Kt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ye(s))
      : ((i = Ve(t) ? xn : we.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Zn(e, i) : Kt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Vc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Gs.enqueueReplaceState(t, t.state, null));
}
function ba(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), $l(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = Ye(s))
    : ((s = Ve(t) ? xn : we.current), (i.context = Zn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ea(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Gs.enqueueReplaceState(i, i.state, null),
      xs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Zg(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Vo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Aa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ny = typeof WeakMap == "function" ? WeakMap : Map;
function np(e, t, n) {
  ((n = St(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ns || ((Ns = !0), (Fa = r)), Aa(e, t));
    }),
    n
  );
}
function rp(e, t, n) {
  ((n = St(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Aa(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Aa(e, t),
          typeof r != "function" &&
            (Ut === null ? (Ut = new Set([this])) : Ut.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Rc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ny();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = Oy.bind(null, e, t, n)), t.then(e, e));
}
function Dc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = St(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ty = Pt.ReactCurrentOwner,
  be = !1;
function ke(e, t, n, r) {
  t.child = e === null ? Vh(t, null, n, r) : Jn(t, e.child, n, r);
}
function Ic(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Yn(t, i),
    (r = Yl(e, t, n, r, s, i)),
    (n = Xl()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ct(e, t, i))
      : (Y && n && Il(t), (t.flags |= 1), ke(e, t, r, i), t.child)
  );
}
function zc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !su(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), ip(e, t, s, r, i))
      : ((e = Xi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wr), n(o, r) && e.ref === t.ref)
    )
      return Ct(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ht(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ip(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Wr(s, r) && e.ref === t.ref)
      if (((be = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (be = !0);
      else return ((t.lanes = e.lanes), Ct(e, t, i));
  }
  return Ma(e, t, n, r, i);
}
function sp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(Fn, De),
        (De |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          H(Fn, De),
          (De |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        H(Fn, De),
        (De |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(Fn, De),
      (De |= r));
  return (ke(e, t, i, n), t.child);
}
function op(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ma(e, t, n, r, i) {
  var s = Ve(n) ? xn : we.current;
  return (
    (s = Zn(t, s)),
    Yn(t, i),
    (n = Yl(e, t, n, r, s, i)),
    (r = Xl()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ct(e, t, i))
      : (Y && r && Il(t), (t.flags |= 1), ke(e, t, n, i), t.child)
  );
}
function Oc(e, t, n, r, i) {
  if (Ve(n)) {
    var s = !0;
    ps(t);
  } else s = !1;
  if ((Yn(t, i), t.stateNode === null))
    (Ki(e, t), tp(t, n, r), ba(t, n, r, i), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ye(c))
      : ((c = Ve(n) ? xn : we.current), (c = Zn(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && Vc(t, o, r, c)),
      (Mt = !1));
    var h = t.memoizedState;
    ((o.state = h),
      xs(t, r, o, i),
      (l = t.memoizedState),
      a !== r || h !== l || Me.current || Mt
        ? (typeof d == "function" && (Ea(t, n, d, r), (l = t.memoizedState)),
          (a = Mt || Mc(t, n, a, r, h, l, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      Dh(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : et(t.type, a)),
      (o.props = c),
      (f = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ye(l))
        : ((l = Ve(n) ? xn : we.current), (l = Zn(t, l))));
    var y = n.getDerivedStateFromProps;
    ((d =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && Vc(t, o, r, l)),
      (Mt = !1),
      (h = t.memoizedState),
      (o.state = h),
      xs(t, r, o, i));
    var v = t.memoizedState;
    a !== f || h !== v || Me.current || Mt
      ? (typeof y == "function" && (Ea(t, n, y, r), (v = t.memoizedState)),
        (c = Mt || Mc(t, n, c, r, h, v, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Va(e, t, n, r, s, i);
}
function Va(e, t, n, r, i, s) {
  op(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (i && jc(t, n, !1), Ct(e, t, s));
  ((r = t.stateNode), (Ty.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Jn(t, e.child, null, s)), (t.child = Jn(t, null, a, s)))
      : ke(e, t, a, s),
    (t.memoizedState = r.state),
    i && jc(t, n, !0),
    t.child
  );
}
function ap(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Sc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Sc(e, t.context, !1),
    Hl(e, t.containerInfo));
}
function _c(e, t, n, r, i) {
  return (qn(), Ol(i), (t.flags |= 256), ke(e, t, n, r), t.child);
}
var Ra = { dehydrated: null, treeContext: null, retryLane: 0 };
function Da(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lp(e, t, n) {
  var r = t.pendingProps,
    i = Q.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    H(Q, i & 1),
    e === null)
  )
    return (
      Ca(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Qs(o, r, 0, null)),
              (e = mn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Da(n)),
              (t.memoizedState = Ra),
              e)
            : ql(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Cy(e, t, o, r, a, i, n);
  if (s) {
    ((s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Ht(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Ht(a, s)) : ((s = mn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Da(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ra),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ht(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ql(e, t) {
  return (
    (t = Qs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function bi(e, t, n, r) {
  return (
    r !== null && Ol(r),
    Jn(t, e.child, null, n),
    (e = ql(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cy(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Vo(Error(T(422)))), bi(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = Qs({ mode: "visible", children: r.children }, i, 0, null)),
          (s = mn(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Jn(t, e.child, null, o),
          (t.child.memoizedState = Da(o)),
          (t.memoizedState = Ra),
          s);
  if (!(t.mode & 1)) return bi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(T(419))),
      (r = Vo(s, r, void 0)),
      bi(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), be || a)) {
    if (((r = de), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Tt(e, i), it(r, e, i, -1)));
    }
    return (iu(), (r = Vo(Error(T(421)))), bi(e, t, o, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _y.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Le = Ft(i.nextSibling)),
      (Ie = t),
      (Y = !0),
      (nt = null),
      e !== null &&
        ((Ue[$e++] = wt),
        (Ue[$e++] = kt),
        (Ue[$e++] = wn),
        (wt = e.id),
        (kt = e.overflow),
        (wn = t)),
      (t = ql(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Fc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Pa(e.return, t, n));
}
function Ro(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function up(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ke(e, t, r.children, n), (r = Q.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fc(e, n, t);
        else if (e.tag === 19) Fc(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((H(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && ws(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ro(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ws(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Ro(t, !0, n, null, s);
        break;
      case "together":
        Ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ki(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Ht(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Py(e, t, n) {
  switch (t.tag) {
    case 3:
      (ap(t), qn());
      break;
    case 5:
      Lh(t);
      break;
    case 1:
      Ve(t.type) && ps(t);
      break;
    case 4:
      Hl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (H(ys, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? lp(e, t, n)
            : (H(Q, Q.current & 1),
              (e = Ct(e, t, n)),
              e !== null ? e.sibling : null);
      H(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return up(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        H(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), sp(e, t, n));
  }
  return Ct(e, t, n);
}
var cp, La, dp, fp;
cp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
La = function () {};
dp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), dn(ht.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = ra(e, i)), (r = ra(e, r)), (s = []));
        break;
      case "select":
        ((i = q({}, i, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = oa(e, i)), (r = oa(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = fs);
    }
    la(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Or.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (s || (s = []), s.push(c, n)), (n = l));
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Or.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && W("scroll", e),
                    s || a === l || (s = []))
                  : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
fp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Ey(e, t, n) {
  var r = t.pendingProps;
  switch ((zl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ve(t), null);
    case 1:
      return (Ve(t.type) && hs(), ve(t), null);
    case 3:
      return (
        (r = t.stateNode),
        er(),
        K(Me),
        K(we),
        Kl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nt !== null && ($a(nt), (nt = null)))),
        La(e, t),
        ve(t),
        null
      );
    case 5:
      Wl(t);
      var i = dn(Qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (dp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return (ve(t), null);
        }
        if (((e = dn(ht.current)), Pi(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[dt] = t), (r[Yr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (W("cancel", r), W("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < jr.length; i++) W(jr[i], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (W("error", r), W("load", r));
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              (Xu(r, s), W("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                W("invalid", r));
              break;
            case "textarea":
              (Zu(r, s), W("invalid", r));
          }
          (la(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Or.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              (vi(r), Qu(r, s, !0));
              break;
            case "textarea":
              (vi(r), qu(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = fs);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ff(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[dt] = t),
            (e[Yr] = r),
            cp(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = ua(n, r)), n)) {
              case "dialog":
                (W("cancel", e), W("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (W("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < jr.length; i++) W(jr[i], e);
                i = r;
                break;
              case "source":
                (W("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (W("error", e), W("load", e), (i = r));
                break;
              case "details":
                (W("toggle", e), (i = r));
                break;
              case "input":
                (Xu(e, r), (i = ra(e, r)), W("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = q({}, r, { value: void 0 })),
                  W("invalid", e));
                break;
              case "textarea":
                (Zu(e, r), (i = oa(e, r)), W("invalid", e));
                break;
              default:
                i = r;
            }
            (la(n, i), (a = i));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? $f(e, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Bf(e, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && _r(e, l)
                        : typeof l == "number" && _r(e, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Or.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && W("scroll", e)
                          : l != null && Sl(e, s, l, o));
              }
            switch (n) {
              case "input":
                (vi(e), Qu(e, r, !1));
                break;
              case "textarea":
                (vi(e), qu(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Hn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Hn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = fs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ve(t), null);
    case 6:
      if (e && t.stateNode != null) fp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = dn(Qr.current)), dn(ht.current), Pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dt] = t),
            (s = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dt] = t),
            (t.stateNode = r));
      }
      return (ve(t), null);
    case 13:
      if (
        (K(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && Le !== null && t.mode & 1 && !(t.flags & 128))
          (Ah(), qn(), (t.flags |= 98560), (s = !1));
        else if (((s = Pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(T(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(T(317));
            s[dt] = t;
          } else
            (qn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ve(t), (s = !1));
        } else (nt !== null && ($a(nt), (nt = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? le === 0 && (le = 3) : iu())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        er(),
        La(e, t),
        e === null && Kr(t.stateNode.containerInfo),
        ve(t),
        null
      );
    case 10:
      return (Bl(t.type._context), ve(t), null);
    case 17:
      return (Ve(t.type) && hs(), ve(t), null);
    case 19:
      if ((K(Q), (s = t.memoizedState), s === null)) return (ve(t), null);
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) yr(s, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ws(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (H(Q, (Q.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            te() > nr &&
            ((t.flags |= 128), (r = !0), yr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ws(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !Y)
            )
              return (ve(t), null);
          } else
            2 * te() - s.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = te()),
          (t.sibling = null),
          (n = Q.current),
          H(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        ru(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function by(e, t) {
  switch ((zl(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && hs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        K(Me),
        K(we),
        Kl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Wl(t), null);
    case 13:
      if ((K(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        qn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (K(Q), null);
    case 4:
      return (er(), null);
    case 10:
      return (Bl(t.type._context), null);
    case 22:
    case 23:
      return (ru(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ai = !1,
  xe = !1,
  Ay = typeof WeakSet == "function" ? WeakSet : Set,
  b = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function Ia(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Bc = !1;
function My(e, t) {
  if (((xa = us), (e = yh()), Ll(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;
            )
              ((h = f), (f = y));
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === i && (a = o),
                h === s && ++d === r && (l = o),
                (y = f.nextSibling) !== null)
              )
                break;
              ((f = h), (h = f.parentNode));
            }
            f = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wa = { focusedElem: e, selectionRange: n }, us = !1, b = t; b !== null; )
    if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (b = e));
    else
      for (; b !== null; ) {
        t = b;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    S = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : et(t.type, w),
                      S,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (x) {
          J(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (b = e));
          break;
        }
        b = t.return;
      }
  return ((v = Bc), (Bc = !1), v);
}
function Mr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && Ia(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ys(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function za(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function hp(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), hp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dt], delete t[Yr], delete t[ja], delete t[hy], delete t[py])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function pp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fs)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oa(e, t, n), e = e.sibling; e !== null; )
      (Oa(e, t, n), (e = e.sibling));
}
function _a(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_a(e, t, n), e = e.sibling; e !== null; )
      (_a(e, t, n), (e = e.sibling));
}
var fe = null,
  tt = !1;
function Et(e, t, n) {
  for (n = n.child; n !== null; ) (mp(e, t, n), (n = n.sibling));
}
function mp(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(Fs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || _n(n, t);
    case 6:
      var r = fe,
        i = tt;
      ((fe = null),
        Et(e, t, n),
        (fe = r),
        (tt = i),
        fe !== null &&
          (tt
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode)));
      break;
    case 18:
      fe !== null &&
        (tt
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Co(e.parentNode, n)
              : e.nodeType === 1 && Co(e, n),
            $r(e))
          : Co(fe, n.stateNode));
      break;
    case 4:
      ((r = fe),
        (i = tt),
        (fe = n.stateNode.containerInfo),
        (tt = !0),
        Et(e, t, n),
        (fe = r),
        (tt = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Ia(n, t, o),
            (i = i.next));
        } while (i !== r);
      }
      Et(e, t, n);
      break;
    case 1:
      if (
        !xe &&
        (_n(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          J(n, t, a);
        }
      Et(e, t, n);
      break;
    case 21:
      Et(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), Et(e, t, n), (xe = r))
        : Et(e, t, n);
      break;
    default:
      Et(e, t, n);
  }
}
function $c(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Ay()),
      t.forEach(function (r) {
        var i = Fy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((fe = a.stateNode), (tt = !1));
              break e;
            case 3:
              ((fe = a.stateNode.containerInfo), (tt = !0));
              break e;
            case 4:
              ((fe = a.stateNode.containerInfo), (tt = !0));
              break e;
          }
          a = a.return;
        }
        if (fe === null) throw Error(T(160));
        (mp(s, o, i), (fe = null), (tt = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (c) {
        J(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (gp(t, e), (t = t.sibling));
}
function gp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), at(e), r & 4)) {
        try {
          (Mr(3, e, e.return), Ys(3, e));
        } catch (w) {
          J(e, e.return, w);
        }
        try {
          Mr(5, e, e.return);
        } catch (w) {
          J(e, e.return, w);
        }
      }
      break;
    case 1:
      (Ze(t, e), at(e), r & 512 && n !== null && _n(n, n.return));
      break;
    case 5:
      if (
        (Ze(t, e),
        at(e),
        r & 512 && n !== null && _n(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          _r(i, "");
        } catch (w) {
          J(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && Of(i, s),
              ua(a, o));
            var c = ua(a, s);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                f = l[o + 1];
              d === "style"
                ? $f(i, f)
                : d === "dangerouslySetInnerHTML"
                  ? Bf(i, f)
                  : d === "children"
                    ? _r(i, f)
                    : Sl(i, d, f, c);
            }
            switch (a) {
              case "input":
                ia(i, s);
                break;
              case "textarea":
                _f(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? Hn(i, !!s.multiple, y, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Hn(i, !!s.multiple, s.defaultValue, !0)
                      : Hn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Yr] = s;
          } catch (w) {
            J(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), at(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (w) {
          J(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), at(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $r(t.containerInfo);
        } catch (w) {
          J(e, e.return, w);
        }
      break;
    case 4:
      (Ze(t, e), at(e));
      break;
    case 13:
      (Ze(t, e),
        at(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (tu = te())),
        r & 4 && $c(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (c = xe) || d), Ze(t, e), (xe = c)) : Ze(t, e),
        at(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (b = e, d = e.child; d !== null; ) {
            for (f = b = d; b !== null; ) {
              switch (((h = b), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mr(4, h, h.return);
                  break;
                case 1:
                  _n(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (w) {
                      J(r, n, w);
                    }
                  }
                  break;
                case 5:
                  _n(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Wc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (b = y)) : Wc(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((i = f.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Uf("display", o))));
              } catch (w) {
                J(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (w) {
                J(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Ze(t, e), at(e), r & 4 && $c(e));
      break;
    case 21:
      break;
    default:
      (Ze(t, e), at(e));
  }
}
function at(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (_r(i, ""), (r.flags &= -33));
          var s = Uc(e);
          _a(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Uc(e);
          Oa(e, a, o);
          break;
        default:
          throw Error(T(161));
      }
    } catch (l) {
      J(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vy(e, t, n) {
  ((b = e), yp(e));
}
function yp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; b !== null; ) {
    var i = b,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ai;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || xe;
        a = Ai;
        var c = xe;
        if (((Ai = o), (xe = l) && !c))
          for (b = i; b !== null; )
            ((o = b),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Kc(i)
                : l !== null
                  ? ((l.return = o), (b = l))
                  : Kc(i));
        for (; s !== null; ) ((b = s), yp(s), (s = s.sibling));
        ((b = i), (Ai = a), (xe = c));
      }
      Hc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (b = s)) : Hc(e);
  }
}
function Hc(e) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || Ys(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Ec(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ec(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && $r(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        xe || (t.flags & 512 && za(t));
      } catch (h) {
        J(t, t.return, h);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (b = n));
      break;
    }
    b = t.return;
  }
}
function Wc(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (b = n));
      break;
    }
    b = t.return;
  }
}
function Kc(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ys(4, t);
          } catch (l) {
            J(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              J(t, i, l);
            }
          }
          var s = t.return;
          try {
            za(t);
          } catch (l) {
            J(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            za(t);
          } catch (l) {
            J(t, o, l);
          }
      }
    } catch (l) {
      J(t, t.return, l);
    }
    if (t === e) {
      b = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (b = a));
      break;
    }
    b = t.return;
  }
}
var Ry = Math.ceil,
  js = Pt.ReactCurrentDispatcher,
  Jl = Pt.ReactCurrentOwner,
  Ke = Pt.ReactCurrentBatchConfig,
  O = 0,
  de = null,
  ie = null,
  me = 0,
  De = 0,
  Fn = Zt(0),
  le = 0,
  ei = null,
  Sn = 0,
  Xs = 0,
  eu = 0,
  Vr = null,
  Ee = null,
  tu = 0,
  nr = 1 / 0,
  vt = null,
  Ns = !1,
  Fa = null,
  Ut = null,
  Mi = !1,
  Lt = null,
  Ts = 0,
  Rr = 0,
  Ba = null,
  Gi = -1,
  Yi = 0;
function Ne() {
  return O & 6 ? te() : Gi !== -1 ? Gi : (Gi = te());
}
function $t(e) {
  return e.mode & 1
    ? O & 2 && me !== 0
      ? me & -me
      : gy.transition !== null
        ? (Yi === 0 && (Yi = th()), Yi)
        : ((e = F),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lh(e.type))),
          e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < Rr) throw ((Rr = 0), (Ba = null), Error(T(185)));
  (oi(e, n, r),
    (!(O & 2) || e !== de) &&
      (e === de && (!(O & 2) && (Xs |= n), le === 4 && Rt(e, me)),
      Re(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((nr = te() + 500), Ws && qt())));
}
function Re(e, t) {
  var n = e.callbackNode;
  g0(e, t);
  var r = ls(e, e === de ? me : 0);
  if (r === 0)
    (n !== null && tc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && tc(n), t === 1))
      (e.tag === 0 ? my(Gc.bind(null, e)) : Ph(Gc.bind(null, e)),
        dy(function () {
          !(O & 6) && qt();
        }),
        (n = null));
    else {
      switch (nh(r)) {
        case 1:
          n = Pl;
          break;
        case 4:
          n = Jf;
          break;
        case 16:
          n = as;
          break;
        case 536870912:
          n = eh;
          break;
        default:
          n = as;
      }
      n = Tp(n, vp.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function vp(e, t) {
  if (((Gi = -1), (Yi = 0), O & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Xn() && e.callbackNode !== n) return null;
  var r = ls(e, e === de ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var s = wp();
    (de !== e || me !== t) && ((vt = null), (nr = te() + 500), pn(e, t));
    do
      try {
        Iy();
        break;
      } catch (a) {
        xp(e, a);
      }
    while (!0);
    (Fl(),
      (js.current = s),
      (O = i),
      ie !== null ? (t = 0) : ((de = null), (me = 0), (t = le)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = pa(e)), i !== 0 && ((r = i), (t = Ua(e, i)))), t === 1)
    )
      throw ((n = ei), pn(e, 0), Rt(e, r), Re(e, te()), n);
    if (t === 6) Rt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Dy(i) &&
          ((t = Cs(e, r)),
          t === 2 && ((s = pa(e)), s !== 0 && ((r = s), (t = Ua(e, s)))),
          t === 1))
      )
        throw ((n = ei), pn(e, 0), Rt(e, r), Re(e, te()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          an(e, Ee, vt);
          break;
        case 3:
          if (
            (Rt(e, r), (r & 130023424) === r && ((t = tu + 500 - te()), 10 < t))
          ) {
            if (ls(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (Ne(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Sa(an.bind(null, e, Ee, vt), t);
            break;
          }
          an(e, Ee, vt);
          break;
        case 4:
          if ((Rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - rt(r);
            ((s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = te() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Ry(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Sa(an.bind(null, e, Ee, vt), r);
            break;
          }
          an(e, Ee, vt);
          break;
        case 5:
          an(e, Ee, vt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return (Re(e, te()), e.callbackNode === n ? vp.bind(null, e) : null);
}
function Ua(e, t) {
  var n = Vr;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = Cs(e, t)),
    e !== 2 && ((t = Ee), (Ee = n), t !== null && $a(t)),
    e
  );
}
function $a(e) {
  Ee === null ? (Ee = e) : Ee.push.apply(Ee, e);
}
function Dy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ot(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Rt(e, t) {
  for (
    t &= ~eu,
      t &= ~Xs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Gc(e) {
  if (O & 6) throw Error(T(327));
  Xn();
  var t = ls(e, 0);
  if (!(t & 1)) return (Re(e, te()), null);
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = pa(e);
    r !== 0 && ((t = r), (n = Ua(e, r)));
  }
  if (n === 1) throw ((n = ei), pn(e, 0), Rt(e, t), Re(e, te()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    an(e, Ee, vt),
    Re(e, te()),
    null
  );
}
function nu(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    ((O = n), O === 0 && ((nr = te() + 500), Ws && qt()));
  }
}
function jn(e) {
  Lt !== null && Lt.tag === 0 && !(O & 6) && Xn();
  var t = O;
  O |= 1;
  var n = Ke.transition,
    r = F;
  try {
    if (((Ke.transition = null), (F = 1), e)) return e();
  } finally {
    ((F = r), (Ke.transition = n), (O = t), !(O & 6) && qt());
  }
}
function ru() {
  ((De = Fn.current), K(Fn));
}
function pn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cy(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((zl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && hs());
          break;
        case 3:
          (er(), K(Me), K(we), Kl());
          break;
        case 5:
          Wl(r);
          break;
        case 4:
          er();
          break;
        case 13:
          K(Q);
          break;
        case 19:
          K(Q);
          break;
        case 10:
          Bl(r.type._context);
          break;
        case 22:
        case 23:
          ru();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (ie = e = Ht(e.current, null)),
    (me = De = t),
    (le = 0),
    (ei = null),
    (eu = Xs = Sn = 0),
    (Ee = Vr = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function xp(e, t) {
  do {
    var n = ie;
    try {
      if ((Fl(), (Hi.current = Ss), ks)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        ks = !1;
      }
      if (
        ((kn = 0),
        (ue = ae = Z = null),
        (Ar = !1),
        (Zr = 0),
        (Jl.current = null),
        n === null || n.return === null)
      ) {
        ((le = 1), (ei = t), (ie = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = me),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = Dc(o);
          if (y !== null) {
            ((y.flags &= -257),
              Lc(y, o, a, s, t),
              y.mode & 1 && Rc(s, c, t),
              (t = y),
              (l = c));
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              (w.add(l), (t.updateQueue = w));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Rc(s, c, t), iu());
              break e;
            }
            l = Error(T(426));
          }
        } else if (Y && a.mode & 1) {
          var S = Dc(o);
          if (S !== null) {
            (!(S.flags & 65536) && (S.flags |= 256),
              Lc(S, o, a, s, t),
              Ol(tr(l, a)));
            break e;
          }
        }
        ((s = l = tr(l, a)),
          le !== 4 && (le = 2),
          Vr === null ? (Vr = [s]) : Vr.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var m = np(s, l, t);
              Pc(s, m);
              break e;
            case 1:
              a = l;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Ut === null || !Ut.has(g))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var x = rp(s, a, t);
                Pc(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Sp(n);
    } catch (N) {
      ((t = N), ie === n && n !== null && (ie = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function wp() {
  var e = js.current;
  return ((js.current = Ss), e === null ? Ss : e);
}
function iu() {
  ((le === 0 || le === 3 || le === 2) && (le = 4),
    de === null || (!(Sn & 268435455) && !(Xs & 268435455)) || Rt(de, me));
}
function Cs(e, t) {
  var n = O;
  O |= 2;
  var r = wp();
  (de !== e || me !== t) && ((vt = null), pn(e, t));
  do
    try {
      Ly();
      break;
    } catch (i) {
      xp(e, i);
    }
  while (!0);
  if ((Fl(), (O = n), (js.current = r), ie !== null)) throw Error(T(261));
  return ((de = null), (me = 0), le);
}
function Ly() {
  for (; ie !== null; ) kp(ie);
}
function Iy() {
  for (; ie !== null && !a0(); ) kp(ie);
}
function kp(e) {
  var t = Np(e.alternate, e, De);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Sp(e) : (ie = t),
    (Jl.current = null));
}
function Sp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = by(n, t)), n !== null)) {
        ((n.flags &= 32767), (ie = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((le = 6), (ie = null));
        return;
      }
    } else if (((n = Ey(n, t, De)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function an(e, t, n) {
  var r = F,
    i = Ke.transition;
  try {
    ((Ke.transition = null), (F = 1), zy(e, t, n, r));
  } finally {
    ((Ke.transition = i), (F = r));
  }
  return null;
}
function zy(e, t, n, r) {
  do Xn();
  while (Lt !== null);
  if (O & 6) throw Error(T(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (y0(e, s),
    e === de && ((ie = de = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mi ||
      ((Mi = !0),
      Tp(as, function () {
        return (Xn(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Ke.transition), (Ke.transition = null));
    var o = F;
    F = 1;
    var a = O;
    ((O |= 4),
      (Jl.current = null),
      My(e, n),
      gp(n, e),
      ry(wa),
      (us = !!xa),
      (wa = xa = null),
      (e.current = n),
      Vy(n),
      l0(),
      (O = a),
      (F = o),
      (Ke.transition = s));
  } else e.current = n;
  if (
    (Mi && ((Mi = !1), (Lt = e), (Ts = i)),
    (s = e.pendingLanes),
    s === 0 && (Ut = null),
    d0(n.stateNode),
    Re(e, te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Ns) throw ((Ns = !1), (e = Fa), (Fa = null), e);
  return (
    Ts & 1 && e.tag !== 0 && Xn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ba ? Rr++ : ((Rr = 0), (Ba = e))) : (Rr = 0),
    qt(),
    null
  );
}
function Xn() {
  if (Lt !== null) {
    var e = nh(Ts),
      t = Ke.transition,
      n = F;
    try {
      if (((Ke.transition = null), (F = 16 > e ? 16 : e), Lt === null))
        var r = !1;
      else {
        if (((e = Lt), (Lt = null), (Ts = 0), O & 6)) throw Error(T(331));
        var i = O;
        for (O |= 4, b = e.current; b !== null; ) {
          var s = b,
            o = s.child;
          if (b.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (b = c; b !== null; ) {
                  var d = b;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mr(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (b = f));
                  else
                    for (; b !== null; ) {
                      d = b;
                      var h = d.sibling,
                        y = d.return;
                      if ((hp(d), d === c)) {
                        b = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = y), (b = h));
                        break;
                      }
                      b = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var S = w.sibling;
                    ((w.sibling = null), (w = S));
                  } while (w !== null);
                }
              }
              b = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (b = o));
          else
            e: for (; b !== null; ) {
              if (((s = b), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mr(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                ((m.return = s.return), (b = m));
                break e;
              }
              b = s.return;
            }
        }
        var p = e.current;
        for (b = p; b !== null; ) {
          o = b;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) ((g.return = o), (b = g));
          else
            e: for (o = p; b !== null; ) {
              if (((a = b), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ys(9, a);
                  }
                } catch (N) {
                  J(a, a.return, N);
                }
              if (a === o) {
                b = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                ((x.return = a.return), (b = x));
                break e;
              }
              b = a.return;
            }
        }
        if (
          ((O = i), qt(), ft && typeof ft.onPostCommitFiberRoot == "function")
        )
          try {
            ft.onPostCommitFiberRoot(Fs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((F = n), (Ke.transition = t));
    }
  }
  return !1;
}
function Yc(e, t, n) {
  ((t = tr(n, t)),
    (t = np(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = Ne()),
    e !== null && (oi(e, 1, t), Re(e, t)));
}
function J(e, t, n) {
  if (e.tag === 3) Yc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ut === null || !Ut.has(r)))
        ) {
          ((e = tr(n, e)),
            (e = rp(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = Ne()),
            t !== null && (oi(t, 1, e), Re(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Oy(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (me & n) === n &&
      (le === 4 || (le === 3 && (me & 130023424) === me && 500 > te() - tu)
        ? pn(e, 0)
        : (eu |= n)),
    Re(e, t));
}
function jp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ki), (ki <<= 1), !(ki & 130023424) && (ki = 4194304))
      : (t = 1));
  var n = Ne();
  ((e = Tt(e, t)), e !== null && (oi(e, t, n), Re(e, n)));
}
function _y(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), jp(e, n));
}
function Fy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  (r !== null && r.delete(t), jp(e, n));
}
var Np;
Np = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((be = !1), Py(e, t, n));
      be = !!(e.flags & 131072);
    }
  else ((be = !1), Y && t.flags & 1048576 && Eh(t, gs, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Ki(e, t), (e = t.pendingProps));
      var i = Zn(t, we.current);
      (Yn(t, n), (i = Yl(null, t, r, e, i, n)));
      var s = Xl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((s = !0), ps(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            $l(t),
            (i.updater = Gs),
            (t.stateNode = i),
            (i._reactInternals = t),
            ba(t, r, e, n),
            (t = Va(null, t, r, !0, s, n)))
          : ((t.tag = 0), Y && s && Il(t), ke(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ki(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Uy(r)),
          (e = et(r, e)),
          i)
        ) {
          case 0:
            t = Ma(null, t, r, e, n);
            break e;
          case 1:
            t = Oc(null, t, r, e, n);
            break e;
          case 11:
            t = Ic(null, t, r, e, n);
            break e;
          case 14:
            t = zc(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        Ma(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        Oc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ap(t), e === null)) throw Error(T(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Dh(e, t),
          xs(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = tr(Error(T(423)), t)), (t = _c(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = tr(Error(T(424)), t)), (t = _c(e, t, r, n, i)));
            break e;
          } else
            for (
              Le = Ft(t.stateNode.containerInfo.firstChild),
                Ie = t,
                Y = !0,
                nt = null,
                n = Vh(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((qn(), r === i)) {
            t = Ct(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Lh(t),
        e === null && Ca(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ka(r, i) ? (o = null) : s !== null && ka(r, s) && (t.flags |= 32),
        op(e, t),
        ke(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Ca(t), null);
    case 13:
      return lp(e, t, n);
    case 4:
      return (
        Hl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        Ic(e, t, r, i, n)
      );
    case 7:
      return (ke(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ke(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ke(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          H(ys, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (ot(s.value, o)) {
            if (s.children === i.children && !Me.current) {
              t = Ct(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ((l = St(-1, n & -n)), (l.tag = 2));
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        (d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (c.pending = l));
                      }
                    }
                    ((s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Pa(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(T(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Pa(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (ke(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Yn(t, n),
        (i = Ye(i)),
        (r = r(i)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = et(r, t.pendingProps)),
        (i = et(r.type, i)),
        zc(e, t, r, i, n)
      );
    case 15:
      return ip(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        Ki(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), ps(t)) : (e = !1),
        Yn(t, n),
        tp(t, r, i),
        ba(t, r, i, n),
        Va(null, t, r, !0, e, n)
      );
    case 19:
      return up(e, t, n);
    case 22:
      return sp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Tp(e, t) {
  return qf(e, t);
}
function By(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function He(e, t, n, r) {
  return new By(e, t, n, r);
}
function su(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Uy(e) {
  if (typeof e == "function") return su(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Nl)) return 11;
    if (e === Tl) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) su(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case An:
        return mn(n.children, i, s, t);
      case jl:
        ((o = 8), (i |= 8));
        break;
      case Jo:
        return (
          (e = He(12, n, t, i | 2)),
          (e.elementType = Jo),
          (e.lanes = s),
          e
        );
      case ea:
        return ((e = He(13, n, t, i)), (e.elementType = ea), (e.lanes = s), e);
      case ta:
        return ((e = He(19, n, t, i)), (e.elementType = ta), (e.lanes = s), e);
      case Lf:
        return Qs(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rf:
              o = 10;
              break e;
            case Df:
              o = 9;
              break e;
            case Nl:
              o = 11;
              break e;
            case Tl:
              o = 14;
              break e;
            case At:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = He(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function mn(e, t, n, r) {
  return ((e = He(7, e, r, t)), (e.lanes = n), e);
}
function Qs(e, t, n, r) {
  return (
    (e = He(22, e, r, t)),
    (e.elementType = Lf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Do(e, t, n) {
  return ((e = He(6, e, null, t)), (e.lanes = n), e);
}
function Lo(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $y(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = mo(0)),
    (this.expirationTimes = mo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function ou(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new $y(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = He(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $l(s),
    e
  );
}
function Hy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: bn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cp(e) {
  if (!e) return Kt;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return Ch(e, n, t);
  }
  return t;
}
function Pp(e, t, n, r, i, s, o, a, l) {
  return (
    (e = ou(n, r, !0, e, i, s, o, a, l)),
    (e.context = Cp(null)),
    (n = e.current),
    (r = Ne()),
    (i = $t(n)),
    (s = St(r, i)),
    (s.callback = t ?? null),
    Bt(n, s, i),
    (e.current.lanes = i),
    oi(e, i, r),
    Re(e, r),
    e
  );
}
function Zs(e, t, n, r) {
  var i = t.current,
    s = Ne(),
    o = $t(i);
  return (
    (n = Cp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = St(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bt(i, t, o)),
    e !== null && (it(e, i, o, s), $i(e, i, o)),
    o
  );
}
function Ps(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function au(e, t) {
  (Xc(e, t), (e = e.alternate) && Xc(e, t));
}
function Wy() {
  return null;
}
var Ep =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lu(e) {
  this._internalRoot = e;
}
qs.prototype.render = lu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Zs(e, t, null, null);
};
qs.prototype.unmount = lu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (jn(function () {
      Zs(null, e, null, null);
    }),
      (t[Nt] = null));
  }
};
function qs(e) {
  this._internalRoot = e;
}
qs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    (Vt.splice(n, 0, e), n === 0 && ah(e));
  }
};
function uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Js(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qc() {}
function Ky(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = Ps(o);
        s.call(c);
      };
    }
    var o = Pp(t, r, e, 0, null, !1, !1, "", Qc);
    return (
      (e._reactRootContainer = o),
      (e[Nt] = o.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      jn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Ps(l);
      a.call(c);
    };
  }
  var l = ou(e, 0, !1, null, null, !1, !1, "", Qc);
  return (
    (e._reactRootContainer = l),
    (e[Nt] = l.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    jn(function () {
      Zs(t, l, n, r);
    }),
    l
  );
}
function eo(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ps(o);
        a.call(l);
      };
    }
    Zs(t, o, e, i);
  } else o = Ky(n, t, e, i, r);
  return Ps(o);
}
rh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes);
        n !== 0 &&
          (El(t, n | 1), Re(t, te()), !(O & 6) && ((nr = te() + 500), qt()));
      }
      break;
    case 13:
      (jn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var i = Ne();
          it(r, e, 1, i);
        }
      }),
        au(e, 1));
  }
};
bl = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      it(t, e, 134217728, n);
    }
    au(e, 134217728);
  }
};
ih = function (e) {
  if (e.tag === 13) {
    var t = $t(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = Ne();
      it(n, e, t, r);
    }
    au(e, t);
  }
};
sh = function () {
  return F;
};
oh = function (e, t) {
  var n = F;
  try {
    return ((F = e), t());
  } finally {
    F = n;
  }
};
da = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ia(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Hs(r);
            if (!i) throw Error(T(90));
            (zf(r), ia(r, i));
          }
        }
      }
      break;
    case "textarea":
      _f(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Hn(e, !!n.multiple, t, !1));
  }
};
Kf = nu;
Gf = jn;
var Gy = { usingClientEntryPoint: !1, Events: [li, Dn, Hs, Hf, Wf, nu] },
  vr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Yy = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Qf(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || Wy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vi.isDisabled && Vi.supportsFiber)
    try {
      ((Fs = Vi.inject(Yy)), (ft = Vi));
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!uu(t)) throw Error(T(200));
  return Hy(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!uu(e)) throw Error(T(299));
  var n = !1,
    r = "",
    i = Ep;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ou(e, 1, !1, null, null, n, !1, r, i)),
    (e[Nt] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new lu(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return ((e = Qf(t)), (e = e === null ? null : e.stateNode), e);
};
Fe.flushSync = function (e) {
  return jn(e);
};
Fe.hydrate = function (e, t, n) {
  if (!Js(t)) throw Error(T(200));
  return eo(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!uu(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Ep;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Pp(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Nt] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new qs(t);
};
Fe.render = function (e, t, n) {
  if (!Js(t)) throw Error(T(200));
  return eo(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!Js(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (jn(function () {
        eo(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Nt] = null));
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = nu;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Js(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return eo(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function bp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bp);
    } catch (e) {
      console.error(e);
    }
}
(bp(), (bf.exports = Fe));
var Xy = bf.exports,
  Ap,
  Zc = Xy;
((Ap = Zc.createRoot), Zc.hydrateRoot);
const cu = C.createContext({});
function du(e) {
  const t = C.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Qy = typeof window < "u",
  Es = Qy ? C.useLayoutEffect : C.useEffect,
  to = C.createContext(null);
function fu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function bs(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const mt = (e, t, n) => (n > t ? t : n < e ? e : n);
let no = () => {},
  Nn = () => {};
const Gt = {},
  Mp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Vp = (e) => typeof e == "object" && e !== null,
  Rp = (e) => /^0[^.\s]+$/u.test(e);
function Dp(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ge = (e) => e,
  ci = (...e) => e.reduce((t, n) => (r) => n(t(r))),
  ti = (e, t, n) => {
    const r = t - e;
    return r ? (n - e) / r : 1;
  };
class hu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (fu(this.subscriptions, t), () => bs(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ze = (e) => e * 1e3,
  We = (e) => e / 1e3,
  Lp = (e, t) => (t ? e * (1e3 / t) : 0),
  Ip = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Zy = 1e-7,
  qy = 12;
function Jy(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (s = Ip(o, r, i) - e), s > 0 ? (n = o) : (t = o));
  while (Math.abs(s) > Zy && ++a < qy);
  return o;
}
function di(e, t, n, r) {
  if (e === t && n === r) return Ge;
  const i = (s) => Jy(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Ip(i(s), t, r));
}
const zp = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Op = (e) => (t) => 1 - e(1 - t),
  _p = di(0.33, 1.53, 0.69, 0.99),
  pu = Op(_p),
  Fp = zp(pu),
  Bp = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
        ? 0.5 * pu(e)
        : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  mu = (e) => 1 - Math.sin(Math.acos(e)),
  Up = Op(mu),
  $p = zp(mu),
  ev = di(0.42, 0, 1, 1),
  tv = di(0, 0, 0.58, 1),
  Hp = di(0.42, 0, 0.58, 1),
  nv = (e) => Array.isArray(e) && typeof e[0] != "number",
  Wp = (e) => Array.isArray(e) && typeof e[0] == "number",
  qc = {
    linear: Ge,
    easeIn: ev,
    easeInOut: Hp,
    easeOut: tv,
    circIn: mu,
    circInOut: $p,
    circOut: Up,
    backIn: pu,
    backInOut: Fp,
    backOut: _p,
    anticipate: Bp,
  },
  rv = (e) => typeof e == "string",
  Jc = (e) => {
    if (Wp(e)) {
      Nn(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length",
      );
      const [t, n, r, i] = e;
      return di(t, n, r, i);
    } else if (rv(e))
      return (
        Nn(
          qc[e] !== void 0,
          `Invalid easing type '${e}'`,
          "invalid-easing-type",
        ),
        qc[e]
      );
    return e;
  },
  Ri = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function iv(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    (s.has(c) && (l.schedule(c), e()), c(o));
  }
  const l = {
    schedule: (c, d = !1, f = !1) => {
      const y = f && r ? t : n;
      return (d && s.add(c), y.add(c), c);
    },
    cancel: (c) => {
      (n.delete(c), s.delete(c));
    },
    process: (c) => {
      if (((o = c), r)) {
        i = !0;
        return;
      }
      r = !0;
      const d = t;
      ((t = n),
        (n = d),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(c)));
    },
  };
  return l;
}
const sv = 40;
function Kp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Ri.reduce((g, x) => ((g[x] = iv(s)), g), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: c,
      preUpdate: d,
      update: f,
      preRender: h,
      render: y,
      postRender: v,
    } = o,
    w = () => {
      const g = Gt.useManualTiming,
        x = g ? i.timestamp : performance.now();
      ((n = !1),
        g ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, sv), 1)),
        (i.timestamp = x),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        y.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(w)));
    },
    S = () => {
      ((n = !0), (r = !0), i.isProcessing || e(w));
    };
  return {
    schedule: Ri.reduce((g, x) => {
      const N = o[x];
      return (
        (g[x] = (P, k = !1, j = !1) => (n || S(), N.schedule(P, k, j))),
        g
      );
    }, {}),
    cancel: (g) => {
      for (let x = 0; x < Ri.length; x++) o[Ri[x]].cancel(g);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: $,
  cancel: Yt,
  state: he,
  steps: Io,
} = Kp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ge, !0);
let Qi;
function ov() {
  Qi = void 0;
}
const Se = {
    now: () => (
      Qi === void 0 &&
        Se.set(
          he.isProcessing || Gt.useManualTiming
            ? he.timestamp
            : performance.now(),
        ),
      Qi
    ),
    set: (e) => {
      ((Qi = e), queueMicrotask(ov));
    },
  },
  Gp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Yp = Gp("--"),
  av = Gp("var(--"),
  gu = (e) => (av(e) ? lv.test(e.split("/*")[0].trim()) : !1),
  lv =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ed(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const lr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ni = { ...lr, transform: (e) => mt(0, 1, e) },
  Di = { ...lr, default: 1 },
  Dr = (e) => Math.round(e * 1e5) / 1e5,
  yu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function uv(e) {
  return e == null;
}
const cv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  vu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && cv.test(n) && n.startsWith(e)) ||
      (t && !uv(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Xp = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(yu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  dv = (e) => mt(0, 255, e),
  zo = { ...lr, transform: (e) => Math.round(dv(e)) },
  fn = {
    test: vu("rgb", "red"),
    parse: Xp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      zo.transform(e) +
      ", " +
      zo.transform(t) +
      ", " +
      zo.transform(n) +
      ", " +
      Dr(ni.transform(r)) +
      ")",
  };
function fv(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Ha = { test: vu("#"), parse: fv, transform: fn.transform },
  fi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  yt = fi("deg"),
  pt = fi("%"),
  A = fi("px"),
  hv = fi("vh"),
  pv = fi("vw"),
  td = {
    ...pt,
    parse: (e) => pt.parse(e) / 100,
    transform: (e) => pt.transform(e * 100),
  },
  Bn = {
    test: vu("hsl", "hue"),
    parse: Xp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      pt.transform(Dr(t)) +
      ", " +
      pt.transform(Dr(n)) +
      ", " +
      Dr(ni.transform(r)) +
      ")",
  },
  re = {
    test: (e) => fn.test(e) || Ha.test(e) || Bn.test(e),
    parse: (e) =>
      fn.test(e) ? fn.parse(e) : Bn.test(e) ? Bn.parse(e) : Ha.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? fn.transform(e)
          : Bn.transform(e),
    getAnimatableNone: (e) => {
      const t = re.parse(e);
      return ((t.alpha = 0), re.transform(t));
    },
  },
  mv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function gv(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(yu)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(mv)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Qp = "number",
  Zp = "color",
  yv = "var",
  vv = "var(",
  nd = "${}",
  xv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function rr(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      xv,
      (l) => (
        re.test(l)
          ? (r.color.push(s), i.push(Zp), n.push(re.parse(l)))
          : l.startsWith(vv)
            ? (r.var.push(s), i.push(yv), n.push(l))
            : (r.number.push(s), i.push(Qp), n.push(parseFloat(l))),
        ++s,
        nd
      ),
    )
    .split(nd);
  return { values: n, split: a, indexes: r, types: i };
}
function wv(e) {
  return rr(e).values;
}
function qp({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let i = "";
    for (let s = 0; s < n; s++)
      if (((i += e[s]), r[s] !== void 0)) {
        const o = t[s];
        o === Qp
          ? (i += Dr(r[s]))
          : o === Zp
            ? (i += re.transform(r[s]))
            : (i += r[s]);
      }
    return i;
  };
}
function kv(e) {
  return qp(rr(e));
}
const Sv = (e) =>
    typeof e == "number" ? 0 : re.test(e) ? re.getAnimatableNone(e) : e,
  jv = (e, t) =>
    typeof e == "number"
      ? t != null && t.trim().endsWith("/")
        ? e
        : 0
      : Sv(e);
function Nv(e) {
  const t = rr(e);
  return qp(t)(t.values.map((r, i) => jv(r, t.split[i])));
}
const st = {
  test: gv,
  parse: wv,
  createTransformer: kv,
  getAnimatableNone: Nv,
};
function Oo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Tv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Oo(l, a, e + 1 / 3)), (s = Oo(l, a, e)), (o = Oo(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function As(e, t) {
  return (n) => (n > 0 ? t : e);
}
const U = (e, t, n) => e + (t - e) * n,
  _o = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Cv = [Ha, fn, Bn],
  Pv = (e) => Cv.find((t) => t.test(e));
function rd(e) {
  const t = Pv(e);
  if (
    (no(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable",
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === Bn && (n = Tv(n)), n);
}
const id = (e, t) => {
    const n = rd(e),
      r = rd(t);
    if (!n || !r) return As(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = _o(n.red, r.red, s)),
      (i.green = _o(n.green, r.green, s)),
      (i.blue = _o(n.blue, r.blue, s)),
      (i.alpha = U(n.alpha, r.alpha, s)),
      fn.transform(i)
    );
  },
  Wa = new Set(["none", "hidden"]);
function Ev(e, t) {
  return Wa.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function bv(e, t) {
  return (n) => U(e, t, n);
}
function xu(e) {
  return typeof e == "number"
    ? bv
    : typeof e == "string"
      ? gu(e)
        ? As
        : re.test(e)
          ? id
          : Vv
      : Array.isArray(e)
        ? Jp
        : typeof e == "object"
          ? re.test(e)
            ? id
            : Av
          : As;
}
function Jp(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => xu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function Av(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = xu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function Mv(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      o = e.indexes[s][r[s]],
      a = e.values[o] ?? 0;
    ((n[i] = a), r[s]++);
  }
  return n;
}
const Vv = (e, t) => {
  const n = st.createTransformer(t),
    r = rr(e),
    i = rr(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Wa.has(e) && !i.values.length) || (Wa.has(t) && !r.values.length)
      ? Ev(e, t)
      : ci(Jp(Mv(r, i), i.values), n)
    : (no(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different",
      ),
      As(e, t));
};
function em(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? U(e, t, n)
    : xu(e)(e, t);
}
const Rv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => $.update(t, n),
      stop: () => Yt(t),
      now: () => (he.isProcessing ? he.timestamp : Se.now()),
    };
  },
  tm = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
      r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  wu = 2e4;
function ku(e, t = 50, n = wu, r) {
  let i = 0,
    s = e.next(i);
  for (; !s.done && i < n; ) ((i += t), (s = e.next(i)));
  return i >= n ? 1 / 0 : i;
}
function Dv(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(ku(r), wu);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: We(i),
  };
}
const X = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Ka(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Lv = 12;
function Iv(e, t, n) {
  let r = n;
  for (let i = 1; i < Lv; i++) r = r - e(r) / t(r);
  return r;
}
const Fo = 0.001;
function zv({
  duration: e = X.duration,
  bounce: t = X.bounce,
  velocity: n = X.velocity,
  mass: r = X.mass,
}) {
  let i, s;
  no(
    e <= ze(X.maxDuration),
    "Spring duration must be 10 seconds or less",
    "spring-duration-limit",
  );
  let o = 1 - t;
  ((o = mt(X.minDamping, X.maxDamping, o)),
    (e = mt(X.minDuration, X.maxDuration, We(e))),
    o < 1
      ? ((i = (c) => {
          const d = c * o,
            f = d * e,
            h = d - n,
            y = Ka(c, o),
            v = Math.exp(-f);
          return Fo - (h / y) * v;
        }),
        (s = (c) => {
          const f = c * o * e,
            h = f * n + n,
            y = o * o * c * c * e,
            v = Math.exp(-f),
            w = Ka(c * c, o);
          return ((-i(c) + Fo > 0 ? -1 : 1) * ((h - y) * v)) / w;
        }))
      : ((i = (c) => {
          const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Fo + d * f;
        }),
        (s = (c) => {
          const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return d * f;
        })));
  const a = 5 / e,
    l = Iv(i, s, a);
  if (((e = ze(e)), isNaN(l)))
    return { stiffness: X.stiffness, damping: X.damping, duration: e };
  {
    const c = l * l * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const Ov = ["duration", "bounce"],
  _v = ["stiffness", "damping", "mass"];
function sd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Fv(e) {
  let t = {
    velocity: X.velocity,
    stiffness: X.stiffness,
    damping: X.damping,
    mass: X.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!sd(e, _v) && sd(e, Ov))
    if (((t.velocity = 0), e.visualDuration)) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * mt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: X.mass, stiffness: i, damping: s };
    } else {
      const n = zv({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: X.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Ms(e = X.visualDuration, t = X.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: c,
      mass: d,
      duration: f,
      velocity: h,
      isResolvedFromDuration: y,
    } = Fv({ ...n, velocity: -We(n.velocity || 0) }),
    v = h || 0,
    w = c / (2 * Math.sqrt(l * d)),
    S = o - s,
    m = We(Math.sqrt(l / d)),
    p = w * m,
    g = Math.abs(S) < 5;
  (r || (r = g ? X.restSpeed.granular : X.restSpeed.default),
    i || (i = g ? X.restDelta.granular : X.restDelta.default));
  let x, N;
  if (w < 1) {
    const k = Ka(m, w),
      j = (v + p * S) / k,
      V = p * j + S * k,
      R = p * S - j * k;
    let _ = -1,
      ee = 0,
      se = 0;
    const en = (Pe) => {
      if (Pe !== _) {
        _ = Pe;
        const gt = Math.exp(-p * Pe),
          tn = Math.sin(k * Pe),
          E = Math.cos(k * Pe);
        ((ee = o - gt * (j * tn + S * E)), (se = gt * (V * tn + R * E)));
      }
    };
    ((x = (Pe) => (en(Pe), ee)), (N = (Pe) => (en(Pe), se)));
  } else if (w === 1) {
    x = (j) => o - Math.exp(-m * j) * (S + (v + m * S) * j);
    const k = v + m * S;
    N = (j) => Math.exp(-m * j) * (m * k * j - v);
  } else {
    const k = m * Math.sqrt(w * w - 1);
    x = (_) => {
      const ee = Math.exp(-p * _),
        se = Math.min(k * _, 300);
      return (
        o - (ee * ((v + p * S) * Math.sinh(se) + k * S * Math.cosh(se))) / k
      );
    };
    const j = (v + p * S) / k,
      V = p * j - S * k,
      R = p * S - j * k;
    N = (_) => {
      const ee = Math.exp(-p * _),
        se = Math.min(k * _, 300);
      return ee * (V * Math.sinh(se) + R * Math.cosh(se));
    };
  }
  const P = {
    calculatedDuration: (y && f) || null,
    velocity: (k) => ze(N(k)),
    next: (k) => {
      const j = x(k);
      if (y) a.done = k >= f;
      else {
        const V = ze(N(k));
        a.done = Math.abs(V) <= r && Math.abs(o - j) <= i;
      }
      return ((a.value = a.done ? o : j), a);
    },
    toString: () => {
      const k = Math.min(ku(P), wu),
        j = tm((V) => P.next(k * V).value, k, 30);
      return k + "ms " + j;
    },
    toTransition: () => {},
  };
  return P;
}
Ms.applyToOptions = (e) => {
  const t = Dv(e, 100, Ms);
  return (
    (e.ease = t.ease),
    (e.duration = ze(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
function Ga({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    y = (k) => k < a || k > l,
    v = (k) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - k) < Math.abs(l - k)
          ? a
          : l;
  let w = n * t;
  const S = f + w,
    m = o === void 0 ? S : o(S);
  m !== S && (w = m - f);
  const p = (k) => -w * Math.exp(-k / r),
    g = (k) => {
      const j = p(k);
      ((h.done = Math.abs(j) <= c), (h.value = h.done ? m : m + j));
    };
  let x, N;
  const P = (k) => {
    y(h.value) &&
      ((x = k),
      (N = Ms({
        keyframes: [h.value, v(h.value)],
        velocity: (-p(k) / r) * 1e3,
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let j = !1;
        return (
          !N && x === void 0 && ((j = !0), g(k), P(k)),
          x !== void 0 && k >= x ? N.next(k - x) : (!j && g(k), h)
        );
      },
    }
  );
}
function Bv(e, t, n) {
  const r = [],
    i = n || Gt.mix || em,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ge : t;
      a = ci(l, a);
    }
    r.push(a);
  }
  return r;
}
function Uv(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if (
    (Nn(
      s === t.length,
      "Both input and output ranges must be the same length",
      "range-length",
    ),
    s === 1)
  )
    return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Bv(t, r, i),
    l = a.length,
    c = (d) => {
      if (o && d < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(d < e[f + 1]); f++);
      const h = ti(e[f], e[f + 1], d);
      return a[f](h);
    };
  return n ? (d) => c(mt(e[0], e[s - 1], d)) : c;
}
function $v(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = ti(0, t, r);
    e.push(U(n, 1, i));
  }
}
function Hv(e) {
  const t = [0];
  return ($v(t, e.length - 1), t);
}
function Wv(e, t) {
  return e.map((n) => n * t);
}
function Kv(e, t) {
  return e.map(() => t || Hp).splice(0, e.length - 1);
}
function Lr({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = nv(r) ? r.map(Jc) : Jc(r),
    s = { done: !1, value: t[0] },
    o = Wv(n && n.length === t.length ? n : Hv(t), e),
    a = Uv(o, t, { ease: Array.isArray(i) ? i : Kv(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const Gv = 5;
function Yv(e, t, n) {
  const r = Math.max(t - Gv, 0);
  return Lp(n - e(r), t - r);
}
const Xv = (e) => e !== null;
function ro(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(Xv),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const Qv = { decay: Ga, inertia: Ga, tween: Lr, keyframes: Lr, spring: Ms };
function nm(e) {
  typeof e.type == "string" && (e.type = Qv[e.type]);
}
class Su {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Zv = (e) => e / 100;
class Vs extends Su {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== Se.now() && this.tick(Se.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    nm(t);
    const {
      type: n = Lr,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Lr;
    l !== Lr &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = ci(Zv, em(a[0], a[1]))), (a = [0, 100]));
    const c = l({ ...t, keyframes: a });
    (s === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      c.calculatedDuration === null && (c.calculatedDuration = ku(c)));
    const { calculatedDuration: d } = c;
    ((this.calculatedDuration = d),
      (this.resolvedDuration = d + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = c));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: c = 0,
      keyframes: d,
      repeat: f,
      repeatType: h,
      repeatDelay: y,
      type: v,
      onUpdate: w,
      finalKeyframe: S,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const m = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
      p = this.playbackSpeed >= 0 ? m < 0 : m > i;
    ((this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i));
    let g = this.currentTime,
      x = r;
    if (f) {
      const j = Math.min(this.currentTime, i) / a;
      let V = Math.floor(j),
        R = j % 1;
      (!R && j >= 1 && (R = 1),
        R === 1 && V--,
        (V = Math.min(V, f + 1)),
        !!(V % 2) &&
          (h === "reverse"
            ? ((R = 1 - R), y && (R -= y / a))
            : h === "mirror" && (x = o)),
        (g = mt(0, 1, R) * a));
    }
    let N;
    (p
      ? ((this.delayState.value = d[0]), (N = this.delayState))
      : (N = x.next(g)),
      s && !p && (N.value = s(N.value)));
    let { done: P } = N;
    !p &&
      l !== null &&
      (P =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const k =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      k && v !== Ga && (N.value = ro(d, this.options, S, this.speed)),
      w && w(N.value),
      k && this.finish(),
      N
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return We(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + We(t);
  }
  get time() {
    return We(this.currentTime);
  }
  set time(t) {
    ((t = ze(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = t),
          this.tick(t)));
  }
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(t);
    const n = this.generator.next(t).value;
    return Yv((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (n && this.driver && this.updateTime(Se.now()),
      (this.playbackSpeed = t),
      n && this.driver && (this.time = We(this.currentTime)));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: t = Rv, startTime: n } = this.options;
    (this.driver || (this.driver = t((o) => this.tick(o))),
      (s = (i = this.options).onPlay) == null || s.call(i));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(Se.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function qv(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const hn = (e) => (e * 180) / Math.PI,
  Ya = (e) => {
    const t = hn(Math.atan2(e[1], e[0]));
    return Xa(t);
  },
  Jv = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Ya,
    rotateZ: Ya,
    skewX: (e) => hn(Math.atan(e[1])),
    skewY: (e) => hn(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Xa = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  od = Ya,
  ad = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  ld = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  ex = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: ad,
    scaleY: ld,
    scale: (e) => (ad(e) + ld(e)) / 2,
    rotateX: (e) => Xa(hn(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Xa(hn(Math.atan2(-e[2], e[0]))),
    rotateZ: od,
    rotate: od,
    skewX: (e) => hn(Math.atan(e[4])),
    skewY: (e) => hn(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Qa(e) {
  return e.includes("scale") ? 1 : 0;
}
function Za(e, t) {
  if (!e || e === "none") return Qa(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) ((r = ex), (i = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Jv), (i = a));
  }
  if (!i) return Qa(t);
  const s = r[t],
    o = i[1].split(",").map(nx);
  return typeof s == "function" ? s(o) : o[s];
}
const tx = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Za(n, t);
};
function nx(e) {
  return parseFloat(e.trim());
}
const ur = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  cr = new Set([...ur, "pathRotation"]),
  ud = (e) => e === lr || e === A,
  rx = new Set(["x", "y", "z"]),
  ix = ur.filter((e) => !rx.has(e));
function sx(e) {
  const t = [];
  return (
    ix.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const It = {
  width: (
    { x: e },
    { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r },
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r },
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Za(t, "x"),
  y: (e, { transform: t }) => Za(t, "y"),
};
It.translateX = It.x;
It.translateY = It.y;
const gn = new Set();
let qa = !1,
  Ja = !1,
  el = !1;
function rm() {
  if (Ja) {
    const e = Array.from(gn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = sx(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) == null || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Ja = !1), (qa = !1), gn.forEach((e) => e.complete(el)), gn.clear());
}
function im() {
  gn.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Ja = !0));
  });
}
function ox() {
  ((el = !0), im(), rm(), (el = !1));
}
class ju {
  constructor(t, n, r, i, s, o = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (gn.add(this), qa || ((qa = !0), $.read(im), $.resolveKeyframes(rm)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const s = i == null ? void 0 : i.get(),
        o = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]));
    }
    qv(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      gn.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (gn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const ax = (e) => e.startsWith("--");
function sm(e, t, n) {
  ax(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const lx = {};
function om(e, t) {
  const n = Dp(e);
  return () => lx[t] ?? n();
}
const ux = om(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  am = om(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Nr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  cd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Nr([0, 0.65, 0.55, 1]),
    circOut: Nr([0.55, 0, 1, 0.45]),
    backIn: Nr([0.31, 0.01, 0.66, -0.59]),
    backOut: Nr([0.33, 1.53, 0.69, 0.99]),
  };
function lm(e, t) {
  if (e)
    return typeof e == "function"
      ? am()
        ? tm(e, t)
        : "ease-out"
      : Wp(e)
        ? Nr(e)
        : Array.isArray(e)
          ? e.map((n) => lm(n, t) || cd.easeOut)
          : cd[e];
}
function cx(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  c = void 0,
) {
  const d = { [t]: n };
  l && (d.offset = l);
  const f = lm(a, i);
  Array.isArray(f) && (d.easing = f);
  const h = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return (c && (h.pseudoElement = c), e.animate(d, h));
}
function um(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function dx({ type: e, ...t }) {
  return um(e) && am()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class cm extends Su {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!s),
      (this.allowFlatten = o),
      (this.options = t),
      Nn(
        typeof t.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring",
      ));
    const c = dx(t);
    ((this.animation = cx(n, r, i, c, s)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const d = ro(i, this.options, a, this.speed);
          (this.updateMotionValue && this.updateMotionValue(d),
            sm(n, r, d),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, i;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((i = (r = this.animation).commitStyles) == null || i.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return We(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + We(t);
  }
  get time() {
    return We(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = ze(t)),
      n && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: i }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && ux()
        ? ((this.animation.timeline = t),
          n && (this.animation.rangeStart = n),
          r && (this.animation.rangeEnd = r),
          Ge)
        : i(this)
    );
  }
}
const dm = { anticipate: Bp, backInOut: Fp, circInOut: $p };
function fx(e) {
  return e in dm;
}
function hx(e) {
  typeof e.ease == "string" && fx(e.ease) && (e.ease = dm[e.ease]);
}
const Bo = 10;
class px extends cm {
  constructor(t) {
    (hx(t),
      nm(t),
      super(t),
      t.startTime !== void 0 &&
        t.autoplay !== !1 &&
        (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: s,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Vs({ ...o, autoplay: !1 }),
      l = Math.max(Bo, Se.now() - this.startTime),
      c = mt(0, Bo, l - Bo),
      d = a.sample(l).value,
      { name: f } = this.options;
    (s && f && sm(s, f, d),
      n.setWithVelocity(a.sample(Math.max(0, l - c)).value, d, c),
      a.stop());
  }
}
const dd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (st.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function mx(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function gx(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = dd(i, t),
    a = dd(s, t);
  return (
    no(
      o === a,
      `You are trying to animate ${t} from "${i}" to "${s}". "${o ? s : i}" is not an animatable value.`,
      "value-not-animatable",
    ),
    !o || !a ? !1 : mx(e) || ((n === "spring" || um(n)) && r)
  );
}
function tl(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const fm = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  yx = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function vx(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && yx.test(e[t])) return !0;
  return !1;
}
const xx = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  wx = Dp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function kx(e) {
  var f;
  const {
      motionValue: t,
      name: n,
      repeatDelay: r,
      repeatType: i,
      damping: s,
      type: o,
      keyframes: a,
    } = e,
    l = (f = t == null ? void 0 : t.owner) == null ? void 0 : f.current;
  if (!(l instanceof HTMLElement) && !(l instanceof SVGElement)) return !1;
  const { onUpdate: c, transformTemplate: d } = t.owner.getProps();
  return (
    wx() &&
    n &&
    (fm.has(n) || (xx.has(n) && vx(a))) &&
    (n !== "transform" || !d) &&
    !c &&
    !r &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const Sx = 40;
class jx extends Su {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: c,
    element: d,
    ...f
  }) {
    var v;
    (super(),
      (this.stop = () => {
        var w, S;
        (this._animation &&
          (this._animation.stop(),
          (w = this.stopTimeline) == null || w.call(this)),
          (S = this.keyframeResolver) == null || S.cancel());
      }),
      (this.createdAt = Se.now()));
    const h = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        name: l,
        motionValue: c,
        element: d,
        ...f,
      },
      y = (d == null ? void 0 : d.KeyframeResolver) || ju;
    ((this.keyframeResolver = new y(
      a,
      (w, S, m) => this.onKeyframesResolved(w, S, h, !m),
      l,
      c,
      d,
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, i) {
    var m, p;
    this.keyframeResolver = void 0;
    const {
      name: s,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: c,
      onUpdate: d,
    } = r;
    this.resolvedAt = Se.now();
    let f = !0;
    gx(t, s, o, a) ||
      ((f = !1),
      (Gt.instantAnimations || !l) && (d == null || d(ro(t, r, n))),
      (t[0] = t[t.length - 1]),
      tl(r),
      (r.repeat = 0));
    const y = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Sx
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      v = f && !c && kx(y),
      w =
        (p = (m = y.motionValue) == null ? void 0 : m.owner) == null
          ? void 0
          : p.current;
    let S;
    if (v)
      try {
        S = new px({ ...y, element: w });
      } catch {
        S = new Vs(y);
      }
    else S = new Vs(y);
    (S.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Ge),
      this.pendingTimeline &&
        ((this.stopTimeline = S.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = S));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), ox()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
function hm(e, t, n, r = 0, i = 1) {
  const s = Array.from(e)
      .sort((c, d) => c.sortNodePosition(d))
      .indexOf(t),
    o = e.size,
    a = (o - 1) * r;
  return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r;
}
const fd = 30,
  Nx = (e) => !isNaN(parseFloat(e));
class Tx {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var s;
        const i = Se.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Se.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Nx(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new hu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            $.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Se.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > fd
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, fd);
    return Lp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ir(e, t) {
  return new Tx(e, t);
}
function pm(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Nu(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? pm(n, e) : n;
}
const Cx = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Px = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ex = { type: "keyframes", duration: 0.8 },
  bx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Ax = (e, { keyframes: t }) =>
    t.length > 2
      ? Ex
      : cr.has(e)
        ? e.startsWith("scale")
          ? Px(t[1])
          : Cx
        : bx,
  Mx = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function Vx(e) {
  for (const t in e) if (!Mx.has(t)) return !0;
  return !1;
}
const Tu =
    (e, t, n, r = {}, i, s) =>
    (o) => {
      const a = Nu(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: c = 0 } = r;
      c = c - ze(l);
      const d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (h) => {
          (t.set(h), a.onUpdate && a.onUpdate(h));
        },
        onComplete: () => {
          (o(), a.onComplete && a.onComplete());
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i,
      };
      (Vx(a) || Object.assign(d, Ax(e, d)),
        d.duration && (d.duration = ze(d.duration)),
        d.repeatDelay && (d.repeatDelay = ze(d.repeatDelay)),
        d.from !== void 0 && (d.keyframes[0] = d.from));
      let f = !1;
      if (
        ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
          (tl(d), d.delay === 0 && (f = !0)),
        (Gt.instantAnimations ||
          Gt.skipAnimations ||
          (i != null && i.shouldSkipAnimations) ||
          a.skipAnimations) &&
          ((f = !0), tl(d), (d.delay = 0)),
        (d.allowFlatten = !a.type && !a.ease),
        f && !s && t.get() !== void 0)
      ) {
        const h = ro(d.keyframes, a);
        if (h !== void 0) {
          $.update(() => {
            (d.onUpdate(h), d.onComplete());
          });
          return;
        }
      }
      return a.isSync ? new Vs(d) : new jx(d);
    },
  Rx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Dx(e) {
  const t = Rx.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const Lx = 4;
function mm(e, t, n = 1) {
  Nn(
    n <= Lx,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth",
  );
  const [r, i] = Dx(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Mp(o) ? parseFloat(o) : o;
  }
  return gu(i) ? mm(i, t, n + 1) : i;
}
function hd(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Cu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = hd(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = hd(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function yn(e, t, n) {
  const r = e.getProps();
  return Cu(r, t, n !== void 0 ? n : r.custom, e);
}
const gm = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ur,
  ]),
  nl = (e) => Array.isArray(e);
function Ix(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ir(n));
}
function zx(e) {
  return nl(e) ? e[e.length - 1] || 0 : e;
}
function Ox(e, t) {
  const n = yn(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = zx(s[o]);
    Ix(e, o, a);
  }
}
const pe = (e) => !!(e && e.getVelocity);
function _x(e) {
  return !!(pe(e) && e.add);
}
function rl(e, t) {
  const n = e.getValue("willChange");
  if (_x(n)) return n.add(t);
  if (!n && Gt.WillChange) {
    const r = new Gt.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function Pu(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const Fx = "framerAppearId",
  ym = "data-" + Pu(Fx);
function vm(e) {
  return e.props[ym];
}
const Bx = typeof window < "u";
function Ux({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function xm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s, transitionEnd: o, ...a } = t;
  const l = e.getDefaultTransition();
  s = s ? pm(s, l) : l;
  const c = s == null ? void 0 : s.reduceMotion,
    d = s == null ? void 0 : s.skipAnimations;
  r && (s = r);
  const f = [],
    h = i && e.animationState && e.animationState.getState()[i],
    y = s == null ? void 0 : s.path;
  y && y.animateVisualElement(e, a, s, n, f);
  for (const v in a) {
    const w = e.getValue(v, e.latestValues[v] ?? null),
      S = a[v];
    if (S === void 0 || (h && Ux(h, v))) continue;
    const m = { delay: n, ...Nu(s || {}, v) };
    d && (m.skipAnimations = !0);
    const p = w.get();
    if (
      p !== void 0 &&
      !w.isAnimating() &&
      !Array.isArray(S) &&
      S === p &&
      !m.velocity
    ) {
      $.update(() => w.set(S));
      continue;
    }
    let g = !1;
    if (Bx && window.MotionHandoffAnimation) {
      const P = vm(e);
      if (P) {
        const k = window.MotionHandoffAnimation(P, v, $);
        k !== null && ((m.startTime = k), (g = !0));
      }
    }
    rl(e, v);
    const x = c ?? e.shouldReduceMotion;
    w.start(Tu(v, w, S, x && gm.has(v) ? { type: !1 } : m, e, g));
    const N = w.animation;
    N && f.push(N);
  }
  if (o) {
    const v = () =>
      $.update(() => {
        o && Ox(e, o);
      });
    f.length ? Promise.all(f).then(v) : v();
  }
  return f;
}
function il(e, t, n = {}) {
  var l;
  const r = yn(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(xm(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = i;
            return $x(e, t, c, d, f, h, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [c, d] = a === "beforeChildren" ? [s, o] : [o, s];
    return c().then(() => d());
  } else return Promise.all([s(), o(n.delay)]);
}
function $x(e, t, n = 0, r = 0, i = 0, s = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    (l.notify("AnimationStart", t),
      a.push(
        il(l, t, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            hm(e.variantChildren, l, r, i, s),
        }).then(() => l.notify("AnimationComplete", t)),
      ));
  return Promise.all(a);
}
function Hx(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => il(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = il(e, t, n);
  else {
    const i = typeof t == "function" ? yn(e, t, n.custom) : t;
    r = Promise.all(xm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Wx = { test: (e) => e === "auto", parse: (e) => e },
  wm = (e) => (t) => t.test(e),
  km = [lr, A, pt, yt, pv, hv, Wx],
  pd = (e) => km.find(wm(e));
function Kx(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Rp(e)
      : !0;
}
const Gx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Yx(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(yu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = Gx.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const Xx = /\b([a-z-]*)\(.*?\)/gu,
  sl = {
    ...st,
    getAnimatableNone: (e) => {
      const t = e.match(Xx);
      return t ? t.map(Yx).join(" ") : e;
    },
  },
  ol = {
    ...st,
    getAnimatableNone: (e) => {
      const t = st.parse(e);
      return st.createTransformer(e)(
        t.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  md = { ...lr, transform: Math.round },
  Qx = {
    rotate: yt,
    pathRotation: yt,
    rotateX: yt,
    rotateY: yt,
    rotateZ: yt,
    scale: Di,
    scaleX: Di,
    scaleY: Di,
    scaleZ: Di,
    skew: yt,
    skewX: yt,
    skewY: yt,
    distance: A,
    translateX: A,
    translateY: A,
    translateZ: A,
    x: A,
    y: A,
    z: A,
    perspective: A,
    transformPerspective: A,
    opacity: ni,
    originX: td,
    originY: td,
    originZ: A,
  },
  Rs = {
    borderWidth: A,
    borderTopWidth: A,
    borderRightWidth: A,
    borderBottomWidth: A,
    borderLeftWidth: A,
    borderRadius: A,
    borderTopLeftRadius: A,
    borderTopRightRadius: A,
    borderBottomRightRadius: A,
    borderBottomLeftRadius: A,
    width: A,
    maxWidth: A,
    height: A,
    maxHeight: A,
    top: A,
    right: A,
    bottom: A,
    left: A,
    inset: A,
    insetBlock: A,
    insetBlockStart: A,
    insetBlockEnd: A,
    insetInline: A,
    insetInlineStart: A,
    insetInlineEnd: A,
    padding: A,
    paddingTop: A,
    paddingRight: A,
    paddingBottom: A,
    paddingLeft: A,
    paddingBlock: A,
    paddingBlockStart: A,
    paddingBlockEnd: A,
    paddingInline: A,
    paddingInlineStart: A,
    paddingInlineEnd: A,
    margin: A,
    marginTop: A,
    marginRight: A,
    marginBottom: A,
    marginLeft: A,
    marginBlock: A,
    marginBlockStart: A,
    marginBlockEnd: A,
    marginInline: A,
    marginInlineStart: A,
    marginInlineEnd: A,
    fontSize: A,
    backgroundPositionX: A,
    backgroundPositionY: A,
    ...Qx,
    zIndex: md,
    fillOpacity: ni,
    strokeOpacity: ni,
    numOctaves: md,
  },
  Zx = {
    ...Rs,
    color: re,
    backgroundColor: re,
    outlineColor: re,
    fill: re,
    stroke: re,
    borderColor: re,
    borderTopColor: re,
    borderRightColor: re,
    borderBottomColor: re,
    borderLeftColor: re,
    filter: sl,
    WebkitFilter: sl,
    mask: ol,
    WebkitMask: ol,
  },
  Sm = (e) => Zx[e],
  qx = new Set([sl, ol]);
function jm(e, t) {
  let n = Sm(e);
  return (
    qx.has(n) || (n = st),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Jx = new Set(["auto", "none", "0"]);
function e1(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !Jx.has(s) && rr(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = jm(n, i);
}
class t1 extends ju {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let d = 0; d < t.length; d++) {
      let f = t[d];
      if (typeof f == "string" && ((f = f.trim()), gu(f))) {
        const h = mm(f, n.current);
        (h !== void 0 && (t[d] = h),
          d === t.length - 1 && (this.finalKeyframe = f));
      }
    }
    if ((this.resolveNoneKeyframes(), !gm.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = pd(i),
      a = pd(s),
      l = ed(i),
      c = ed(s);
    if (l !== c && It[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== a)
      if (ud(o) && ud(a))
        for (let d = 0; d < t.length; d++) {
          const f = t[d];
          typeof f == "string" && (t[d] = parseFloat(f));
        }
      else It[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || Kx(t[i])) && r.push(i);
    r.length && e1(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = It[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      o = r[s];
    ((r[s] = It[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, c]) => {
          t.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes());
  }
}
const Eu = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius",
];
function Nm(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const al = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Zi(e) {
  return Vp(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: bu, cancel: B2 } = Kp(queueMicrotask, !1),
  Je = { x: !1, y: !1 };
function Tm() {
  return Je.x || Je.y;
}
function n1(e) {
  return e === "x" || e === "y"
    ? Je[e]
      ? null
      : ((Je[e] = !0),
        () => {
          Je[e] = !1;
        })
    : Je.x || Je.y
      ? null
      : ((Je.x = Je.y = !0),
        () => {
          Je.x = Je.y = !1;
        });
}
function Cm(e, t) {
  const n = Nm(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function r1(e) {
  return !(e.pointerType === "touch" || Tm());
}
function i1(e, t, n = {}) {
  const [r, i, s] = Cm(e, n);
  return (
    r.forEach((o) => {
      let a = !1,
        l = !1,
        c;
      const d = () => {
          o.removeEventListener("pointerleave", v);
        },
        f = (S) => {
          (c && (c(S), (c = void 0)), d());
        },
        h = (S) => {
          ((a = !1),
            window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", h),
            l && ((l = !1), f(S)));
        },
        y = () => {
          ((a = !0),
            window.addEventListener("pointerup", h, i),
            window.addEventListener("pointercancel", h, i));
        },
        v = (S) => {
          if (S.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            f(S);
          }
        },
        w = (S) => {
          if (!r1(S)) return;
          l = !1;
          const m = t(o, S);
          typeof m == "function" &&
            ((c = m), o.addEventListener("pointerleave", v, i));
        };
      (o.addEventListener("pointerenter", w, i),
        o.addEventListener("pointerdown", y, i));
    }),
    s
  );
}
const Pm = (e, t) => (t ? (e === t ? !0 : Pm(e, t.parentElement)) : !1),
  Au = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  s1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function o1(e) {
  return s1.has(e.tagName) || e.isContentEditable === !0;
}
const a1 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function l1(e) {
  return a1.has(e.tagName) || e.isContentEditable === !0;
}
const qi = new WeakSet();
function gd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Uo(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const u1 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = gd(() => {
    if (qi.has(n)) return;
    Uo(n, "down");
    const i = gd(() => {
        Uo(n, "up");
      }),
      s = () => Uo(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function yd(e) {
  return Au(e) && !Tm();
}
const vd = new WeakSet();
function c1(e, t, n = {}) {
  const [r, i, s] = Cm(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!yd(a) || vd.has(a)) return;
      (qi.add(l), n.stopPropagation && vd.add(a));
      const c = t(l, a),
        d = { ...i, capture: !0 },
        f = (v, w) => {
          (window.removeEventListener("pointerup", h, d),
            window.removeEventListener("pointercancel", y, d),
            qi.has(l) && qi.delete(l),
            yd(v) && typeof c == "function" && c(v, { success: w }));
        },
        h = (v) => {
          f(
            v,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              Pm(l, v.target),
          );
        },
        y = (v) => {
          f(v, !1);
        };
      (window.addEventListener("pointerup", h, d),
        window.addEventListener("pointercancel", y, d));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        Zi(a) &&
          (a.addEventListener("focus", (c) => u1(c, i)),
          !o1(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    s
  );
}
function Mu(e) {
  return Vp(e) && "ownerSVGElement" in e;
}
const Ji = new WeakMap();
let bt;
const Em = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + "Size"]
      : Mu(r) && "getBBox" in r
        ? r.getBBox()[t]
        : r[n],
  d1 = Em("inline", "width", "offsetWidth"),
  f1 = Em("block", "height", "offsetHeight");
function h1({ target: e, borderBoxSize: t }) {
  var n;
  (n = Ji.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return d1(e, t);
        },
        get height() {
          return f1(e, t);
        },
      });
    });
}
function p1(e) {
  e.forEach(h1);
}
function m1() {
  typeof ResizeObserver > "u" || (bt = new ResizeObserver(p1));
}
function g1(e, t) {
  bt || m1();
  const n = Nm(e);
  return (
    n.forEach((r) => {
      let i = Ji.get(r);
      (i || ((i = new Set()), Ji.set(r, i)),
        i.add(t),
        bt == null || bt.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const i = Ji.get(r);
        (i == null || i.delete(t),
          (i != null && i.size) || bt == null || bt.unobserve(r));
      });
    }
  );
}
const es = new Set();
let Un;
function y1() {
  ((Un = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    es.forEach((t) => t(e));
  }),
    window.addEventListener("resize", Un));
}
function v1(e) {
  return (
    es.add(e),
    Un || y1(),
    () => {
      (es.delete(e),
        !es.size &&
          typeof Un == "function" &&
          (window.removeEventListener("resize", Un), (Un = void 0)));
    }
  );
}
function xd(e, t) {
  return typeof e == "function" ? v1(e) : g1(e, t);
}
function x1(e) {
  return Mu(e) && e.tagName === "svg";
}
const w1 = [...km, re, st],
  k1 = (e) => w1.find(wm(e)),
  wd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  $n = () => ({ x: wd(), y: wd() }),
  kd = () => ({ min: 0, max: 0 }),
  oe = () => ({ x: kd(), y: kd() }),
  S1 = new WeakMap();
function io(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function ri(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Vu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ru = ["initial", ...Vu];
function so(e) {
  return io(e.animate) || Ru.some((t) => ri(e[t]));
}
function bm(e) {
  return !!(so(e) || e.variants);
}
function j1(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (pe(i)) e.addValue(r, i);
    else if (pe(s)) e.addValue(r, ir(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, ir(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const ll = { current: null },
  Am = { current: !1 },
  N1 = typeof window < "u";
function T1() {
  if (((Am.current = !0), !!N1))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (ll.current = e.matches);
      (e.addEventListener("change", t), t());
    } else ll.current = !1;
}
const Sd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Ds = {};
function Mm(e) {
  Ds = e;
}
function C1() {
  return Ds;
}
class P1 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      skipAnimations: s,
      blockInitialAnimation: o,
      visualState: a,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = ju),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const y = Se.now();
        this.renderScheduledAt < y &&
          ((this.renderScheduledAt = y), $.render(this.render, !1, !0));
      }));
    const { latestValues: c, renderState: d } = a;
    ((this.latestValues = c),
      (this.baseTarget = { ...c }),
      (this.initialValues = n.initial ? { ...c } : {}),
      (this.renderState = d),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = s),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = so(n)),
      (this.isVariantNode = bm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const y in h) {
      const v = h[y];
      c[y] !== void 0 && pe(v) && v.set(c[y]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const i in this.initialValues)
        ((n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
          (this.latestValues[i] = this.initialValues[i]));
    ((this.current = t),
      S1.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, s) => this.bindToMotionValue(s, i)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Am.current || T1(), (this.shouldReduceMotion = ll.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      Yt(this.notifyUpdate),
      Yt(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && fm.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: o,
          keyframes: a,
          times: l,
          ease: c,
          duration: d,
        } = n.accelerate,
        f = new cm({
          element: this.current,
          name: t,
          keyframes: a,
          times: l,
          ease: c,
          duration: ze(d),
        }),
        h = o(f);
      this.valueSubscriptions.set(t, () => {
        (h(), f.cancel());
      });
      return;
    }
    const r = cr.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      ((this.latestValues[t] = o),
        this.props.onUpdate && $.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let s;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s && s());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ds) {
      const n = Ds[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : oe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Sd.length; r++) {
      const i = Sd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = j1(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ir(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (Mp(r) || Rp(r))
          ? (r = parseFloat(r))
          : !k1(r) && st.test(n) && (r = jm(t, n)),
        this.setBaseTarget(t, pe(r) ? r.get() : r)),
      pe(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = Cu(
        this.props,
        n,
        (s = this.presenceContext) == null ? void 0 : s.custom,
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !pe(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new hu()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    bu.render(this.render);
  }
}
class Vm extends P1 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = t1));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    pe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class Jt {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function Rm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function E1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function b1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function $o(e) {
  return e === void 0 || e === 1;
}
function ul({ scale: e, scaleX: t, scaleY: n }) {
  return !$o(e) || !$o(t) || !$o(n);
}
function ln(e) {
  return (
    ul(e) ||
    Dm(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Dm(e) {
  return jd(e.x) || jd(e.y);
}
function jd(e) {
  return e && e !== "0%";
}
function Ls(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Nd(e, t, n, r, i) {
  return (i !== void 0 && (e = Ls(e, i, r)), Ls(e, n, r) + t);
}
function cl(e, t = 0, n = 1, r, i) {
  ((e.min = Nd(e.min, t, n, r, i)), (e.max = Nd(e.max, t, n, r, i)));
}
function Lm(e, { x: t, y: n }) {
  (cl(e.x, t.translate, t.scale, t.originPoint),
    cl(e.y, n.translate, n.scale, n.originPoint));
}
const Td = 0.999999999999,
  Cd = 1.0000000000001;
function A1(e, t, n, r = !1) {
  var a;
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    ((s = n[l]), (o = s.projectionDelta));
    const { visualElement: c } = s.options;
    (c && c.props.style && c.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        (ct(e.x, -s.scroll.offset.x), ct(e.y, -s.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Lm(e, o)),
      r &&
        ln(s.latestValues) &&
        ts(e, s.latestValues, (a = s.layout) == null ? void 0 : a.layoutBox));
  }
  (t.x < Cd && t.x > Td && (t.x = 1), t.y < Cd && t.y > Td && (t.y = 1));
}
function ct(e, t) {
  ((e.min += t), (e.max += t));
}
function Pd(e, t, n, r, i = 0.5) {
  const s = U(e.min, e.max, i);
  cl(e, t, n, s, r);
}
function Ed(e, t) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function ts(e, t, n) {
  const r = n ?? e;
  (Pd(e.x, Ed(t.x, r.x), t.scaleX, t.scale, t.originX),
    Pd(e.y, Ed(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function Im(e, t) {
  return Rm(b1(e.getBoundingClientRect(), t));
}
function M1(e, t, n) {
  const r = Im(e, n),
    { scroll: i } = t;
  return (i && (ct(r.x, i.offset.x), ct(r.y, i.offset.y)), r);
}
const V1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  R1 = ur.length;
function D1(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < R1; o++) {
    const a = ur[o],
      l = e[a];
    if (l === void 0) continue;
    let c = !0;
    if (typeof l == "number") c = l === (a.startsWith("scale") ? 1 : 0);
    else {
      const d = parseFloat(l);
      c = a.startsWith("scale") ? d === 1 : d === 0;
    }
    if (!c || n) {
      const d = al(l, Rs[a]);
      if (!c) {
        i = !1;
        const f = V1[a] || a;
        r += `${f}(${d}) `;
      }
      n && (t[a] = d);
    }
  }
  const s = e.pathRotation;
  return (
    s && ((i = !1), (r += `rotate(${al(s, Rs.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? "" : r)) : i && (r = "none"),
    r
  );
}
function Du(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (cr.has(l)) {
      o = !0;
      continue;
    } else if (Yp(l)) {
      i[l] = c;
      continue;
    } else {
      const d = al(c, Rs[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = d)) : (r[l] = d);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = D1(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: d = 0 } = s;
    r.transformOrigin = `${l} ${c} ${d}`;
  }
}
function zm(e, { style: t, vars: n }, r, i) {
  const s = e.style;
  let o;
  for (o in t) s[o] = t[o];
  i == null || i.applyProjectionStyles(s, r);
  for (o in n) s.setProperty(o, n[o]);
}
function bd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const xr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (A.test(e)) e = parseFloat(e);
        else return e;
      const n = bd(e, t.target.x),
        r = bd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  L1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = st.parse(e);
      if (i.length > 5) return r;
      const s = st.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + o] /= a), (i[1 + o] /= l));
      const c = U(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
      );
    },
  },
  dl = {
    borderRadius: { ...xr, applyTo: [...Eu] },
    borderTopLeftRadius: xr,
    borderTopRightRadius: xr,
    borderBottomLeftRadius: xr,
    borderBottomRightRadius: xr,
    boxShadow: L1,
  };
function Om(e, { layout: t, layoutId: n }) {
  return (
    cr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!dl[e] || e === "opacity"))
  );
}
function Lu(e, t, n) {
  var o;
  const r = e.style,
    i = t == null ? void 0 : t.style,
    s = {};
  if (!r) return s;
  for (const a in r)
    (pe(r[a]) ||
      (i && pe(i[a])) ||
      Om(a, e) ||
      ((o = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (s[a] = r[a]);
  return s;
}
function I1(e) {
  return window.getComputedStyle(e);
}
class z1 extends Vm {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = zm));
  }
  mount(t) {
    (Nn(
      !!t.style,
      "motion.create() components must forward their ref to a HTML or SVG element",
      "custom-component-ref",
    ),
      super.mount(t));
  }
  readValueFromInstance(t, n) {
    var r;
    if (cr.has(n))
      return (r = this.projection) != null && r.isProjecting ? Qa(n) : tx(t, n);
    {
      const i = I1(t),
        s = (Yp(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Im(t, n);
  }
  build(t, n, r) {
    Du(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Lu(t, n, r);
  }
}
const O1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  _1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function F1(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? O1 : _1;
  ((e[s.offset] = `${-r}`), (e[s.array] = `${t} ${n}`));
}
const _m = [
  "transform",
  "opacity",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor",
];
function Fm(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  c,
  d,
) {
  if ((Du(e, a, c), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: f, style: h } = e;
  for (const y of _m) f[y] !== void 0 && ((h[y] = f[y]), delete f[y]);
  ((h.transform || f.transformOrigin) &&
    ((h.transformOrigin = f.transformOrigin ?? "50% 50%"),
    delete f.transformOrigin),
    h.transform &&
      ((h.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box"),
      delete f.transformBox),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && F1(f, i, s, o, !1));
}
const Bm = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Um = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function B1(e, t, n, r) {
  zm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Bm.has(i) ? i : Pu(i), t.attrs[i]);
}
function $m(e, t, n) {
  const r = Lu(e, t, n);
  for (const i in e)
    if (pe(e[i]) || pe(t[i])) {
      const s =
        ur.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
class U1 extends Vm {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = oe));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (cr.has(n)) {
      const r = Sm(n);
      return (r && r.default) || 0;
    }
    if (_m.includes(n)) {
      const i = getComputedStyle(t)[n];
      if (typeof i == "string" && i) return i.trim();
    }
    return ((n = Bm.has(n) ? n : Pu(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return $m(t, n, r);
  }
  build(t, n, r) {
    Fm(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    B1(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = Um(t.tagName)), super.mount(t));
  }
}
const $1 = Ru.length;
function Hm(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Hm(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < $1; n++) {
    const r = Ru[n],
      i = e.props[r];
    (ri(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Wm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const H1 = [...Vu].reverse(),
  W1 = Vu.length;
function K1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Hx(e, n, r)));
}
function G1(e) {
  let t = K1(e),
    n = Ad(),
    r = !0,
    i = !1;
  const s = (c) => (d, f) => {
    var y;
    const h = yn(
      e,
      f,
      c === "exit"
        ? (y = e.presenceContext) == null
          ? void 0
          : y.custom
        : void 0,
    );
    if (h) {
      const { transition: v, transitionEnd: w, ...S } = h;
      d = { ...d, ...S, ...w };
    }
    return d;
  };
  function o(c) {
    t = c(e);
  }
  function a(c) {
    const { props: d } = e,
      f = Hm(e.parent) || {},
      h = [],
      y = new Set();
    let v = {},
      w = 1 / 0;
    for (let m = 0; m < W1; m++) {
      const p = H1[m],
        g = n[p],
        x = d[p] !== void 0 ? d[p] : f[p],
        N = ri(x),
        P = p === c ? g.isActive : null;
      P === !1 && (w = m);
      let k = x === f[p] && x !== d[p] && N;
      if (
        (k && (r || i) && e.manuallyAnimateOnMount && (k = !1),
        (g.protectedKeys = { ...v }),
        (!g.isActive && P === null) ||
          (!x && !g.prevProp) ||
          io(x) ||
          typeof x == "boolean")
      )
        continue;
      if (p === "exit" && g.isActive && P !== !0) {
        g.prevResolvedValues && (v = { ...v, ...g.prevResolvedValues });
        continue;
      }
      const j = Y1(g.prevProp, x);
      let V = j || (p === c && g.isActive && !k && N) || (m > w && N),
        R = !1;
      const _ = Array.isArray(x) ? x : [x];
      let ee = _.reduce(s(p), {});
      P === !1 && (ee = {});
      const { prevResolvedValues: se = {} } = g,
        en = { ...se, ...ee },
        Pe = (E) => {
          ((V = !0),
            y.has(E) && ((R = !0), y.delete(E)),
            (g.needsAnimating[E] = !0));
          const D = e.getValue(E);
          D && (D.liveStyle = !1);
        };
      for (const E in en) {
        const D = ee[E],
          I = se[E];
        if (v.hasOwnProperty(E)) continue;
        let B = !1;
        (nl(D) && nl(I) ? (B = !Wm(D, I) || j) : (B = D !== I),
          B
            ? D != null
              ? Pe(E)
              : y.add(E)
            : D !== void 0 && y.has(E)
              ? Pe(E)
              : (g.protectedKeys[E] = !0));
      }
      ((g.prevProp = x),
        (g.prevResolvedValues = ee),
        g.isActive && (v = { ...v, ...ee }),
        (r || i) && e.blockInitialAnimation && (V = !1));
      const gt = k && j;
      V &&
        (!gt || R) &&
        h.push(
          ..._.map((E) => {
            const D = { type: p };
            if (
              typeof E == "string" &&
              (r || i) &&
              !gt &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: I } = e,
                B = yn(I, E);
              if (I.enteringChildren && B) {
                const { delayChildren: ne } = B.transition || {};
                D.delay = hm(I.enteringChildren, e, ne);
              }
            }
            return { animation: E, options: D };
          }),
        );
    }
    if (y.size) {
      const m = {};
      if (typeof d.initial != "boolean") {
        const p = yn(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        p && p.transition && (m.transition = p.transition);
      }
      (y.forEach((p) => {
        const g = e.getBaseTarget(p),
          x = e.getValue(p);
        (x && (x.liveStyle = !0), (m[p] = g ?? null));
      }),
        h.push({ animation: m }));
    }
    let S = !!h.length;
    return (
      r &&
        (d.initial === !1 || d.initial === d.animate) &&
        !e.manuallyAnimateOnMount &&
        (S = !1),
      (r = !1),
      (i = !1),
      S ? t(h) : Promise.resolve()
    );
  }
  function l(c, d) {
    var h;
    if (n[c].isActive === d) return Promise.resolve();
    ((h = e.variantChildren) == null ||
      h.forEach((y) => {
        var v;
        return (v = y.animationState) == null ? void 0 : v.setActive(c, d);
      }),
      (n[c].isActive = d));
    const f = a(c);
    for (const y in n) n[y].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = Ad()), (i = !0));
    },
  };
}
function Y1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Wm(t, e) : !1;
}
function sn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Ad() {
  return {
    animate: sn(!0),
    whileInView: sn(),
    whileHover: sn(),
    whileTap: sn(),
    whileDrag: sn(),
    whileFocus: sn(),
    exit: sn(),
  };
}
function fl(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function qe(e, t) {
  (fl(e.x, t.x), fl(e.y, t.y));
}
function Md(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
const Km = 1e-4,
  X1 = 1 - Km,
  Q1 = 1 + Km,
  Gm = 0.01,
  Z1 = 0 - Gm,
  q1 = 0 + Gm;
function je(e) {
  return e.max - e.min;
}
function J1(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Vd(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = U(t.min, t.max, e.origin)),
    (e.scale = je(n) / je(t)),
    (e.translate = U(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= X1 && e.scale <= Q1) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Z1 && e.translate <= q1) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Ir(e, t, n, r) {
  (Vd(e.x, t.x, n.x, r ? r.originX : void 0),
    Vd(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Rd(e, t, n, r = 0) {
  const i = r ? U(n.min, n.max, r) : n.min;
  ((e.min = i + t.min), (e.max = e.min + je(t)));
}
function ew(e, t, n, r) {
  (Rd(e.x, t.x, n.x, r == null ? void 0 : r.x),
    Rd(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function Dd(e, t, n, r = 0) {
  const i = r ? U(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + je(t)));
}
function Is(e, t, n, r) {
  (Dd(e.x, t.x, n.x, r == null ? void 0 : r.x),
    Dd(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function Ld(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Ls(e, 1 / n, r)),
    i !== void 0 && (e = Ls(e, 1 / i, r)),
    e
  );
}
function tw(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (pt.test(t) &&
      ((t = parseFloat(t)), (t = U(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = U(s.min, s.max, r);
  (e === s && (a -= t),
    (e.min = Ld(e.min, t, n, a, i)),
    (e.max = Ld(e.max, t, n, a, i)));
}
function Id(e, t, [n, r, i], s, o) {
  tw(e, t[n], t[r], t[i], t.scale, s, o);
}
const nw = ["x", "scaleX", "originX"],
  rw = ["y", "scaleY", "originY"];
function zd(e, t, n, r) {
  (Id(e.x, t, nw, n ? n.x : void 0, r ? r.x : void 0),
    Id(e.y, t, rw, n ? n.y : void 0, r ? r.y : void 0));
}
function Od(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ym(e) {
  return Od(e.x) && Od(e.y);
}
function _d(e, t) {
  return e.min === t.min && e.max === t.max;
}
function iw(e, t) {
  return _d(e.x, t.x) && _d(e.y, t.y);
}
function Fd(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Xm(e, t) {
  return Fd(e.x, t.x) && Fd(e.y, t.y);
}
function Bd(e) {
  return je(e.x) / je(e.y);
}
function Ud(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function ut(e) {
  return [e("x"), e("y")];
}
function sw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: d,
      pathRotation: f,
      rotateX: h,
      rotateY: y,
      skewX: v,
      skewY: w,
    } = n;
    (c && (r = `perspective(${c}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotate(${f}deg) `),
      h && (r += `rotateX(${h}deg) `),
      y && (r += `rotateY(${y}deg) `),
      v && (r += `skewX(${v}deg) `),
      w && (r += `skewY(${w}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const ow = Eu.length,
  $d = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Hd = (e) => typeof e == "number" || A.test(e);
function aw(e, t, n, r, i, s) {
  i
    ? ((e.opacity = U(0, n.opacity ?? 1, lw(r))),
      (e.opacityExit = U(t.opacity ?? 1, 0, uw(r))))
    : s && (e.opacity = U(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < ow; o++) {
    const a = Eu[o];
    let l = Wd(t, a),
      c = Wd(n, a);
    if (l === void 0 && c === void 0) continue;
    (l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Hd(l) === Hd(c)
        ? ((e[a] = Math.max(U($d(l), $d(c), r), 0)),
          (pt.test(c) || pt.test(l)) && (e[a] += "%"))
        : (e[a] = c));
  }
  (t.rotate || n.rotate) && (e.rotate = U(t.rotate || 0, n.rotate || 0, r));
}
function Wd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const lw = Qm(0, 0.5, Up),
  uw = Qm(0.5, 0.95, Ge);
function Qm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ti(e, t, r)));
}
function cw(e, t, n) {
  const r = pe(e) ? e : ir(e);
  return (r.start(Tu("", r, t, n)), r.animation);
}
function ii(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
const dw = (e, t) => e.depth - t.depth;
class fw {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (fu(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (bs(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(dw),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function hw(e, t) {
  const n = Se.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Yt(r), e(s - t));
    };
  return ($.setup(r, !0), () => Yt(r));
}
function ns(e) {
  return pe(e) ? e.get() : e;
}
class pw {
  constructor() {
    this.members = [];
  }
  add(t) {
    fu(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const i = r.instance;
      (!i || i.isConnected === !1) &&
        !r.snapshot &&
        (bs(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      (bs(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    var n;
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const i = this.members[r];
      if (
        i.isPresent !== !1 &&
        ((n = i.instance) == null ? void 0 : n.isConnected) !== !1
      )
        return (this.promote(i), !0);
    }
    return !1;
  }
  promote(t, n) {
    var i;
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.updateSnapshot(), t.scheduleRender());
      const { layoutDependency: s } = r.options,
        { layoutDependency: o } = t.options;
      ((s === void 0 || s !== o) &&
        ((t.resumeFrom = r),
        n && (r.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        (i = t.root) != null && i.isUpdating && (t.isLayoutDirty = !0)),
        t.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, i, s, o;
      ((r = (n = t.options).onExitComplete) == null || r.call(n),
        (o =
          (i = t.resumingFrom) == null
            ? void 0
            : (s = i.options).onExitComplete) == null || o.call(s));
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var t;
    (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
  }
}
const rs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Ho = ["", "X", "Y", "Z"],
  mw = 1e3;
let gw = 0;
function Wo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Zm(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = vm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", $, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Zm(r);
}
function qm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = gw++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(xw),
            this.nodes.forEach(Tw),
            this.nodes.forEach(Cw),
            this.nodes.forEach(ww));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new fw());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new hu()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      ((this.isSVG = Mu(o) && !x1(o)), (this.instance = o));
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d,
          f = 0;
        const h = () => (this.root.updateBlockedByResize = !1);
        ($.read(() => {
          f = window.innerWidth;
        }),
          e(o, () => {
            const y = window.innerWidth;
            y !== f &&
              ((f = y),
              (this.root.updateBlockedByResize = !0),
              d && d(),
              (d = hw(h, 250)),
              rs.hasAnimatedSinceResize &&
                ((rs.hasAnimatedSinceResize = !1), this.nodes.forEach(Yd)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: h,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || Mw,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: S } =
                  c.getProps(),
                m = !this.targetLayout || !Xm(this.targetLayout, y),
                p = !f && h;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                p ||
                (f && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const g = { ...Nu(v, "layout"), onPlay: w, onComplete: S };
                ((c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((g.delay = 0), (g.type = !1)),
                  this.startAnimation(g),
                  this.setAnimationOrigin(d, p, g.path));
              } else
                (f || Yd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = y;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Yt(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Pw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Zm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        ((f.shouldResetTransform = !0),
          (typeof f.latestValues.x == "string" ||
            typeof f.latestValues.y == "string") &&
            (f.isLayoutDirty = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const l = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          l && this.nodes.forEach(Sw),
          this.nodes.forEach(Kd));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Gd);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(jw),
            this.nodes.forEach(Nw),
            this.nodes.forEach(yw),
            this.nodes.forEach(vw))
          : this.nodes.forEach(Gd),
        this.clearAllSnapshots());
      const a = Se.now();
      ((he.delta = mt(0, 1e3 / 60, a - he.timestamp)),
        (he.timestamp = a),
        (he.isProcessing = !0),
        Io.update.process(he),
        Io.preRender.process(he),
        Io.render.process(he),
        (he.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), bu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(kw), this.sharedNodes.forEach(Ew));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        $.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      $.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !je(this.snapshot.measuredBox.x) &&
          !je(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = oe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Ym(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || ln(this.latestValues) || d) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        Vw(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: o } = this.options;
      if (!o) return oe();
      const a = o.measureViewportBox();
      if (
        !(
          ((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(Rw)
        )
      ) {
        const { scroll: d } = this.root;
        d && (ct(a.x, d.offset.x), ct(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = oe();
      if ((qe(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c],
          { scroll: f, options: h } = d;
        d !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && qe(a, o), ct(a.x, f.offset.x), ct(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1, l) {
      var d, f;
      const c = l || oe();
      qe(c, o);
      for (let h = 0; h < this.path.length; h++) {
        const y = this.path[h];
        (!a &&
          y.options.layoutScroll &&
          y.scroll &&
          y !== y.root &&
          (ct(c.x, -y.scroll.offset.x), ct(c.y, -y.scroll.offset.y)),
          ln(y.latestValues) &&
            ts(
              c,
              y.latestValues,
              (d = y.layout) == null ? void 0 : d.layoutBox,
            ));
      }
      return (
        ln(this.latestValues) &&
          ts(
            c,
            this.latestValues,
            (f = this.layout) == null ? void 0 : f.layoutBox,
          ),
        c
      );
    }
    removeTransform(o) {
      var l;
      const a = oe();
      qe(a, o);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        if (!ln(d.latestValues)) continue;
        let f;
        (d.instance &&
          (ul(d.latestValues) && d.updateSnapshot(),
          (f = oe()),
          qe(f, d.measurePageBox())),
          zd(
            a,
            d.latestValues,
            (l = d.snapshot) == null ? void 0 : l.layoutBox,
            f,
          ));
      }
      return (ln(this.latestValues) && zd(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== he.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var y;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((y = this.parent) != null && y.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!this.layout || !(d || f)) return;
      this.resolvedRelativeTargetAt = he.timestamp;
      const h = this.getClosestProjectingParent();
      (h &&
        this.linkedParentVersion !== h.layoutVersion &&
        !h.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && h && h.layout
            ? this.createRelativeTarget(
                h,
                this.layout.layoutBox,
                h.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = oe()), (this.targetWithTransforms = oe())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              ew(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : qe(this.target, this.layout.layoutBox),
                Lm(this.target, this.targetDelta))
              : qe(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(h, this.target, h.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ul(this.parent.latestValues) ||
          Dm(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(o, a, l) {
      ((this.relativeParent = o),
        (this.linkedParentVersion = o.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = oe()),
        (this.relativeTargetOrigin = oe()),
        Is(
          this.relativeTargetOrigin,
          a,
          l,
          this.options.layoutAnchor || void 0,
        ),
        qe(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === he.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      qe(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      (A1(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = oe())));
      const { target: y } = o;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Md(this.prevProjectionDelta.x, this.projectionDelta.x),
          Md(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ir(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !Ud(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ud(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = $n()),
        (this.projectionDelta = $n()),
        (this.projectionDeltaWithTransform = $n()));
    }
    setAnimationOrigin(o, a = !1, l) {
      const c = this.snapshot,
        d = c ? c.latestValues : {},
        f = { ...this.latestValues },
        h = $n();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const y = oe(),
        v = c ? c.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        S = v !== w,
        m = this.getStack(),
        p = !m || m.members.length <= 1,
        g = !!(S && !p && this.options.crossfade === !0 && !this.path.some(Aw));
      this.animationProgress = 0;
      let x;
      const N = l == null ? void 0 : l.interpolateProjection(o);
      ((this.mixTargetDelta = (P) => {
        const k = P / 1e3,
          j = N == null ? void 0 : N(k);
        (j
          ? ((h.x.translate = j.x),
            (h.x.scale = U(o.x.scale, 1, k)),
            (h.x.origin = o.x.origin),
            (h.x.originPoint = o.x.originPoint),
            (h.y.translate = j.y),
            (h.y.scale = U(o.y.scale, 1, k)),
            (h.y.origin = o.y.origin),
            (h.y.originPoint = o.y.originPoint))
          : (Xd(h.x, o.x, k), Xd(h.y, o.y, k)),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Is(
              y,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            bw(this.relativeTarget, this.relativeTargetOrigin, y, k),
            x && iw(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = oe()),
            qe(x, this.relativeTarget)),
          S &&
            ((this.animationValues = f), aw(f, d, this.latestValues, k, g, p)),
          j &&
            j.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = f),
            (this.animationValues.pathRotation = j.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      var a, l, c;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || c.stop(),
        this.pendingAnimation &&
          (Yt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = $.update(() => {
          ((rs.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = ir(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = cw(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (d) => {
                (this.mixTargetDelta(d), o.onUpdate && o.onUpdate(d));
              },
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(mw),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: d,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          Jm(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || oe();
          const f = je(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + f));
          const h = je(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + h));
        }
        (qe(a, l),
          ts(a, d),
          Ir(this.projectionDeltaWithTransform, this.layoutCorrected, a, d));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new pw()),
        this.sharedNodes.get(o).add(a));
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      (c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && Wo("z", o, c, this.animationValues);
      for (let d = 0; d < Ho.length; d++)
        (Wo(`rotate${Ho[d]}`, o, c, this.animationValues),
          Wo(`skew${Ho[d]}`, o, c, this.animationValues));
      o.render();
      for (const d in c)
        (o.setStaticValue(d, c[d]),
          this.animationValues && (this.animationValues[d] = c[d]));
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = ns(a == null ? void 0 : a.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        (this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = ns(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !ln(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      o.visibility = "";
      const d = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let f = sw(this.projectionDeltaWithTransform, this.treeScale, d);
      (l && (f = l(d, f)), (o.transform = f));
      const { x: h, y } = this.projectionDelta;
      ((o.transformOrigin = `${h.origin * 100}% ${y.origin * 100}% 0`),
        c.animationValues
          ? (o.opacity =
              c === this
                ? (d.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (o.opacity =
              c === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0));
      for (const v in dl) {
        if (d[v] === void 0) continue;
        const { correct: w, applyTo: S, isCSSVariable: m } = dl[v],
          p = f === "none" ? d[v] : w(d[v], c);
        if (S) {
          const g = S.length;
          for (let x = 0; x < g; x++) o[S[x]] = p;
        } else
          m ? (this.options.visualElement.renderState.vars[v] = p) : (o[v] = p);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          c === this ? ns(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Kd),
        this.root.sharedNodes.clear());
    }
  };
}
function yw(e) {
  e.updateLayout();
}
function vw(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = t.source !== e.layout.source;
    if (s === "size")
      ut((f) => {
        const h = o ? t.measuredBox[f] : t.layoutBox[f],
          y = je(h);
        ((h.min = r[f].min), (h.max = h.min + y));
      });
    else if (s === "x" || s === "y") {
      const f = s === "x" ? "y" : "x";
      fl(o ? t.measuredBox[f] : t.layoutBox[f], r[f]);
    } else
      Jm(s, t.layoutBox, r) &&
        ut((f) => {
          const h = o ? t.measuredBox[f] : t.layoutBox[f],
            y = je(r[f]);
          ((h.max = h.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y)));
        });
    const a = $n();
    Ir(a, r, t.layoutBox);
    const l = $n();
    o ? Ir(l, e.applyTransform(i, !0), t.measuredBox) : Ir(l, r, t.layoutBox);
    const c = !Ym(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: y } = f;
        if (h && y) {
          const v = e.options.layoutAnchor || void 0,
            w = oe();
          Is(w, t.layoutBox, h.layoutBox, v);
          const S = oe();
          (Is(S, r, y.layoutBox, v),
            Xm(w, S) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = S),
              (e.relativeTargetOrigin = w),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function xw(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function ww(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function kw(e) {
  e.clearSnapshot();
}
function Kd(e) {
  e.clearMeasurements();
}
function Sw(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function Gd(e) {
  e.isLayoutDirty = !1;
}
function jw(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function Nw(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Yd(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Tw(e) {
  e.resolveTargetDelta();
}
function Cw(e) {
  e.calcProjection();
}
function Pw(e) {
  e.resetSkewAndRotation();
}
function Ew(e) {
  e.removeLeadSnapshot();
}
function Xd(e, t, n) {
  ((e.translate = U(t.translate, 0, n)),
    (e.scale = U(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Qd(e, t, n, r) {
  ((e.min = U(t.min, n.min, r)), (e.max = U(t.max, n.max, r)));
}
function bw(e, t, n, r) {
  (Qd(e.x, t.x, n.x, r), Qd(e.y, t.y, n.y, r));
}
function Aw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Mw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Zd = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  qd = Zd("applewebkit/") && !Zd("chrome/") ? Math.round : Ge;
function Jd(e) {
  ((e.min = qd(e.min)), (e.max = qd(e.max)));
}
function Vw(e) {
  (Jd(e.x), Jd(e.y));
}
function Jm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !J1(Bd(t), Bd(n), 0.2))
  );
}
function Rw(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Dw = qm({
    attachResizeListener: (e, t) => ii(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Ko = { current: void 0 },
  eg = qm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ko.current) {
        const e = new Dw({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ko.current = e));
      }
      return Ko.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Iu = C.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function ef(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Lw(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const s = ef(i, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const s = r[i];
          typeof s == "function" ? s() : ef(e[i], null);
        }
      };
  };
}
function Iw(...e) {
  return C.useCallback(Lw(...e), e);
}
class zw extends C.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (
      Zi(n) &&
      t.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const r = n.offsetParent,
        i = (Zi(r) && r.offsetWidth) || 0,
        s = (Zi(r) && r.offsetHeight) || 0,
        o = getComputedStyle(n),
        a = this.props.sizeRef.current;
      ((a.height = parseFloat(o.height)),
        (a.width = parseFloat(o.width)),
        (a.top = n.offsetTop),
        (a.left = n.offsetLeft),
        (a.right = i - a.width - a.left),
        (a.bottom = s - a.height - a.top),
        (a.direction = o.direction));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Ow({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: s,
}) {
  var h;
  const o = C.useId(),
    a = C.useRef(null),
    l = C.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr",
    }),
    { nonce: c } = C.useContext(Iu),
    d =
      s !== !1
        ? (((h = e.props) == null ? void 0 : h.ref) ??
          (e == null ? void 0 : e.ref))
        : void 0,
    f = Iw(a, d);
  return (
    C.useInsertionEffect(() => {
      const {
        width: y,
        height: v,
        top: w,
        left: S,
        right: m,
        bottom: p,
        direction: g,
      } = l.current;
      if (t || s === !1 || !a.current || !y || !v) return;
      const x = g === "rtl",
        N =
          n === "left"
            ? x
              ? `right: ${m}`
              : `left: ${S}`
            : x
              ? `left: ${S}`
              : `right: ${m}`,
        P = r === "bottom" ? `bottom: ${p}` : `top: ${w}`;
      a.current.dataset.motionPopId = o;
      const k = document.createElement("style");
      c && (k.nonce = c);
      const j = i ?? document.head;
      return (
        j.appendChild(k),
        k.sheet &&
          k.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${v}px !important;
            ${N}px !important;
            ${P}px !important;
          }
        `),
        () => {
          var V;
          ((V = a.current) == null || V.removeAttribute("data-motion-pop-id"),
            j.contains(k) && j.removeChild(k));
        }
      );
    }, [t]),
    u.jsx(zw, {
      isPresent: t,
      childRef: a,
      sizeRef: l,
      pop: s,
      children: s === !1 ? e : C.cloneElement(e, { ref: f }),
    })
  );
}
const _w = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
  anchorX: a,
  anchorY: l,
  root: c,
}) => {
  const d = du(Fw),
    f = C.useId(),
    h = C.useRef(n),
    y = C.useRef(r);
  Es(() => {
    ((h.current = n), (y.current = r));
  });
  let v = !0,
    w = C.useMemo(
      () => (
        (v = !1),
        {
          id: f,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (S) => {
            d.set(S, !0);
            for (const m of d.values()) if (!m) return;
            r && r();
          },
          register: (S) => (
            d.set(S, !1),
            () => {
              var m;
              (d.delete(S),
                !h.current &&
                  !d.size &&
                  ((m = y.current) == null || m.call(y)));
            }
          ),
        }
      ),
      [n, d, r],
    );
  return (
    s && v && (w = { ...w }),
    C.useMemo(() => {
      d.forEach((S, m) => d.set(m, !1));
    }, [n]),
    C.useEffect(() => {
      !n && !d.size && r && r();
    }, [n]),
    (e = u.jsx(Ow, {
      pop: o === "popLayout",
      isPresent: n,
      anchorX: a,
      anchorY: l,
      root: c,
      children: e,
    })),
    u.jsx(to.Provider, { value: w, children: e })
  );
};
function Fw() {
  return new Map();
}
function tg(e = !0) {
  const t = C.useContext(to);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = C.useId();
  C.useEffect(() => {
    if (e) return i(s);
  }, [e]);
  const o = C.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Li = (e) => e.key || "";
function tf(e) {
  const t = [];
  return (
    C.Children.forEach(e, (n) => {
      C.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const oo = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    anchorY: l = "top",
    root: c,
  }) => {
    const [d, f] = tg(o),
      h = C.useMemo(() => tf(e), [e]),
      y = o && !d ? [] : h.map(Li),
      v = C.useRef(!0),
      w = C.useRef(h),
      S = du(() => new Map()),
      m = C.useRef(new Set()),
      [p, g] = C.useState(h),
      [x, N] = C.useState(h);
    (Es(() => {
      o && !d && !x.length && (f == null || f());
    }, [d, o, x.length, f]),
      Es(() => {
        ((v.current = !1), (w.current = h));
        for (let j = 0; j < x.length; j++) {
          const V = Li(x[j]);
          y.includes(V)
            ? (S.delete(V), m.current.delete(V))
            : S.get(V) !== !0 && S.set(V, !1);
        }
      }, [x, y.length, y.join("-")]));
    const P = [];
    if (h !== p) {
      let j = [...h],
        V = 0;
      for (const R of x) {
        const _ = y.indexOf(Li(R));
        _ === -1 ? (j.splice(V++, 0, R), P.push(R)) : (V = _ + P.length + 1);
      }
      return (s === "wait" && P.length && (j = P), N(tf(j)), g(h), null);
    }
    const { forceRender: k } = C.useContext(cu);
    return u.jsx(u.Fragment, {
      children: x.map((j) => {
        const V = Li(j),
          R = o && !d ? !1 : h === x || y.includes(V),
          _ = () => {
            if (m.current.has(V)) return;
            if (S.has(V)) (m.current.add(V), S.set(V, !0));
            else return;
            let ee = !0;
            (S.forEach((se) => {
              se || (ee = !1);
            }),
              ee &&
                (k == null || k(),
                N(w.current),
                o && (f == null || f()),
                r && r()));
          };
        return u.jsx(
          _w,
          {
            isPresent: R,
            initial: !v.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
            root: c,
            onExitComplete: R ? void 0 : _,
            anchorX: a,
            anchorY: l,
            children: j,
          },
          V,
        );
      }),
    });
  },
  ng = C.createContext({ strict: !1 }),
  nf = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let rf = !1;
function Bw() {
  if (rf) return;
  const e = {};
  for (const t in nf) e[t] = { isEnabled: (n) => nf[t].some((r) => !!n[r]) };
  (Mm(e), (rf = !0));
}
function rg() {
  return (Bw(), C1());
}
function Uw(e) {
  const t = rg();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  Mm(t);
}
const ao = C.createContext({});
function $w(e, t) {
  if (so(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ri(n) ? n : void 0,
      animate: ri(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Hw(e) {
  const { initial: t, animate: n } = $w(e, C.useContext(ao));
  return C.useMemo(() => ({ initial: t, animate: n }), [sf(t), sf(n)]);
}
function sf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const zu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ig(e, t, n) {
  for (const r in t) !pe(t[r]) && !Om(r, n) && (e[r] = t[r]);
}
function Ww({ transformTemplate: e }, t) {
  return C.useMemo(() => {
    const n = zu();
    return (Du(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function Kw(e, t) {
  const n = e.style || {},
    r = {};
  return (ig(r, n, e), Object.assign(r, Ww(e, t)), r);
}
function Gw(e, t) {
  const n = {},
    r = Kw(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const sg = () => ({ ...zu(), attrs: {} });
function Yw(e, t, n, r) {
  const i = C.useMemo(() => {
    const s = sg();
    return (
      Fm(s, t, Um(r), e.transformTemplate, e.style),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (ig(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
const Xw = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function zs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Xw.has(e)
  );
}
function Qw(e, t) {
  return e.startsWith("on") ? !zs(e) : ((t == null ? void 0 : t(e)) ?? !zs(e));
}
function Zw(e, t, n, r) {
  const i = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      pe(e[s]) ||
      ((Qw(s, r) ||
        (n === !0 && zs(s)) ||
        (!t && !zs(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (i[s] = e[s]));
  return i;
}
const qw = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ou(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(qw.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Jw(e, t, n, { latestValues: r }, i, s = !1, o, a) {
  const c = ((o ?? Ou(e)) ? Yw : Gw)(t, r, i, e),
    d = Zw(t, typeof e == "string", s, a),
    f = e !== C.Fragment ? { ...d, ...c, ref: n } : {},
    { children: h } = t,
    y = C.useMemo(() => (pe(h) ? h.get() : h), [h]);
  return C.createElement(e, { ...f, children: y });
}
function ek({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: tk(n, r, i, e), renderState: t() };
}
function tk(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = ns(s[h]);
  let { initial: o, animate: a } = e;
  const l = so(e),
    c = bm(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? a : o;
  if (f && typeof f != "boolean" && !io(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let y = 0; y < h.length; y++) {
      const v = Cu(e, h[y]);
      if (v) {
        const { transitionEnd: w, transition: S, ...m } = v;
        for (const p in m) {
          let g = m[p];
          if (Array.isArray(g)) {
            const x = d ? g.length - 1 : 0;
            g = g[x];
          }
          g !== null && (i[p] = g);
        }
        for (const p in w) i[p] = w[p];
      }
    }
  }
  return i;
}
const og = (e) => (t, n) => {
    const r = C.useContext(ao),
      i = C.useContext(to),
      s = () => ek(e, t, r, i);
    return n ? s() : du(s);
  },
  nk = og({ scrapeMotionValuesFromProps: Lu, createRenderState: zu }),
  rk = og({ scrapeMotionValuesFromProps: $m, createRenderState: sg }),
  ik = Symbol.for("motionComponentSymbol");
function sk(e, t, n) {
  const r = C.useRef(n);
  C.useInsertionEffect(() => {
    r.current = n;
  });
  const i = C.useRef(null);
  return C.useCallback(
    (s) => {
      var a;
      (s && ((a = e.onMount) == null || a.call(e, s)),
        t && (s ? t.mount(s) : t.unmount()));
      const o = r.current;
      if (typeof o == "function")
        if (s) {
          const l = o(s);
          typeof l == "function" && (i.current = l);
        } else i.current ? (i.current(), (i.current = null)) : o(s);
      else o && (o.current = s);
    },
    [t],
  );
}
const ag = C.createContext({});
function En(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function ok(e, t, n, r, i, s) {
  var g, x;
  const { visualElement: o } = C.useContext(ao),
    a = C.useContext(ng),
    l = C.useContext(to),
    c = C.useContext(Iu),
    d = c.reducedMotion,
    f = c.skipAnimations,
    h = C.useRef(null),
    y = C.useRef(!1);
  ((r = r || a.renderer),
    !h.current &&
      r &&
      ((h.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: d,
        skipAnimations: f,
        isSVG: s,
      })),
      y.current && h.current && (h.current.manuallyAnimateOnMount = !0)));
  const v = h.current,
    w = C.useContext(ag);
  v &&
    !v.projection &&
    i &&
    (v.type === "html" || v.type === "svg") &&
    ak(h.current, n, i, w);
  const S = C.useRef(!1);
  C.useInsertionEffect(() => {
    v && S.current && v.update(n, l);
  });
  const m = n[ym],
    p = C.useRef(
      !!m &&
        typeof window < "u" &&
        !((g = window.MotionHandoffIsComplete) != null && g.call(window, m)) &&
        ((x = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : x.call(window, m)),
    );
  return (
    Es(() => {
      ((y.current = !0),
        v &&
          ((S.current = !0),
          (window.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          p.current && v.animationState && v.animationState.animateChanges()));
    }),
    C.useEffect(() => {
      v &&
        (!p.current && v.animationState && v.animationState.animateChanges(),
        p.current &&
          (queueMicrotask(() => {
            var N;
            (N = window.MotionHandoffMarkAsComplete) == null ||
              N.call(window, m);
          }),
          (p.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function ak(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
    layoutAnchor: d,
    layoutCrossfade: f,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : lg(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && En(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: f,
      layoutScroll: l,
      layoutRoot: c,
      layoutAnchor: d,
    }));
}
function lg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : lg(e.parent);
}
function Go(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && Uw(r);
  const s = n ? n === "svg" : Ou(e),
    o = s ? rk : nk;
  function a(c, d) {
    let f;
    const h = { ...C.useContext(Iu), ...c, layoutId: lk(c) },
      { isStatic: y, isValidProp: v } = h,
      w = Hw(c),
      S = o(c, y);
    if (!y && typeof window < "u") {
      uk();
      const m = ck(h);
      ((f = m.MeasureLayout),
        (w.visualElement = ok(e, S, h, i, m.ProjectionNode, s)));
    }
    return u.jsxs(ao.Provider, {
      value: w,
      children: [
        f && w.visualElement
          ? u.jsx(f, { visualElement: w.visualElement, ...h })
          : null,
        Jw(e, c, sk(S, w.visualElement, d), S, y, t, s, v),
      ],
    });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = C.forwardRef(a);
  return ((l[ik] = e), l);
}
function lk({ layoutId: e }) {
  const t = C.useContext(cu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function uk(e, t) {
  C.useContext(ng).strict;
}
function ck(e) {
  const t = rg(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const i = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function dk(e, t) {
  if (typeof Proxy > "u") return Go;
  const n = new Map(),
    r = (s, o) => Go(s, o, e, t),
    i = (s, o) => r(s, o);
  return new Proxy(i, {
    get: (s, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, Go(o, void 0, e, t)), n.get(o)),
  });
}
const fk = (e, t) =>
  (t.isSVG ?? Ou(e))
    ? new U1(t)
    : new z1(t, { allowProjection: e !== C.Fragment });
class hk extends Jt {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = G1(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    io(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let pk = 0;
class mk extends Jt {
  constructor() {
    (super(...arguments), (this.id = pk++), (this.isExitComplete = !1));
  }
  update() {
    var s;
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    if (t && r === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: a } = this.node.getProps();
        if (
          typeof o == "string" ||
          (typeof o == "object" && o !== null && !Array.isArray(o))
        ) {
          const l = yn(this.node, o, a);
          if (l) {
            const { transition: c, transitionEnd: d, ...f } = l;
            for (const h in f)
              (s = this.node.getValue(h)) == null || s.jump(f[h]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        ((this.isExitComplete = !0), n(this.id));
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const gk = { animation: { Feature: hk }, exit: { Feature: mk } };
function hi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const yk = (e) => (t) => Au(t) && e(t, hi(t));
function zr(e, t, n, r) {
  return ii(e, t, yk(n), r);
}
const ug = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  of = (e, t) => Math.abs(e - t);
function vk(e, t) {
  const n = of(e.x, t.x),
    r = of(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const af = new Set(["auto", "scroll"]);
class cg {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: s = !1,
      distanceThreshold: o = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (v) => {
        this.handleScroll(v.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Ii(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const v = Yo(this.lastMoveEventInfo, this.history),
          w = this.startEvent !== null,
          S = vk(v.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!w && !S) return;
        const { point: m } = v,
          { timestamp: p } = he;
        this.history.push({ ...m, timestamp: p });
        const { onStart: g, onMove: x } = this.handlers;
        (w ||
          (g && g(this.lastMoveEvent, v),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, v));
      }),
      (this.handlePointerMove = (v, w) => {
        ((this.lastMoveEvent = v),
          (this.lastRawMoveEventInfo = w),
          (this.lastMoveEventInfo = Ii(w, this.transformPagePoint)),
          $.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (v, w) => {
        this.end();
        const { onEnd: S, onSessionEnd: m, resumeAnimation: p } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && p && p(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const g = Yo(
          v.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ii(w, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && S && S(v, g), m && m(v, g));
      }),
      !Au(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = i || window));
    const l = hi(t),
      c = Ii(l, this.transformPagePoint),
      { point: d } = c,
      { timestamp: f } = he;
    this.history = [{ ...d, timestamp: f }];
    const { onSessionStart: h } = n;
    h && h(t, Yo(c, this.history));
    const y = { passive: !0, capture: !0 };
    ((this.removeListeners = ci(
      zr(this.contextWindow, "pointermove", this.handlePointerMove, y),
      zr(this.contextWindow, "pointerup", this.handlePointerUp, y),
      zr(this.contextWindow, "pointercancel", this.handlePointerUp, y),
    )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      ((af.has(r.overflowX) || af.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      i = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      s = { x: i.x - n.x, y: i.y - n.y };
    (s.x === 0 && s.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += s.x),
          (this.lastMoveEventInfo.point.y += s.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
      this.scrollPositions.set(t, i),
      $.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Yt(this.updatePoint));
  }
}
function Ii(e, t) {
  return t ? { point: t(e.point) } : e;
}
function lf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Yo({ point: e }, t) {
  return {
    point: e,
    delta: lf(e, dg(t)),
    offset: lf(e, xk(t)),
    velocity: wk(t, 0.1),
  };
}
function xk(e) {
  return e[0];
}
function dg(e) {
  return e[e.length - 1];
}
function wk(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = dg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ze(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > ze(t) * 2 &&
    (r = e[1]);
  const s = We(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function kk(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? U(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? U(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function uf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Sk(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: uf(e.x, n, i), y: uf(e.y, t, r) };
}
function cf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function jk(e, t) {
  return { x: cf(e.x, t.x), y: cf(e.y, t.y) };
}
function Nk(e, t) {
  let n = 0.5;
  const r = je(e),
    i = je(t);
  return (
    i > r
      ? (n = ti(t.min, t.max - r, e.min))
      : r > i && (n = ti(e.min, e.max - i, t.min)),
    mt(0, 1, n)
  );
}
function Tk(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const hl = 0.35;
function Ck(e = hl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = hl),
    { x: df(e, "left", "right"), y: df(e, "top", "bottom") }
  );
}
function df(e, t, n) {
  return { min: ff(e, t), max: ff(e, n) };
}
function ff(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Pk = new WeakMap();
class Ek {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = oe()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const s = (f) => {
        (n && this.snapToCursor(hi(f).point), this.stopAnimation());
      },
      o = (f, h) => {
        const { drag: y, dragPropagation: v, onDragStart: w } = this.getProps();
        if (
          y &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = n1(y)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ut((m) => {
            let p = this.getAxisMotionValue(m).get() || 0;
            if (pt.test(p)) {
              const { projection: g } = this.visualElement;
              if (g && g.layout) {
                const x = g.layout.layoutBox[m];
                x && (p = je(x) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[m] = p;
          }),
          w && $.update(() => w(f, h), !1, !0),
          rl(this.visualElement, "transform"));
        const { animationState: S } = this.visualElement;
        S && S.setActive("whileDrag", !0);
      },
      a = (f, h) => {
        ((this.latestPointerEvent = f), (this.latestPanInfo = h));
        const {
          dragPropagation: y,
          dragDirectionLock: v,
          onDirectionLock: w,
          onDrag: S,
        } = this.getProps();
        if (!y && !this.openDragLock) return;
        const { offset: m } = h;
        if (v && this.currentDirection === null) {
          ((this.currentDirection = Ak(m)),
            this.currentDirection !== null && w && w(this.currentDirection));
          return;
        }
        (this.updateAxis("x", h.point, m),
          this.updateAxis("y", h.point, m),
          this.visualElement.render(),
          S && $.update(() => S(f, h), !1, !0));
      },
      l = (f, h) => {
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          this.stop(f, h),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      c = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: d } = this.getProps();
    this.panSession = new cg(
      t,
      {
        onSessionStart: s,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: d,
        distanceThreshold: r,
        contextWindow: ug(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      s = this.isDragging;
    if ((this.cancel(), !s || !i || !r)) return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && $.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !zi(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = kk(o, this.constraints[t], this.elastic[t])),
      s.set(o));
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
            ? void 0
            : s.layout,
      i = this.constraints;
    (t && En(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = Sk(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = Ck(n)),
      i !== this.constraints &&
        !En(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ut((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Tk(r.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !En(t)) return !1;
    const r = t.current;
    Nn(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      "drag-constraints-ref",
    );
    const { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    i.root && ((i.root.scroll = void 0), i.root.updateScroll());
    const s = M1(r, i.root, this.visualElement.getTransformPagePoint());
    let o = jk(i.layout.layoutBox, s);
    if (n) {
      const a = n(E1(o));
      ((this.hasMutatedConstraints = !!a), a && (o = Rm(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = ut((d) => {
        if (!zi(d, n, this.currentDirection)) return;
        let f = (l && l[d]) || {};
        (o === !0 || o === d) && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(d, v);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      rl(this.visualElement, t),
      r.start(Tu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ut((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      i = this.visualElement.getProps()[n];
    return (
      i ||
      this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0)
    );
  }
  snapToCursor(t) {
    ut((n) => {
      const { drag: r } = this.getProps();
      if (!zi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n],
          l = s.get() || 0;
        s.set(t[n] - U(o, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!En(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ut((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = Nk({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      ut((o) => {
        if (!zi(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(U(l, c, i[o]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Pk.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = zr(t, "pointerdown", (c) => {
        const { drag: d, dragListener: f = !0 } = this.getProps(),
          h = c.target,
          y = h !== t && l1(h);
        d && f && !y && this.start(c);
      });
    let r;
    const i = () => {
        const { dragConstraints: c } = this.getProps();
        En(c) &&
          c.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = bk(t, c.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: s } = this.visualElement,
      o = s.addEventListener("measure", i);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      $.read(i));
    const a = ii(window, "resize", () => this.scalePositionWithinConstraints()),
      l = s.addEventListener(
        "didUpdate",
        ({ delta: c, hasLayoutChanged: d }) => {
          this.isDragging &&
            d &&
            (ut((f) => {
              const h = this.getAxisMotionValue(f);
              h &&
                ((this.originPoint[f] += c[f].translate),
                h.set(h.get() + c[f].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (a(), n(), o(), l && l(), r && r());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = hl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function hf(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function bk(e, t, n) {
  const r = xd(e, hf(n)),
    i = xd(t, hf(n));
  return () => {
    (r(), i());
  };
}
function zi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ak(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class Mk extends Jt {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Ge),
      (this.removeListeners = Ge),
      (this.controls = new Ek(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ge));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Xo = (e) => (t, n) => {
  e && $.update(() => e(t, n), !1, !0);
};
class Vk extends Jt {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Ge));
  }
  onPointerDown(t) {
    this.session = new cg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ug(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Xo(t),
      onStart: Xo(n),
      onMove: Xo(r),
      onEnd: (s, o) => {
        (delete this.session, i && $.postRender(() => i(s, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = zr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Qo = !1;
class Rk extends C.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (s &&
      (n.group && n.group.add(s),
      r && r.register && i && r.register(s),
      Qo && s.root.didUpdate(),
      s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (rs.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = s),
        t.layoutDependency !== n &&
          o.setOptions({ ...o.options, layoutDependency: n }),
        (Qo = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              $.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props,
      { projection: r } = t;
    r &&
      ((r.options.layoutAnchor = n),
      r.root.didUpdate(),
      bu.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    ((Qo = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function fg(e) {
  const [t, n] = tg(),
    r = C.useContext(cu);
  return u.jsx(Rk, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: C.useContext(ag),
    isPresent: t,
    safeToRemove: n,
  });
}
const Dk = {
  pan: { Feature: Vk },
  drag: { Feature: Mk, ProjectionNode: eg, MeasureLayout: fg },
};
function pf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && $.postRender(() => s(t, hi(t)));
}
class Lk extends Jt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = i1(
        t,
        (n, r) => (pf(this.node, r, "Start"), (i) => pf(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class Ik extends Jt {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ci(
      ii(this.node.current, "focus", () => this.onFocus()),
      ii(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function mf(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && $.postRender(() => s(t, hi(t)));
}
class zk extends Jt {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = c1(
      t,
      (i, s) => (
        mf(this.node, s, "Start"),
        (o, { success: a }) => mf(this.node, o, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      },
    );
  }
  unmount() {}
}
const pl = new WeakMap(),
  Zo = new WeakMap(),
  Ok = (e) => {
    const t = pl.get(e.target);
    t && t(e);
  },
  _k = (e) => {
    e.forEach(Ok);
  };
function Fk({ root: e, ...t }) {
  const n = e || document;
  Zo.has(n) || Zo.set(n, {});
  const r = Zo.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(_k, { root: e, ...t })),
    r[i]
  );
}
function Bk(e, t, n) {
  const r = Fk(t);
  return (
    pl.set(e, n),
    r.observe(e),
    () => {
      (pl.delete(e), r.unobserve(e));
    }
  );
}
const Uk = { some: 0, all: 1 };
class $k extends Jt {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Uk[i],
      },
      a = (c) => {
        const { isIntersecting: d } = c;
        if (
          this.isInView === d ||
          ((this.isInView = d), s && !d && this.hasEnteredView)
        )
          return;
        (d && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", d));
        const { onViewportEnter: f, onViewportLeave: h } = this.node.getProps(),
          y = d ? f : h;
        y && y(c);
      };
    this.stopObserver = Bk(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Hk(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    ((t = this.stopObserver) == null || t.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function Hk({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Wk = {
    inView: { Feature: $k },
    tap: { Feature: zk },
    focus: { Feature: Ik },
    hover: { Feature: Lk },
  },
  Kk = { layout: { ProjectionNode: eg, MeasureLayout: fg } },
  Gk = { ...gk, ...Wk, ...Dk, ...Kk },
  M = dk(Gk, fk);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yk = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  hg = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Xk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qk = C.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: s,
      iconNode: o,
      ...a
    },
    l,
  ) =>
    C.createElement(
      "svg",
      {
        ref: l,
        ...Xk,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: hg("lucide", i),
        ...a,
      },
      [
        ...o.map(([c, d]) => C.createElement(c, d)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G = (e, t) => {
  const n = C.forwardRef(({ className: r, ...i }, s) =>
    C.createElement(Qk, {
      ref: s,
      iconNode: t,
      className: hg(`lucide-${Yk(e)}`, r),
      ...i,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zk = G("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qk = G("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xt = G("CalendarHeart", [
  [
    "path",
    {
      d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",
      key: "136lmk",
    },
  ],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "path",
    {
      d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
      key: "1t7hil",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jk = G("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e2 = G("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t2 = G("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n2 = G("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r2 = G("ClipboardList", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196",
    },
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _u = G("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i2 = G("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pg = G("HandHeart", [
  [
    "path",
    { d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16", key: "1ifwr1" },
  ],
  [
    "path",
    {
      d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
      key: "17abbs",
    },
  ],
  ["path", { d: "m2 15 6 6", key: "10dquu" }],
  [
    "path",
    {
      d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",
      key: "1h3036",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mg = G("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gg = G("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vn = G("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yg = G("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3",
    },
  ],
  [
    "path",
    { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vg = G("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s2 = G("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o2 = G("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _e = G("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a2 = G("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xg = G("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Os = G("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fu = G("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wg = G("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kg = G("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  L = {
    businessName: "Delea Studio",
    slogan: "Vaše mesto potpunog relaksa",
    emotionalMessage: "Opustite telo, oslobodite um, pronađite sebe.",
    secondaryMessage: "Zaslužujete trenutke samo za sebe.",
    phone: "063 741 6130",
    phoneLink: "tel:0637416130",
    instagram: "@delea__studio",
    instagramUrl: "https://www.instagram.com/delea__studio/",
    address: "Vojvode Mišića 85, Vojka 22313",
    workingHours: "Radnim danima od 17h, vikend ceo dan",
    year: 2026,
  },
  ml = [
    { label: "Početna", href: "#pocetak" },
    { label: "O nama", href: "#o-nama" },
    { label: "Tretmani", href: "#tretmani" },
    { label: "Cenovnik", href: "#cenovnik" },
    { label: "Galerija", href: "#galerija" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  l2 = [
    {
      icon: "Sparkles",
      title: "PRIJATNA ATMOSFERA",
      text: "Prostor stvoren za opuštanje i trenutke posvećene sebi.",
    },
    {
      icon: "Heart",
      title: "VRHUNSKI TRETMANI",
      text: "Pažljivo odabrani tretmani za relaksaciju i negu tela.",
    },
    {
      icon: "Leaf",
      title: "PRIRODNI PROIZVODI",
      text: "Posebna pažnja posvećena kvalitetu i prijatnom iskustvu.",
    },
    {
      icon: "HandHeart",
      title: "POSVEĆENOST VAMA",
      text: "Individualan i pažljiv pristup svakom klijentu.",
    },
  ],
  u2 = [
    { icon: "ShieldCheck", title: "PROFESIONALAN PRISTUP" },
    { icon: "User", title: "INDIVIDUALNA PAŽNJA" },
    { icon: "Home", title: "PRIJATNA ATMOSFERA" },
    { icon: "Clock", title: "VREME ZA VAS" },
  ],
  c2 = [
    { icon: "GraduationCap", title: "EDUKACIJA IZ OBLASTI MASAŽE" },
    { icon: "HandHeart", title: "PROFESIONALAN PRISTUP" },
    { icon: "User", title: "INDIVIDUALNA PAŽNJA" },
    { icon: "Users", title: "TRETMANI ZA ŽENE I MUŠKARCE" },
  ],
  Sg = [
    {
      number: "01",
      name: "Relaks masaža",
      description:
        "Oslobodite stres i napetost uz prijatan, opuštajući tretman namenjen potpunom relaksu tela i uma.",
      price: "Cena — Pozvati",
      cta: "ZAKAŽI TERMIN",
      image:
        "https://images.pexels.com/photos/6628649/pexels-photo-6628649.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Relaks masaža u prijatnom ambijentu",
    },
    {
      number: "02",
      name: "Kraljevska masaža",
      description:
        "Posebno iskustvo gde dve terapeutkinje istovremeno masiraju jedno lice — sinhonizovan dodir četiri ruke za potpuno opuštanje i uživanje. Prepustite se trenutku potpune pažnje.",
      price: "Cena — Pozvati",
      cta: "ZAKAŽI TERMIN",
      image: "https://i.imgur.com/hDXaGra.jpg",
      alt: "Kraljevska masaža — dve terapeutkinje masiraju jednog klijenta",
    },
    {
      number: "03",
      name: "Lifo modelovanje celog tela",
      description:
        "Tretman usmeren na oblikovanje tela i postizanje zategnutijeg i skladnijeg izgleda.",
      price: "Cena — Pozvati",
      cta: "SAZNAJ VIŠE",
      image:
        "https://images.pexels.com/photos/9165651/pexels-photo-9165651.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Lifo modelovanje tela",
    },
    {
      number: "04",
      name: "Brazilska maderoterapija",
      description:
        "Prirodna metoda masaže drvenim alatima namenjena nezi tela, oblikovanju i prijatnom osećaju zategnutosti kože.",
      price: "Cena — Pozvati",
      cta: "ZAKAŽI TERMIN",
      image:
        "https://images.pexels.com/photos/6628691/pexels-photo-6628691.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Brazilska maderoterapija drvenim alatima",
    },
    {
      number: "05",
      name: "Pregled celokupnog stanja organizma kvantnim aparatom",
      description: "Brza i neinvazivna analiza pomoću kvantnog aparata.",
      price: "Cena — Pozvati",
      cta: "SAZNAJ VIŠE",
      image:
        "https://images.pexels.com/photos/7789646/pexels-photo-7789646.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Pregled stanja organizma kvantnim aparatom",
      disclaimer:
        "Ova analiza nije zamena za pregled, dijagnozu ili savet zdravstvenog radnika.",
    },
  ],
  d2 = [
    {
      number: "01",
      icon: "Home",
      title: "PRIJATNA ATMOSFERA",
      text: "Ambijent u kojem možete da zaboravite na svakodnevni stres.",
    },
    {
      number: "02",
      icon: "ShieldCheck",
      title: "PROFESIONALAN PRISTUP",
      text: "Edukacija iz oblasti masaže i pažljiv pristup svakom klijentu.",
    },
    {
      number: "03",
      icon: "User",
      title: "INDIVIDUALNA PAŽNJA",
      text: "Svaki klijent zaslužuje da se oseća posebno.",
    },
    {
      number: "04",
      icon: "Sparkles",
      title: "RAZNOVRSNI TRETMANI",
      text: "Od relaks masaže do maderoterapije i modelovanja tela.",
    },
    {
      number: "05",
      icon: "Users",
      title: "ZA ŽENE I MUŠKARCE",
      text: "Profesionalni tretmani dostupni i muškarcima.",
    },
    {
      number: "06",
      icon: "Leaf",
      title: "PRIRODNI PROIZVODI",
      text: "Pažljivo odabrani proizvodi za prijatno iskustvo.",
    },
  ],
  gf = [
    { number: "01", title: "POZOVITE", text: "063 741 6130" },
    {
      number: "02",
      title: "ODABERITE TRETMAN",
      text: "Informišite se o tretmanima i aktuelnim cenama.",
    },
    {
      number: "03",
      title: "DOĐITE I OPUSTITE SE",
      text: "Prepustite se svom trenutku.",
    },
  ],
  f2 = ["Masaža", "Maderoterapija", "Detalji", "Proizvodi", "Opuštanje"],
  yf = [
    {
      src: "https://images.pexels.com/photos/6628649/pexels-photo-6628649.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Relaks masaža",
      category: "Masaža",
    },
    {
      src: "https://images.pexels.com/photos/6628691/pexels-photo-6628691.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Maderoterapija drvenim alatima",
      category: "Maderoterapija",
    },
    {
      src: "https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Sveće i cveće u spa ambijentu",
      category: "Detalji",
    },
    {
      src: "https://images.pexels.com/photos/8852874/pexels-photo-8852874.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Ulja i peškiri za masažu",
      category: "Proizvodi",
    },
    {
      src: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Opuštanje uz cveće i sveće",
      category: "Opuštanje",
    },
    {
      src: "https://images.pexels.com/photos/7235064/pexels-photo-7235064.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Profesionalna masaža leđa",
      category: "Masaža",
    },
    {
      src: "https://images.pexels.com/photos/10893347/pexels-photo-10893347.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Masaža drvenim valjkom",
      category: "Maderoterapija",
    },
    {
      src: "https://images.pexels.com/photos/30428755/pexels-photo-30428755.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Lotus sveće za opuštanje",
      category: "Detalji",
    },
    {
      src: "https://images.pexels.com/photos/7795662/pexels-photo-7795662.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Proizvodi za negu tela",
      category: "Proizvodi",
    },
    {
      src: "https://images.pexels.com/photos/6560265/pexels-photo-6560265.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      alt: "Opuštajuća masaža u spa okruženju",
      category: "Opuštanje",
    },
  ],
  h2 = [
    {
      question: "Da li je potrebno zakazivanje?",
      answer:
        "Preporučujemo da svoj termin zakažete unapred pozivom na 063 741 6130.",
    },
    {
      question: "Da li primate muškarce?",
      answer:
        "Da. Delea Studio je otvoren i za muškarce koji žele profesionalan i prijatan tretman masaže.",
    },
    {
      question: "Koje masaže nudite?",
      answer:
        "U ponudi su relaks masaža, kraljevska masaža, kao i drugi tretmani nege i oblikovanja tela.",
    },
    {
      question: "Koliko koštaju tretmani?",
      answer: "Za aktuelne cene i akcijske ponude pozovite 063 741 6130.",
    },
    {
      question: "Kako mogu da zakažem termin?",
      answer: "Najbrže je da nas pozovete direktno na 063 741 6130.",
    },
    {
      question: "Da li mogu da se informišem koji tretman mi odgovara?",
      answer: "Naravno. Pozovite nas i informišite se o dostupnim tretmanima.",
    },
  ];
function p2() {
  const [e, t] = C.useState(!1),
    [n, r] = C.useState(!1);
  return (
    C.useEffect(() => {
      const i = () => t(window.scrollY > 30);
      return (
        window.addEventListener("scroll", i),
        () => window.removeEventListener("scroll", i)
      );
    }, []),
    C.useEffect(
      () => (
        (document.body.style.overflow = n ? "hidden" : ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [n],
    ),
    u.jsxs(u.Fragment, {
      children: [
        u.jsx("header", {
          className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${e ? "glass shadow-soft py-2" : "bg-transparent py-4"}`,
          children: u.jsxs("nav", {
            className:
              "max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between",
            children: [
              u.jsxs("a", {
                href: "#pocetak",
                className: "flex items-center gap-2 group",
                children: [
                  u.jsx("span", {
                    className: `font-heading text-xl lg:text-2xl font-bold tracking-tight transition-colors ${e ? "text-brand-dark" : "text-white"}`,
                    children: "Delea",
                  }),
                  u.jsx("span", {
                    className: `font-script text-lg lg:text-xl italic transition-colors ${e ? "text-brand-pink" : "text-brand-gold-light"}`,
                    children: "Studio",
                  }),
                ],
              }),
              u.jsx("div", {
                className: "hidden lg:flex items-center gap-8",
                children: ml.map((i) =>
                  u.jsxs(
                    "a",
                    {
                      href: i.href,
                      className: `text-sm font-medium tracking-wide transition-colors relative group ${e ? "text-brand-dark-soft hover:text-brand-pink" : "text-white/90 hover:text-white"}`,
                      children: [
                        i.label,
                        u.jsx("span", {
                          className:
                            "absolute -bottom-1 left-0 w-0 h-px bg-brand-pink transition-all duration-300 group-hover:w-full",
                        }),
                      ],
                    },
                    i.href,
                  ),
                ),
              }),
              u.jsxs("div", {
                className: "hidden lg:flex items-center gap-4",
                children: [
                  u.jsxs("a", {
                    href: L.phoneLink,
                    className: `flex items-center gap-2 text-sm font-medium transition-colors ${e ? "text-brand-dark-soft hover:text-brand-pink" : "text-white/90 hover:text-white"}`,
                    children: [u.jsx(_e, { className: "w-4 h-4" }), L.phone],
                  }),
                  u.jsxs("a", {
                    href: L.phoneLink,
                    className:
                      "gradient-pink text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:shadow-premium hover:scale-105 transition-all duration-300 flex items-center gap-2",
                    children: [
                      u.jsx(Xt, { className: "w-4 h-4" }),
                      "Zakaži termin",
                    ],
                  }),
                ],
              }),
              u.jsx("button", {
                onClick: () => r(!0),
                className: `lg:hidden p-2 transition-colors ${e ? "text-brand-dark" : "text-white"}`,
                "aria-label": "Otvori meni",
                children: u.jsx(s2, { className: "w-6 h-6" }),
              }),
            ],
          }),
        }),
        u.jsx(oo, {
          children:
            n &&
            u.jsxs(M.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.3 },
              className: "fixed inset-0 z-[60] lg:hidden",
              children: [
                u.jsx("div", {
                  className:
                    "absolute inset-0 bg-brand-dark/60 backdrop-blur-sm",
                  onClick: () => r(!1),
                }),
                u.jsxs(M.div, {
                  initial: { x: "100%" },
                  animate: { x: 0 },
                  exit: { x: "100%" },
                  transition: { type: "tween", duration: 0.3, ease: "easeOut" },
                  className:
                    "absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-brand-bg shadow-premium flex flex-col",
                  children: [
                    u.jsxs("div", {
                      className:
                        "flex items-center justify-between p-5 border-b border-brand-pink-soft",
                      children: [
                        u.jsxs("span", {
                          className:
                            "font-heading text-xl font-bold text-brand-dark",
                          children: [
                            "Delea ",
                            u.jsx("span", {
                              className: "font-script italic text-brand-pink",
                              children: "Studio",
                            }),
                          ],
                        }),
                        u.jsx("button", {
                          onClick: () => r(!1),
                          "aria-label": "Zatvori meni",
                          className:
                            "p-2 text-brand-dark-muted hover:text-brand-pink transition-colors",
                          children: u.jsx(kg, { className: "w-6 h-6" }),
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: "flex-1 overflow-y-auto px-5 py-6",
                      children: u.jsx("div", {
                        className: "flex flex-col gap-1",
                        children: ml.map((i, s) =>
                          u.jsx(
                            M.a,
                            {
                              href: i.href,
                              onClick: () => r(!1),
                              initial: { opacity: 0, x: 20 },
                              animate: { opacity: 1, x: 0 },
                              transition: { delay: s * 0.05 },
                              className:
                                "py-3 px-4 rounded-xl text-brand-dark-soft hover:bg-brand-pink-soft hover:text-brand-pink transition-colors font-medium text-base",
                              children: i.label,
                            },
                            i.href,
                          ),
                        ),
                      }),
                    }),
                    u.jsxs("div", {
                      className:
                        "p-5 border-t border-brand-pink-soft space-y-3",
                      children: [
                        u.jsxs("a", {
                          href: L.phoneLink,
                          className:
                            "flex items-center justify-center gap-2 w-full py-3.5 rounded-full border-2 border-brand-pink text-brand-pink font-semibold text-sm hover:bg-brand-pink hover:text-white transition-colors",
                          children: [
                            u.jsx(_e, { className: "w-4 h-4" }),
                            L.phone,
                          ],
                        }),
                        u.jsxs("a", {
                          href: L.phoneLink,
                          className:
                            "flex items-center justify-center gap-2 w-full py-3.5 rounded-full gradient-pink text-white font-semibold text-sm shadow-card",
                          children: [
                            u.jsx(Xt, { className: "w-4 h-4" }),
                            "Zakaži termin",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    })
  );
}
const m2 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  },
  ce = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  Bu = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
  jg = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
  Uu = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  Qe = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  },
  Ae = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
function g2() {
  return u.jsxs("section", {
    id: "pocetak",
    className: "relative min-h-[100svh] flex items-center overflow-hidden",
    children: [
      u.jsxs("div", {
        className: "absolute inset-0",
        children: [
          u.jsx("img", {
            src: "https://images.pexels.com/photos/6628649/pexels-photo-6628649.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
            alt: "Profesionalna masaža u premium spa ambijentu",
            className: "w-full h-full object-cover",
            fetchPriority: "high",
          }),
          u.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/50 to-brand-dark/30",
          }),
          u.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-brand-dark/20",
          }),
        ],
      }),
      u.jsx("div", {
        className:
          "absolute top-1/4 right-10 w-64 h-64 rounded-full bg-brand-pink/20 blur-[100px] pointer-events-none",
      }),
      u.jsx("div", {
        className:
          "absolute bottom-1/4 left-10 w-72 h-72 rounded-full bg-brand-gold/15 blur-[120px] pointer-events-none",
      }),
      u.jsx("div", {
        className:
          "relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full pt-24 pb-32 lg:pt-20 lg:pb-20",
        children: u.jsxs(M.div, {
          variants: Qe,
          initial: "hidden",
          animate: "visible",
          className: "max-w-2xl",
          children: [
            u.jsxs(M.div, {
              variants: m2,
              className: "flex items-center gap-2 mb-6",
              children: [
                u.jsx("span", { className: "h-px w-12 bg-brand-gold" }),
                u.jsx("span", {
                  className:
                    "font-script italic text-brand-gold-light text-lg lg:text-xl tracking-wide",
                  children: "Salon masaže",
                }),
              ],
            }),
            u.jsxs(M.h1, {
              variants: ce,
              className:
                "font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] text-balance",
              children: [
                "Vaše mesto potpunog ",
                u.jsx("span", {
                  className: "text-gradient-gold",
                  children: "relaksa",
                }),
              ],
            }),
            u.jsx(M.p, {
              variants: ce,
              className:
                "mt-6 text-lg lg:text-2xl font-heading italic text-white/90 font-light",
              children: "Opustite telo. Oslobodite um. Pronađite sebe.",
            }),
            u.jsx(M.p, {
              variants: ce,
              className:
                "mt-5 text-sm lg:text-base text-white/70 leading-relaxed max-w-xl",
              children:
                "Prepustite se profesionalnim masažama i pažljivo odabranim tretmanima posvećenim vašem opuštanju, nezi tela i vremenu koje izdvajate samo za sebe.",
            }),
            u.jsxs(M.div, {
              variants: ce,
              className: "mt-8 flex flex-col sm:flex-row gap-4",
              children: [
                u.jsxs("a", {
                  href: L.phoneLink,
                  className:
                    "gradient-pink text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:shadow-premium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group",
                  children: [
                    u.jsx(Xt, {
                      className:
                        "w-5 h-5 group-hover:rotate-12 transition-transform",
                    }),
                    "Zakaži termin",
                  ],
                }),
                u.jsx("a", {
                  href: "#tretmani",
                  className:
                    "border border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center justify-center",
                  children: "Pogledaj tretmane",
                }),
              ],
            }),
            u.jsxs(M.a, {
              variants: ce,
              href: L.phoneLink,
              className:
                "mt-6 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-lg font-heading",
              children: [
                u.jsx(_e, { className: "w-5 h-5 text-brand-gold-light" }),
                u.jsx("span", {
                  className: "tracking-wide",
                  children: L.phone,
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsx(M.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.2 },
        className:
          "absolute bottom-24 lg:bottom-10 left-1/2 -translate-x-1/2 z-10",
        children: u.jsxs(M.div, {
          animate: { y: [0, 8, 0] },
          transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
          className: "flex flex-col items-center gap-2 text-white/50",
          children: [
            u.jsx("span", {
              className: "text-xs tracking-[0.2em] uppercase",
              children: "Otkrijte",
            }),
            u.jsx(Jk, { className: "w-5 h-5" }),
          ],
        }),
      }),
      u.jsx("div", {
        className:
          "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent",
      }),
    ],
  });
}
const y2 = { Sparkles: Os, Heart: mg, Leaf: yg, HandHeart: pg };
function v2() {
  return u.jsx("section", {
    className: "relative -mt-16 lg:-mt-20 z-20 px-5 lg:px-8",
    children: u.jsx("div", {
      className: "max-w-6xl mx-auto",
      children: u.jsx(M.div, {
        variants: Qe,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0, amount: 0.2 },
        className:
          "grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 bg-white rounded-3xl shadow-premium p-6 lg:p-10",
        children: l2.map((e) => {
          const t = y2[e.icon];
          return u.jsxs(
            M.div,
            {
              variants: Ae,
              className:
                "flex flex-col items-center text-center lg:text-left lg:items-start gap-3",
              children: [
                u.jsx("div", {
                  className:
                    "w-12 h-12 rounded-2xl bg-brand-pink-soft flex items-center justify-center group",
                  children: u.jsx(t, { className: "w-6 h-6 text-brand-pink" }),
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h3", {
                      className:
                        "font-heading text-sm lg:text-base font-semibold text-brand-dark mb-1 tracking-wide",
                      children: e.title,
                    }),
                    u.jsx("p", {
                      className:
                        "text-xs lg:text-sm text-brand-dark-muted leading-relaxed",
                      children: e.text,
                    }),
                  ],
                }),
              ],
            },
            e.title,
          );
        }),
      }),
    }),
  });
}
const x2 = { ShieldCheck: xg, User: Fu, Home: gg, Clock: _u };
function w2() {
  return u.jsx("section", {
    id: "o-nama",
    className: "py-20 lg:py-32 px-5 lg:px-8 overflow-hidden",
    children: u.jsx("div", {
      className: "max-w-7xl mx-auto",
      children: u.jsxs("div", {
        className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
        children: [
          u.jsxs(M.div, {
            variants: Bu,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, amount: 0.3 },
            className: "relative",
            children: [
              u.jsx("div", {
                className:
                  "relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium",
                children: u.jsx("img", {
                  src: "https://images.pexels.com/photos/7235064/pexels-photo-7235064.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
                  alt: "Profesionalna masaža u Delea Studiju",
                  className: "w-full h-full object-cover",
                  loading: "lazy",
                }),
              }),
              u.jsx("div", {
                className:
                  "absolute -bottom-6 -right-4 lg:-right-6 w-40 h-40 lg:w-56 lg:h-56 rounded-3xl overflow-hidden shadow-card border-4 lg:border-8 border-white",
                children: u.jsx("img", {
                  src: "https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                  alt: "Sveće i cveće za opuštanje",
                  className: "w-full h-full object-cover",
                  loading: "lazy",
                }),
              }),
              u.jsx("div", {
                className:
                  "absolute -top-4 -left-4 w-24 h-24 rounded-2xl gradient-gold opacity-20 blur-2xl",
              }),
            ],
          }),
          u.jsxs(M.div, {
            variants: jg,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, amount: 0.3 },
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-3 mb-5",
                children: [
                  u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
                  u.jsx("span", {
                    className: "font-script italic text-brand-pink text-lg",
                    children: "O nama",
                  }),
                ],
              }),
              u.jsx("h2", {
                className:
                  "font-heading text-3xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6 text-balance",
                children: "Trenutak koji je samo vaš.",
              }),
              u.jsxs("div", {
                className:
                  "space-y-4 text-brand-dark-muted text-base lg:text-lg leading-relaxed",
                children: [
                  u.jsx("p", {
                    children:
                      "U Delea Studiju verujemo da svako zaslužuje trenutak u kojem može da uspori, opusti telo i posveti pažnju sebi.",
                  }),
                  u.jsx("p", {
                    children:
                      "Uz profesionalan pristup, prijatnu atmosferu i pažljivo odabrane tretmane, stvaramo iskustvo u kojem svakodnevni stres ostaje po strani.",
                  }),
                  u.jsx("p", {
                    className: "font-heading italic text-brand-dark text-lg",
                    children:
                      "Naš cilj nije samo tretman — već osećaj zbog kojeg ćete poželeti da nam se vratite.",
                  }),
                ],
              }),
              u.jsx(M.div, {
                variants: Qe,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                className: "grid grid-cols-2 gap-4 mt-8",
                children: u2.map((e) => {
                  const t = x2[e.icon];
                  return u.jsxs(
                    M.div,
                    {
                      variants: Ae,
                      className:
                        "flex items-center gap-3 p-4 rounded-2xl bg-white shadow-soft hover:shadow-card transition-shadow",
                      children: [
                        u.jsx("div", {
                          className:
                            "w-10 h-10 rounded-xl bg-brand-pink-soft flex items-center justify-center shrink-0",
                          children: u.jsx(t, {
                            className: "w-5 h-5 text-brand-pink",
                          }),
                        }),
                        u.jsx("span", {
                          className:
                            "text-xs lg:text-sm font-semibold text-brand-dark tracking-wide",
                          children: e.title,
                        }),
                      ],
                    },
                    e.title,
                  );
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const k2 = { GraduationCap: i2, HandHeart: pg, User: Fu, Users: wg };
function S2() {
  return u.jsxs("section", {
    className:
      "py-20 lg:py-32 px-5 lg:px-8 bg-brand-dark relative overflow-hidden",
    children: [
      u.jsx("div", {
        className:
          "absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-pink/10 blur-[120px] pointer-events-none",
      }),
      u.jsx("div", {
        className:
          "absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none",
      }),
      u.jsx("div", {
        className: "max-w-6xl mx-auto relative z-10",
        children: u.jsxs("div", {
          className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
          children: [
            u.jsxs(M.div, {
              variants: Bu,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, amount: 0.3 },
              children: [
                u.jsxs("div", {
                  className: "flex items-center gap-3 mb-5",
                  children: [
                    u.jsx("span", { className: "h-px w-10 bg-brand-gold" }),
                    u.jsx("span", {
                      className:
                        "font-script italic text-brand-gold-light text-lg",
                      children: "Edukacija",
                    }),
                  ],
                }),
                u.jsx("h2", {
                  className:
                    "font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-6 text-balance",
                  children: "Znanje, pažnja i profesionalan pristup.",
                }),
                u.jsxs("div", {
                  className:
                    "space-y-4 text-white/70 text-base lg:text-lg leading-relaxed",
                  children: [
                    u.jsx("p", {
                      children:
                        "Naš pristup masaži zasniva se na završenoj edukaciji iz oblasti masaže i pažljivom radu sa svakim klijentom.",
                    }),
                    u.jsx("p", {
                      children:
                        "Svaki tretman je usmeren na prijatno iskustvo, opuštanje i potrebe osobe koja nam se poverava.",
                    }),
                  ],
                }),
              ],
            }),
            u.jsx(M.div, {
              variants: Qe,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, amount: 0.2 },
              className: "grid grid-cols-2 gap-4 lg:gap-6",
              children: c2.map((e) => {
                const t = k2[e.icon];
                return u.jsxs(
                  M.div,
                  {
                    variants: Ae,
                    className:
                      "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-300 group",
                    children: [
                      u.jsx("div", {
                        className:
                          "w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-pink/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                        children: u.jsx(t, {
                          className: "w-6 h-6 text-brand-gold-light",
                        }),
                      }),
                      u.jsx("h3", {
                        className:
                          "text-xs lg:text-sm font-semibold text-white tracking-wide leading-snug",
                        children: e.title,
                      }),
                    ],
                  },
                  e.title,
                );
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function j2() {
  return u.jsx("section", {
    id: "tretmani",
    className: "py-20 lg:py-32 px-5 lg:px-8",
    children: u.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        u.jsxs(M.div, {
          variants: ce,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.3 },
          className: "text-center max-w-2xl mx-auto mb-12 lg:mb-16",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
                u.jsx("span", {
                  className: "font-script italic text-brand-pink text-lg",
                  children: "Tretmani",
                }),
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
              ],
            }),
            u.jsx("h2", {
              className:
                "font-heading text-3xl lg:text-5xl font-bold text-brand-dark mb-4 text-balance",
              children: "Naši tretmani",
            }),
            u.jsx("p", {
              className: "text-brand-dark-muted text-lg font-heading italic",
              children: "Odaberite trenutak koji vam je potreban.",
            }),
          ],
        }),
        u.jsx(M.div, {
          variants: Qe,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.1 },
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
          children: Sg.map((e) =>
            u.jsxs(
              M.article,
              {
                variants: Ae,
                className:
                  "group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 flex flex-col",
                children: [
                  u.jsxs("div", {
                    className: "relative aspect-[4/3] overflow-hidden",
                    children: [
                      u.jsx("img", {
                        src: e.image,
                        alt: e.alt,
                        className:
                          "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                        loading: "lazy",
                      }),
                      u.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent",
                      }),
                      u.jsx("span", {
                        className:
                          "absolute top-4 left-4 font-heading text-3xl font-bold text-white/90 drop-shadow-lg",
                        children: e.number,
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "p-6 lg:p-7 flex flex-col flex-1",
                    children: [
                      u.jsx("h3", {
                        className:
                          "font-heading text-xl lg:text-2xl font-bold text-brand-dark mb-3 leading-tight",
                        children: e.name,
                      }),
                      u.jsx("p", {
                        className:
                          "text-sm lg:text-base text-brand-dark-muted leading-relaxed mb-4 flex-1",
                        children: e.description,
                      }),
                      e.disclaimer &&
                        u.jsxs("p", {
                          className:
                            "flex items-start gap-2 text-xs text-brand-dark-muted/80 bg-brand-pink-soft/50 rounded-xl p-3 mb-4 italic",
                          children: [
                            u.jsx(n2, {
                              className:
                                "w-4 h-4 shrink-0 mt-0.5 text-brand-pink-deep",
                            }),
                            e.disclaimer,
                          ],
                        }),
                      u.jsx("div", {
                        className: "flex items-center justify-between mb-4",
                        children: u.jsx("span", {
                          className:
                            "text-sm font-semibold text-brand-pink-deep",
                          children: e.price,
                        }),
                      }),
                      u.jsxs("a", {
                        href: L.phoneLink,
                        className:
                          "flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand-pink-soft text-brand-pink font-semibold text-sm tracking-wide hover:bg-brand-pink hover:text-white transition-all duration-300 group/btn",
                        children: [
                          e.cta,
                          u.jsx(Zk, {
                            className:
                              "w-4 h-4 group-hover/btn:translate-x-1 transition-transform",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              e.number,
            ),
          ),
        }),
        u.jsx(M.div, {
          variants: ce,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0 },
          className: "text-center mt-12",
          children: u.jsxs("a", {
            href: L.phoneLink,
            className:
              "inline-flex items-center gap-2 text-brand-pink font-semibold text-sm hover:text-brand-pink-deep transition-colors",
            children: [
              u.jsx(_e, { className: "w-4 h-4" }),
              "Pozovite za sve informacije: ",
              L.phone,
            ],
          }),
        }),
      ],
    }),
  });
}
function N2() {
  return u.jsxs("section", {
    className:
      "py-20 lg:py-32 px-5 lg:px-8 bg-gradient-to-br from-brand-dark via-brand-dark-soft to-brand-dark relative overflow-hidden",
    children: [
      u.jsx("div", {
        className:
          "absolute top-1/2 right-0 w-96 h-96 rounded-full bg-brand-pink-deep/20 blur-[120px] pointer-events-none",
      }),
      u.jsx("div", {
        className:
          "absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none",
      }),
      u.jsx("div", {
        className: "max-w-7xl mx-auto relative z-10",
        children: u.jsxs("div", {
          className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
          children: [
            u.jsxs(M.div, {
              variants: Bu,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, amount: 0.3 },
              className: "relative order-2 lg:order-1",
              children: [
                u.jsxs("div", {
                  className:
                    "relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium",
                  children: [
                    u.jsx("img", {
                      src: "https://images.pexels.com/photos/4599374/pexels-photo-4599374.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
                      alt: "Muškarac u relaksirajućoj masaži — profesionalan tretman",
                      className: "w-full h-full object-cover",
                      loading: "lazy",
                    }),
                    u.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent",
                    }),
                  ],
                }),
                u.jsx("div", {
                  className:
                    "absolute -bottom-5 -right-3 lg:-right-5 bg-brand-gold rounded-2xl px-6 py-4 shadow-card",
                  children: u.jsx("p", {
                    className:
                      "font-heading text-sm font-bold text-brand-dark tracking-wide",
                    children: "ZA MUŠKARCE",
                  }),
                }),
              ],
            }),
            u.jsxs(M.div, {
              variants: jg,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, amount: 0.3 },
              className: "order-1 lg:order-2",
              children: [
                u.jsxs("div", {
                  className: "flex items-center gap-3 mb-5",
                  children: [
                    u.jsx("span", { className: "h-px w-10 bg-brand-gold" }),
                    u.jsx("span", {
                      className:
                        "font-script italic text-brand-gold-light text-lg",
                      children: "I za muškarce",
                    }),
                  ],
                }),
                u.jsx("h2", {
                  className:
                    "font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-4 text-balance",
                  children: "Masaža za muškarce",
                }),
                u.jsx("p", {
                  className:
                    "text-lg font-heading italic text-brand-gold-light mb-6",
                  children:
                    "Profesionalan tretman. Prijatan ambijent. Vreme posvećeno vama.",
                }),
                u.jsxs("div", {
                  className:
                    "space-y-4 text-white/70 text-base lg:text-lg leading-relaxed",
                  children: [
                    u.jsx("p", {
                      children:
                        "Delea Studio je otvoren i za muškarce koji žele da se opuste, oslobode napetost i poklone sebi vreme za odmor.",
                    }),
                    u.jsx("p", {
                      children:
                        "Završena edukacija iz oblasti masaže omogućava profesionalan, pažljiv i individualan pristup svakom klijentu.",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "mt-8 flex flex-col sm:flex-row gap-4",
                  children: [
                    u.jsxs("a", {
                      href: L.phoneLink,
                      className:
                        "gradient-pink text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:shadow-premium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2",
                      children: [
                        u.jsx(Xt, { className: "w-5 h-5" }),
                        "Zakaži termin",
                      ],
                    }),
                    u.jsxs("a", {
                      href: L.phoneLink,
                      className:
                        "border border-white/20 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2",
                      children: [u.jsx(_e, { className: "w-5 h-5" }), L.phone],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const T2 = {
  Home: gg,
  ShieldCheck: xg,
  User: Fu,
  Sparkles: Os,
  Users: wg,
  Leaf: yg,
};
function C2() {
  return u.jsx("section", {
    className: "py-20 lg:py-32 px-5 lg:px-8",
    children: u.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        u.jsxs(M.div, {
          variants: ce,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.3 },
          className: "text-center max-w-2xl mx-auto mb-12 lg:mb-16",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
                u.jsx("span", {
                  className: "font-script italic text-brand-pink text-lg",
                  children: "Zašto mi",
                }),
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
              ],
            }),
            u.jsx("h2", {
              className:
                "font-heading text-3xl lg:text-5xl font-bold text-brand-dark text-balance",
              children: "Zašto Delea Studio?",
            }),
          ],
        }),
        u.jsx(M.div, {
          variants: Qe,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.1 },
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
          children: d2.map((e) => {
            const t = T2[e.icon];
            return u.jsxs(
              M.div,
              {
                variants: Ae,
                className:
                  "group relative bg-white rounded-3xl p-7 lg:p-8 shadow-soft hover:shadow-premium transition-all duration-500 overflow-hidden",
                children: [
                  u.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-pink-soft/40 group-hover:scale-150 transition-transform duration-700",
                  }),
                  u.jsxs("div", {
                    className: "relative z-10",
                    children: [
                      u.jsxs("div", {
                        className: "flex items-center justify-between mb-5",
                        children: [
                          u.jsx("div", {
                            className:
                              "w-14 h-14 rounded-2xl gradient-pink flex items-center justify-center shadow-card group-hover:scale-110 transition-transform",
                            children: u.jsx(t, {
                              className: "w-7 h-7 text-white",
                            }),
                          }),
                          u.jsx("span", {
                            className:
                              "font-heading text-4xl font-bold text-brand-pink-soft group-hover:text-brand-pink/20 transition-colors",
                            children: e.number,
                          }),
                        ],
                      }),
                      u.jsx("h3", {
                        className:
                          "font-heading text-lg font-bold text-brand-dark mb-2 tracking-wide",
                        children: e.title,
                      }),
                      u.jsx("p", {
                        className:
                          "text-sm lg:text-base text-brand-dark-muted leading-relaxed",
                        children: e.text,
                      }),
                    ],
                  }),
                ],
              },
              e.number,
            );
          }),
        }),
      ],
    }),
  });
}
function P2() {
  return u.jsxs("section", {
    className: "relative py-24 lg:py-40 overflow-hidden",
    children: [
      u.jsxs("div", {
        className: "absolute inset-0",
        children: [
          u.jsx("img", {
            src: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
            alt: "Opuštanje u spa ambijentu",
            className: "w-full h-full object-cover",
            loading: "lazy",
          }),
          u.jsx("div", { className: "absolute inset-0 bg-brand-dark/75" }),
          u.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-brand-dark/60",
          }),
        ],
      }),
      u.jsx("div", {
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-pink/10 blur-[150px] pointer-events-none",
      }),
      u.jsx("div", {
        className: "relative z-10 max-w-3xl mx-auto px-5 lg:px-8 text-center",
        children: u.jsxs(M.div, {
          variants: Uu,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.3 },
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-6",
              children: [
                u.jsx("span", { className: "h-px w-10 bg-brand-gold" }),
                u.jsx("span", {
                  className: "font-script italic text-brand-gold-light text-lg",
                  children: "Trenutak za sebe",
                }),
                u.jsx("span", { className: "h-px w-10 bg-brand-gold" }),
              ],
            }),
            u.jsx("h2", {
              className:
                "font-heading text-3xl lg:text-6xl font-bold text-white leading-tight mb-8 text-balance",
              children: "Opustite telo. Oslobodite um.",
            }),
            u.jsxs("div", {
              className:
                "space-y-3 text-white/80 text-lg lg:text-xl leading-relaxed font-heading italic",
              children: [
                u.jsx("p", {
                  children:
                    "Na trenutak ostavite telefon, obaveze i svakodnevni stres sa strane.",
                }),
                u.jsx("p", { children: "Dozvolite sebi da usporite." }),
                u.jsx("p", {
                  className: "text-white text-xl lg:text-2xl",
                  children: "Vaš trenutak za sebe počinje ovde.",
                }),
              ],
            }),
            u.jsxs("a", {
              href: L.phoneLink,
              className:
                "mt-10 inline-flex items-center gap-2 gradient-pink text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wide hover:shadow-premium hover:scale-105 transition-all duration-300",
              children: [
                u.jsx(Xt, { className: "w-5 h-5" }),
                "Zakaži svoj termin",
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const E2 = [_e, r2, mg];
function b2() {
  return u.jsx("section", {
    className: "py-20 lg:py-32 px-5 lg:px-8 bg-brand-bg",
    children: u.jsxs("div", {
      className: "max-w-6xl mx-auto",
      children: [
        u.jsxs(M.div, {
          variants: ce,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.3 },
          className: "text-center max-w-2xl mx-auto mb-12 lg:mb-16",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
                u.jsx("span", {
                  className: "font-script italic text-brand-pink text-lg",
                  children: "Kako do termina",
                }),
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
              ],
            }),
            u.jsx("h2", {
              className:
                "font-heading text-3xl lg:text-5xl font-bold text-brand-dark text-balance",
              children: "Jednostavan korak do opuštanja",
            }),
          ],
        }),
        u.jsx(M.div, {
          variants: Qe,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.2 },
          className: "grid md:grid-cols-3 gap-8 lg:gap-12 relative",
          children: gf.map((e, t) => {
            const n = E2[t];
            return u.jsxs(
              M.div,
              {
                variants: Ae,
                className: "relative text-center",
                children: [
                  u.jsxs("div", {
                    className:
                      "relative inline-flex items-center justify-center mb-6",
                    children: [
                      u.jsx("div", {
                        className:
                          "w-20 h-20 rounded-full bg-white shadow-card flex items-center justify-center group hover:shadow-premium transition-shadow",
                        children: u.jsx(n, {
                          className: "w-8 h-8 text-brand-pink",
                        }),
                      }),
                      u.jsx("span", {
                        className:
                          "absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-pink text-white text-sm font-bold flex items-center justify-center shadow-card",
                        children: e.number,
                      }),
                    ],
                  }),
                  u.jsx("h3", {
                    className:
                      "font-heading text-lg font-bold text-brand-dark mb-2 tracking-wide",
                    children: e.title,
                  }),
                  t === 0
                    ? u.jsx("a", {
                        href: L.phoneLink,
                        className:
                          "text-xl font-heading font-semibold text-brand-pink hover:text-brand-pink-deep transition-colors",
                        children: e.text,
                      })
                    : u.jsx("p", {
                        className:
                          "text-sm lg:text-base text-brand-dark-muted leading-relaxed max-w-xs mx-auto",
                        children: e.text,
                      }),
                  t < gf.length - 1 &&
                    u.jsx("div", {
                      className:
                        "hidden md:block absolute top-10 left-[60%] w-full h-px",
                      children: u.jsx("div", {
                        className:
                          "h-px bg-gradient-to-r from-brand-pink/30 to-transparent",
                      }),
                    }),
                ],
              },
              e.number,
            );
          }),
        }),
      ],
    }),
  });
}
function A2() {
  return u.jsx("section", {
    id: "cenovnik",
    className: "py-20 lg:py-32 px-5 lg:px-8",
    children: u.jsxs("div", {
      className: "max-w-5xl mx-auto",
      children: [
        u.jsxs(M.div, {
          variants: ce,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.3 },
          className: "text-center max-w-2xl mx-auto mb-12 lg:mb-16",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
                u.jsx("span", {
                  className: "font-script italic text-brand-pink text-lg",
                  children: "Cenovnik",
                }),
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
              ],
            }),
            u.jsx("h2", {
              className:
                "font-heading text-3xl lg:text-5xl font-bold text-brand-dark mb-4 text-balance",
              children: "Cenovnik",
            }),
            u.jsx("p", {
              className: "text-brand-dark-muted text-lg font-heading italic",
              children: "Za aktuelne cene tretmana pozovite nas.",
            }),
          ],
        }),
        u.jsx(M.div, {
          variants: Qe,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.1 },
          className: "space-y-4",
          children: Sg.map((e) =>
            u.jsxs(
              M.div,
              {
                variants: Ae,
                className:
                  "group flex flex-col md:flex-row md:items-center gap-4 md:gap-6 bg-white rounded-2xl p-5 lg:p-6 shadow-soft hover:shadow-card transition-all",
                children: [
                  u.jsxs("div", {
                    className: "flex items-center gap-4 flex-1",
                    children: [
                      u.jsx("span", {
                        className:
                          "font-heading text-2xl font-bold text-brand-pink-soft group-hover:text-brand-pink/30 transition-colors shrink-0",
                        children: e.number,
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("h3", {
                            className:
                              "font-heading text-lg font-bold text-brand-dark mb-1",
                            children: e.name,
                          }),
                          u.jsx("p", {
                            className:
                              "text-sm text-brand-dark-muted leading-relaxed",
                            children: e.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "flex flex-col md:items-end gap-2 md:min-w-[200px]",
                    children: [
                      u.jsx("span", {
                        className: "text-sm font-semibold text-brand-pink-deep",
                        children: "Pozvati za cenu",
                      }),
                      u.jsxs("a", {
                        href: L.phoneLink,
                        className:
                          "flex items-center gap-2 text-xs font-semibold text-brand-pink hover:text-brand-pink-deep transition-colors",
                        children: [
                          u.jsx(Xt, { className: "w-4 h-4" }),
                          "ZAKAŽI TERMIN",
                        ],
                      }),
                    ],
                  }),
                ],
              },
              e.number,
            ),
          ),
        }),
        u.jsx(M.div, {
          variants: ce,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0 },
          className: "mt-12 text-center",
          children: u.jsxs("a", {
            href: L.phoneLink,
            className:
              "inline-flex items-center gap-3 gradient-pink text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide hover:shadow-premium hover:scale-105 transition-all duration-300",
            children: [u.jsx(_e, { className: "w-5 h-5" }), "Pozovi ", L.phone],
          }),
        }),
      ],
    }),
  });
}
function M2() {
  return u.jsx("section", {
    className: "py-12 lg:py-20 px-5 lg:px-8",
    children: u.jsx("div", {
      className: "max-w-5xl mx-auto",
      children: u.jsxs(M.div, {
        variants: Uu,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0, amount: 0.3 },
        className: "relative rounded-3xl overflow-hidden",
        children: [
          u.jsx("div", { className: "absolute inset-0 gradient-pink" }),
          u.jsx("div", {
            className: "absolute inset-0 opacity-20",
            children: u.jsx("img", {
              src: "https://images.pexels.com/photos/30428755/pexels-photo-30428755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
              alt: "",
              className: "w-full h-full object-cover",
              loading: "lazy",
            }),
          }),
          u.jsx("div", {
            className:
              "absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-[80px]",
          }),
          u.jsx("div", {
            className:
              "absolute bottom-0 left-0 w-48 h-48 rounded-full bg-brand-gold/20 blur-[80px]",
          }),
          u.jsxs("div", {
            className: "relative z-10 px-6 py-12 lg:px-16 lg:py-20 text-center",
            children: [
              u.jsxs(M.div, {
                variants: ce,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                className: "flex items-center justify-center gap-2 mb-4",
                children: [
                  u.jsx(Os, { className: "w-5 h-5 text-white" }),
                  u.jsx("span", {
                    className:
                      "text-xs tracking-[0.3em] uppercase text-white/80 font-semibold",
                    children: "Aktuelno",
                  }),
                  u.jsx(Os, { className: "w-5 h-5 text-white" }),
                ],
              }),
              u.jsx("h2", {
                className:
                  "font-heading text-3xl lg:text-5xl font-bold text-white mb-4 text-balance",
                children: "Akcijske cene",
              }),
              u.jsx("p", {
                className:
                  "text-white/90 text-base lg:text-lg max-w-xl mx-auto mb-8 leading-relaxed",
                children:
                  "Iskoristite aktuelne akcijske cene i poklonite sebi trenutak potpunog relaksa.",
              }),
              u.jsxs("a", {
                href: L.phoneLink,
                className:
                  "inline-flex items-center gap-2 bg-white text-brand-pink px-10 py-4 rounded-full text-sm font-bold tracking-wide hover:shadow-premium hover:scale-105 transition-all duration-300",
                children: [
                  u.jsx(_e, { className: "w-5 h-5" }),
                  "Pozovite za cene",
                ],
              }),
              u.jsx("p", {
                className: "mt-5 text-white/70 text-sm",
                children: L.phone,
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function V2() {
  const [e, t] = C.useState("Sve"),
    [n, r] = C.useState(null),
    i = ["Sve", ...f2],
    s = e === "Sve" ? yf : yf.filter((d) => d.category === e),
    o = C.useCallback((d) => r(d), []),
    a = C.useCallback(() => r(null), []),
    l = C.useCallback(() => {
      r((d) => (d === null ? null : (d + 1) % s.length));
    }, [s.length]),
    c = C.useCallback(() => {
      r((d) => (d === null ? null : (d - 1 + s.length) % s.length));
    }, [s.length]);
  return u.jsxs("section", {
    id: "galerija",
    className: "py-20 lg:py-32 px-5 lg:px-8 bg-brand-bg",
    children: [
      u.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          u.jsxs(M.div, {
            variants: ce,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, amount: 0.3 },
            className: "text-center max-w-2xl mx-auto mb-10",
            children: [
              u.jsxs("div", {
                className: "flex items-center justify-center gap-3 mb-4",
                children: [
                  u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
                  u.jsx("span", {
                    className: "font-script italic text-brand-pink text-lg",
                    children: "Galerija",
                  }),
                  u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
                ],
              }),
              u.jsx("h2", {
                className:
                  "font-heading text-3xl lg:text-5xl font-bold text-brand-dark text-balance",
                children: "Ambijent stvoren za relaks.",
              }),
            ],
          }),
          u.jsx(M.div, {
            variants: ce,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0 },
            className: "flex flex-wrap justify-center gap-3 mb-10",
            children: i.map((d) =>
              u.jsx(
                "button",
                {
                  onClick: () => t(d),
                  className: `px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${e === d ? "gradient-pink text-white shadow-card" : "bg-white text-brand-dark-muted hover:text-brand-pink shadow-soft"}`,
                  children: d,
                },
                d,
              ),
            ),
          }),
          u.jsx(
            M.div,
            {
              variants: Qe,
              initial: "hidden",
              animate: "visible",
              className:
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4",
              children: s.map((d, f) =>
                u.jsxs(
                  M.button,
                  {
                    variants: Ae,
                    onClick: () => o(f),
                    className: `group relative overflow-hidden rounded-2xl ${f % 5 === 0 ? "md:row-span-2 md:col-span-2 aspect-square md:aspect-auto" : "aspect-square"}`,
                    children: [
                      u.jsx("img", {
                        src: d.src,
                        alt: d.alt,
                        className:
                          "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
                        loading: "lazy",
                      }),
                      u.jsx("div", {
                        className:
                          "absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-300",
                      }),
                      u.jsx("div", {
                        className:
                          "absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        children: u.jsx("span", {
                          className:
                            "text-xs text-white font-medium tracking-wide bg-brand-dark/50 backdrop-blur-sm px-3 py-1 rounded-full",
                          children: d.category,
                        }),
                      }),
                    ],
                  },
                  `${d.src}-${f}`,
                ),
              ),
            },
            e,
          ),
        ],
      }),
      u.jsx(oo, {
        children:
          n !== null &&
          u.jsxs(M.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              "fixed inset-0 z-[80] flex items-center justify-center bg-brand-dark/90 backdrop-blur-md",
            onClick: a,
            children: [
              u.jsx("button", {
                onClick: a,
                className:
                  "absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10",
                "aria-label": "Zatvori",
                children: u.jsx(kg, { className: "w-6 h-6" }),
              }),
              u.jsx("button", {
                onClick: (d) => {
                  (d.stopPropagation(), c());
                },
                className:
                  "absolute left-3 lg:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10",
                "aria-label": "Prethodna",
                children: u.jsx(e2, { className: "w-6 h-6" }),
              }),
              u.jsx("button", {
                onClick: (d) => {
                  (d.stopPropagation(), l());
                },
                className:
                  "absolute right-3 lg:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10",
                "aria-label": "Sledeća",
                children: u.jsx(t2, { className: "w-6 h-6" }),
              }),
              u.jsx(
                M.img,
                {
                  src: s[n].src.replace("w=800&h=800", "w=1200&h=1200"),
                  alt: s[n].alt,
                  className:
                    "max-w-[90vw] max-h-[85vh] object-contain rounded-2xl",
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.3 },
                  onClick: (d) => d.stopPropagation(),
                },
                n,
              ),
            ],
          }),
      }),
    ],
  });
}
const R2 = [
  "https://images.pexels.com/photos/6628649/pexels-photo-6628649.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/8852874/pexels-photo-8852874.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/6628691/pexels-photo-6628691.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/30428755/pexels-photo-30428755.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/6560308/pexels-photo-6560308.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
];
function D2() {
  return u.jsx("section", {
    className: "py-20 lg:py-32 px-5 lg:px-8",
    children: u.jsxs("div", {
      className: "max-w-5xl mx-auto",
      children: [
        u.jsxs(M.div, {
          variants: ce,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.3 },
          className: "text-center mb-12",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
                u.jsx("span", {
                  className: "font-script italic text-brand-pink text-lg",
                  children: "Instagram",
                }),
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
              ],
            }),
            u.jsx("h2", {
              className:
                "font-heading text-3xl lg:text-5xl font-bold text-brand-dark mb-4 text-balance",
              children: "Pratite nas na Instagramu",
            }),
            u.jsxs("a", {
              href: L.instagramUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-flex items-center gap-2 text-brand-pink font-semibold text-lg hover:text-brand-pink-deep transition-colors",
              children: [u.jsx(vn, { className: "w-5 h-5" }), L.instagram],
            }),
          ],
        }),
        u.jsx(M.div, {
          variants: Qe,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.1 },
          className: "grid grid-cols-3 gap-3 lg:gap-4 mb-10",
          children: R2.map((e, t) =>
            u.jsxs(
              M.a,
              {
                href: L.instagramUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                variants: Ae,
                className:
                  "group relative aspect-square rounded-2xl overflow-hidden",
                children: [
                  u.jsx("img", {
                    src: e,
                    alt: "Instagram objava Delea Studio",
                    className:
                      "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
                    loading: "lazy",
                  }),
                  u.jsx("div", {
                    className:
                      "absolute inset-0 bg-brand-pink/0 group-hover:bg-brand-pink/40 transition-colors duration-300 flex items-center justify-center",
                    children: u.jsx(vn, {
                      className:
                        "w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity",
                    }),
                  }),
                ],
              },
              t,
            ),
          ),
        }),
        u.jsx("div", {
          className: "text-center",
          children: u.jsxs("a", {
            href: L.instagramUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className:
              "inline-flex items-center gap-2 gradient-pink text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:shadow-premium hover:scale-105 transition-all duration-300",
            children: [
              u.jsx(vn, { className: "w-5 h-5" }),
              "Prati na Instagramu",
              u.jsx(qk, { className: "w-4 h-4" }),
            ],
          }),
        }),
      ],
    }),
  });
}
function L2() {
  const [e, t] = C.useState(0);
  return u.jsx("section", {
    id: "faq",
    className: "py-20 lg:py-32 px-5 lg:px-8 bg-brand-bg",
    children: u.jsxs("div", {
      className: "max-w-3xl mx-auto",
      children: [
        u.jsxs(M.div, {
          variants: ce,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.3 },
          className: "text-center mb-12",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
                u.jsx("span", {
                  className: "font-script italic text-brand-pink text-lg",
                  children: "Pitanja",
                }),
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
              ],
            }),
            u.jsx("h2", {
              className:
                "font-heading text-3xl lg:text-5xl font-bold text-brand-dark text-balance",
              children: "Često postavljana pitanja",
            }),
          ],
        }),
        u.jsx(M.div, {
          variants: Qe,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.1 },
          className: "space-y-3",
          children: h2.map((n, r) =>
            u.jsxs(
              M.div,
              {
                variants: Ae,
                className: "bg-white rounded-2xl shadow-soft overflow-hidden",
                children: [
                  u.jsxs("button", {
                    onClick: () => t(e === r ? null : r),
                    className:
                      "w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left",
                    children: [
                      u.jsx("span", {
                        className:
                          "font-heading text-base lg:text-lg font-semibold text-brand-dark pr-4",
                        children: n.question,
                      }),
                      u.jsx("div", {
                        className:
                          "w-8 h-8 rounded-full bg-brand-pink-soft flex items-center justify-center shrink-0",
                        children:
                          e === r
                            ? u.jsx(o2, {
                                className: "w-4 h-4 text-brand-pink",
                              })
                            : u.jsx(a2, {
                                className: "w-4 h-4 text-brand-pink",
                              }),
                      }),
                    ],
                  }),
                  u.jsx(oo, {
                    children:
                      e === r &&
                      u.jsx(M.div, {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: { duration: 0.3, ease: "easeOut" },
                        className: "overflow-hidden",
                        children: u.jsx("p", {
                          className:
                            "px-5 lg:px-6 pb-5 lg:pb-6 text-sm lg:text-base text-brand-dark-muted leading-relaxed",
                          children: n.answer,
                        }),
                      }),
                  }),
                ],
              },
              r,
            ),
          ),
        }),
      ],
    }),
  });
}
function I2() {
  return u.jsx("section", {
    id: "kontakt",
    className: "py-20 lg:py-32 px-5 lg:px-8",
    children: u.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        u.jsxs(M.div, {
          variants: ce,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.3 },
          className: "text-center mb-12",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
                u.jsx("span", {
                  className: "font-script italic text-brand-pink text-lg",
                  children: "Kontakt",
                }),
                u.jsx("span", { className: "h-px w-10 bg-brand-pink" }),
              ],
            }),
            u.jsx("h2", {
              className:
                "font-heading text-3xl lg:text-5xl font-bold text-brand-dark mb-4 text-balance",
              children: "Zakažite svoj trenutak za sebe.",
            }),
            u.jsx("p", {
              className: "text-brand-dark-muted text-lg max-w-xl mx-auto",
              children:
                "Pozovite nas i informišite se o slobodnim terminima i aktuelnim cenama.",
            }),
          ],
        }),
        u.jsxs(M.div, {
          variants: Qe,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.2 },
          className: "grid sm:grid-cols-2 gap-4 lg:gap-6 mb-10",
          children: [
            u.jsxs(M.a, {
              href: L.phoneLink,
              variants: Ae,
              className:
                "group flex items-center gap-4 p-6 rounded-2xl bg-white shadow-soft hover:shadow-card transition-all",
              children: [
                u.jsx("div", {
                  className:
                    "w-14 h-14 rounded-2xl gradient-pink flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform",
                  children: u.jsx(_e, { className: "w-7 h-7 text-white" }),
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("p", {
                      className:
                        "text-xs text-brand-dark-muted tracking-wide uppercase mb-1",
                      children: "Telefon",
                    }),
                    u.jsx("p", {
                      className:
                        "font-heading text-lg font-bold text-brand-dark",
                      children: L.phone,
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(M.a, {
              href: L.instagramUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              variants: Ae,
              className:
                "group flex items-center gap-4 p-6 rounded-2xl bg-white shadow-soft hover:shadow-card transition-all",
              children: [
                u.jsx("div", {
                  className:
                    "w-14 h-14 rounded-2xl gradient-pink flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform",
                  children: u.jsx(vn, { className: "w-7 h-7 text-white" }),
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("p", {
                      className:
                        "text-xs text-brand-dark-muted tracking-wide uppercase mb-1",
                      children: "Instagram",
                    }),
                    u.jsx("p", {
                      className:
                        "font-heading text-lg font-bold text-brand-dark",
                      children: L.instagram,
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(M.div, {
              variants: Ae,
              className:
                "flex items-center gap-4 p-6 rounded-2xl bg-white shadow-soft",
              children: [
                u.jsx("div", {
                  className:
                    "w-14 h-14 rounded-2xl bg-brand-pink-soft flex items-center justify-center shrink-0",
                  children: u.jsx(vg, { className: "w-7 h-7 text-brand-pink" }),
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("p", {
                      className:
                        "text-xs text-brand-dark-muted tracking-wide uppercase mb-1",
                      children: "Adresa",
                    }),
                    u.jsx("p", {
                      className:
                        "font-heading text-base font-semibold text-brand-dark",
                      children: L.address,
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(M.div, {
              variants: Ae,
              className:
                "flex items-center gap-4 p-6 rounded-2xl bg-white shadow-soft",
              children: [
                u.jsx("div", {
                  className:
                    "w-14 h-14 rounded-2xl bg-brand-pink-soft flex items-center justify-center shrink-0",
                  children: u.jsx(_u, { className: "w-7 h-7 text-brand-pink" }),
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("p", {
                      className:
                        "text-xs text-brand-dark-muted tracking-wide uppercase mb-1",
                      children: "Radno vreme",
                    }),
                    u.jsx("p", {
                      className:
                        "font-heading text-base font-semibold text-brand-dark",
                      children: L.workingHours,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        u.jsxs(M.div, {
          variants: ce,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0 },
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [
            u.jsxs("a", {
              href: L.phoneLink,
              className:
                "flex items-center justify-center gap-2 gradient-pink text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:shadow-premium hover:scale-105 transition-all duration-300",
              children: [u.jsx(_e, { className: "w-5 h-5" }), "Pozovi nas"],
            }),
            u.jsxs("a", {
              href: L.instagramUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "flex items-center justify-center gap-2 border-2 border-brand-pink text-brand-pink px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-brand-pink hover:text-white transition-all duration-300",
              children: [u.jsx(vn, { className: "w-5 h-5" }), "Instagram"],
            }),
          ],
        }),
      ],
    }),
  });
}
function z2() {
  return u.jsxs("section", {
    className: "relative py-24 lg:py-40 overflow-hidden",
    children: [
      u.jsxs("div", {
        className: "absolute inset-0",
        children: [
          u.jsx("img", {
            src: "https://images.pexels.com/photos/6628601/pexels-photo-6628601.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
            alt: "Opuštajuća masaža",
            className: "w-full h-full object-cover",
            loading: "lazy",
          }),
          u.jsx("div", { className: "absolute inset-0 bg-brand-dark/80" }),
          u.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/70",
          }),
        ],
      }),
      u.jsx("div", {
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-pink/10 blur-[150px] pointer-events-none",
      }),
      u.jsx("div", {
        className: "relative z-10 max-w-3xl mx-auto px-5 lg:px-8 text-center",
        children: u.jsxs(M.div, {
          variants: Uu,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.3 },
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-6",
              children: [
                u.jsx("span", { className: "h-px w-10 bg-brand-gold" }),
                u.jsx("span", {
                  className: "font-script italic text-brand-gold-light text-lg",
                  children: "Vaš trenutak",
                }),
                u.jsx("span", { className: "h-px w-10 bg-brand-gold" }),
              ],
            }),
            u.jsx("h2", {
              className:
                "font-heading text-3xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance",
              children: "Zaslužujete trenutke samo za sebe.",
            }),
            u.jsx("p", {
              className:
                "text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto",
              children:
                "Opustite telo, oslobodite um i poklonite sebi vreme koje zaslužujete.",
            }),
            u.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [
                u.jsxs("a", {
                  href: L.phoneLink,
                  className:
                    "gradient-pink text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wide hover:shadow-premium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2",
                  children: [
                    u.jsx(Xt, { className: "w-5 h-5" }),
                    "Zakaži termin",
                  ],
                }),
                u.jsxs("a", {
                  href: L.phoneLink,
                  className:
                    "border border-white/30 text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2",
                  children: [u.jsx(_e, { className: "w-5 h-5" }), L.phone],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function O2() {
  return u.jsx("footer", {
    className: "bg-brand-dark text-white",
    children: u.jsxs("div", {
      className: "max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20",
      children: [
        u.jsxs("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12",
          children: [
            u.jsxs("div", {
              className: "lg:col-span-1",
              children: [
                u.jsxs("h3", {
                  className: "font-heading text-2xl font-bold mb-2",
                  children: [
                    "Delea ",
                    u.jsx("span", {
                      className: "font-script italic text-brand-gold-light",
                      children: "Studio",
                    }),
                  ],
                }),
                u.jsx("p", {
                  className: "text-white/60 text-sm leading-relaxed max-w-xs",
                  children: L.slogan,
                }),
              ],
            }),
            u.jsxs("div", {
              children: [
                u.jsx("h4", {
                  className:
                    "font-heading text-sm font-semibold uppercase tracking-wider text-brand-gold-light mb-4",
                  children: "Navigacija",
                }),
                u.jsx("ul", {
                  className: "space-y-2",
                  children: ml.map((e) =>
                    u.jsx(
                      "li",
                      {
                        children: u.jsx("a", {
                          href: e.href,
                          className:
                            "text-white/60 text-sm hover:text-brand-pink transition-colors",
                          children: e.label,
                        }),
                      },
                      e.href,
                    ),
                  ),
                }),
              ],
            }),
            u.jsxs("div", {
              children: [
                u.jsx("h4", {
                  className:
                    "font-heading text-sm font-semibold uppercase tracking-wider text-brand-gold-light mb-4",
                  children: "Kontakt",
                }),
                u.jsxs("ul", {
                  className: "space-y-3",
                  children: [
                    u.jsx("li", {
                      children: u.jsxs("a", {
                        href: L.phoneLink,
                        className:
                          "flex items-center gap-2 text-white/60 text-sm hover:text-brand-pink transition-colors",
                        children: [
                          u.jsx(_e, { className: "w-4 h-4" }),
                          L.phone,
                        ],
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsxs("a", {
                        href: L.instagramUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-2 text-white/60 text-sm hover:text-brand-pink transition-colors",
                        children: [
                          u.jsx(vn, { className: "w-4 h-4" }),
                          L.instagram,
                        ],
                      }),
                    }),
                    u.jsxs("li", {
                      className:
                        "flex items-center gap-2 text-white/60 text-sm",
                      children: [
                        u.jsx(vg, { className: "w-4 h-4" }),
                        L.address,
                      ],
                    }),
                    u.jsxs("li", {
                      className:
                        "flex items-center gap-2 text-white/60 text-sm",
                      children: [
                        u.jsx(_u, { className: "w-4 h-4" }),
                        L.workingHours,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              children: [
                u.jsx("h4", {
                  className:
                    "font-heading text-sm font-semibold uppercase tracking-wider text-brand-gold-light mb-4",
                  children: "Pratite nas",
                }),
                u.jsx("p", {
                  className: "text-white/60 text-sm mb-4 leading-relaxed",
                  children: "Posetite naš Instagram profil za više sadržaja.",
                }),
                u.jsxs("a", {
                  href: L.instagramUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-flex items-center gap-2 gradient-pink text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-card transition-all",
                  children: [u.jsx(vn, { className: "w-4 h-4" }), L.instagram],
                }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className:
            "mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4",
          children: [
            u.jsxs("p", {
              className: "text-white/40 text-xs tracking-wide",
              children: ["© ", L.year, " Delea Studio. Sva prava zadržana."],
            }),
            u.jsx("p", {
              className: "text-white/40 text-xs font-script italic",
              children: "Vaše mesto potpunog relaksa",
            }),
          ],
        }),
      ],
    }),
  });
}
function _2() {
  const [e, t] = C.useState(!1);
  return (
    C.useEffect(() => {
      const n = () => t(window.scrollY > 400);
      return (
        window.addEventListener("scroll", n),
        () => window.removeEventListener("scroll", n)
      );
    }, []),
    u.jsx(oo, {
      children:
        e &&
        u.jsx(M.div, {
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: 100, opacity: 0 },
          transition: { type: "spring", stiffness: 300, damping: 30 },
          className: "fixed bottom-0 left-0 right-0 z-40 lg:hidden",
          children: u.jsx("div", {
            className:
              "glass border-t border-brand-pink-soft shadow-premium px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
            children: u.jsxs("div", {
              className: "flex gap-3",
              children: [
                u.jsxs("a", {
                  href: L.phoneLink,
                  className:
                    "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full border-2 border-brand-pink text-brand-pink font-semibold text-sm",
                  children: [u.jsx(_e, { className: "w-4 h-4" }), "Pozovi"],
                }),
                u.jsxs("a", {
                  href: L.phoneLink,
                  className:
                    "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full gradient-pink text-white font-semibold text-sm shadow-card",
                  children: [
                    u.jsx(Xt, { className: "w-4 h-4" }),
                    "Zakaži termin",
                  ],
                }),
              ],
            }),
          }),
        }),
    })
  );
}
function F2() {
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            name: "Delea Studio",
            telephone: "063 741 6130",
            url: "https://www.instagram.com/delea__studio/",
            sameAs: ["https://www.instagram.com/delea__studio/"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Vojvode Mišića 85",
              addressLocality: "Vojka",
              postalCode: "22313",
            },
            openingHours: "Mo-Fr 17:00-22:00, Sa-Su 09:00-22:00",
          }),
        },
      }),
      u.jsx(p2, {}),
      u.jsxs("main", {
        children: [
          u.jsx(g2, {}),
          u.jsx(v2, {}),
          u.jsx(w2, {}),
          u.jsx(S2, {}),
          u.jsx(j2, {}),
          u.jsx(N2, {}),
          u.jsx(C2, {}),
          u.jsx(P2, {}),
          u.jsx(b2, {}),
          u.jsx(A2, {}),
          u.jsx(M2, {}),
          u.jsx(V2, {}),
          u.jsx(D2, {}),
          u.jsx(L2, {}),
          u.jsx(I2, {}),
          u.jsx(z2, {}),
        ],
      }),
      u.jsx(O2, {}),
      u.jsx(_2, {}),
    ],
  });
}
Ap(document.getElementById("root")).render(
  u.jsx(C.StrictMode, { children: u.jsx(F2, {}) }),
);
