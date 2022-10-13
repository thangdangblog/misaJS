function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Mô tả : Thực hiện đẩy code ngoài Internet
 */
function thiCongPBI() {
  console.log('1. Bắt đầu tạo họp Đào tạo nghiệp vụ');
  daoTaoNghiepVu(() => {
    phanChiaPBI(() => {
      vietGPTC(() => {
        doiDevLeadDuyetGPTC(() => {
          tienHanhThiCongPBI(() => {
            console.log('7. Kết thúc luồng')
          })
        })
      })
    })
  })
}

/**
 * Mô tả : Tạo TSDR
 */
function daoTaoNghiepVu(callback) {
  const time = randomInt(1000, 3000)
  setTimeout(() => {
    console.log(`2. Đã đào tạo xong nghiệp vụ: ${time / 1000} giây`)
    callback()
  }, time)
}

/**
 * Mô tả : Báo anh Dương duyệt
 */
function phanChiaPBI(callback) {
  const time = randomInt(1000, 3000)
  setTimeout(() => {
    console.log(`3. Đã phân chia xong PBI: ${time / 1000} giây`)
    callback()
  }, randomInt(1000, 3000))
}

/**
 * Mô tả : Báo anh Dương duyệt
 */
function vietGPTC(callback) {
  const time = randomInt(1000, 3000)
  setTimeout(() => {
    console.log(`4. Đã viết xong GPTC: ${time / 1000} giây`)
    callback()
  }, randomInt(1000, 3000))
}

/**
 * Mô tả : Báo anh Dương duyệt
 */
function doiDevLeadDuyetGPTC(callback) {
  const time = randomInt(1000, 3000)
  // Thời gian tạo TSDR là 1s
  setTimeout(() => {
    console.log(`5. Đã duyệt xong GPTC: ${time / 1000} giây`)
    callback()
  }, randomInt(1000, 3000))
}

/**
 * Mô tả : Báo anh Dương duyệt
 */
function tienHanhThiCongPBI(callback) {
  const time = randomInt(1000, 3000)
  // Thời gian tạo TSDR là 1s
  setTimeout(() => {
    console.log(`6. Đã thi công PBI xong: ${time / 1000} giây`)
    callback()
  }, randomInt(1000, 3000))
}

document.addEventListener('DOMContentLoaded', function () {
  thiCongPBI()
})
