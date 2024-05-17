function asyncOperation(callback) {
  setTimeout(() => {
    console.log("Async operation completed.");
    callback();
  }, 1000);
}

// Nested callbacks
asyncOperation(() => {
  console.log("First operation completed.");
  asyncOperation(() => {
    console.log("Second operation completed.");
    asyncOperation(() => {
      console.log("Third operation completed.");
    });
  });
});
