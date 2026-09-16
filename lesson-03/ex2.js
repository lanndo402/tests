const chieuCao = 180;
if (100 < chieuCao && chieuCao < 200) {
    
    const soLe = chieuCao - 100;
    const canNangToiDa = soLe;
    const canNangLyTuong = soLe * 9 / 10;
    const canNangToiThieu = soLe * 8 / 10;

    console.log(("Cân nặng tối đa: "   + canNangToiDa + "kg"),
    ("Cân nặng lý tưởng: " + canNangLyTuong+ "kg"),
    ("Cân nặng tối thiểu: " + canNangToiThieu+ "kg"));
}