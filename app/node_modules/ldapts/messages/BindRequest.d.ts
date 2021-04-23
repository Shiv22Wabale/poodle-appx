import type { BerReader, BerWriter } from 'asn1';
import { ProtocolOperation } from '../ProtocolOperation';
import type { MessageOptions } from './Message';
import { Message } from './Message';
export declare type SaslMechanism = 'EXTERNAL' | 'PLAIN';
export interface BindRequestMessageOptions extends MessageOptions {
    dn?: string;
    password?: string;
    mechanism?: SaslMechanism;
}
export declare class BindRequest extends Message {
    protocolOperation: ProtocolOperation;
    dn: string;
    password: string;
    mechanism: SaslMechanism | undefined;
    constructor(options: BindRequestMessageOptions);
    writeMessage(writer: BerWriter): void;
    parseMessage(reader: BerReader): void;
}
