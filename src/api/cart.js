const BASE_URL = 'http://faceprog.ru/reactcourseapi/cart';

export async function load(token) {
  let response = await fetch(`${BASE_URL}/load.php?token=${token}`);
  return await response.json();
}

export async function change(token, id, cnt) {
  let response = await fetch(
    `${BASE_URL}/change.php?token=${token}&id=${id}&cnt=${cnt}`
  );
  return await response.json();
}

export async function add(token, id) {
  let response = await fetch(`${BASE_URL}/add.php?token=${token}&id=${id}`);
  return await response.json();
}

export async function remove(token, id) {
  let response = await fetch(`${BASE_URL}/remove.php?token=${token}&id=${id}`);
  return await response.json();
}
