"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BindResponse = void 0;
const ProtocolOperation_1 = require("../ProtocolOperation");
const MessageResponse_1 = require("./MessageResponse");
class BindResponse extends MessageResponse_1.MessageResponse {
    constructor(options) {
        super(options);
        this.protocolOperation = ProtocolOperation_1.ProtocolOperation.LDAP_RES_BIND;
    }
}
exports.BindResponse = BindResponse;
//# sourceMappingURL=BindResponse.js.map