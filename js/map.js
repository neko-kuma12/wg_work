var box;
var boxImg = './img/box.png';
var curMap;
var door;
var doorImg = './img/door.png';
var dungeonImg = './img/dungeon.png';
var dungeonImg2 = './img/dungeon2.png';
var dungeonImg3 = './img/dungeon3.png';
var fieldImg = './img/field.png';
var fieldImg2 = './img/field2.png';
var fieldImg3 = './img/field3.png';
var mapchip;
var mapchip2;
var mapchip3;
var mapchipDungeon
var mapchipDungeon2;
var mapchipDungeon3;
var sea;
var seaImg = './img/sea.png';

var map = [
    ["FL70", "FL73", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90"],
    ["FL72", "FL19", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL90", "FL90", "FL90", "FL08", "FL10", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90"],
    ["FL72", "FL18", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL09", "FL11", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90"],
    ["FL72", "FL18", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL06", "FL02", "FL02", "FL07", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90"],
    ["FL72", "FL20", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL06", "FL02", "FL02", "FL07", "FL01", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90"],
    ["FL70", "FL71", "FL18", "FL01", "FL01", "FL01", "FL01", "FL01", "FL04", "FL01", "FL01", "FL06", "FL02", "FL02", "FL07", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90"],
    ["FL70", "FL72", "FL18", "FL01", "FL01", "FL01", "FL01", "FL01", "FL02", "FL01", "FL01", "FL06", "FL02", "FL02", "FL07", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL17", "FL01", "FL01", "FL01", "FL90"],
    ["FL70", "FL72", "FL18", "FL03", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL99"],
    ["FL70", "FL72", "FL18", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL02", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90"],
    ["FL70", "FL72", "FL18", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL02", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90"],
    ["FL70", "FL73", "FL18", "FL01", "FL01", "FL01", "FL21", "FL21", "FL21", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL02", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90"],
    ["FL72", "FL19", "FL01", "FL01", "FL01", "FL23", "FL75", "FL74", "FL71", "FL18", "FL01", "FL01", "FL01", "FL02", "FL02", "FL02", "FL01", "FL90", "FL01", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90"],
    ["FL72", "FL18", "FL01", "FL01", "FL01", "FL23", "FL76", "FL70", "FL72", "FL20", "FL01", "FL01", "FL01", "FL02", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90"],
    ["FL72", "FL18", "FL01", "FL01", "FL01", "FL22", "FL76", "FL70", "FL70", "FL71", "FL18", "FL01", "FL01", "FL02", "FL01", "FL01", "FL90", "FL01", "FL01", "FL13", "FL15", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90"],
    ["FL72", "FL18", "FL05", "FL01", "FL23", "FL75", "FL70", "FL70", "FL70", "FL72", "FL18", "FL01", "FL01", "FL02", "FL02", "FL01", "FL01", "FL01", "FL01", "FL14", "FL16", "FL01", "FL90", "FL90", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90"],
    ["FL72", "FL20", "FL01", "FL01", "FL23", "FL76", "FL70", "FL70", "FL70", "FL72", "FL20", "FL01", "FL01", "FL01", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90"],
    ["FL70", "FL71", "FL20", "FL21", "FL22", "FL76", "FL70", "FL70", "FL70", "FL70", "FL71", "FL18", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90"],
    ["FL70", "FL70", "FL74", "FL74", "FL74", "FL70", "FL70", "FL70", "FL70", "FL70", "FL72", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90"]
]

var map2 = [
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL01", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL90", "FL01", "FL01", "FL90", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL12", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL90", "FL01", "FL90", "FL01", "FL90", "FL01", "FL90", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL90", "FL01"],
    ["FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL02", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01"],
    ["FL99", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL02", "FL01", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01"],
    ["FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"],
    ["FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL90", "FL90", "FL90", "FL01", "FL90", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL90", "FL01", "FL90", "FL01", "FL01", "FL01"],
    ["FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL01", "FL90", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01"],
    ["FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL90", "FL01", "FL01", "FL90", "FL01", "FL90", "FL90", "FL90", "FL90", "FL90", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01"],
    ["FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL90", "FL01", "FL01"],
    ["FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL01", "FL90", "FL01"],
    ["FL01", "FL01", "FL01", "FL90", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01"],
    ["FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01"],
    ["FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL90", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"],
    ["FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01", "FL01"]
]

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
    ["DG14", "DG01", "DG01", "DG10", "DG09", "DG08", "DG92", "DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG10", "DG15", "DG14", "DG16", "DG01", "DG01", "DG01", "DG15", "DG14", "DG01", "DG01", "DG11", "DG90", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG10", "DG09", "DG15", "DG14", "DG01", "DG01", "DG11", "DG12", "DG12", "DG12", "DG12", "DG13", "DG01", "DG01", "DG15", "DG91", "DG12", "DG12", "DG12", "DG12", "DG90", "DG14", "DG01", "DG01", "DG15", "DG94", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG10", "DG15", "DG14", "DG01", "DG01", "DG15", "DG93", "DG02", "DG02", "DG02", "DG05", "DG01", "DG01", "DG08", "DG02", "DG02", "DG02", "DG02", "DG02", "DG02", "DG05", "DG01", "DG11", "DG90", "DG94", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG14", "DG01", "DG01", "DG15", "DG14", "DG03", "DG03", "DG03", "DG06", "DG01", "DG01", "DG09", "DG03", "DG03", "DG03", "DG03", "DG03", "DG03", "DG06", "DG01", "DG15", "DG94", "DG94", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG14", "DG01", "DG01", "DG15", "DG14", "DG04", "DG04", "DG04", "DG07", "DG01", "DG01", "DG10", "DG04", "DG04", "DG04", "DG04", "DG04", "DG04", "DG07", "DG01", "DG15", "DG94", "DG94", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG14", "DG01", "DG01", "DG15", "DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG94", "DG94", "DG94"],
    ["DG14", "DG99", "DG99", "DG99", "DG99", "DG99", "DG15", "DG91", "DG12", "DG12", "DG90", "DG91", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG12", "DG90", "DG94", "DG94", "DG94"],
    ["DG14", "DG01", "DG01", "DG01", "DG01", "DG01", "DG15", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94", "DG94"]
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

            if (curMap[y][x] === "FL90") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);           // 山(地面)
            if (curMap[y][x] === "FL90") ctx.drawImage(mapchip2, 320, 192, 32, 32, 32*x, 32*y, 32, 32);         // 山

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


            if (curMap[y][x] === "FL90") ctx.drawImage(sea, 320, 192, 32, 32, 32*x, 32*y, 32, 32);         // 山



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
            if (curMap[y][x] === "DG16") ctx.drawImage(box, 0, 0, 32, 32, 32*x, 32*y, 32, 32);                  // 宝箱

            if (curMap[y][x] === "DG80") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "DG80") ctx.drawImage(door, 256, 0, 32, 32, 24*x, 32*y, 40, 32);
            if (curMap[y][x] === "DG81") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "DG81") ctx.drawImage(door, 256, 32, 32, 32, 24*x, 32*y, 40, 32);
            if (curMap[y][x] === "DG82") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "DG82") ctx.drawImage(door, 288, 0, 32, 32, 32*x, 32*y, 40, 32);
            if (curMap[y][x] === "DG83") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "DG83") ctx.drawImage(door, 288, 32, 32, 32, 32*x, 32*y, 40, 32);

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
    // オブジェクト画像読み込み
    box = new Image();
    box.src = boxImg;
    door = new Image();
    door.src = doorImg;
}

function mapEvent(y, x) {
  if (curMap === map) {
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
      if (pos_x === 832 && pos_y === 384) {
          battleBossFlg = 1;
          // エンカウント処理
          encount();
          pos_x = 832;
          pos_y = 416;
      }
  }
}
