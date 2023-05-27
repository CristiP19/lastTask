import Http from "services/http";

export default class ApiModel {
  constructor() {
    this.resourceUrl = null;
    this.http = new Http();
    this.token = localStorage.getItem("user")
  }
  async get() {
    return await this.http.get(this.resourceUrl) ;
  }
  async getList() {
    return await this.http.get(`${this.resourceUrl}/list`);
  }
  async getById(id) {
    return await this.http.get(`${this.resourceUrl}/${id}`);
  }
  async create(payload) {
    return await this.http.post(this.resourceUrl, payload);
  }
  async update(id, payload) {
    return await this.http.patch(`${this.resourceUrl}/${id}`, payload);
  }
  async delete(id) {
    return await this.http.delete(`${this.resourceUrl}/${id}`);
  }
}
