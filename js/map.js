var box;
var boxImg = './img/box.png';
var curMap;
var door;
var doorHideLeft = 256;
var doorHideRight = 288;
var doorHideY1 = 0;
var doorHideY2 = 32;
var doorImg = './img/door.png';
var dungeonImg = './img/dungeon.png';
var dungeonImg2 = './img/dungeon2.png';
var dungeonImg3 = './img/dungeon3.png';
var fieldImg = './img/field.png';
var fieldImg2 = './img/field2.png';
var fieldImg3 = './img/field3.png';
var forestImg = './img/forest.png';
var forestImg2 = './img/forest2.png';
var forestImg3 = './img/forest3.png';
var mapchip2;
var mapchip3;
var mapchipDungeon
var mapchipDungeon2;
var mapchipDungeon3;
var mapchipForest
var mapchipForest2;
var mapchipForest3;
var openBoxDisp1 = 0;
var openBoxDisp2 = 0;
var sea;
var seaImg = './img/sea.png';

// フィールド1枚目
var map = [
    ["FL79", "FL73", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90"],
    ["FL72", "FL19", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL90", "FL90", "FL90", "FL08", "FL10", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90"],
    ["FL72", "FL18", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL09", "FL11", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90"],
    ["FL72", "FL18", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL06", "FL02", "FL02", "FL07", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90"],
    ["FL72", "FL20", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL06", "FL02", "FL02", "FL07", "FL01", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90"],
    ["FL78", "FL71", "FL18", "FL01", "FL01", "FL01", "FL01", "FL01", "FL04", "FL01", "FL01", "FL06", "FL02", "FL02", "FL07", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90"],
    ["FL70", "FL72", "FL18", "FL01", "FL01", "FL01", "FL01", "FL01", "FL02", "FL01", "FL01", "FL06", "FL02", "FL02", "FL07", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL17", "FL01", "FL01", "FL01", "FL90"],
    ["FL70", "FL72", "FL18", "FL03", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL99"],
    ["FL70", "FL72", "FL18", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL02", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90"],
    ["FL70", "FL72", "FL18", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL02", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90"],
    ["FL79", "FL73", "FL18", "FL01", "FL01", "FL01", "FL21", "FL21", "FL21", "FL01", "FL02", "FL02", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90"],
    ["FL72", "FL19", "FL01", "FL01", "FL01", "FL23", "FL75", "FL74", "FL71", "FL18", "FL01", "FL02", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90"],
    ["FL72", "FL18", "FL01", "FL01", "FL01", "FL23", "FL76", "FL70", "FL72", "FL20", "FL01", "FL02", "FL02", "FL01", "FL90", "FL90", "FL90", "FL90", "FL01", "FL13", "FL15", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90"],
    ["FL72", "FL18", "FL01", "FL01", "FL01", "FL22", "FL76", "FL70", "FL78", "FL71", "FL18", "FL01", "FL02", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL14", "FL16", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90"],
    ["FL72", "FL18", "FL05", "FL01", "FL23", "FL75", "FL77", "FL70", "FL70", "FL72", "FL18", "FL01", "FL02", "FL02", "FL02", "FL01", "FL90", "FL01", "FL01", "FL02", "FL02", "FL01", "FL90", "FL90", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90"],
    ["FL72", "FL20", "FL01", "FL01", "FL23", "FL76", "FL70", "FL70", "FL70", "FL72", "FL20", "FL01", "FL01", "FL01", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90"],
    ["FL78", "FL71", "FL20", "FL21", "FL22", "FL76", "FL70", "FL70", "FL70", "FL78", "FL71", "FL18", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90"],
    ["FL70", "FL78", "FL74", "FL74", "FL74", "FL77", "FL70", "FL70", "FL70", "FL70", "FL72", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90"]
]

// フィールド2枚目
var map2 = [
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL91", "FL91", "FL01", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL91", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL91", "FL01", "FL01", "FL91", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL12", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL91", "FL01", "FL91", "FL01", "FL91", "FL01", "FL91", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL91", "FL91", "FL01"],
    ["FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL02", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01"],
    ["FL99", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL91", "FL91", "FL91", "FL91", "FL01", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"],
    ["FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL91", "FL91", "FL91", "FL01", "FL91", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL91", "FL01", "FL91", "FL01", "FL01", "FL01"],
    ["FL01", "FL91", "FL91", "FL91", "FL91", "FL91", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL91", "FL01", "FL91", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01"],
    ["FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL91", "FL01", "FL01", "FL91", "FL01", "FL91", "FL91", "FL91", "FL91", "FL91", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01"],
    ["FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL91", "FL91", "FL01", "FL01"],
    ["FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL91", "FL01", "FL91", "FL01"],
    ["FL01", "FL01", "FL01", "FL91", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01"],
    ["FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01"],
    ["FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL91", "FL01", "FL01", "FL01"],
    ["FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"]
]

// ダンジョン
var map3 = [
    ["DG94", "DG93", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG92", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94"],
    ["DG94", "DG05", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG08", "DG92", "DG93", "DG02", "DG92", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94"],
    ["DG93", "DG06", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG09", "DG08", "DG05", "DG03", "DG08", "DG92", "DG94", "DG93", "DG02", "DG02", "DG92", "DG94"],
    ["DG14", "DG07", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG10", "DG09", "DG06", "DG04", "DG09", "DG15", "DG93", "DG05", "DG03", "DG03", "DG08", "DG92"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG10", "DG07", "DG01", "DG10", "DG15", "DG14", "DG06", "DG04", "DG85", "DG09", "DG15"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG11", "DG12", "DG12", "DG12", "DG12", "DG12", "DG13", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG14", "DG07", "DG01", "DG86", "DG10", "DG15"],
    ["DG14", "DG01", "DG01", "DG11", "DG12", "DG12", "DG12", "DG13", "DG01", "DG01", "DG15", "DG94", "DG94", "DG94", "DG94", "DG94", "DG91", "DG12", "DG12", "DG12", "DG12", "DG12", "DG13", "DG01", "DG15", "DG14", "DG01", "DG01", "DG01", "DG01", "DG15"],
    ["DG14", "DG01", "DG01", "DG15", "DG94", "DG94", "DG94", "DG14", "DG01", "DG01", "DG08", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG92", "DG94", "DG93", "DG02", "DG02", "DG05", "DG01", "DG15", "DG14", "DG01", "DG01", "DG01", "DG01", "DG15"],
    ["DG14", "DG80", "DG82", "DG08", "DG92", "DG94", "DG94", "DG14", "DG01", "DG01", "DG09", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG08", "DG92", "DG14", "DG03", "DG03", "DG06", "DG01", "DG15", "DG14", "DG01", "DG01", "DG01", "DG01", "DG15"],
    ["DG14", "DG81", "DG83", "DG09", "DG08", "DG92", "DG94", "DG14", "DG01", "DG01", "DG10", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG09", "DG15", "DG14", "DG04", "DG04", "DG07", "DG01", "DG15", "DG14", "DG01", "DG01", "DG01", "DG11", "DG90"],
    ["DG14", "DG01", "DG01", "DG10", "DG09", "DG08", "DG92", "DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG10", "DG15", "DG14", "DG17", "DG01", "DG01", "DG01", "DG15", "DG14", "DG01", "DG01", "DG11", "DG90", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG10", "DG09", "DG15", "DG14", "DG01", "DG01", "DG11", "DG12", "DG12", "DG12", "DG12", "DG13", "DG01", "DG01", "DG15", "DG91", "DG12", "DG12", "DG12", "DG12", "DG90", "DG14", "DG01", "DG01", "DG15", "DG94", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG10", "DG15", "DG14", "DG01", "DG01", "DG15", "DG93", "DG02", "DG02", "DG02", "DG05", "DG01", "DG01", "DG08", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG05", "DG01", "DG11", "DG90", "DG94", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG14", "DG01", "DG01", "DG15", "DG14", "DG03", "DG03", "DG03", "DG06", "DG01", "DG01", "DG09", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG06", "DG01", "DG15", "DG94", "DG94", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG14", "DG01", "DG01", "DG15", "DG14", "DG04", "DG04", "DG04", "DG07", "DG01", "DG01", "DG10", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG07", "DG01", "DG15", "DG94", "DG94", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG14", "DG16", "DG01", "DG15", "DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG94", "DG94", "DG94"],
    ["DG14", "DG99", "DG99", "DG99", "DG99", "DG99", "DG15", "DG91", "DG12", "DG12", "DG90", "DG91", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG90", "DG94", "DG94", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94"]
]

// 森林1枚目
var map4 = [
    ["FT02", "FT03", "FT04", "FT05", "FT06", "FT07", "FT08", "FT09", "FT02", "FT03", "FT04", "FT05", "FT06", "FT07", "FT08", "FT09", "FT02", "FT03", "FT04", "FT05", "FT06", "FT07", "FT08", "FT09", "FT02", "FT03", "FT04", "FT05", "FT06", "FT07", "FT08"],
    ["FT12", "FT13", "FT14", "FT15", "FT16", "FT17", "FT18", "FT19", "FT12", "FT13", "FT14", "FT15", "FT16", "FT17", "FT18", "FT19", "FT12", "FT13", "FT14", "FT15", "FT16", "FT17", "FT18", "FT19", "FT12", "FT13", "FT14", "FT15", "FT16", "FT17", "FT18"],
    ["FT22", "FT23", "FT24", "FT25", "FT26", "FT27", "FT28", "FT29", "FT22", "FT23", "FT24", "FT25", "FT26", "FT27", "FT28", "FT29", "FT22", "FT23", "FT24", "FT25", "FT26", "FT27", "FT28", "FT29", "FT22", "FT23", "FT24", "FT25", "FT26", "FT27", "FT28"],
    ["FT32", "FT33", "FT34", "FT35", "FT36", "FT37", "FT38", "FT39", "FT32", "FT33", "FT34", "FT35", "FT36", "FT37", "FT38", "FT39", "FT32", "FT33", "FT34", "FT35", "FT36", "FT37", "FT38", "FT39", "FT32", "FT33", "FT34", "FT35", "FT36", "FT37", "FT38"],
    ["FT42", "FT43", "FT44", "FT45", "FT46", "FT47", "FT48", "FT49", "FT42", "FT43", "FT44", "FT45", "FT46", "FT47", "FT48", "FT49", "FT42", "FT43", "FT44", "FT45", "FT46", "FT47", "FT48", "FT49", "FT42", "FT43", "FT44", "FT45", "FT46", "FT47", "FT48"],
    ["FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT96", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01"],
    ["FT10", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT01", "FT01", "FT11", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10"],
    ["FT11", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT98"],
    ["FT01", "FT70", "FT73", "FT76", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01"],
    ["FT01", "FT71", "FT74", "FT77", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT01", "FT72", "FT75", "FT78", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT01", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53"],
    ["FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT01", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57"],
    ["FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT01", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61"],
    ["FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT99", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65"],
    ["FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT01", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69"]
]

// 森林2枚目
var map5 = [
    ["FT09", "FT02", "FT03", "FT04", "FT05", "FT06", "FT07", "FT08", "FT09", "FT02", "FT03", "FT04", "FT05", "FT06", "FT07", "FT08", "FT09", "FT02", "FT03", "FT04", "FT05", "FT06", "FT07", "FT08", "FT09", "FT02", "FT03", "FT04", "FT05", "FT06", "FT07"],
    ["FT19", "FT12", "FT13", "FT14", "FT15", "FT16", "FT17", "FT18", "FT19", "FT12", "FT13", "FT14", "FT15", "FT16", "FT17", "FT18", "FT19", "FT12", "FT13", "FT14", "FT15", "FT16", "FT17", "FT18", "FT19", "FT12", "FT13", "FT14", "FT15", "FT16", "FT17"],
    ["FT29", "FT22", "FT23", "FT24", "FT25", "FT26", "FT27", "FT28", "FT29", "FT22", "FT23", "FT24", "FT25", "FT26", "FT27", "FT28", "FT29", "FT22", "FT23", "FT24", "FT25", "FT26", "FT27", "FT28", "FT29", "FT22", "FT23", "FT24", "FT25", "FT26", "FT27"],
    ["FT39", "FT32", "FT33", "FT34", "FT35", "FT36", "FT37", "FT38", "FT39", "FT32", "FT33", "FT34", "FT35", "FT36", "FT37", "FT38", "FT39", "FT32", "FT33", "FT34", "FT35", "FT36", "FT37", "FT38", "FT39", "FT32", "FT33", "FT34", "FT35", "FT36", "FT37"],
    ["FT49", "FT42", "FT43", "FT44", "FT45", "FT46", "FT47", "FT48", "FT49", "FT42", "FT43", "FT44", "FT45", "FT46", "FT47", "FT48", "FT49", "FT42", "FT43", "FT44", "FT45", "FT46", "FT47", "FT48", "FT49", "FT42", "FT43", "FT44", "FT45", "FT46", "FT47"],
    ["FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10"],
    ["FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10"],
    ["FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10"],
    ["FT97", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10"],
    ["FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10"],
    ["FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10"],
    ["FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10"],
    ["FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT10"],
    ["FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52"],
    ["FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56"],
    ["FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60"],
    ["FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64"],
    ["FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68"]
]

// 森林3枚目
var map6 = [
    ["FT03", "FT04", "FT05", "FT06", "FT07", "FT08", "FT09", "FT02", "FT03", "FT04", "FT05", "FT06", "FT07", "FT08", "FT09", "FT02", "FT03", "FT04", "FT05", "FT06", "FT07", "FT08", "FT09", "FT02", "FT03", "FT04", "FT05", "FT06", "FT07", "FT08", "FT09"],
    ["FT13", "FT14", "FT15", "FT16", "FT17", "FT18", "FT19", "FT12", "FT13", "FT14", "FT15", "FT16", "FT17", "FT18", "FT19", "FT12", "FT13", "FT14", "FT15", "FT16", "FT17", "FT18", "FT19", "FT12", "FT13", "FT14", "FT15", "FT16", "FT17", "FT18", "FT19"],
    ["FT23", "FT24", "FT25", "FT26", "FT27", "FT28", "FT29", "FT22", "FT23", "FT24", "FT25", "FT26", "FT27", "FT28", "FT29", "FT22", "FT23", "FT24", "FT25", "FT26", "FT27", "FT28", "FT29", "FT22", "FT23", "FT24", "FT25", "FT26", "FT27", "FT28", "FT29"],
    ["FT33", "FT34", "FT35", "FT36", "FT37", "FT38", "FT39", "FT32", "FT33", "FT34", "FT35", "FT36", "FT37", "FT38", "FT39", "FT32", "FT33", "FT34", "FT35", "FT36", "FT37", "FT38", "FT39", "FT32", "FT33", "FT34", "FT35", "FT36", "FT37", "FT38", "FT39"],
    ["FT43", "FT44", "FT45", "FT46", "FT47", "FT48", "FT49", "FT42", "FT43", "FT44", "FT45", "FT46", "FT47", "FT48", "FT49", "FT42", "FT43", "FT44", "FT45", "FT46", "FT47", "FT48", "FT49", "FT42", "FT43", "FT44", "FT45", "FT46", "FT47", "FT48", "FT49"],
    ["FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT95"],
    ["FT10", "FT01", "FT01", "FT80", "FT81", "FT82", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT10", "FT01", "FT01", "FT83", "FT84", "FT85", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT10", "FT01", "FT01", "FT86", "FT87", "FT88", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT10", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01", "FT01"],
    ["FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51", "FT52", "FT53", "FT50", "FT51"],
    ["FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55", "FT56", "FT57", "FT54", "FT55"],
    ["FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59", "FT60", "FT61", "FT58", "FT59"],
    ["FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63", "FT64", "FT65", "FT62", "FT63"],
    ["FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67", "FT68", "FT69", "FT66", "FT67"]
]

/**
 * マップ描画処理
 */
function drawMap(ctx) {
    curMap[y] = [];
    for (var y = 0; y < curMap.length; y++) {
        for (var x = 0; x < curMap[y].length; x++) {
            /*------------------------------ フィールドオブジェクト ------------------------------*/
            if (curMap[y][x] === "FL01") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // 草原
            if (curMap[y][x] === "FL02") ctx.drawImage(mapchip2, 192, 192, 32, 32, 32*x, 32*y, 32, 32);         // 道
            if (curMap[y][x] === "FL03") ctx.drawImage(mapchip2, 192, 192, 32, 32, 32*x, 32*y, 32, 32);         // 小屋(地面)
            if (curMap[y][x] === "FL03") ctx.drawImage(mapchip3, 128, 0, 32, 32, 32*x, 32*y, 32, 32);           // 小屋
            if (curMap[y][x] === "FL04") ctx.drawImage(mapchip, 192, 352, 32, 32, 32*x, 32*y, 32, 32);          // 教会
            if (curMap[y][x] === "FL05") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // 木(地面)
            if (curMap[y][x] === "FL05") ctx.drawImage(mapchip3, 128, 32, 32, 32, 32*x, 32*y, 32, 32);          // 木
            if (curMap[y][x] === "FL06") ctx.drawImage(mapchip, 192, 384, 32, 32, 32*x, 32*y, 32, 32);          // 家(青)
            if (curMap[y][x] === "FL07") ctx.drawImage(mapchip, 160, 384, 32, 32, 32*x, 32*y, 32, 32);          // 家(赤)
            if (curMap[y][x] === "FL08") ctx.drawImage(mapchip, 0, 448, 64, 32, 32*x, 32*y, 32, 32);            // 大きい家(左上)
            if (curMap[y][x] === "FL09") ctx.drawImage(mapchip, 0, 480, 32, 32, 32*x, 32*y, 32, 32);            // 大きい家(左下)
            if (curMap[y][x] === "FL10") ctx.drawImage(mapchip, 32, 448, 32, 32, 32*x, 32*y, 32, 32);           // 大きい家(右上)
            if (curMap[y][x] === "FL11") ctx.drawImage(mapchip, 32, 480, 32, 32, 32*x, 32*y, 32, 32);           // 大きい家(右下)
            if (curMap[y][x] === "FL12") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // ダンジョン(地面)
            if (curMap[y][x] === "FL12") ctx.drawImage(mapchip3, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // ダンジョン
            if (curMap[y][x] === "FL13") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // 森(地面)
            if (curMap[y][x] === "FL13") ctx.drawImage(mapchip2, 256, 128, 32, 32, 32*x, 32*y, 32, 32);         // 森(左上)
            if (curMap[y][x] === "FL14") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // 森(地面)
            if (curMap[y][x] === "FL14") ctx.drawImage(mapchip2, 256, 160, 32, 32, 32*x, 32*y, 32, 32);         // 森(左下)
            if (curMap[y][x] === "FL15") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // 森(地面)
            if (curMap[y][x] === "FL15") ctx.drawImage(mapchip2, 288, 128, 32, 32, 32*x, 32*y, 32, 32);         // 森(右上)
            if (curMap[y][x] === "FL16") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // 森(地面)
            if (curMap[y][x] === "FL16") ctx.drawImage(mapchip2, 288, 160, 32, 32, 32*x, 32*y, 32, 32);         // 森(右下)
            if (curMap[y][x] === "FL17") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // 看板(地面)
            if (curMap[y][x] === "FL17") ctx.drawImage(mapchip3, 32, 0, 32, 32, 32*x, 32*y, 32, 32);            // 看板
            if (curMap[y][x] === "FL99") ctx.drawImage(mapchip2, 192, 192, 32, 32, 32*x, 32*y, 32, 32);         // 道(MAP切り替え)

            if (curMap[y][x] === "FL90") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // 緑の山(地面)
            if (curMap[y][x] === "FL90") ctx.drawImage(mapchip2, 320, 192, 32, 32, 32*x, 32*y, 32, 32);         // 緑の山
            if (curMap[y][x] === "FL91") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // 茶色の山(地面)
            if (curMap[y][x] === "FL91") ctx.drawImage(mapchip2, 384, 192, 32, 32, 32*x, 32*y, 32, 32);         // 茶色の山

            if (curMap[y][x] === "FL18") ctx.drawImage(mapchip2, 132, 44, 32, 32, 32*x, 32*y, 32, 32);            // 波際
            if (curMap[y][x] === "FL19") ctx.drawImage(mapchip2, 132, 34, 32, 32, 32*x, 32*y, 32, 32);            // 波際
            if (curMap[y][x] === "FL20") ctx.drawImage(mapchip2, 132, 58, 32, 32, 32*x, 32*y, 32, 32);            // 波際
            if (curMap[y][x] === "FL21") ctx.drawImage(mapchip2, 140, 58, 32, 32, 32*x, 32*y, 32, 32);            // 波際
            if (curMap[y][x] === "FL22") ctx.drawImage(mapchip2, 160, 58, 32, 32, 32*x, 32*y, 32, 32);            // 波際
            if (curMap[y][x] === "FL23") ctx.drawImage(mapchip2, 158, 44, 32, 32, 32*x, 32*y, 32, 32);            // 波際

            if (curMap[y][x] === "FL70") ctx.drawImage(sea, 18, 42, 32, 32, 32*x, 32*y, 32, 32);           // 海
            if (curMap[y][x] === "FL71") ctx.drawImage(sea, 32, 32, 32, 32, 32*x, 32*y, 32, 32);           // 海
            if (curMap[y][x] === "FL72") ctx.drawImage(sea, 32, 44, 32, 32, 32*x, 32*y, 32, 32);           // 海
            if (curMap[y][x] === "FL73") ctx.drawImage(sea, 32, 64, 32, 32, 32*x, 32*y, 32, 32);           // 海
            if (curMap[y][x] === "FL74") ctx.drawImage(sea, 18, 32, 32, 32, 32*x, 32*y, 32, 32);           // 海
            if (curMap[y][x] === "FL75") ctx.drawImage(sea, 0, 32, 32, 32, 32*x, 32*y, 32, 32);           // 海
            if (curMap[y][x] === "FL76") ctx.drawImage(sea, 0, 44, 32, 32, 32*x, 32*y, 32, 32);           // 海
            if (curMap[y][x] === "FL77") ctx.drawImage(sea, 34, 0, 20, 24, 32*x, 32*y, 32, 32);           // 海
            if (curMap[y][x] === "FL78") ctx.drawImage(sea, 42, 0, 20, 24, 32*x, 32*y, 32, 32);           // 海
            if (curMap[y][x] === "FL79") ctx.drawImage(sea, 42, 6, 20, 24, 32*x, 32*y, 32, 32);           // 海

            /*------------------------------ 森林オブジェクト ------------------------------*/
            if (curMap[y][x] === "FT01") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 森林地面
            if (curMap[y][x] === "FT95") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 森林地面(MAP切り替え)
            if (curMap[y][x] === "FT96") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 森林地面(MAP切り替え)
            if (curMap[y][x] === "FT97") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 森林地面(MAP切り替え)
            if (curMap[y][x] === "FT98") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 森林地面(MAP切り替え)
            if (curMap[y][x] === "FT99") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 森林地面(MAP切り替え)
            if (curMap[y][x] === "FT02") ctx.drawImage(mapchipForest2, 6, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT03") ctx.drawImage(mapchipForest2, 32, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT04") ctx.drawImage(mapchipForest2, 64, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT05") ctx.drawImage(mapchipForest2, 96, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT06") ctx.drawImage(mapchipForest2, 128, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT07") ctx.drawImage(mapchipForest2, 160, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT08") ctx.drawImage(mapchipForest2, 192, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT09") ctx.drawImage(mapchipForest2, 224, 0, 32, 32, 32*x, 32*y, 40, 32);       // 木
            if (curMap[y][x] === "FT10") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 小さい草(地面)
            if (curMap[y][x] === "FT10") ctx.drawImage(mapchipForest3, 0, 224, 32, 32, 32*x, 32*y, 32, 32);       // 小さい草
            if (curMap[y][x] === "FT11") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 石(地面)
            if (curMap[y][x] === "FT11") ctx.drawImage(mapchipForest3, 0, 256, 32, 32, 32*x, 32*y, 32, 32);       // 石

            if (curMap[y][x] === "FT12") ctx.drawImage(mapchipForest2, 6, 32, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT13") ctx.drawImage(mapchipForest2, 32, 32, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT14") ctx.drawImage(mapchipForest2, 64, 32, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT15") ctx.drawImage(mapchipForest2, 96, 32, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT16") ctx.drawImage(mapchipForest2, 128, 32, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT17") ctx.drawImage(mapchipForest2, 160, 32, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT18") ctx.drawImage(mapchipForest2, 192, 32, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT19") ctx.drawImage(mapchipForest2, 224, 32, 32, 32, 32*x, 32*y, 40, 32);       // 木

            if (curMap[y][x] === "FT22") ctx.drawImage(mapchipForest2, 6, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT23") ctx.drawImage(mapchipForest2, 32, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT24") ctx.drawImage(mapchipForest2, 64, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT25") ctx.drawImage(mapchipForest2, 96, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT26") ctx.drawImage(mapchipForest2, 128, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT27") ctx.drawImage(mapchipForest2, 160, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT28") ctx.drawImage(mapchipForest2, 192, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT29") ctx.drawImage(mapchipForest2, 224, 64, 32, 32, 32*x, 32*y, 40, 32);       // 木

            if (curMap[y][x] === "FT32") ctx.drawImage(mapchipForest2, 6, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT33") ctx.drawImage(mapchipForest2, 32, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT34") ctx.drawImage(mapchipForest2, 64, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT35") ctx.drawImage(mapchipForest2, 96, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT36") ctx.drawImage(mapchipForest2, 128, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT37") ctx.drawImage(mapchipForest2, 160, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT38") ctx.drawImage(mapchipForest2, 192, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT39") ctx.drawImage(mapchipForest2, 224, 96, 32, 32, 32*x, 32*y, 40, 32);       // 木

            if (curMap[y][x] === "FT42") ctx.drawImage(mapchipForest2, 6, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT43") ctx.drawImage(mapchipForest2, 32, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT44") ctx.drawImage(mapchipForest2, 64, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT45") ctx.drawImage(mapchipForest2, 96, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT46") ctx.drawImage(mapchipForest2, 128, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT47") ctx.drawImage(mapchipForest2, 160, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT48") ctx.drawImage(mapchipForest2, 192, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT49") ctx.drawImage(mapchipForest2, 224, 128, 32, 32, 32*x, 32*y, 40, 32);       // 木

            if (curMap[y][x] === "FT50") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT50") ctx.drawImage(mapchipForest3, 0, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT51") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT51") ctx.drawImage(mapchipForest3, 32, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT52") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT52") ctx.drawImage(mapchipForest3, 64, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT53") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT53") ctx.drawImage(mapchipForest3, 96, 64, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT54") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT54") ctx.drawImage(mapchipForest3, 0, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT55") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT55") ctx.drawImage(mapchipForest3, 32, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT56") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT56") ctx.drawImage(mapchipForest3, 64, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT57") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT57") ctx.drawImage(mapchipForest3, 96, 96, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT58") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT58") ctx.drawImage(mapchipForest3, 0, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT59") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT59") ctx.drawImage(mapchipForest3, 32, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT60") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT60") ctx.drawImage(mapchipForest3, 64, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT61") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT61") ctx.drawImage(mapchipForest3, 96, 128, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT62") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT62") ctx.drawImage(mapchipForest3, 0, 160, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT63") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT63") ctx.drawImage(mapchipForest3, 32, 160, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT64") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT64") ctx.drawImage(mapchipForest3, 64, 160, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT65") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT65") ctx.drawImage(mapchipForest3, 96, 160, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT66") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT66") ctx.drawImage(mapchipForest3, 0, 192, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT67") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT67") ctx.drawImage(mapchipForest3, 32, 192, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT68") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT68") ctx.drawImage(mapchipForest3, 64, 192, 32, 32, 32*x, 32*y, 32, 32);       // 木
            if (curMap[y][x] === "FT69") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 木(地面)
            if (curMap[y][x] === "FT69") ctx.drawImage(mapchipForest3, 96, 192, 32, 32, 32*x, 32*y, 32, 32);       // 木

            if (curMap[y][x] === "FT70") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草(地面)
            if (curMap[y][x] === "FT70") ctx.drawImage(mapchipForest3, 256, 352, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草左上部
            if (curMap[y][x] === "FT71") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草(地面)
            if (curMap[y][x] === "FT71") ctx.drawImage(mapchipForest3, 256, 384, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草左中部
            if (curMap[y][x] === "FT72") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草(地面)
            if (curMap[y][x] === "FT72") ctx.drawImage(mapchipForest3, 256, 416, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草左下部
            if (curMap[y][x] === "FT73") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草(地面)
            if (curMap[y][x] === "FT73") ctx.drawImage(mapchipForest3, 288, 352, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草中央上部
            if (curMap[y][x] === "FT74") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草(地面)
            if (curMap[y][x] === "FT74") ctx.drawImage(mapchipForest3, 288, 384, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草中央中部
            if (curMap[y][x] === "FT75") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草上(地面)
            if (curMap[y][x] === "FT75") ctx.drawImage(mapchipForest3, 288, 416, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草中央下部
            if (curMap[y][x] === "FT76") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草(地面)
            if (curMap[y][x] === "FT76") ctx.drawImage(mapchipForest3, 320, 352, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草右上部
            if (curMap[y][x] === "FT77") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草(地面)
            if (curMap[y][x] === "FT77") ctx.drawImage(mapchipForest3, 320, 384, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草右中部
            if (curMap[y][x] === "FT78") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草上(地面)
            if (curMap[y][x] === "FT78") ctx.drawImage(mapchipForest3, 320, 416, 32, 32, 32*x, 32*y, 32, 32);       // 大きい草右下部

            if (curMap[y][x] === "FT80") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木(地面)
            if (curMap[y][x] === "FT80") ctx.drawImage(mapchipForest3, 416, 352, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木
            if (curMap[y][x] === "FT81") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木(地面)
            if (curMap[y][x] === "FT81") ctx.drawImage(mapchipForest3, 448, 352, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木
            if (curMap[y][x] === "FT82") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木(地面)
            if (curMap[y][x] === "FT82") ctx.drawImage(mapchipForest3, 480, 352, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木
            if (curMap[y][x] === "FT83") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木(地面)
            if (curMap[y][x] === "FT83") ctx.drawImage(mapchipForest3, 416, 384, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木
            if (curMap[y][x] === "FT84") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木(地面)
            if (curMap[y][x] === "FT84") ctx.drawImage(mapchipForest3, 448, 384, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木
            if (curMap[y][x] === "FT85") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木(地面)
            if (curMap[y][x] === "FT85") ctx.drawImage(mapchipForest3, 480, 384, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木
            if (curMap[y][x] === "FT86") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木(地面)
            if (curMap[y][x] === "FT86") ctx.drawImage(mapchipForest3, 416, 416, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木
            if (curMap[y][x] === "FT87") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木(地面)
            if (curMap[y][x] === "FT87") ctx.drawImage(mapchipForest3, 448, 416, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木
            if (curMap[y][x] === "FT88") ctx.drawImage(mapchipForest, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木(地面)
            if (curMap[y][x] === "FT88") ctx.drawImage(mapchipForest3, 480, 416, 32, 32, 32*x, 32*y, 32, 32);       // 小さい木

            /*------------------------------ ダンジョンオブジェクト ------------------------------*/
            if (curMap[y][x] === "DG01") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // ダンジョン地面
            if (curMap[y][x] === "DG02") ctx.drawImage(mapchipDungeon2, 32, 64, 32, 32, 32*x, 32*y, 32, 32);    // 壁(正面)上部
            if (curMap[y][x] === "DG03") ctx.drawImage(mapchipDungeon2, 32, 96, 32, 32, 32*x, 32*y, 32, 32);    // 壁(正面)中部
            if (curMap[y][x] === "DG04") ctx.drawImage(mapchipDungeon2, 32, 128, 32, 32, 32*x, 32*y, 32, 32);   // 壁(正面)下部
            if (curMap[y][x] === "DG05") ctx.drawImage(mapchipDungeon2, 64, 64, 32, 32, 32*x, 32*y, 32, 32);    // 壁(右端)上部
            if (curMap[y][x] === "DG06") ctx.drawImage(mapchipDungeon2, 64, 96, 32, 32, 32*x, 32*y, 32, 32);    // 壁(右端)中部
            if (curMap[y][x] === "DG07") ctx.drawImage(mapchipDungeon2, 64, 128, 32, 32, 32*x, 32*y, 32, 32);   // 壁(右端)下部
            if (curMap[y][x] === "DG08") ctx.drawImage(mapchipDungeon2, 0, 64, 32, 32, 32*x, 32*y, 32, 32);     // 壁(左端)上部
            if (curMap[y][x] === "DG09") ctx.drawImage(mapchipDungeon2, 0, 96, 32, 32, 32*x, 32*y, 32, 32);     // 壁(左端)中部
            if (curMap[y][x] === "DG10") ctx.drawImage(mapchipDungeon2, 0, 128, 32, 32, 32*x, 32*y, 32, 32);    // 壁(左端)下部
            if (curMap[y][x] === "DG11") ctx.drawImage(mapchipDungeon2, 0, 0, 32, 32, 32*x, 32*y, 32, 32);      // 壁(背面)左端
            if (curMap[y][x] === "DG12") ctx.drawImage(mapchipDungeon2, 32, 0, 32, 32, 32*x, 32*y, 32, 32);     // 壁(背面)中央
            if (curMap[y][x] === "DG13") ctx.drawImage(mapchipDungeon2, 64, 0, 32, 32, 32*x, 32*y, 32, 32);     // 壁(背面)右端
            if (curMap[y][x] === "DG14") ctx.drawImage(mapchipDungeon2, 64, 32, 32, 32, 32*x, 32*y, 32, 32);    // 壁(左)
            if (curMap[y][x] === "DG15") ctx.drawImage(mapchipDungeon2, 0, 32, 32, 32, 32*x, 32*y, 32, 32);     // 壁(右)
            if (curMap[y][x] === "DG90") ctx.drawImage(mapchipDungeon2, 192, 0, 32, 32, 32*x, 32*y, 32, 32);    // 黒塗り(左上)
            if (curMap[y][x] === "DG91") ctx.drawImage(mapchipDungeon2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);    // 黒塗り(右上)
            if (curMap[y][x] === "DG92") ctx.drawImage(mapchipDungeon2, 192, 32, 32, 32, 32*x, 32*y, 32, 32);   // 黒塗り(左下)
            if (curMap[y][x] === "DG93") ctx.drawImage(mapchipDungeon2, 224, 32, 32, 32, 32*x, 32*y, 32, 32);   // 黒塗り(右下)
            if (curMap[y][x] === "DG94") ctx.drawImage(mapchipDungeon2, 32, 32, 32, 32, 32*x, 32*y, 32, 32);    // 黒塗り
            if (curMap[y][x] === "DG99") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // ダンジョン地面(MAP切り替え)
            if (curMap[y][x] === "DG16") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 宝箱（地面）
            if (curMap[y][x] === "DG16") ctx.drawImage(box, 0, openBoxDisp1, 32, 32, 32*x, 32*y, 32, 32);                  // 宝箱
            if (curMap[y][x] === "DG17") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 宝箱（地面）
            if (curMap[y][x] === "DG17") ctx.drawImage(box, 0, openBoxDisp2, 32, 32, 32*x, 32*y, 32, 32);                  // 宝箱

            if (curMap[y][x] === "DG80") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 扉左上(地面)
            if (curMap[y][x] === "DG80") ctx.drawImage(door, doorHideLeft, doorHideY1, 32, 32, 24*x, 32*y, 40, 32);               // 扉左上
            if (curMap[y][x] === "DG81") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 扉左下(地面)
            if (curMap[y][x] === "DG81") ctx.drawImage(door, doorHideLeft, doorHideY2, 32, 32, 24*x, 32*y, 40, 32);              // 扉左下
            if (curMap[y][x] === "DG82") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 扉右上(地面)
            if (curMap[y][x] === "DG82") ctx.drawImage(door, doorHideRight, doorHideY1, 32, 32, 32*x, 32*y, 40, 32);               // 扉右上
            if (curMap[y][x] === "DG83") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // 扉右下(地面)
            if (curMap[y][x] === "DG83") ctx.drawImage(door, doorHideRight, doorHideY2, 32, 32, 32*x, 32*y, 40, 32);              // 扉右下
            if (curMap[y][x] === "DG85") ctx.drawImage(mapchipDungeon2, 32, 128, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "DG85") ctx.drawImage(mapchipDungeon3, 256, 320, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "DG86") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "DG86") ctx.drawImage(mapchipDungeon3, 256, 352, 32, 32, 32*x, 32*y, 32, 32);
        }
    }
}

/**
 * マップ画像読み込み処理
 */
function loadMapImage() {
    // マップ画像読み込み
    mapchip = new Image();
    mapchip.src = fieldImg;
    mapchip2 = new Image();
    mapchip2.src = fieldImg2;
    mapchip3 = new Image();
    mapchip3.src = fieldImg3;
    sea = new Image();
    sea.src = seaImg;
    mapchipDungeon = new Image();
    mapchipDungeon.src = dungeonImg;
    mapchipDungeon2 = new Image();
    mapchipDungeon2.src = dungeonImg2;
    mapchipDungeon3 = new Image();
    mapchipDungeon3.src = dungeonImg3;
    mapchipForest = new Image();
    mapchipForest.src = forestImg;
    mapchipForest2 = new Image();
    mapchipForest2.src = forestImg2;
    mapchipForest3 = new Image();
    mapchipForest3.src = forestImg3;
    // オブジェクト画像読み込み
    box = new Image();
    box.src = boxImg;
    door = new Image();
    door.src = doorImg;
}

function mapEvent(y, x) {
    if (curMap === map) {
        // 小屋
        if (curMap[y][x] === "FL03") {
            message = "そういえば　誰かが南の木の下に　なにか埋めてたなあ";
        }
        // 木
        if (curMap[y][x] === "FL05") {
            message = "わたしは木の精霊　あなたが探しているものは東の森にあります";
        }
        // 屋敷
        if (curMap[y][x] === "FL09" || curMap[y][x] === "FL11") {
            message = "まだイベントは実装されてないよ！！！";
        }
        // マップ移動
        if (curMap[y][x] === "FL13" || curMap[y][x] === "FL14" || curMap[y][x] === "FL15" || curMap[y][x] === "FL16") {
            // 音楽の切り替え
            $('#field-bgm').get(0).pause();
            $('#field-bgm').get(0).currentTime = 0;
            $('#forest-bgm').get(0).play();
            curMap = map4;
            pos_x = 448;
            pos_y = 480;
            changeAngleUp();
        }
        // マップ移動
        if (curMap[y][x] === "FL99") {
            curMap = map2;
            pos_x = 32;
            pos_y = 224;
        }
        // HPとMP全回復
        if (curMap[y][x] === "FL04") {
            message = 'HPとMPが回復した！';
            // 回復効果音
            $('#cure-se').get(0).play();
            myHp = myMhp;
            myMp = myMmp;
        }
        if (curMap[y][x] === "FL17") {
            message = "この先ダンジョンあり　キケンだよ！";
        }
    } else if (curMap === map2) {
        // マップ移動
        if (curMap[y][x] === "FL99") {
            curMap = map;
            pos_x = 928;
            pos_y = 224;
        }
        // マップ移動
        if (curMap[y][x] === "FL12") {
            // 音楽の切り替え
            $('#field-bgm').get(0).pause();
            $('#field-bgm').get(0).currentTime = 0;
            $('#dungeon-bgm').get(0).play();
            curMap = map3;
            pos_x = 32;
            pos_y = 480;
            changeAngleUp();
        }
    } else if (curMap === map3) {
        // マップ移動
        if (curMap[y][x] === "DG99") {
            // 音楽の切り替え
            $('#dungeon-bgm').get(0).pause();
            $('#dungeon-bgm').get(0).currentTime = 0;
            $('#field-bgm').get(0).play();
            curMap = map2;
            pos_x = 224;
            pos_y = 192;
            changeAngleDown();
        }
        // 扉（カギがないとき）
        if (haveKeyFlg === 0 && (curMap[y][x] === "DG81" || curMap[y][x] === "DG83")) {
            message = "扉はかたく閉ざされている";
        }
        // 扉（カギがあるとき）
        if (haveKeyFlg === 1 && (curMap[y][x] === "DG81" || curMap[y][x] === "DG83")) {
            message = "扉が開いた！";
            $('#door-se').get(0).play();
            doorHideLeft = 576;
            doorHideRight = 576;
            doorHideY1 = 256;
            doorHideY2 = 256;
            haveKeyFlg = 2;
        }
        // 宝箱
        if (openBoxFlg1 === 0 && curMap[y][x] === "DG16") {
            openBoxEvent("openBoxFlg1");
        }
        // 宝箱
        if (openBoxFlg2 === 0 && curMap[y][x] === "DG17") {
            openBoxEvent("openBoxFlg2");
        }
        // ボス戦
        if (battleBossFlg === 0 && pos_x === 832 && pos_y === 384) {
            battleBossFlg = 1;
            // エンカウント処理
            encount();
            pos_x = 832;
            pos_y = 416;
        }
        // ゴール
        if (battleBossFlg === 2 && curMap[y][x] === "DG86") {
            message = "ゲームクリア　おめでとう！！";
            $('#dungeon-bgm').get(0).pause();
            $('#dungeon-bgm').get(0).currentTime = 0;
            $('#clear-se').get(0).play();
        }
    } else if (curMap === map4) {
        // マップ移動
        if (curMap[y][x] === "FT96") {
            curMap = map6;
            pos_x = 928;
            pos_y = 192;
        }
        // マップ移動
        if (curMap[y][x] === "FT98") {
            curMap = map5;
            pos_x = 32;
            pos_y = 256;
        }
        // マップ移動
        if (curMap[y][x] === "FT99") {
            // 音楽の切り替え
            $('#forest-bgm').get(0).pause();
            $('#forest-bgm').get(0).currentTime = 0;
            $('#field-bgm').get(0).play();
            curMap = map;
            pos_x = 608;
            pos_y = 448;
            changeAngleDown();
        }
    } else if (curMap === map5) {
        // マップ移動
        if (curMap[y][x] === "FT97") {
            curMap = map4;
            pos_x = 928;
            pos_y = 288;
        }
    } else if (curMap === map6) {
        // 扉（カギがあるとき）
        if (haveKeyFlg === 0 && curMap[y][x] === "FT87") {
            message = "カギをみつけた！";
            $('#box-se').get(0).play();
            haveKeyFlg = 1;
        }
        // マップ移動
        if (curMap[y][x] === "FT95") {
            curMap = map4;
            pos_x = 32;
            pos_y = 192;
        }
    }
}

/**
 * 宝箱を開けた時のイベント
 */
function openBoxEvent(flg) {
    message = "おたから発見！";
    $('#box-se').get(0).play();
  　if (flg === "openBoxFlg1") {
        openBoxFlg1 = 1;
        openBoxDisp1 = 96;
    } else if (flg === "openBoxFlg2") {
        openBoxFlg2 = 1;
        openBoxDisp2 = 96;
    }
}
