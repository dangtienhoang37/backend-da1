function generateRandomId() {
  const min = 1; // Giá trị nhỏ nhất cho ID
  const max = 1000000; // Giá trị lớn nhất cho ID
  const randomId = Math.floor(Math.random() * (max - min + 1) + min); // Tạo số ngẫu nhiên và làm tròn thành số nguyên
  return randomId;
}


function generateUniqueId() {
  const randomId = generateRandomId(); // Hàm generateRandomId() từ ví dụ trước
  const timestamp = Date.now(); // Lấy timestamp hiện tại
  const uniqueId = timestamp * 1000000 + randomInt; // Kết hợp ID và timestamp
  return uniqueId;
}
console.log(generateUniqueId())