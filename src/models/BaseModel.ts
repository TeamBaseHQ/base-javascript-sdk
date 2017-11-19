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

  constructor(data: any) {
    this.id = data.id;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): BaseModel {
    this.id = id;
    return this;
  }

  public getCreated_at(): string {
    return this.created_at;
  }

  public setCreated_at(created_at: string): BaseModel {
    this.created_at = created_at;
    return this;
  }

  public getUpdated_at(): string {
    return this.updated_at;
  }

  public setUpdated_at(updated_at: string): BaseModel {
    this.updated_at = updated_at;
    return this;
  }
}
