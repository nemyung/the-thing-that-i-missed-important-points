# Then methods are like event listener

1. When host environment runs script's entry, the main task(the script) put into the macro task queue. Event loop dequeues it and put its name on the stack frame and run it.

2. However caller initialize promise via its constructor, the `.then()` method _itself_ is not related to micro task queue. it's more like **event listener.**. The variable which binds to promise is mor like **event emitter.**

3. When some task ends and fulfilled with returns value _Synchronously_, The `promiseVariable` it is cached with result. and `then(callback)` is queued via micro task. When stack is empty on the current tick, that callback(s) dequeud first and executed(see `not-deferred.js`).

4. When some task is fulfilled _Asynchronously_, The `promiseVariable.then(callback)` does not move into micro task queue. if the `promiseVariable` is **pending state**, engine registers `callback` (like eventListener). whenever the promise is settled, the callbacks which is regestered via `then()` executed(see `deferred.js`).

5. Promise is the future value. it is not just used for corresponding callback hell or whatever.
