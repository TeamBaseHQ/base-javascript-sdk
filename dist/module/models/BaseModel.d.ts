export default class BaseModel {
    /**
     * Model id
     */
    id: number;
    /**
     * Model created_at
     */
    created_at: string;
    /**
     * Model updated_at
     */
    updated_at: string;
    constructor();
    getId(): number;
    setId(id: number): BaseModel;
    getCreated_at(): string;
    setCreated_at(created_at: string): BaseModel;
    getUpdated_at(): string;
    setUpdated_at(updated_at: string): BaseModel;
}
