import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    return response.data;
  });
};

const create = (newPersonOBj) => {
  const request = axios.post(baseUrl, newPersonOBj);
  return request.then((response) => response.data);
};

const update = () => {};

const remove = () => {};

export default { getAll, create, update, remove };
