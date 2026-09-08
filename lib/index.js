"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = exports.Loader = exports.Fetcher = exports.App = exports.Manager = exports.Utils = exports.Create = exports.Mapping = void 0;
const mapping_1 = __importDefault(require("./Utils/mapping"));
exports.Mapping = mapping_1.default;
const create_1 = __importDefault(require("./Build/create"));
exports.Create = create_1.default;
const Functions = __importStar(require("./Utils/functions"));
const manager_1 = __importDefault(require("./Utils/manager"));
exports.Manager = manager_1.default;
const app_1 = __importDefault(require("./Build/app"));
exports.App = app_1.default;
const fetcher_1 = __importDefault(require("./Utils/fetcher"));
exports.Fetcher = fetcher_1.default;
const loader_1 = __importDefault(require("./Build/loader"));
exports.Loader = loader_1.default;
const Utils = { ...Functions };
exports.Utils = Utils;
const fs_1 = __importDefault(require("fs"));
const Version = (fs_1.default.existsSync('./package.json') ? JSON.parse(fs_1.default.readFileSync('./package.json', 'utf8')) : {})?.dependencies?.['@itsjaviertech/webly'] || '-';
exports.Version = Version;
//# sourceMappingURL=index.js.map