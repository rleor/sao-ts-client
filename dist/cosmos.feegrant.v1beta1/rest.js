/* eslint-disable */ /* tslint:disable */ /*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */ /**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/ function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
import axios from "axios";
export var ContentType;
(function(ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export var HttpClient = /*#__PURE__*/ function() {
    "use strict";
    function HttpClient() {
        var _param = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _this = this;
        _classCallCheck(this, HttpClient);
        var securityWorker = _param.securityWorker, secure = _param.secure, format = _param.format, axiosConfig = _objectWithoutProperties(_param, [
            "securityWorker",
            "secure",
            "format"
        ]);
        this.securityData = null;
        this.setSecurityData = function(data) {
            _this.securityData = data;
        };
        var _this1 = this;
        this.request = function() {
            var _ref = _asyncToGenerator(function(_param) {
                var secure, path, type, query, format, body, params, secureParams, _tmp, requestParams, responseFormat;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            secure = _param.secure, path = _param.path, type = _param.type, query = _param.query, format = _param.format, body = _param.body, params = _objectWithoutProperties(_param, [
                                "secure",
                                "path",
                                "type",
                                "query",
                                "format",
                                "body"
                            ]);
                            _tmp = (typeof secure === "boolean" ? secure : _this1.secure) && _this1.securityWorker;
                            if (!_tmp) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                _this1.securityWorker(_this1.securityData)
                            ];
                        case 1:
                            _tmp = _state.sent();
                            _state.label = 2;
                        case 2:
                            secureParams = _tmp || {};
                            requestParams = _this1.mergeRequestParams(params, secureParams);
                            responseFormat = format && _this1.format || void 0;
                            if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                                requestParams.headers.common = {
                                    Accept: "*/*"
                                };
                                requestParams.headers.post = {};
                                requestParams.headers.put = {};
                                body = _this1.createFormData(body);
                            }
                            return [
                                2,
                                _this1.instance.request(_objectSpreadProps(_objectSpread({}, requestParams), {
                                    headers: _objectSpread({}, type && type !== ContentType.FormData ? {
                                        "Content-Type": type
                                    } : {}, requestParams.headers || {}),
                                    params: query,
                                    responseType: responseFormat,
                                    data: body,
                                    url: path
                                }))
                            ];
                    }
                });
            });
            return function(_param) {
                return _ref.apply(this, arguments);
            };
        }();
        this.instance = axios.create(_objectSpreadProps(_objectSpread({}, axiosConfig), {
            baseURL: axiosConfig.baseURL || ""
        }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    var _proto = HttpClient.prototype;
    _proto.mergeRequestParams = function mergeRequestParams(params1, params2) {
        return _objectSpreadProps(_objectSpread({}, this.instance.defaults, params1, params2 || {}), {
            headers: _objectSpread({}, this.instance.defaults.headers || {}, params1.headers || {}, params2 && params2.headers || {})
        });
    };
    _proto.createFormData = function createFormData(input) {
        return Object.keys(input || {}).reduce(function(formData, key) {
            var property = input[key];
            formData.append(key, _instanceof(property, Blob) ? property : typeof property === "object" && property !== null ? JSON.stringify(property) : "".concat(property));
            return formData;
        }, new FormData());
    };
    return HttpClient;
}();
/**
 * @title cosmos/feegrant/v1beta1/feegrant.proto
 * @version version not set
 */ export var Api = /*#__PURE__*/ function(HttpClient) {
    "use strict";
    _inherits(Api, HttpClient);
    var _super = _createSuper(Api);
    function Api() {
        _classCallCheck(this, Api);
        var _this;
        _this = _super.apply(this, arguments);
        /**
   * No description
   *
   * @tags Query
   * @name QueryAllowance
   * @summary Allowance returns fee granted to the grantee by the granter.
   * @request GET:/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}
   */ _this.queryAllowance = function(granter, grantee) {
            var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return _this.request(_objectSpread({
                path: "/cosmos/feegrant/v1beta1/allowance/".concat(granter, "/").concat(grantee),
                method: "GET",
                format: "json"
            }, params));
        };
        /**
   * No description
   *
   * @tags Query
   * @name QueryAllowances
   * @summary Allowances returns all the grants for address.
   * @request GET:/cosmos/feegrant/v1beta1/allowances/{grantee}
   */ _this.queryAllowances = function(grantee, query) {
            var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return _this.request(_objectSpread({
                path: "/cosmos/feegrant/v1beta1/allowances/".concat(grantee),
                method: "GET",
                query: query,
                format: "json"
            }, params));
        };
        /**
   * @description Since: cosmos-sdk 0.46
   *
   * @tags Query
   * @name QueryAllowancesByGranter
   * @summary AllowancesByGranter returns all the grants given by an address
   * @request GET:/cosmos/feegrant/v1beta1/issued/{granter}
   */ _this.queryAllowancesByGranter = function(granter, query) {
            var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return _this.request(_objectSpread({
                path: "/cosmos/feegrant/v1beta1/issued/".concat(granter),
                method: "GET",
                query: query,
                format: "json"
            }, params));
        };
        return _this;
    }
    return Api;
}(HttpClient);
