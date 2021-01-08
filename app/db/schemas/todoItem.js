const todoItemSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
    },
    content:{
      type: 'string',
    },
    author:{
      type: 'string'
    },
    isDone: {
      type: 'boolean',
      default: false
    }
  },
};

module.exports = todoItemSchema;
