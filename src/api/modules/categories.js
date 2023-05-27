import ApiModel from "api/core/ApiModel";

export default class Categories extends ApiModel {
  constructor() {
    super();
    this.resourceUrl = "categories";
  }
}
