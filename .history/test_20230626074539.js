const currentTime = new Date();
const timeZoneOffset = currentTime.getTimezoneOffset() * 60000; // Chuyển đổi phút sang mili giây
const gmtPlus7Time = new Date(currentTime.getTime() + (7 * 3600000) + timeZoneOffset);

console.log(gmtPlus7Time);