import type { ResultCodeError } from './errors/resultCodeErrors';
export declare class StatusCodeParser {
    static parse(code: number, message?: string): ResultCodeError;
}
