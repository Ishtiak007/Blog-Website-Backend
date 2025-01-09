import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: [
        true,
        'Title is required. Please provide the necessary information.',
      ],
      trim: true,
    },
    content: {
      type: String,
      required: [
        true,
        'Content is required. Please provide the necessary information.',
      ],
      trim: true,
    },
    author: {
      type: Schema.ObjectId,
      ref: 'User',
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// query middleware
blogSchema.pre('find', async function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

blogSchema.pre('findOne', async function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});

// aggregate middleware
blogSchema.pre('aggregate', async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

blogSchema.pre('aggregate', async function (next) {
  this.pipeline().unshift({ $project: { isDeleted: 0 } });
  next();
});

export const Blog = model<TBlog>('Blog', blogSchema);
