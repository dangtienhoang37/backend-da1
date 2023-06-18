function generateUniqueId() {
  const randomId = generateRandomId(); // Hàm generateRandomId() từ ví dụ trước
  const timestamp = Date.now(); // Lấy timestamp hiện tại
  const uniqueId = `${randomId}-${timestamp}`; // Kết hợp ID và timestamp
  return uniqueId;
}