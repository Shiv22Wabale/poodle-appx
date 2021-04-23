"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCodeParser = void 0;
const resultCodeErrors_1 = require("./errors/resultCodeErrors");
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class StatusCodeParser {
    static parse(code, message) {
        switch (code) {
            case 1:
                return new resultCodeErrors_1.OperationsError(message);
            case 2:
                return new resultCodeErrors_1.ProtocolError(message);
            case 3:
                return new resultCodeErrors_1.TimeLimitExceededError(message);
            case 4:
                return new resultCodeErrors_1.SizeLimitExceededError(message);
            case 7:
                return new resultCodeErrors_1.AuthMethodNotSupportedError(message);
            case 8:
                return new resultCodeErrors_1.StrongAuthRequiredError(message);
            case 11:
                return new resultCodeErrors_1.AdminLimitExceededError(message);
            case 12:
                return new resultCodeErrors_1.UnavailableCriticalExtensionError(message);
            case 13:
                return new resultCodeErrors_1.ConfidentialityRequiredError(message);
            case 14:
                return new resultCodeErrors_1.SaslBindInProgressError(message);
            case 16:
                return new resultCodeErrors_1.NoSuchAttributeError(message);
            case 17:
                return new resultCodeErrors_1.UndefinedTypeError(message);
            case 18:
                return new resultCodeErrors_1.InappropriateMatchingError(message);
            case 19:
                return new resultCodeErrors_1.ConstraintViolationError(message);
            case 20:
                return new resultCodeErrors_1.TypeOrValueExistsError(message);
            case 21:
                return new resultCodeErrors_1.InvalidSyntaxError(message);
            case 32:
                return new resultCodeErrors_1.NoSuchObjectError(message);
            case 33:
                return new resultCodeErrors_1.AliasProblemError(message);
            case 34:
                return new resultCodeErrors_1.InvalidDNSyntaxError(message);
            case 35:
                return new resultCodeErrors_1.IsLeafError(message);
            case 36:
                return new resultCodeErrors_1.AliasDerefProblemError(message);
            case 48:
                return new resultCodeErrors_1.InappropriateAuthError(message);
            case 49:
                return new resultCodeErrors_1.InvalidCredentialsError(message);
            case 50:
                return new resultCodeErrors_1.InsufficientAccessError(message);
            case 51:
                return new resultCodeErrors_1.BusyError(message);
            case 52:
                return new resultCodeErrors_1.UnavailableError(message);
            case 53:
                return new resultCodeErrors_1.UnwillingToPerformError(message);
            case 54:
                return new resultCodeErrors_1.LoopDetectError(message);
            case 64:
                return new resultCodeErrors_1.NamingViolationError(message);
            case 65:
                return new resultCodeErrors_1.ObjectClassViolationError(message);
            case 66:
                return new resultCodeErrors_1.NotAllowedOnNonLeafError(message);
            case 67:
                return new resultCodeErrors_1.NotAllowedOnRDNError(message);
            case 68:
                return new resultCodeErrors_1.AlreadyExistsError(message);
            case 69:
                return new resultCodeErrors_1.NoObjectClassModsError(message);
            case 70:
                return new resultCodeErrors_1.ResultsTooLargeError(message);
            case 71:
                return new resultCodeErrors_1.AffectsMultipleDSAsError(message);
            case 112:
                return new resultCodeErrors_1.TLSNotSupportedError(message);
            default:
                return new resultCodeErrors_1.UnknownStatusCodeError(code, message);
        }
    }
}
exports.StatusCodeParser = StatusCodeParser;
//# sourceMappingURL=StatusCodeParser.js.map