import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

//Seperated communication with back-end module
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

const update = (id, newPersonObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newPersonObj);
  return request.then((response) => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, update, remove };
