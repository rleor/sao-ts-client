function _assertThisInitialized(self) {
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
import { Registry } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { EventEmitter } from "events";
var defaultFee = {
    amount: [],
    gas: "200000"
};
export var IgniteClient = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(IgniteClient, EventEmitter);
    var _super = _createSuper(IgniteClient);
    function IgniteClient(env, signer) {
        _classCallCheck(this, IgniteClient);
        var _this;
        _this = _super.call(this);
        _this.registry = [];
        _this.env = env;
        _this.setMaxListeners(0);
        _this.signer = signer;
        var classConstructor = _this.constructor;
        classConstructor.plugins.forEach(function(plugin) {
            var pluginInstance = plugin(_assertThisInitialized(_this));
            Object.assign(_assertThisInitialized(_this), pluginInstance.module);
            if (_this.registry) {
                _this.registry = _this.registry.concat(pluginInstance.registry);
            }
        });
        return _this;
    }
    var _proto = IgniteClient.prototype;
    _proto.signAndBroadcast = function signAndBroadcast(msgs, fee, memo) {
        var _this = this;
        return _asyncToGenerator(function() {
            var address, signingClient;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!_this.signer) return [
                            3,
                            4
                        ];
                        return [
                            4,
                            _this.signer.getAccounts()
                        ];
                    case 1:
                        address = _state.sent()[0].address;
                        return [
                            4,
                            SigningStargateClient.connectWithSigner(_this.env.rpcURL, _this.signer, {
                                registry: new Registry(_this.registry),
                                prefix: _this.env.prefix
                            })
                        ];
                    case 2:
                        signingClient = _state.sent();
                        return [
                            4,
                            signingClient.signAndBroadcast(address, msgs, fee ? fee : defaultFee, memo)
                        ];
                    case 3:
                        return [
                            2,
                            _state.sent()
                        ];
                    case 4:
                        throw new Error(" Signer is not present.");
                    case 5:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    _proto.useSigner = function useSigner(signer) {
        var _this = this;
        return _asyncToGenerator(function() {
            return __generator(this, function(_state) {
                _this.signer = signer;
                _this.emit("signer-changed", _this.signer);
                return [
                    2
                ];
            });
        })();
    };
    _proto.useKeplr = function useKeplr() {
        var keplrChainInfo = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _this = this;
        return _asyncToGenerator(function() {
            var _node_info_default_node_info, _staking_params, _staking_params_bond_denom, _staking_params1, _tokens_supply, _tokens_supply1, queryClient, stakingQueryClient, bankQueryClient, stakingqc, qc, node_info, _node_info_default_node_info_network, chainId, chainName, staking, bankqc, tokens, _this_env_prefix, addrPrefix, rpc, rest, _staking_params_bond_denom_toUpperCase, _staking_params_bond_denom1, stakeCurrency, bip44, bech32Config, _tokens_supply_map, currencies, _tokens_supply_map1, feeCurrencies, coinType, suggestOptions, e;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            13,
                            ,
                            14
                        ]);
                        return [
                            4,
                            import("./cosmos.base.tendermint.v1beta1/module")
                        ];
                    case 1:
                        queryClient = _state.sent().queryClient;
                        return [
                            4,
                            import("./cosmos.staking.v1beta1/module")
                        ];
                    case 2:
                        stakingQueryClient = _state.sent().queryClient;
                        return [
                            4,
                            import("./cosmos.bank.v1beta1/module")
                        ];
                    case 3:
                        bankQueryClient = _state.sent().queryClient;
                        stakingqc = stakingQueryClient({
                            addr: _this.env.apiURL
                        });
                        qc = queryClient({
                            addr: _this.env.apiURL
                        });
                        return [
                            4,
                            qc.serviceGetNodeInfo()
                        ];
                    case 4:
                        return [
                            4,
                            _state.sent().data
                        ];
                    case 5:
                        node_info = _state.sent();
                        chainId = (_node_info_default_node_info_network = (_node_info_default_node_info = node_info.default_node_info) === null || _node_info_default_node_info === void 0 ? void 0 : _node_info_default_node_info.network) !== null && _node_info_default_node_info_network !== void 0 ? _node_info_default_node_info_network : "";
                        chainName = (chainId === null || chainId === void 0 ? void 0 : chainId.toUpperCase()) + " Network";
                        return [
                            4,
                            stakingqc.queryParams()
                        ];
                    case 6:
                        return [
                            4,
                            _state.sent().data
                        ];
                    case 7:
                        staking = _state.sent();
                        bankqc = bankQueryClient({
                            addr: _this.env.apiURL
                        });
                        return [
                            4,
                            bankqc.queryTotalSupply()
                        ];
                    case 8:
                        return [
                            4,
                            _state.sent().data
                        ];
                    case 9:
                        tokens = _state.sent();
                        addrPrefix = (_this_env_prefix = _this.env.prefix) !== null && _this_env_prefix !== void 0 ? _this_env_prefix : "cosmos";
                        rpc = _this.env.rpcURL;
                        rest = _this.env.apiURL;
                        stakeCurrency = {
                            coinDenom: (_staking_params_bond_denom_toUpperCase = (_staking_params = staking.params) === null || _staking_params === void 0 ? void 0 : (_staking_params_bond_denom = _staking_params.bond_denom) === null || _staking_params_bond_denom === void 0 ? void 0 : _staking_params_bond_denom.toUpperCase()) !== null && _staking_params_bond_denom_toUpperCase !== void 0 ? _staking_params_bond_denom_toUpperCase : "",
                            coinMinimalDenom: (_staking_params_bond_denom1 = (_staking_params1 = staking.params) === null || _staking_params1 === void 0 ? void 0 : _staking_params1.bond_denom) !== null && _staking_params_bond_denom1 !== void 0 ? _staking_params_bond_denom1 : "",
                            coinDecimals: 0
                        };
                        bip44 = {
                            coinType: 118
                        };
                        bech32Config = {
                            bech32PrefixAccAddr: addrPrefix,
                            bech32PrefixAccPub: addrPrefix + "pub",
                            bech32PrefixValAddr: addrPrefix + "valoper",
                            bech32PrefixValPub: addrPrefix + "valoperpub",
                            bech32PrefixConsAddr: addrPrefix + "valcons",
                            bech32PrefixConsPub: addrPrefix + "valconspub"
                        };
                        currencies = (_tokens_supply_map = (_tokens_supply = tokens.supply) === null || _tokens_supply === void 0 ? void 0 : _tokens_supply.map(function(x) {
                            var _x_denom;
                            var _x_denom_toUpperCase, _x_denom1;
                            var y = {
                                coinDenom: (_x_denom_toUpperCase = (_x_denom = x.denom) === null || _x_denom === void 0 ? void 0 : _x_denom.toUpperCase()) !== null && _x_denom_toUpperCase !== void 0 ? _x_denom_toUpperCase : "",
                                coinMinimalDenom: (_x_denom1 = x.denom) !== null && _x_denom1 !== void 0 ? _x_denom1 : "",
                                coinDecimals: 0
                            };
                            return y;
                        })) !== null && _tokens_supply_map !== void 0 ? _tokens_supply_map : [];
                        feeCurrencies = (_tokens_supply_map1 = (_tokens_supply1 = tokens.supply) === null || _tokens_supply1 === void 0 ? void 0 : _tokens_supply1.map(function(x) {
                            var _x_denom;
                            var _x_denom_toUpperCase, _x_denom1;
                            var y = {
                                coinDenom: (_x_denom_toUpperCase = (_x_denom = x.denom) === null || _x_denom === void 0 ? void 0 : _x_denom.toUpperCase()) !== null && _x_denom_toUpperCase !== void 0 ? _x_denom_toUpperCase : "",
                                coinMinimalDenom: (_x_denom1 = x.denom) !== null && _x_denom1 !== void 0 ? _x_denom1 : "",
                                coinDecimals: 0
                            };
                            return y;
                        })) !== null && _tokens_supply_map1 !== void 0 ? _tokens_supply_map1 : [];
                        coinType = 118;
                        if (!chainId) return [
                            3,
                            11
                        ];
                        suggestOptions = _objectSpread({
                            chainId: chainId,
                            chainName: chainName,
                            rpc: rpc,
                            rest: rest,
                            stakeCurrency: stakeCurrency,
                            bip44: bip44,
                            bech32Config: bech32Config,
                            currencies: currencies,
                            feeCurrencies: feeCurrencies,
                            coinType: coinType
                        }, keplrChainInfo);
                        return [
                            4,
                            window.keplr.experimentalSuggestChain(suggestOptions)
                        ];
                    case 10:
                        _state.sent();
                        window.keplr.defaultOptions = {
                            sign: {
                                preferNoSetFee: true,
                                preferNoSetMemo: true
                            }
                        };
                        _state.label = 11;
                    case 11:
                        return [
                            4,
                            window.keplr.enable(chainId)
                        ];
                    case 12:
                        _state.sent();
                        _this.signer = window.keplr.getOfflineSigner(chainId);
                        _this.emit("signer-changed", _this.signer);
                        return [
                            3,
                            14
                        ];
                    case 13:
                        e = _state.sent();
                        throw new Error("Could not load tendermint, staking and bank modules. Please ensure your client loads them to use useKeplr()");
                    case 14:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    IgniteClient.plugin = function plugin(plugin) {
        var currentPlugins = this.plugins;
        var _this;
        var AugmentedClient = /*#__PURE__*/ function(_superClass) {
            _inherits(AugmentedClient, _superClass);
            var _super = _createSuper(AugmentedClient);
            function AugmentedClient() {
                _classCallCheck(this, AugmentedClient);
                return _super.apply(this, arguments);
            }
            return AugmentedClient;
        }(_this = this);
        AugmentedClient.plugins = currentPlugins.concat(plugin);
        if (Array.isArray(plugin)) {
            return AugmentedClient;
        }
        return AugmentedClient;
    };
    return IgniteClient;
}(EventEmitter);
IgniteClient.plugins = [];
