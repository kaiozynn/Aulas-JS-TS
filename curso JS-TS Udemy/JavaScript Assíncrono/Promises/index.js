function esperaAi(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new TypeError());
    }

    setTimeout(() => {
      resolve(msg);
    }, time);
  })
}

function rand(max, min) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

esperaAi('Frase 1', rand(1, 3))
  .then((result) => {
    console.log(result);
    return esperaAi("222", rand(1, 3))
  })
  .then((res) => {
    console.log(res);
    return esperaAi('Frase 3', rand(1,3))
  })
  .then(res => {
    console.log(res)
  })
  .catch((e) => {
    console.error(e)
  })