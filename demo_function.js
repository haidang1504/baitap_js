// khai báo hàm
function demoFunction() {
  console.log("hello");
  let usename = "dang";
  console.log(usename);
}
// gọi hàm để thực thi
demoFunction();

/**
 * tính tổng 3 kí số
 *đầu vào
 n= 123
 xử lí
 hàng trăm (n1)
 n1=n chia 100
 làm tròn math.floor(n1)
 hàng chục
 n2 = n chia 10
 làm tròn math.floor(n2)
 n2 =n2%10
 hàng đơn vị 
 n3 = n%10

 tổng= n1+n2+n3

 đầu ra
 */

function tong3KiSo() {
  const n = 123;
  n1 = n / 100;
  n1 = Math.floor(n1);

  n2 = n / 10;
  n2 = Math.floor(n2);
  n2 = n2 % 10;

  n3 = n % 10;

  tong = n1 + n2 + n3;
  const result = "tong la :" + tong;

  console.log(result);
  console.log(n1);
  console.log(n2);
  console.log(n3);
}

tong3KiSo();

/**
 * dau vao
 * ten phim
 * gia ve nguoi lon 100
 * gia ve tre em 50
 * ve nguoi lon ban 70
 * ve tre em ban 30
 * ty le phan tram 10
 * dau ra
 * tong doanh thu
 */

function moHinh3Khoi() {
  const tenPhim = "haidang";
  const giaVeNguoiLon = 100;
  const soLuongNguoiLonBan = 70;
  const giaVeTreEm = 50;
  const soLuongTreEmBan = 30;
  const tyLePhanTram = 10;
  soVeBan = soLuongNguoiLonBan + soLuongTreEmBan;
  doanhThu = giaVeNguoiLon * soLuongNguoiLonBan + giaVeTreEm * soLuongTreEmBan;
  tienTuThien = (doanhThu * tyLePhanTram) / 100;
  loiNhuan = doanhThu - tienTuThien;

  let result = "ten phim" + tenPhim + "\n";
  result += "so ve da ban la " + soVeBan + "\n";
  result += "doanh thu la  " + doanhThu + "\n";
  result += "ti le tu thien la " + tyLePhanTram + " % \n";
  result += "tien tu thien la " + tienTuThien + "\n";
  result += "loi nhuan la " + loiNhuan + "\n";

  console.log(result);
}

moHinh3Khoi();
