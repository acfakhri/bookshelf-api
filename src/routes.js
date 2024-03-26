const Controller = require('./controllers');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: Controller.create,
  },
  {
    method: 'GET',
    path: '/books',
    handler: Controller.store,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: Controller.index,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: Controller.update,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: Controller.delete,
  },
];

module.exports = routes;
