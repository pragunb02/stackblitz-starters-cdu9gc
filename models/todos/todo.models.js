import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      //  depend user
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // export const Usersji = mongoose.model('User', userSchema);
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodo',
      },
    ], // array of Sub-Todo
  },
  { timestamps: true }
);
// Schema method expect object ,, tinmestamp secondary object

export const Todo = mongoose.model('Todo', todoSchema);
