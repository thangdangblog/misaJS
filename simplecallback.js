function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Mô tả : Tạo TSDR
 */
function daoTaoNghiepVu(callback) {
  const time = randomInt(2000, 4000)

  console.log('1. Bắt đầu tạo họp Đào tạo nghiệp vụ');

  // Thời gian tạo TSDR là 1s
  setTimeout(() => {
    console.log(`2. Đã đào tạo xong nghiệp vụ: ${time / 1000} giây`)
    callback();
  }, time)
  
}

document.addEventListener('DOMContentLoaded', function () {
  daoTaoNghiepVu(() => {
    console.log("3. Có thể phân chia chia PBI");
  });
})
