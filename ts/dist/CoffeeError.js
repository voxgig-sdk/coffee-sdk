"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeError = void 0;
class CoffeeError extends Error {
    isCoffeeError = true;
    sdk = 'Coffee';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CoffeeError = CoffeeError;
//# sourceMappingURL=CoffeeError.js.map