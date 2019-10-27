var angle = 1;
var angle_x = 32;
var angle_y = 32;
var battleEndFlg = 0;
var battleBossFlg = 0;
var canvas;
var canvasHeight = 576;
var canvasWidth = 992;
var counter;
var ctx;
var curMap;
var curPosX = 0;
var curPosY = 0;
var encountFlg = 0;
var encountMax = 100;
var encountMin = 0;
var encountRt = 0;
var flame = 250;
var key = new Object();
    key.up = false;
    key.down = false;
    key.right = false;
    key.left = false;
    key.push = '';
var keyCodeLeft = 37;
var keyCodeUp = 38;
var keyCodeRight = 39;
var keyCodeDown = 40;
var mapchip;
var mapchip2;
var mapchip3;
var mapchipDungeon
var mapchipDungeon2;
var mapchipDungeon3;
var message;
var mob;
var motion = 0;
var mouseState = -1;
var move = 0;
var oldMotion = 0;
var player;
var pos_x = 256;
var pos_y = 192;

var playerImg = './img/hiyoco.png';
var mobImg = './img/mobchip.png'
var fieldImg = './img/field.png';
var fieldImg2 = './img/field2.png';
var fieldImg3 = './img/field3.png';
var dungeonImg = './img/dungeon.png';
var dungeonImg2 = './img/dungeon2.png';
var dungeonImg3 = './img/dungeon3.png';
/*
var map = [
    ["A1", "A1", "B1", "A1", "C1", "A1", "D1", "B1", "B1", "A1", "A1", "C1", "A1", "F1", "F3", "B1", "A1", "B1", "C1", "B1", "A1", , "B1", "C1", "A1", "D1", "B1", "A1", "C1", "A1", "B1"],
    ["A2", "A2", "B2", "A2", "C2", "A2", "D2", "B2", "B2", "A2", "A2", "C2", "A2", "F2", "F4", "B2", "A2", "B2", "C2", "B2", "A2", 5, "B2", "C2", "A2", "D2", "B2", "A2", "C2", "A2", "B2"],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 3, "H1", "H2", 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 3, 3, "I1", "I3", 3, 3, 3, 3, 3, 6, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, "I2", "I4", 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 4, 3, 3, "J1", "J3", "J1", "J3", 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 4, 3, 3, "J2", "J4", "J2", "J4", 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3],
    [3, 3, 3, "E1", "E3", 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 3, 9, 3, 7, 9, 8, 3, 7, 8, 3, 4, 3, 3, 3, 3],
    [3, 3, 3, "E2", "E4", 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3],
    [3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
]
*/

/*
var map2 = [
    ["A1", "A1", "B1", "A1", "C1", "A1", "D1", "B1", "B1", "A1", "A1", "C1", "A1", "F1", "F3", "B1", "A1", "B1", "C1", "B1", "A1", , "B1", "C1", "A1", "D1", "B1", "A1", "C1", "A1", "B1"],
    ["A2", "A2", "B2", "A2", "C2", "A2", "D2", "B2", "B2", "A2", "A2", "C2", "A2", "F2", "F4", "B2", "A2", "B2", "C2", "B2", "A2", 5, "B2", "C2", "A2", "D2", "B2", "A2", "C2", "A2", "B2"],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, "3D", 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
]
*/

var map = [
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLhs1", "tfLhs3", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLhs2", "tfLhs4", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfHsBr", "tfLoad", "tfLoad", "tfHsRd", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfHsBr", "tfLoad", "tfLoad", "tfHsRd", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfChrc", "tfGras", "tfGras", "tfHsBr", "tfLoad", "tfLoad", "tfHsRd", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfHsBr", "tfLoad", "tfLoad", "tfHsRd", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfSign", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfWdHt", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLodC"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfTree", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfFst1", "tfFst3", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfFst2", "tfFst4", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"]
]

var map2 = [
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfDngn", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfLodC", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfLoad", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"],
    ["tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras", "tfGras"]
]

var map3 = [
    ["tgBlkP", "tgBlk4", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgBlk3", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP"],
    ["tgBlkP", "tgWlRT", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlLT", "tgBlk3", "tgBlk4", "tgWlFT", "tgBlk3", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP"],
    ["tgBlk4", "tgWlRM", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlLM", "tgWlLT", "tgWlRT", "tgWlFM", "tgWlLT", "tgBlk3", "tgBlkP", "tgBlk4", "tgWlFT", "tgWlFT", "tgBlk3", "tgBlkP"],
    ["tgWlLf", "tgWlRU", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlLU", "tgWlLM", "tgWlRM", "tgWlFU", "tgWlLM", "tgWlRt", "tgBlk4", "tgWlRT", "tgWlFM", "tgWlFM", "tgWlLT", "tgBlk3"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlLU", "tgWlRU", "tgGrnd", "tgWlLU", "tgWlRt", "tgWlLf", "tgWlRM", "tgWlFU", "tgWlFU", "tgWlLM", "tgWlRt"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlBT", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBU", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt", "tgWlLf", "tgWlRU", "tgGrnd", "tgGrnd", "tgWlLU", "tgWlRt"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgWlBT", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBU", "tgGrnd", "tgGrnd", "tgWlRt", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlk2", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBU", "tgGrnd", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgWlRt", "tgBlkP", "tgBlkP", "tgBlkP", "tgWlLf", "tgGrnd", "tgGrnd", "tgWlLT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgBlk3", "tgBlkP", "tgBlk4", "tgWlFT", "tgWlFT", "tgWlRT", "tgGrnd", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgWlLT", "tgBlk3", "tgBlkP", "tgBlkP", "tgWlLf", "tgGrnd", "tgGrnd", "tgWlLM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlLT", "tgBlk3", "tgWlLf", "tgWlFM", "tgWlFM", "tgWlRM", "tgGrnd", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgWlLM", "tgWlLT", "tgBlk3", "tgBlkP", "tgWlLf", "tgGrnd", "tgGrnd", "tgWlLU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlLM", "tgWlRt", "tgWlLf", "tgWlFU", "tgWlFU", "tgWlRU", "tgGrnd", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlBT", "tgBlk1"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgWlLU", "tgWlLM", "tgWlLT", "tgBlk3", "tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlLU", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgWlBT", "tgBlk1", "tgBlkP"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlLU", "tgWlLM", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgWlBT", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBU", "tgGrnd", "tgGrnd", "tgWlRt", "tgBlk2", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgBlk1", "tgWlLf", "tgGrnd", "tgGrnd", "tgWlRt", "tgBlkP", "tgBlkP"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlLU", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgWlRt", "tgBlk4", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlRT", "tgGrnd", "tgGrnd", "tgWlLT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlFT", "tgWlRT", "tgGrnd", "tgWlBT", "tgBlk1", "tgBlkP", "tgBlkP"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgWlRt", "tgWlLf", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlRM", "tgGrnd", "tgGrnd", "tgWlLM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlFM", "tgWlRM", "tgGrnd", "tgWlRt", "tgBlkP", "tgBlkP", "tgBlkP"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgWlRt", "tgWlLf", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlRU", "tgGrnd", "tgGrnd", "tgWlLU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlFU", "tgWlRU", "tgGrnd", "tgWlRt", "tgBlkP", "tgBlkP", "tgBlkP"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgWlRt", "tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt", "tgBlkP", "tgBlkP", "tgBlkP"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt", "tgBlk2", "tgWlBM", "tgWlBM", "tgBlk1", "tgBlk2", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgWlBM", "tgBlk1", "tgBlkP", "tgBlkP", "tgBlkP"],
    ["tgWlLf", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgGrnd", "tgWlRt", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP", "tgBlkP"]
]

// ※未使用
function clientToCanvas(canvas, clientX, clientY) {
    var cx = clientX - canvas.offsetLeft + document.body.scrollLeft;
    var cy = clientY - canvas.offsetTop + document.body.scrollTop;
    var ret = {
        x: cx,
        y: cy
    };
    return ret;
}

/**
 * 描画メイン処理
 */
function drawMain(ctx) {
    // キャンバスのクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // マップ描画
    drawMap(ctx);

    // 歩行動作のための処理
    changeMotion();

    // プレイヤー描画
//    ctx.drawImage(player, 32, 64, 32, 32, pos_x, pos_y, 32, 32); //左
//    ctx.drawImage(player, 126, 32, 32, 32, pos_x, pos_y, 32, 32); //上
//    ctx.drawImage(player, 126, 64, 32, 32, pos_x, pos_y, 32, 32); //右
    ctx.drawImage(player,  angle_x - motion, angle_y, 32, 32, pos_x, pos_y, 32, 32); //下

    // ボスキャラ描画
    if (curMap === map3) {
        ctx.drawImage(mob, 5, 5, 70, 70, 832, 352, 45, 45);
    
    }

    // ステータ描画
    drawStatus(ctx);
    // メッセージ描画
    drawMessage(ctx);
}

/**
 * マップ描画処理
 */
function drawMap(ctx) {
    for (var y = 0; y < curMap.length; y++) {
        for (var x = 0; x < curMap[y].length; x++) {
            if (curMap[y][x] === "tfGras") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32); // 草原
            if (curMap[y][x] === "tfLoad") ctx.drawImage(mapchip2, 192, 192, 32, 32, 32*x, 32*y, 32, 32);   // 道
            if (curMap[y][x] === "tfChrc") ctx.drawImage(mapchip, 192, 352, 32, 32, 32*x, 32*y, 32, 32);    // 教会
            if (curMap[y][x] === "tfWdHt") ctx.drawImage(mapchip2, 192, 192, 32, 32, 32*x, 32*y, 32, 32); // 小屋(地面)
            if (curMap[y][x] === "tfWdHt") ctx.drawImage(mapchip3, 128, 0, 32, 32, 32*x, 32*y, 32, 32); // 小屋
            if (curMap[y][x] === "tfTree") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32); // 木(地面)
            if (curMap[y][x] === "tfTree") ctx.drawImage(mapchip3, 128, 32, 32, 32, 32*x, 32*y, 32, 32);    // 木

            if (curMap[y][x] === "tfHsBr") ctx.drawImage(mapchip, 192, 384, 32, 32, 32*x, 32*y, 32, 32);    // 家(青)
            if (curMap[y][x] === "tfHsRd") ctx.drawImage(mapchip, 160, 384, 32, 32, 32*x, 32*y, 32, 32);    // 家(赤)

            if (curMap[y][x] === "tfLhs1") ctx.drawImage(mapchip, 0, 448, 64, 32, 32*x, 32*y, 32, 32); // 大きい家(左上)
            if (curMap[y][x] === "tfLhs2") ctx.drawImage(mapchip, 0, 480, 32, 32, 32*x, 32*y, 32, 32); // 大きい家(左下)
            if (curMap[y][x] === "tfLhs3") ctx.drawImage(mapchip, 32, 448, 32, 32, 32*x, 32*y, 32, 32); // 大きい家(右上)
            if (curMap[y][x] === "tfLhs4") ctx.drawImage(mapchip, 32, 480, 32, 32, 32*x, 32*y, 32, 32); // 大きい家(右下)

            if (curMap[y][x] === "tfLodC") ctx.drawImage(mapchip2, 192, 192, 32, 32, 32*x, 32*y, 32, 32);   // 道(MAP切り替え)

            if (curMap[y][x] === "tfDngn") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン(地面)
            if (curMap[y][x] === "tfDngn") ctx.drawImage(mapchip3, 224, 0, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン

            if (curMap[y][x] === "tfFst1") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);    // 森(地面)
            if (curMap[y][x] === "tfFst1") ctx.drawImage(mapchip2, 256, 128, 32, 32, 32*x, 32*y, 32, 32);    // 森(左上)
            if (curMap[y][x] === "tfFst2") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);    // 森(地面)
            if (curMap[y][x] === "tfFst2") ctx.drawImage(mapchip2, 256, 160, 32, 32, 32*x, 32*y, 32, 32);    // 森(左下)
            if (curMap[y][x] === "tfFst3") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);    // 森(地面)
            if (curMap[y][x] === "tfFst3") ctx.drawImage(mapchip2, 288, 128, 32, 32, 32*x, 32*y, 32, 32);    // 森(右上)
            if (curMap[y][x] === "tfFst4") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);    // 森(地面)
            if (curMap[y][x] === "tfFst4") ctx.drawImage(mapchip2, 288, 160, 32, 32, 32*x, 32*y, 32, 32);    // 森(右下)

            if (curMap[y][x] === "tfSign") ctx.drawImage(mapchip2, 224, 0, 32, 32, 32*x, 32*y, 32, 32); // 看板(地面)
            if (curMap[y][x] === "tfSign") ctx.drawImage(mapchip3, 32, 0, 32, 32, 32*x, 32*y, 32, 32);    // 看板

            if (curMap[y][x] === "tgGrnd") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // ダンジョン地面

            if (curMap[y][x] === "tgWlFT") ctx.drawImage(mapchipDungeon2, 32, 64, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(正面)上部
            if (curMap[y][x] === "tgWlFM") ctx.drawImage(mapchipDungeon2, 32, 96, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(正面)中部
            if (curMap[y][x] === "tgWlFU") ctx.drawImage(mapchipDungeon2, 32, 128, 32, 32, 32*x, 32*y, 32, 32);   // ダンジョン壁(正面)下部

            if (curMap[y][x] === "tgWlRT") ctx.drawImage(mapchipDungeon2, 64, 64, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(右端)上部
            if (curMap[y][x] === "tgWlRM") ctx.drawImage(mapchipDungeon2, 64, 96, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(右端)中部
            if (curMap[y][x] === "tgWlRU") ctx.drawImage(mapchipDungeon2, 64, 128, 32, 32, 32*x, 32*y, 32, 32);   // ダンジョン壁(右端)下部

            if (curMap[y][x] === "tgWlLT") ctx.drawImage(mapchipDungeon2, 0, 64, 32, 32, 32*x, 32*y, 32, 32);     // ダンジョン壁(左端)上部
            if (curMap[y][x] === "tgWlLM") ctx.drawImage(mapchipDungeon2, 0, 96, 32, 32, 32*x, 32*y, 32, 32);     // ダンジョン壁(左端)中部
            if (curMap[y][x] === "tgWlLU") ctx.drawImage(mapchipDungeon2, 0, 128, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(左端)下部

            if (curMap[y][x] === "tgWlLf") ctx.drawImage(mapchipDungeon2, 64, 32, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(左)
            if (curMap[y][x] === "tgWlRt") ctx.drawImage(mapchipDungeon2, 0, 32, 32, 32, 32*x, 32*y, 32, 32);     // ダンジョン壁(右)

            if (curMap[y][x] === "tgWlBT") ctx.drawImage(mapchipDungeon2, 0, 0, 32, 32, 32*x, 32*y, 32, 32);      // ダンジョン壁(背面)左端
            if (curMap[y][x] === "tgWlBM") ctx.drawImage(mapchipDungeon2, 32, 0, 32, 32, 32*x, 32*y, 32, 32);     // ダンジョン壁(背面)中央
            if (curMap[y][x] === "tgWlBU") ctx.drawImage(mapchipDungeon2, 64, 0, 32, 32, 32*x, 32*y, 32, 32);     // ダンジョン壁(背面)右端

            if (curMap[y][x] === "tgBlk1") ctx.drawImage(mapchipDungeon2, 192, 0, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン黒塗り(左上)
            if (curMap[y][x] === "tgBlk2") ctx.drawImage(mapchipDungeon2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン黒塗り(右上)
            if (curMap[y][x] === "tgBlk3") ctx.drawImage(mapchipDungeon2, 192, 32, 32, 32, 32*x, 32*y, 32, 32);   // ダンジョン黒塗り(左下)
            if (curMap[y][x] === "tgBlk4") ctx.drawImage(mapchipDungeon2, 224, 32, 32, 32, 32*x, 32*y, 32, 32);   // ダンジョン黒塗り(右下)
            if (curMap[y][x] === "tgBlkP") ctx.drawImage(mapchipDungeon2, 32, 32, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン黒塗り

            if (curMap[y][x] === "A1") ctx.drawImage(mapchip, 480, 128, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "A2") ctx.drawImage(mapchip, 480, 160, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "B1") ctx.drawImage(mapchip, 480, 64, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "B2") ctx.drawImage(mapchip, 480, 96, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "C1") ctx.drawImage(mapchip, 448, 0, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "C2") ctx.drawImage(mapchip, 448, 32, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "D1") ctx.drawImage(mapchip, 448, 64, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "D2") ctx.drawImage(mapchip, 448, 96, 32, 32, 32*x, 32*y, 32, 32);

            if (curMap[y][x] === "F1") ctx.drawImage(mapchip, 384, 0, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "F2") ctx.drawImage(mapchip, 384, 32, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "F3") ctx.drawImage(mapchip, 416, 0, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "F4") ctx.drawImage(mapchip, 416, 32, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "G1") ctx.drawImage(mapchip, 448, 128, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "G2") ctx.drawImage(mapchip, 448, 160, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "H1") ctx.drawImage(mapchip, 64, 480, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "H2") ctx.drawImage(mapchip, 96, 480, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "I1") ctx.drawImage(mapchip, 0, 288, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "I2") ctx.drawImage(mapchip, 0, 320, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "I3") ctx.drawImage(mapchip, 32, 288, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "I4") ctx.drawImage(mapchip, 32, 320, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "J1") ctx.drawImage(mapchip, 128, 288, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "J2") ctx.drawImage(mapchip, 128, 320, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "J3") ctx.drawImage(mapchip, 160, 288, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "J4") ctx.drawImage(mapchip, 160, 320, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "K1") ctx.drawImage(mapchip, 128, 480, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === "K2") ctx.drawImage(mapchip, 160, 480, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === 0) ctx.drawImage(mapchip, 0, 64, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === 1) ctx.drawImage(mapchip, 32, 32, 32, 32, 32*x, 32*y, 32, 32);

            if (curMap[y][x] === 5) ctx.drawImage(mapchip, 0, 384, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === 6) ctx.drawImage(mapchip, 192, 352, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === 7) ctx.drawImage(mapchip, 192, 384, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === 8) ctx.drawImage(mapchip, 160, 384, 32, 32, 32*x, 32*y, 32, 32);
            if (curMap[y][x] === 9) ctx.drawImage(mapchip, 160, 416, 32, 32, 32*x, 32*y, 32, 32);

            if (curMap[y][x] === "DG01") ctx.drawImage(mapchipDungeon, 0, 0, 32, 32, 32*x, 32*y, 32, 32);       // ダンジョン地面

            if (curMap[y][x] === "DG02") ctx.drawImage(mapchipDungeon2, 32, 64, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(正面)上部
            if (curMap[y][x] === "DG03") ctx.drawImage(mapchipDungeon2, 32, 96, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(正面)中部
            if (curMap[y][x] === "DG04") ctx.drawImage(mapchipDungeon2, 32, 128, 32, 32, 32*x, 32*y, 32, 32);   // ダンジョン壁(正面)下部

            if (curMap[y][x] === "DG05") ctx.drawImage(mapchipDungeon2, 64, 64, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(右端)上部
            if (curMap[y][x] === "DG06") ctx.drawImage(mapchipDungeon2, 64, 96, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(右端)中部
            if (curMap[y][x] === "DG07") ctx.drawImage(mapchipDungeon2, 64, 128, 32, 32, 32*x, 32*y, 32, 32);   // ダンジョン壁(右端)下部

            if (curMap[y][x] === "DG08") ctx.drawImage(mapchipDungeon2, 0, 64, 32, 32, 32*x, 32*y, 32, 32);     // ダンジョン壁(左端)上部
            if (curMap[y][x] === "DG09") ctx.drawImage(mapchipDungeon2, 0, 96, 32, 32, 32*x, 32*y, 32, 32);     // ダンジョン壁(左端)中部
            if (curMap[y][x] === "DG10") ctx.drawImage(mapchipDungeon2, 0, 128, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(左端)下部

            if (curMap[y][x] === "DG11") ctx.drawImage(mapchipDungeon2, 64, 32, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン壁(左)
            if (curMap[y][x] === "DG12") ctx.drawImage(mapchipDungeon2, 0, 32, 32, 32, 32*x, 32*y, 32, 32);     // ダンジョン壁(右)

            if (curMap[y][x] === "DG13") ctx.drawImage(mapchipDungeon2, 0, 0, 32, 32, 32*x, 32*y, 32, 32);      // ダンジョン壁(背面)左端
            if (curMap[y][x] === "DG14") ctx.drawImage(mapchipDungeon2, 32, 0, 32, 32, 32*x, 32*y, 32, 32);     // ダンジョン壁(背面)中央
            if (curMap[y][x] === "DG15") ctx.drawImage(mapchipDungeon2, 64, 0, 32, 32, 32*x, 32*y, 32, 32);     // ダンジョン壁(背面)右端

            if (curMap[y][x] === "DG90") ctx.drawImage(mapchipDungeon2, 192, 0, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン黒塗り(左上)
            if (curMap[y][x] === "DG91") ctx.drawImage(mapchipDungeon2, 224, 0, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン黒塗り(右上)
            if (curMap[y][x] === "DG92") ctx.drawImage(mapchipDungeon2, 192, 32, 32, 32, 32*x, 32*y, 32, 32);   // ダンジョン黒塗り(左下)
            if (curMap[y][x] === "DG93") ctx.drawImage(mapchipDungeon2, 224, 32, 32, 32, 32*x, 32*y, 32, 32);   // ダンジョン黒塗り(右下)
            if (curMap[y][x] === "DG99") ctx.drawImage(mapchipDungeon2, 32, 32, 32, 32, 32*x, 32*y, 32, 32);    // ダンジョン黒塗り

        }
    }
}

/**
 * 向き変更（下）
 */
function changeAngleDown() {
    angle_x = 32;
    angle_y = 32;
}

/**
 * 向き変更（左）
 */
function changeAngleLeft() {
    angle_x = 32;
    angle_y = 64;
}

/**
 * 向き変更（右）
 */
function changeAngleRight() {
    angle_x = 126;
    angle_y = 64;
}

/**
 * 向き変更（上）
 */
function changeAngleUp() {
    angle_x = 126;
    angle_y = 32;
}

/**
 * 動き変更
 */
function changeMotion() {
    if (motion === -32) {
        motion = 0;
        oldMotion = -32;
    } else if (motion === 0) {
        if (oldMotion === 32) {
            motion = -32;
        } else {
            motion = 32;
        }
    } else if (motion === 32) {
        motion = 0;
        oldMotion = 32;
    }
}

/**
 * メッセージ描画処理
 */
function drawMessage(ctx) {
    // メッセージ内容が存在しない場合
    if(!message){
        return;
    }
    // ウィンドウの色設定
    ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    ctx.fillRect(280, 520, 550, 50);
    // 文字フォント設定
    ctx.font = "12px monospace";
    ctx.fillStyle = "#ffffff";
    // メッセージ描画
    ctx.fillText(message, 290, 540);
}

/**
 * ステータス描画処理
 */
function drawStatus(ctx) {
    // ステータスウィンドウ
    ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    ctx.fillRect(2, 2, 110, 110);
    // 文字フォント設定
    ctx.font = "24px monospace";
    ctx.fillStyle = "#ffffff";
    // ステータスを設定
    ctx.fillText("Lv", 10, 25)
    drawTextR(ctx, lebel,  98, 25);
    ctx.fillText("HP", 10, 50);
    drawTextR(ctx, myHp,  98, 50);
    ctx.fillText("MP", 10, 75);
    drawTextR(ctx, myMp,  98, 75);
    ctx.fillText("Ex", 10, 100);
    drawTextR(ctx, exp,  98, 100);
}

/**
 * テキスト右寄せ
 */
function drawTextR(ctx, str, x, y) {
    ctx.textAlign = "right";
    ctx.fillText(str, x, y);
    ctx.textAlign = "left";
}

/**
 * エンカウント処理
 */
function encount() {
    // フィールドBGM停止
    $('#field-bgm').get(0).pause();
    $('#field-bgm').get(0).currentTime = 0;
    // ダンジョンBGM停止
    $('#dungeon-bgm').get(0).pause();
    $('#dungeon-bgm').get(0).currentTime = 0;
    // フィールドマップを非表示
    $('#canvas').css('display', 'none');
    // 戦闘開始画面を表示
    $('#encount').css('display', 'block');
    $('#encount').css('background-color', 'black');
    // 戦闘開始効果音
    $('#encount-se').get(0).play();
    // メッセージ表示
    $('#battle-start').addClass('fadein-start');
    fieldPhase = 0;

    // 2秒後に初期処理開始
    setTimeout(function(){
        init();
    }, 2000);
}

/**
 * エンカウント判定
 */
function encountJudge() {
    if (getRandom(encountMin, encountMax) < encountRt) {
        message = '敵があらわれた！！';
        // エンカウント処理
        encountFlg = 1;
    }
}

/**
 * 画像読み込み処理
 */
function loadImage() {
    // プレイヤー画像読み込み
    player = new Image();
    player.src = playerImg;
    // 敵画像読み込み
    mob = new Image();
    mob.src = mobImg;
    // マップ画像読み込み
    mapchip = new Image();
    mapchip.src = fieldImg;
    mapchip2 = new Image();
    mapchip2.src = fieldImg2;
    mapchip3 = new Image();
    mapchip3.src = fieldImg3;
    mapchipDungeon = new Image();
    mapchipDungeon.src = dungeonImg;
    mapchipDungeon2 = new Image();
    mapchipDungeon2.src = dungeonImg2;
    mapchipDungeon3 = new Image();
    mapchipDungeon3.src = dungeonImg3;
}

/**
 * 移動可能判定
 */
function movableJudge(y, x) {
    if (curMap[y][x] === "tfLoad" || curMap[y][x] === "tfLodC" || curMap[y][x] === "tfChrc" || curMap[y][x] === "tgGrnd" || curMap[y][x] === "tfDngn") {
        return true;
    } else {
        return false;
    }
}

/**
 * 画面サイズ設定
 */
function setSize() {
    var canvas = $('#canvas').get(0);

    // キャンバスの幅と高さを変更
    $('#canvas').attr('width', window.innerWidth);
    $('#canvas').attr('height', window.innerHeight);

    ctx = canvas.getContext('2d');
}

/**
 * タイマー処理
 */
function timer(ctx) {
    counter++;
    // エンカウント時は後続処理を行わない
    if (encountFlg === 1) {
        return;
    }
    // エンカウント処理
    if (encountFlg === 2) {
        encountFlg = 0;
        encount();
    }

    // キーイベント判定
    if (move === 0 ) {
        if (key.left === true) {
            var x = pos_x / 32;
            var y = pos_y / 32;
            x--;
            if (movableJudge(y, x)) {
                move = 32;
                key.push = 'left';
                encountJudge();
            }
            // 左向きに変更
            changeAngleLeft();
        } else if (key.up === true) {
            var x = pos_x / 32;
            var y = pos_y / 32;
            if (y > 0) {
                y--;
                if (movableJudge(y, x)) {
                    move = 32;
                    key.push = 'up';
                    encountJudge();
                }
            }
            // 上向きに変更
            changeAngleUp();
        } else if (key.right === true) {
            var x = pos_x / 32;
            var y = pos_y / 32;
            x++;
            if (movableJudge(y, x)) {
                move = 32;
                key.push = 'right';
                encountJudge();
            }
            // 右向きに変更
            changeAngleRight();
        } else if (key.down === true) {
            var x = pos_x / 32;
            var y = pos_y / 32;
            if (y < 16) {
                y++;
                if (movableJudge(y, x)) {
                    move = 32;
                    key.push = 'down';
                    encountJudge();
                }
            }
            // 下向きに変更
            changeAngleDown();
        }
    }

    // 座標移動
    if (move > 0) {
        move -= 32;
        if (key.push === 'left') pos_x -= 32;
        if (key.push === 'up') pos_y -= 32;
        if (key.push === 'right') pos_x += 32;
        if (key.push === 'down') pos_y += 32;
    }

    // マップとプレイヤーを描画
    drawMain(ctx);
    message = "";

    // マップ内イベント
    if (curMap === map) {
        // マップ移動
        if (curMap[y][x] === "tfLodC") {
            curMap = map2;
            pos_x = 32;
            pos_y = 224;
        }
        // HPとMP全回復
        if (curMap[y][x] === "tfChrc") {
            message = 'HPとMPが回復した！';
            // 回復効果音
            $('#cure-se').get(0).play();
            myHp = myMhp;
            myMp = myMmp;
        }
    } else if (curMap === map2) {
        // マップ移動
        if (curMap[y][x] === "tfLodC") {
            curMap = map;
            pos_x = 928;
            pos_y = 224;
        }
        // マップ移動
        if (curMap[y][x] === "tfDngn") {
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
        if ((pos_x === 32 || pos_x === 64 || pos_x === 96 || pos_x === 128 || pos_x === 160) && pos_y === 512) {
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

//TODO デバッグ用
    message = pos_x + ' , ' + pos_y;

//    ctx.fillText("Code = " + key.keyCode, 20, 120);
//    ctx.fillText(curPosX + ", " + curPosY + "(" + mouseState + ")", 20, 60);
//    console.log(pos_x + ' , ' + pos_y);
}

/**
 * 画面ロード時処理
 */
$(window).on('load', function() {
    // 画像読み込み
    loadImage();

    canvas = $('#canvas').get(0);
    ctx = canvas.getContext('2d');

    $('#canvas').attr('width', canvasWidth);
    $('#canvas').attr('height', canvasHeight);

    // 初期マップ設定
    curMap = map;

    // ブラウザサイズ変更時、canvasの幅と高さをリサイズ
    $(window).on('resize', function(){setSize()});
    // 一定間隔でタイマーイベント処理を行う
    setInterval(function(){timer(ctx)}, flame);
});

/**
 * キー入力(DOWN)イベント
 */
$(window).keydown(function(ev) {
    //設定画面はキー入力イベント無効にする
    if (settingPhase === 1) return;

    // キーコード取得
    var keyCode = ev.keyCode;
    // 方向キーでブラウザがスクロールしないようにする
    ev.preventDefault();

    // F5でリロードできるようにする
    if (keyCode === 116) {
        location.reload();
    }

    // エンターキーが押された場合
    if (keyCode === 13) {
        // 戦闘終了時のみ処理させる
        if (battleEndFlg == 1) {
            // 戦闘画面を非表示
            $('#main').css('display', 'none');
            // フラグを元に戻す
            encountFlg = 0;
            battleEndFlg = 0;
            // 効果音停止
            $('#fanfare-se').get(0).pause();
            $('#fanfare-se').get(0).currentTime = 0;
            setTimeout(function() {
                // フィールドBGM再生
                $('#field-bgm').get(0).play();
                // フィールド画面を表示
                $('#canvas').css('display', 'block');
            }, 100);
        }
                // 戦闘終了時のみ処理させる
        if (encountFlg == 1) {
            message = "";
            encountFlg = 2;
        }
    }

    // 移動処理
    if (keyCode === keyCodeLeft) {
        key.left = true;
    } else if (keyCode === keyCodeUp) {
        key.up = true;
    } else if (keyCode === keyCodeRight) {
        key.right = true;
    }else if (keyCode === keyCodeDown) {
        key.down = true;
    }
});

/**
 * キー入力(UP)イベント
 */
$(window).keyup(function(ev) {
    // キーコード取得
    var keyCode = ev.keyCode;
    // 移動処理
    if (keyCode === keyCodeLeft) {
        key.left = false;
    } else if (keyCode === keyCodeUp) {
        key.up = false;
    } else if (keyCode === keyCodeRight) {
        key.right = false;
    }else if (keyCode === keyCodeDown) {
        key.down = false;
    }
});

/**
 * マウス移動時イベント
 */
//$(window).mousemove(function(ev) {
//    curPosX = ev.clientX;
//    curPosY = ev.clientY;
//    var pos = clientToCanvas(canvas, curPosX, curPosY);
//    curPosX = pos.x;
//    curPosY = pos.y;
//});

/**
 * マウスダウン時イベント
 */
$(window).mousedown(function(ev) {
    mouseState = ev.button;
});

/**
 * マウスアップ時イベント
 */
$(window).mouseup(function(ev) {
    mouseState = -1;
});
