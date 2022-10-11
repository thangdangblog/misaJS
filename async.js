function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Mô tả : Thực hiện đẩy code ngoài Internet
 */
async function dayCodeInternet() {
  console.log('Bắt đầu tạo TSDR')
  await taoTSDR()
  await baoAnhDuongDuyet()
  await baoAnhHuanDuyet()
  await baoAnhThangDuyet()
  await baoAnhThangDangNhap()
  console.log('Bắt đầu xử lý đẩy code Internet')
}

/**
 * Mô tả : Tạo TSDR
 */
function taoTSDR() {
  const time = randomInt(1000, 3000)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Đã tạo xong TSDR: ${time / 1000} giây`)
      return resolve()
    }, time)
  })
}

/**
 * Mô tả : Báo anh Dương duyệt
 */
function baoAnhDuongDuyet(callback) {
  const time = randomInt(1000, 3000)
  // Thời gian tạo TSDR là 1s
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Anh Dương đã duyệt TSDR: ${time / 1000} giây`)
      return resolve()
    }, randomInt(1000, 3000))
  })
}

/**
 * Mô tả : Báo anh Dương duyệt
 */
function baoAnhHuanDuyet(callback) {
  const time = randomInt(1000, 3000)
  // Thời gian tạo TSDR là 1s
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Anh Huân đã duyệt TSDR: ${time / 1000} giây`)
      return resolve()
    }, randomInt(1000, 3000))
  })
}

/**
 * Mô tả : Báo anh Dương duyệt
 */
function baoAnhThangDuyet() {
  const time = randomInt(1000, 3000)
  // Thời gian tạo TSDR là 1s
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Anh Thắng đã duyệt PAM: ${time / 1000} giây`)
      return resolve()
    }, randomInt(1000, 3000))
  })
}

/**
 * Mô tả : Báo anh Dương duyệt
 */
function baoAnhThangDangNhap(callback) {
  const time = randomInt(1000, 3000)
  // Thời gian tạo TSDR là 1s
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Anh Thắng đã đăng nhập SSH: ${time / 1000} giây`)
      return resolve()
    }, randomInt(1000, 3000))
  })
}

document.addEventListener('DOMContentLoaded', function () {
  dayCodeInternet()
})
