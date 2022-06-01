console.log("script start");

function defer() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { resolve, reject, promise };
}
const ref = {
  current: 0,
};
const { resolve, reject, promise } = defer();

for (let i = 0; i < 10; i++) {
  promise.then(() => {
    console.log(`currentRef: ${++ref.current}`);
  });
}

setTimeout(() => {
  console.log(`This will be queued into macro task queue immediately`);
}, 0);

setTimeout(() => {
  resolve();
  console.log(
    `This will be queued into macro task queue after 2 seconds and resolve promise`
  );
}, 2000);

console.log("script end");
