//Task 01: Iterating with Async/Await//
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay of 1 second
      console.log(value);
    }
  }
  
  iterateWithAsyncAwait([1, 2, 3, 4]);

  //Task 02: Awaiting a Call//
  async function awaitCall() {
    const fetchData = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ data: "Sample API Response" }), 2000)
      );
  
    const data = await fetchData(); // Simulate API call
    console.log(data);
  }
  awaitCall();

  //Task 03: Handling Errors with Async/Await//
  async function awaitCall() {
    const fetchData = () =>
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Failed to fetch data")), 2000)
      );
  
    try {
      const data = await fetchData(); // Simulate API call
      console.log(data);
    } catch (error) {
      console.error("An error occurred: Unable to fetch data. Please try again.");
    }
  }
  
  awaitCall();
  
  