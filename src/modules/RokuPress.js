export function sendCommand(addr, key) {
  const url = `http://${addr}:8060/keypress/${key}`;
  const reqOptions = {
    method: 'post',
    headers: {
      'Accept': 'application/json',
    }
  };
  fetch(url, reqOptions)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}