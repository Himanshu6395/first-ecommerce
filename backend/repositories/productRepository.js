// import subCategories from "../model/subCategories";

class ProductRepository {
  constructor({ Product,categories,subCategories }) {
    this.Product = Product;
    this.categories=categories;
    this.SubCategory=subCategories;
  }

 async getFilterCategories() {
    return this.categories.find({}, { _id: 1, name: 1 });
  }

  async getFilterSubCategories() {
    return this.SubCategory.find({}, { _id: 1, name: 1, category: 1 });
  }


  async getProducts(query) {
    return this.Product
      .find(query)
      .populate("category", "name")
      .populate("subCategory", "name"); 
  }
}

export default ProductRepository;
