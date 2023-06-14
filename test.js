const myPromise = new Promise((resolve, reject) => {
    resolve("Thành công!");
  });
  
  myPromise.then(result => {
    console.log(result); // In ra "Thành công!"
  });
  
  // Khi không sử dụng .then()
  myPromise; // Promise {<fulfilled>: "Thành công!"}
  