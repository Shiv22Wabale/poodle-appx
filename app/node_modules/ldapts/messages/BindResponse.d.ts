import { ProtocolOperation } from '../ProtocolOperation';
import type { MessageResponseOptions } from './MessageResponse';
import { MessageResponse } from './MessageResponse';
export declare class BindResponse extends MessageResponse {
    protocolOperation: ProtocolOperation;
    constructor(options: MessageResponseOptions);
}
