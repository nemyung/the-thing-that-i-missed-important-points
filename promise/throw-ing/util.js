function createResource(promise) {
  let status = "pending";
  let result = promise.then(
    (resolved) => {
      status = "resolved";
      result = resolved;
    },
    (rejected) => {
      status = "rejected";
      result = rejected;
    }
  );

  return {
    read() {
      if (status === "pending" || status === "rejected") {
        throw result;
      }
      return result;
    },
    promise,
  };
}
module.exports = createResource;
