import request from 'superagent';

const URL = `https://afternoon-sands-77287.herokuapp.com/`;

export async function fetchBees() {
  try {
    const response = await request.get(`${URL}bees`);

    return response.body;
  } catch (err) {
    throw err;
  }
}

export async function fetchNames() {
  try {
    const response = await request.get(`${URL}friends`);

    return response.body;
  } catch (err) {
    throw err;
  }
}

export async function fetchBee(someId) {
  try {
    const response = await request.get(`${URL}bees/${someId}`);

    return response.body;
  } catch (err) {
    throw err;
  }
}

export async function createBee(newBee) {
  try {
    await request
      .post(`${URL}bees`)
      .send(newBee);
  } catch (err) {
    throw err;
  }
}

export async function updateBee(someId, newBee) {
  try {
    await request
      .put(`${URL}bees/${someId}`)
      .send(newBee);
  } catch (err) {
    throw err;
  }
}

export async function deleteBee(someId) {
  try {
    await request
      .delete(`${URL}bees/${someId}`)
  } catch (err) {
    throw err;
  }
}
