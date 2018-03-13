"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var keybase_login_1 = require("keybase-login");
var util_1 = require("util");
var Keybase = (function () {
    function Keybase() {
    }
    Keybase.login = function (email_or_username, passphrase) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Keybase._login({ username: email_or_username, passphrase: passphrase })];
            });
        });
    };
    Keybase._login = util_1.promisify(keybase_login_1.login);
    return Keybase;
}());
exports.default = Keybase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5YmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtleWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFxQztBQUNyQyw2QkFBZ0M7QUFFaEM7SUFBQTtJQU1BLENBQUM7SUFIYyxhQUFLLEdBQWxCLFVBQW1CLGlCQUFpQixFQUFFLFVBQVU7OztnQkFDOUMsc0JBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLEVBQUE7OztLQUNuRTtJQUpNLGNBQU0sR0FBRyxnQkFBUyxDQUFDLHFCQUFLLENBQUMsQ0FBQTtJQUtsQyxjQUFDO0NBQUEsQUFORCxJQU1DO2tCQU5vQixPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9naW4gfSBmcm9tICdrZXliYXNlLWxvZ2luJ1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSAndXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5YmFzZSB7XG4gIHN0YXRpYyBfbG9naW4gPSBwcm9taXNpZnkobG9naW4pXG5cbiAgc3RhdGljIGFzeW5jIGxvZ2luKGVtYWlsX29yX3VzZXJuYW1lLCBwYXNzcGhyYXNlKSB7XG4gICAgcmV0dXJuIEtleWJhc2UuX2xvZ2luKHsgdXNlcm5hbWU6IGVtYWlsX29yX3VzZXJuYW1lLCBwYXNzcGhyYXNlIH0pXG4gIH1cbn0iXX0=