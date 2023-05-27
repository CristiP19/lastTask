import ApiModel from "api/core/ApiModel";

export default class Products extends ApiModel {
  constructor() {
    super();
    this.resourceUrl = "products";
  }
}
