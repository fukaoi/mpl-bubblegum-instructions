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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArgsBeet = void 0;
const beet = __importStar(require("@metaplex-foundation/beet"));
const Creator_1 = require("./Creator");
exports.updateArgsBeet = new beet.FixableBeetArgsStruct([
    ['name', beet.coption(beet.utf8String)],
    ['symbol', beet.coption(beet.utf8String)],
    ['uri', beet.coption(beet.utf8String)],
    ['creators', beet.coption(beet.array(Creator_1.creatorBeet))],
    ['sellerFeeBasisPoints', beet.coption(beet.u16)],
    ['primarySaleHappened', beet.coption(beet.bool)],
    ['isMutable', beet.coption(beet.bool)],
], 'UpdateArgs');
//# sourceMappingURL=UpdateArgs.js.map