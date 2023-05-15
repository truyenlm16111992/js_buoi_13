function funcCalTotalSalary(salary, numWorkDays) {
    var total=0;
    total=salary*numWorkDays;
    return total;
}
function funcCalAvgNumbers(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}
function funcConvertUsdToVnd(usb) {
    var rate = 23500;
    return usb * rate;
}
function funCalRectangleArea(fWidth, fHeight) {
    return fWidth * fHeight;
}
function funCalRectanglePerimeter(fWidth, fHeight) {
    return (fWidth + fHeight) * 2;
}
function funcCalSumNum(num){
    var unit=num%10;
    var ten=Math.floor(num/10);
    return ten+unit;
}
document.getElementById("btnExecute_b1").onclick = function () {
    var salary = 0, numWorkDays = 0;
    if (document.getElementById("tbLuong").value.length > 0)
        salary = parseFloat(document.getElementById("tbLuong").value);
    if (document.getElementById("tbSoNgayLam").value.length > 0)
        numWorkDays = parseFloat(document.getElementById("tbSoNgayLam").value);
    document.getElementById("result_b1").innerHTML = funcCalTotalSalary(salary, numWorkDays).toLocaleString() +" VNĐ";
};
document.getElementById("btnExecute_b2").onclick = function () {
    var num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0;
    if (document.getElementById("tbSoThu1").value.length > 0)
        num1 = parseFloat(document.getElementById("tbSoThu1").value);
    if (document.getElementById("tbSoThu2").value.length > 0)
        num2 = parseFloat(document.getElementById("tbSoThu2").value);
    if (document.getElementById("tbSoThu3").value.length > 0)
        num3 = parseFloat(document.getElementById("tbSoThu3").value);
    if (document.getElementById("tbSoThu4").value.length > 0)
        num4 = parseFloat(document.getElementById("tbSoThu4").value);
    if (document.getElementById("tbSoThu5").value.length > 0)
        num5 = parseFloat(document.getElementById("tbSoThu5").value);
    document.getElementById("result_b2").innerHTML = funcCalAvgNumbers(num1, num2, num3, num4, num5).toLocaleString();
};
document.getElementById("btnExecute_b3").onclick = function () {
    var usd = 0;
    if (document.getElementById("tbUSD").value.length > 0)
        usd = parseFloat(document.getElementById("tbUSD").value);
    document.getElementById("result_b3").innerHTML = new Intl.NumberFormat('vn-VN').format(funcConvertUsdToVnd(usd))+" VNĐ";
};
document.getElementById("btnExecute_b4").onclick = function () {
    var fWidth = 0, fHeight = 0;
    if (document.getElementById("tbChieuDai").value.length > 0)
        fWidth = parseFloat(document.getElementById("tbChieuDai").value);
    if (document.getElementById("tbChieuRong").value.length > 0)
        fHeight = parseFloat(document.getElementById("tbChieuRong").value);
    document.getElementById("result_b4").innerHTML = "Diện tích=" + funCalRectangleArea(fWidth, fHeight).toLocaleString() + " cm<sup>2</sup>, Chu vi=" + funCalRectanglePerimeter(fWidth, fHeight).toLocaleString() +" cm";
};
document.getElementById("btnExecute_b5").onclick = function () {
    var num=0;
    if (document.getElementById("tbSo").value.length > 0)
        num = parseFloat(document.getElementById("tbSo").value);
    document.getElementById("result_b5").innerHTML = funcCalSumNum(num).toLocaleString();
};