const BASE_URL = 'http://faceprog.ru/reactcourseapi/products';

export async function all() {
  let response = await fetch(`${BASE_URL}/all.php`);

  return await response.json();
}
