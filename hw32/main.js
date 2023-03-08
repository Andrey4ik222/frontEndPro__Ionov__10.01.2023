const deilyRoutine = new Promise((resolve) => {
  setTimeout(() => {
    resolve("I wake up at 8 am");
  }, 100);
});
deilyRoutine
  .then((value) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value + ", " + "then i brush my teeth"), 100);
    });
  })
  .then((value) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value + ", " + "then i go to eat"), 100);
    });
  })
  .then((value) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value + ", " + "then i learn JS"), 100);
    });
  })
  .then((value) => console.log(value));
