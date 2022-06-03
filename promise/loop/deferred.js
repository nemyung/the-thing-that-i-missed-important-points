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

Promise.resolve().then(() => {
  console.log(`formerMicroTaskQueueStart`);
});

for (let i = 0; i < 10; i++) {
  promise.then(() => {
    console.log(`latterMicroTaskQueueStart`);
    console.log(`currentRef: ${++ref.current}`);
    if (i + 1 === 10) {
      setTimeout(() => {
        console.log(`latterMacroTaskQueue`);
      }, 1000);
    }
  });
}

Promise.resolve().then(() => {
  console.log(`formerMicroTaskQueueEnd`);
});

setTimeout(() => {
  resolve();
  console.log(`formerMacroTaskQueue`);
}, 2000);

console.log("script end");
