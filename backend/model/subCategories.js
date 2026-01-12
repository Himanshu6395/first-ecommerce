import mongoose from "mongoose";
const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      lowercase: true
    },

    //  relation with Category
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true // createdAt, updatedAt
  }
);

// 🔒 unique subcategory per category
subCategorySchema.index(
  { name: 1, category: 1 },
  { unique: true }
);

export default mongoose.model("SubCategory", subCategorySchema);