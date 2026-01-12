class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async getFilters(req, res) {
    try {
        console.log("cont=roler")
      const data = await this.productService.getFilters();
      return res.status(200).json(data);
    } catch (error) {
      console.log("Controller Error:", error);
      return res.status(500).json({ message: error.message });
    }
  }

  async filter(req, res) {
    try {
      const products = await this.productService.filterProducts(req.query);
      return res.status(200).json(products);
    } catch (error) {
      console.log("Controller Error:", error);
      return res.status(500).json({ message: error.message });
    }
  }
}

export default ProductController;
