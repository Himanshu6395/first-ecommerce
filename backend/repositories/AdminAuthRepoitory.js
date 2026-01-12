  export default class AuthRepository {
    constructor({ Admin ,Category,SubCategory,Product,File}) {
      this.Admin = Admin;
      this.Category = Category;
      this.SubCategory= SubCategory;
      this.Product=Product;
      this.File=File;
    }

    async registerUser(data) {
      try {
        const { name, email, password } = data;

        const existingUser = await this.Admin.findOne({ email });
        if (existingUser) {
          return { success: false, message: "User already exists" };
        }

        const newUser = await this.Admin.create({ name, email, password });

        return { success: true, user: newUser };

      } catch (error) {
        console.error("Repository Error:", error);
        throw new Error("Error registering user");
      }
    }

    
    async findByEmail(email) {
      return await this.Admin.findOne({ email });
    }

    async addCategory(data) {
      try {
        const { name } = data;        
        const result = await this.Category.create({ name });
        return { success: true, category: result };
      } catch (error) {
        console.error("Repository Error:", error);
        throw new Error("Error adding category");
      }
    }
   async addSubCategory(data) {
  try {
    const { name, category, isActive = true } = data;

    if (!name || !category) {
      throw new Error("Name and Category are required");
    }

    // slug generate
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    const result = await this.SubCategory.create({
      name,
      slug,
      category,   
      isActive
    });

    return {
      success: true,
      subCategory: result
    };
  } catch (error) {
    console.error("Repository Error:", error);
    throw new Error(error.message || "Error adding subcategory");
  }
}


    async getCategories() {
      try {
        const categories = await this.Category.find();
        return { success: true, data: categories };
      } catch (error) {
        console.error("Repository Error:", error);
        throw new Error("Error fetching categories");
      }
    }

    async getSubCategoriesByCategory(categoryId) {
      try {
        const subCategories = await this.SubCategory.find({ category: categoryId });
        return { success: true, data: subCategories };
      } catch (error) {
        console.error("Repository Error:", error);
        throw new Error("Error fetching subcategories");
      }
    }

    async addProduct(data){
      try{
        const result=await this.Product.create(data)
        return {success:true,product:result}
      }
      catch(error){
        console.error("Repository Error:", error);
        throw new Error("Error adding product");
      }
    }

     saveFile = async (userId, fileData) => {
  try {
    return await this.File.create({
      userId,
      ...fileData,
    });
  } catch (error) {
    console.error("file.repository saveFile", error);
    throw error;
  }
};

  }