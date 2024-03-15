const txtInput = document.getElementById("txtInput");
console.log(txtInput.value);

const btnClick = document.getElementById("btnClick");
btnClick.onclick = function () {
  console.log(123);
  // lấy value ng dùng mới nhập
  const txtInput = document.getElementById("txtInput").value;

  //hiển thị thong tin use moi nhap
  const showInfo = "<span>hello " + txtInput + "</span>";

  console.log(showInfo);
  //dom toi the p để gán gtri thong báo
  const pTxtInput = document.getElementById("pTxtInput");
  pTxtInput.innerHTML = showInfo;

  // //style cho thẻ thong báo
  // pTxtInput.style.backgroundColor = "red";
  // pTxtInput.style.color = "white";
  // pTxtInput.style.fontSize = "20px";

  // //style theo class
  // pTxtInput.className = " demo pText";

  //style theo class
  pTxtInput.classList.add("pText");
};

const get = document.getElementById("get");
get.onclick = function () {
  console.log(777);
  const name = document.getElementById("name").value;

  const showAddress = "xin chao " + name;
  console.log(showAddress);

  const pName = document.getElementById("pName");
  pName.innerHTML = showAddress;
};

const numberPhone = document.getElementById("numberPhone");
numberPhone.onclick = function () {
  console.log(6969);
  const btnPhone = document.getElementById("btnPhone").value;

  const showPhone = "hihihihi  " + btnPhone;
  console.log(showPhone);

  const pTxtPhone = document.getElementById("pTxtPhone");
  pTxtPhone.innerHTML = showPhone;
};

const txtGmail = document.getElementById("txtGmail");
txtGmail.onclick = function () {
  console.log(123456);
  const btnGmail = document.getElementById("btnGmail").value;

  const showGmail = "haidang " + btnGmail;
  console.log(showGmail);

  const pBtnGmail = document.getElementById("pBtnGmail");
  pBtnGmail.innerHTML = showGmail;
};

const btnNgaySinh = document.getElementById("btnNgaySinh");
btnNgaySinh.onclick = function () {
  console.log(1504);
  const txtNngaySinh = document.getElementById("txtNngaySinh").value;

  const showNgaySinh = "ngaysinh " + txtNngaySinh;
  console.log(showNgaySinh);

  const pTxNngaySinh = document.getElementById("pTxtNngaySinh");
  pTxtNngaySinh.innerHTML = showNgaySinh;
};

const btnGioitinh = document.getElementById("btnGioitinh");
btnGioitinh.onclick = function () {
  console.log("nam");
  const txtGioiTinh = document.getElementById("txtGioiTinh").value;

  const showGioiTinh = "gioiTinh " + txtGioiTinh;
  console.log(showGioiTinh);

  const pTxtGioiTinh = document.getElementById("pTxtGioiTinh");
  pTxtGioiTinh.innerHTML = showGioiTinh;
};

const btnPassPort = document.getElementById("btnPassPort");
btnPassPort.onclick = function () {
  console.log("vietNamese");
  const txtPassPort = document.getElementById("txtPassPort").value;

  const showPassPort = "passPort " + txtPassPort;
  console.log(showPassPort);

  const pTxtPassPort = document.getElementById("pTxtPassPort");
  pTxtPassPort.innerHTML = showPassPort;
};

const btnNickName = document.getElementById("btnNickName");
btnNickName.onclick = function () {
  console.log("dang");
  const txtNickName = document.getElementById("txtNickName").value;

  const showNickName = "nickName " + txtNickName;
  console.log(showNickName);

  const pTxtNickName = document.getElementById("pTxtNickName");
  pTxtNickName.innerHTML = showNickName;
};

const btnMK = document.getElementById("btnMK");
btnMK.onclick = function () {
  console.log(123456789);
  const txtMK = document.getElementById("txtMK").value;

  const showMK = "matKhau " + txtMK;
  console.log(showMK);

  const pTxtMK = document.getElementById("pTxtMK");
  pTxtMK.innerHTML = showMK;
};

const btnLogin = document.getElementById("btnLogin");
btnLogin.onclick = function () {
  const txtUseName = document.getElementById("txtUseName").value;
  const txtPass = document.getElementById("txtPass").value;

  let showInfo = "<span> useName " + txtUseName + "</span>" + "<br/>";
  showInfo += " <span> pass " + txtPass + "</span>";

  // const showUseName = "useName " + txtUseName;
  // console.log(showUseName);

  // const showPass = "pass " + txtPass;
  // console.log(showPass);

  // const showInfo = showUseName + showPass;
  // const pDangNhap = document.getElementById("pDangNhap");
  // pDangNhap.innerHTML = showInfo;

  const pDangNhap = document.getElementById("pDangNhap");
  pDangNhap.innerHTML = showInfo;

  pDangNhap.classList.add("useName");
};

const btnTotal = document.getElementById("btnTotal");
btnTotal.onclick = function () {
  const txtNumber1 = document.getElementById("txtNumber1").value;
  const txtNumber2 = document.getElementById("txtNumber2").value;

  // check data js
  // console.log(typeof number1);

  // convert string==> number
  const number1_type = parseFloat(txtNumber1);
  const number2_type = parseFloat(txtNumber2);

  const tong = number1_type + number2_type;
  let result = " <span> tong la " + tong + "</span>";
  console.log(result);

  const infoTotal = document.getElementById("infoTotal");
  infoTotal.innerHTML = result;

  infoTotal.classList.add("total");
};

const btnTingLuong = document.getElementById("btnTingLuong");
btnTingLuong.onclick = function () {
  const txtNgayLam = document.getElementById("txtNgayLam").value * 1; //cach2
  const txtLuongNgay = document.getElementById("txtLuongNgay").value * 1; //cach 2

  const txtNgayLam_1 = parseFloat(txtNgayLam);
  const txtLuongNgay_2 = parseFloat(txtLuongNgay);

  const luong = txtNgayLam_1 * txtLuongNgay_2;
  let result = "<span> luong nhan vien la " + luong + "</span>";
  console.log(result);

  const ptong = document.getElementById("ptong");
  ptong.innerHTML = result;
  ptong.classList.add("luong");
};
// bai tap

// bai tap 1
const btnTienLuong = document.getElementById("btnTienLuong");
btnTienLuong.onclick = function () {
  const txtSoNgayLam = document.getElementById("txtSoNgayLam").value * 1;
  const luongNgay = 100000;

  const tienLuong = luongNgay * txtSoNgayLam;
  let result = "<span> tien luong nhan vien la " + tienLuong + "</span>";
  console.log(result);

  const pTongLuong = document.getElementById("pTongLuong");
  pTongLuong.innerHTML = result;
  pTongLuong.classList.add("tongLuong");
};

// bai tap 2
const btnDoiTien = document.getElementById("btnDoiTien");
btnDoiTien.onclick = function () {
  const txtSoTienUSD = document.getElementById("txtSoTienUSD").value * 1;
  const giaUSD = 24000;

  const doiTien = giaUSD * txtSoTienUSD;
  let result = "<span> so tien doi la " + doiTien + "</span>";
  console.log(doiTien);

  const inFoDoiTien = document.getElementById("inFoDoiTien");
  inFoDoiTien.innerHTML = result;
  inFoDoiTien.classList.add("doiTien");
};

// bai tap 3
const btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
  const txtChieuDai = document.getElementById("txtChieuDai").value * 1;
  const txtChieuRong = document.getElementById("txtChieuRong").value * 1;

  const dienTich = txtChieuDai * txtChieuRong;
  const chuVi = (txtChieuDai + txtChieuRong) * 2;

  let result = " dien tich la " + dienTich + "</br> \n";
  result += "chu vi la " + chuVi + "\n";
  console.log(result);

  const inFoTinh = document.getElementById("inFoTinh");
  inFoTinh.innerHTML = result;
  inFoTinh.classList.add("tinh");
};

// bai tap 4
const btnTong = document.getElementById("btnTong");
btnTong.onclick = function () {
  const txtKiSo = document.getElementById("txtKiSo").value * 1;
  const n = 11;
  n1 = n / 10;
  n1 = Math.floor(n1);
  n1 = n1 % 10;
  n2 = n % 10;

  const tong = n1 + n2;
  let result = "tong 2 ki so la " + tong;
  console.log(result);

  const inFoTong = document.getElementById("inFoTong");
  inFoTong.innerHTML = result;
  inFoTong.classList.add("kiSo");
};
