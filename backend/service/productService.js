class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

 async getFilters() {
  const categories = await this.productRepository.getFilterCategories();
  const subCategories = await this.productRepository.getFilterSubCategories();

  return {
    categories,
    subCategories,         
    price: { min: 0, max: 100000 },
  };
}


  async filterProducts(params) {
    const { search, category, price } = params;
    let query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    if (category) {
      query.category = category;
    }
    if (price) {
      query.price = { $lte: Number(price) };
    }

    return this.productRepository.getProducts(query);
  }
}

export default ProductService;
