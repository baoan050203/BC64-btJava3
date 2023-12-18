// ---đóng mở file -----
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// ----nhập số vào mảng----

var arrNhanVien = [];
function getNameFromUser() {
  var nhanVien = document.getElementById('nhapSo').value*1;
//   arrNhanVien.push(nhanVien);
  arrNhanVien.push(parseFloat(nhanVien));

  document.getElementById('kq1').innerHTML = arrNhanVien;
}

document.getElementById('btn1').onclick = getNameFromUser;



function sumNumber(){
    
    var sum = arrNhanVien.reduce(function (total, num) {
        return total + num;
      }, 0);
    document.getElementById('kq2').innerHTML = "tổng: "+sum
}

document.getElementById('btn2').onclick=sumNumber;

function countPositiveNumbers() {
    var count = arrNhanVien.filter(function (num) {
      return num > 0;
    }).length;
  
    document.getElementById('kq3').innerHTML = "số dương: " + count;
  }

  document.getElementById('btn3').onclick = countPositiveNumbers

  function smallestNumber() {
    var min = Math.min.apply(null, arrNhanVien);
    document.getElementById('kq4').innerHTML = "giá trị nhỏ nhất: " + min;
  }

  document.getElementById('btn4').onclick=smallestNumber;

  
  function findMinPositiveValue() {
    // Lọc ra các số dương
    var mini = arrNhanVien.filter(function (num) {
      return num > 0;
    });
    
    console.log(mini)
    // Nếu có ít nhất một số dương, tìm số dương nhỏ nhất
    if (mini.length > 0) {
      var minPositiveValue = Math.min.apply(null, mini);
      document.getElementById('kq5').innerHTML = "Số dương nhỏ nhất: " + minPositiveValue;
    } else {
      document.getElementById('kq5').innerHTML = "Không có số dương trong mảng.";
    }
  }
  
  // Gán sự kiện click cho nút
  document.getElementById('btn5').onclick = findMinPositiveValue;

function lastEvanNumber(){
  var soChanCuoiCung = null;
  for(var i = arrNhanVien.length-1;i>=0;i--){
    if(arrNhanVien[i]%2===0){
      soChanCuoiCung=arrNhanVien[i];
      break
    }
  }

  if(soChanCuoiCung !== null){
    document.getElementById('kq6').innerHTML="số chẵn cuối cùng: "+soChanCuoiCung
  }
  else{
    document.getElementById('kq6').innerHTML="không có số chẵn trong hàm "
  }
}

document.getElementById('btn6').onclick = lastEvanNumber;
  
function doiViTriSo(arr, position1,position2){
 
  
  if (
    position1 >= 0 &&
    position1 < arr.length &&
    position2 >= 0 &&
    position2 < arr.length
  ) {
    // Đổi chỗ giá trị tại hai vị trí
    var temp = arr[position1];
    arr[position1] = arr[position2];
    arr[position2] = temp;

    return arr;
  } else {
    // Nếu vị trí không hợp lệ, trả về mảng không thay đổi
    console.log("Vị trí không hợp lệ.");
    return arr;
  }
}

function xuatketQua (){
  var viTri1 = document.getElementById('soThuI').value*1;
  var viTri2 = document.getElementById('soThuII').value*1;
  arrNhanVien = doiViTriSo(arrNhanVien, viTri1, viTri2)
  document.getElementById('kq7').innerHTML= "mảng sau khi đổi vị trí " + arrNhanVien
}

document.getElementById('btn7').onclick = xuatketQua

function growUp(){
  arrNhanVien.sort();
  document.getElementById('kq8').innerHTML= "mảng sau khi đổi vị trí " + arrNhanVien
}
document.getElementById('btn8').onclick = growUp



function findFirstPrimeNumber(arr) {
  for (var i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
          return arr[i];
      }
  }
  return null; // Trả về null nếu không tìm thấy số nguyên tố
}

function findFirstPrimeNumberInArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      return arr[i];
    }
  }
  return null; // Trả về null nếu không tìm thấy số nguyên tố
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findAndDisplayFirstPrimeNumber() {
  var firstPrimeNumber = findFirstPrimeNumberInArray(arrNhanVien);

  if (firstPrimeNumber !== null) {
    document.getElementById('kq9').innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + firstPrimeNumber;
  } else {
    document.getElementById('kq9').innerHTML = "Không có số nguyên tố trong mảng.";
  }
}

// Gán sự kiện click cho nút
document.getElementById('btn9').onclick = findAndDisplayFirstPrimeNumber;

function comparePositiveAndNegativeNumbers() {
  var positiveNumbers = arrNhanVien.filter(function (num) {
    return num > 0;
  });

  var negativeNumbers = arrNhanVien.filter(function (num) {
    return num < 0;
  });

  document.getElementById('kq10').innerHTML = "Số dương: " + positiveNumbers.length + ", Số âm: " + negativeNumbers.length;
}

// Gán sự kiện click cho nút
document.getElementById('btn10').onclick = comparePositiveAndNegativeNumbers

var arrNhap = [];
function getNumberfromlast() {
  var nhanVien = document.getElementById('nhapSo1').value*1;
//   arrNhanVien.push(nhanVien);
  arrNhap.push(parseFloat(nhanVien));

  document.getElementById('kq11').innerHTML = arrNhap;

  var integerCount = 0;
      for (var i = 0; i < arrNhap.length; i++) {
        if (!isNaN(arrNhap[i]) && Number.isInteger(arrNhap[i])) {
          integerCount++;}
        }
        document.getElementById('result').innerHTML = "số nguyên trong mảng: " + integerCount;
}

document.getElementById('btn11').onclick = getNumberfromlast;

