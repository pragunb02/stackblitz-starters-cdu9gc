import { create } from 'domain';
import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
// Schema method expect object ,, timestamp secondary object

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
