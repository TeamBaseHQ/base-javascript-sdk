import BaseModel from './BaseModel';
export default class Media extends BaseModel {
    collection_name: string;
    name: string;
    file_name: string;
    mime_type: string;
    size: number;
    manipulations: any;
    custom_properties: any;
    url: object;
    getCollection_name(): string;
    setCollection_name(value: string): void;
    getName(): string;
    setName(value: string): void;
    getFile_name(): string;
    setFile_name(value: string): void;
    getMime_type(): string;
    setMime_type(value: string): void;
    getSize(): number;
    setSize(value: number): void;
    getManipulations(): any;
    setManipulations(value: any): void;
    getCustom_properties(): any;
    setCustom_properties(value: any): void;
    getUrl(size?: string): Object;
    setUrl(value: Object): void;
    constructor(data: any);
}
