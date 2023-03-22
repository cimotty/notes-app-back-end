// prettier-ignore
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    // add note
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    // save note
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    // read note
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    // update note
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    // delete note
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
