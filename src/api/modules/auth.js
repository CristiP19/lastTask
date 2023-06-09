import ApiModel from "api/core/ApiModel";

export default class Auth extends ApiModel {
  constructor() {
    super();
    this.resourceUrl = "auth";
  }

  async login(payload) {
    return await this.http.post(`${this.resourceUrl}/login`, payload);
  }

  async register(payload) {
    return await this.http.post(`${this.resourceUrl}/register`, payload);
  }

  async resetPassword(payload) {
    return await this.http.post(`${this.resourceUrl}/reset-password`, payload);
  }

  async logout() {
    return await this.http.post(`${this.resourceUrl}/logout`);
  }
}
