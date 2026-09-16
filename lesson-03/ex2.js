const chieuCao = 180;
if (100 < chieuCao && chieuCao < 200) {
    console.log(("Cân nặng tối đa: "   + (chieuCao - 100) + "kg"),
    ("Cân nặng lý tưởng: " +((chieuCao -100)*9/10) + "kg"),
    ("Cân nặng tối thiểu: " +((chieuCao -100)*8/10)+ "kg"));

}