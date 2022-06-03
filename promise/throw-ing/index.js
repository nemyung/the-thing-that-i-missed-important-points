const createResource = require("./util");
const { promise1 } = require("./async-module");

const Machine = (function Machine() {
  return {
    render: async function (Comp) {
      let _Comp = Comp;
      try {
        const result = Comp();
        return result;
      } catch (throwed) {
        if (throwed instanceof Promise) {
          await throwed;
          return _Comp();
        }
        console.error(throwed);
      }
    },
  };
})();

const resource = createResource(promise1);

const callCountRef = { current: 0 };
const resources = [];

function Component() {
  console.log(`The component is called at ${++callCountRef.current} times`);
  resources.push(resource);
  const data = resource.read();
  console.log(data);
}

Machine.render(Component);

setTimeout(() => {
  resources.forEach((resource) => {
    console.log(resource.promise === promise1);
  });
}, 1000);
