/**
 * POST/PUT/DELETE data with fetch
 *
 * @function Fetcher
 * @param {string} url - URL of the Api
 * @param {string} method - "POST" or "PUT" or "DELETE"
 * @return {} datas - the data you want to change.
 */

export default function Fetcher(url, method, datas) {
  fetch(url, {
    method: method, // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datas),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return null;
}
