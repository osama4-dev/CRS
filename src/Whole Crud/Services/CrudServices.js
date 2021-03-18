  
import {firestore} from "../../firebase/db";

// console.log(firestore)
const db = firestore.collection("/cards");

const getAll = () => {
  return db;
};

const create = (data) => {
  return db.add(data);
};

const update = (id, value) => {
  return db.doc(id).update(value);
};

const remove = (id) => {
  return db.doc(id).delete();
};

const CrudService = {
  getAll,
  create,
  update,
  remove
};

export default CrudService;