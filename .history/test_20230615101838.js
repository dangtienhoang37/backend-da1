function generateUniqueId() {
  const timestamp = Date.now()/10000000000;
  const randomInt = Math.floor(Math.random() * 1000); // Số ngẫu nhiên từ 0 đến 999999
  const uniqueId = Math.floor(timestamp * 10000 + randomInt); // Kết hợp timestamp và số ngẫu nhiên thành một số duy nhất
  return uniqueId;
}

console.log(generateUniqueId());