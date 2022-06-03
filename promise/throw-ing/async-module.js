function delayAndResolve(delay, isResolved = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isResolved) {
        resolve("resolved");
      } else {
        reject("rejected");
      }
    }, delay);
  });
}
module.exports = {
  promise1: delayAndResolve(200),
};
