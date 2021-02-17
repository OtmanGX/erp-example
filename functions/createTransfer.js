"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.handler = void 0;
var stringifyObject = require("stringify-object");
var axios = require('axios');
var HASURA_OPERATION = "\n\nmutation InsertItemTranfser($date: date, $order_itemid: uuid, $quantity: Float, $status: String, $substanceid: uuid!,$warehouseid: uuid!, $newstock: Float) {\n    insert_stock_item_tranfer_one(object: {date: $date, order_itemid: $order_itemid, quantity: $quantity, status: $status}) {\n      id\n      date\n      quantity\n      status\n    }\n    warehouse_status_update:update_stock_warehouse_substance_by_pk(pk_columns: {substanceid: $substanceid, warehouseid: $warehouseid}, _set: {quantity: $newstock}) {\n      quantity\n    }\n  }\n  \n  \n";
var STOCK_QUERY = "\nquery ($substanceid: uuid!, $warehouseid: uuid!) {\n    stock_warehouse_substance_by_pk(substanceid: $substanceid, warehouseid: $warehouseid) {\n      quantity\n    }\n  }\n  \n";
// execute the  operation in Hasura
var execute = function (variables, operation) { return __awaiter(void 0, void 0, void 0, function () {
    var fetchResponse, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios.post("https://tanglass.hasura.app/v1/graphql", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: {
                        query: operation,
                        variables: variables
                    }
                })];
            case 1:
                fetchResponse = _a.sent();
                return [4 /*yield*/, fetchResponse.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
//  Handler
var handler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, _a, date, order_itemid, quantity, status, substanceid, warehouseid, _b, stock_response, stock_errors, stock_warehouse_substance_by_pk, quantity_inStock, newstock, _c, data, errors;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                body = JSON.parse(req.body);
                _a = body.input, date = _a.date, order_itemid = _a.order_itemid, quantity = _a.quantity, status = _a.status, substanceid = _a.substanceid, warehouseid = _a.warehouseid;
                return [4 /*yield*/, execute({ substanceid: substanceid, warehouseid: warehouseid }, STOCK_QUERY)];
            case 1:
                _b = _d.sent(), stock_response = _b.data, stock_errors = _b.errors;
                stock_warehouse_substance_by_pk = stock_response.stock_warehouse_substance_by_pk;
                if (!stock_warehouse_substance_by_pk) {
                    return [2 /*return*/, {
                            statusCode: 400,
                            body: JSON.stringify({ message: "error 400 " })
                        }];
                }
                quantity_inStock = stock_warehouse_substance_by_pk ? stock_warehouse_substance_by_pk.quantity : 0;
                newstock = quantity_inStock - quantity;
                if (quantity_inStock <= 0) {
                    return [2 /*return*/, {
                            statusCode: 400,
                            body: JSON.stringify({ message: "Stock Epuisé" })
                        }];
                }
                return [4 /*yield*/, execute({ date: date, order_itemid: order_itemid, quantity: quantity, status: status, substanceid: substanceid, warehouseid: warehouseid, newstock: newstock }, HASURA_OPERATION)];
            case 2:
                _c = _d.sent(), data = _c.data, errors = _c.errors;
                // if Hasura operation errors, then throw error
                if (errors) {
                    return [2 /*return*/, {
                            statusCode: 400,
                            body: stringifyObject({ message: errors[0] })
                        }];
                }
                // success  
                return [2 /*return*/, {
                        statusCode: 200,
                        body: stringifyObject(__assign({}, data.insert_stock_item_tranfer_one))
                    }];
        }
    });
}); };
exports.handler = handler;
