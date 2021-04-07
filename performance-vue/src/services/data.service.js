export const getData = () => {
  return fetch('http://127.0.0.1:8887/ircc.json').then((response) => {
    return response.json();
  });
};
