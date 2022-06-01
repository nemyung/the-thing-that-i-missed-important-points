console.log("script start");
const ref = {
  current: 0,
};

Promise.resolve().then(() => {
  console.log(`MicroTaskQueueStart`);
});

const promise = Promise.resolve();

for (let i = 0; i < 10; i++) {
  promise.then(() => {
    console.log(
      `currentRef: ${++ref.current}. THIS CALLBACK WAS IN THE MICRO TASK QUEUE`
    );
  });
}

Promise.resolve().then(() => {
  console.log(`MicroTaskQueueEnd`);
});

setTimeout(() => {
  console.log(`This will be queued into macro task queue immediately`);
}, 0);

console.log("script end");
