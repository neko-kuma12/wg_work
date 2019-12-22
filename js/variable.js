/* 戦闘関連 */
var attackable = 0;
var backImgNo = '1';                    // 選択した背景の初期値
var battleMode = 0;                     // 戦闘モードかどうか
var bgmNo = 'A';                        // 選択した音楽の初期値
var chgFlg = 0;                         // 敵が変身したか判定するフラグ
var chgPer = 50;                        // 変身するHPの割合
var dmgmax = 1000;                      // ダメージレンジ(最大)
var dmgmin = 100;                       // ダメージレンジ(最小)
var dmgRtCrtl = 1.5;                    // ダメージ倍率(クリティカル)
var dmgRtMgc = 1.3;                     // ダメージ倍率(まほう)
var dmgRtMob = 0.8;                     // ダメージ倍率(敵)
var escapeFlg = 0;                      // 逃げるが成功したか判定するフラグ
var fadeInTime = 1000;                  // フェードインの時間
var fadeOutTime = 1000;                 // フェードアウトの時間
var flushCounter = 6;                   // 点滅用カウンター
var flushInterval = 100;                // 点滅間隔
var flushTimer;                         // 点滅用タイマー
var getExpMax = 15;                     // 取得経験値(最大)
var getExpMin = 1;                      // 取得経験値(最小)
var hpDngPer = 20;                      // 残HP(瀕死)判定割合
var hpDngColor = "#dc143c"              // 残HP(瀕死)文字色
var hpmax = 10000;                      // HPレンジ(最大)
var hpmin = 5000;                       // HPレンジ(最小)
var hpSafeColor = "white"               // 残HP(安全)文字色
var hpWarnPer = 50;                     // 残HP(注意)判定割合
var hpWarnColor = "#ffa500";            // 残HP(注意)文字色
var lmtSp = 100;                        // SP限界値
var log = "";                           // メッセージログ
var settingPhase = 0;                   // 設定画面か判定するフラグ
var spAcm = 10;                         // 攻撃時SP増加量
var spAcmChar = 50;                     // ためる時SP増加量
var spMaxFlg = 0;                       // SPがMAXになったか判定するフラグ
var useMagicMp = 20;                    // まほうで使用するMP量

/* 敵のパラメータ */
var hp = 0;                             // 現在のHP
var hpbar = $('#hp-bar').width();       // HPゲージの幅
var mhp = 0;                            // 最大HP
var mobDmgMax = 5;                      // 敵の最大ダメージ
var mobDmgMin = 1;                      // 敵の最小ダメージ
var mobExpMax = 15;                      // 敵の最大経験値
var mobExpMin = 1;                      // 敵の最小経験値
var mobHpMax = 10;                      // 敵の最大HP
var mobHpMin = 5;                       // 敵の最小HP
var mobNm = "敵";                       // 敵の名前
var oldSetMob = 1;                      // 最初に選択した敵を保持
var setMob = 1;                         // 選択した敵の初期値

/* 自分のパラメータ */
var exp = 0;                            // 経験値
var lebel = 1;                          // レベル
var myDmgMax = 5;                       // 最大ダメージ(自分)
var myDmgMin = 1;                       // 最小ダメージ(自分)
var myHp = 0;                           // 現在のHP(自分)
var myHpbar = $('#myhp-bar').width();   // HPゲージの幅(自分)
var myMhp = 0;                          // 最大HP(自分)
var myMmp = 200;                        // 最大MP(自分)
var myMp = 200;                         // 現在のMP(自分)
var myMsp = 100;                        // 最大SP(自分)
var mySp = 0;                           // 現在のSP(自分)
var mySpbar = 0;                        // SPゲージの幅(自分)

/* 設定値関連 */
var exptable = [                        // 経験値テーブル
7,
15,
26,
39,
53,
68,
89,
114,
168,
233,
327,
432
];
var myHpTable = [                       // HPテーブル
10,
15,
23,
35,
53,
80,
120,
180,
270,
405,
608,
912,
1368
];
var myMpTable = [                       // MPテーブル
0,
8,
12,
17,
24,
34,
48,
68,
96,
135,
189,
265,
371
];
var mobPattern1 = [                   // 敵出現パターン1(フィールド1)
    {
        'name': 'sraim',
        'name2': 'スライム',
        'ratio': 55.0,
        'hpMin': 6,
        'hpMax': 8,
        'dmgMin': 1,
        'dmgMax': 2,
        'expMin': 1,
        'expMax': 2
    },
    {
        'name': 'bat',
        'name2': 'コウモリ',
        'ratio': 25.0,
        'hpMin': 8,
        'hpMax': 10,
        'dmgMin': 1,
        'dmgMax': 4,
        'expMin': 1,
        'expMax': 3
    },
    {
        'name': 'crow',
        'name2': 'カラス',
        'ratio': 10.0,
        'hpMin': 12,
        'hpMax': 15,
        'dmgMin': 2,
        'dmgMax': 6,
        'expMin': 2,
        'expMax': 4
    },
    {
        'name': 'mouse',
        'name2': 'ネズミ',
        'ratio': 10.0,
        'hpMin': 16,
        'hpMax': 20,
        'dmgMin': 2,
        'dmgMax': 8,
        'expMin': 3,
        'expMax': 5
    }
];
var mobPattern2 = [                   // 敵出現パターン2(フィールド2)
    {
        'name': 'bat',
        'name2': 'コウモリ',
        'ratio': 25.0,
        'hpMin': 8,
        'hpMax': 10,
        'dmgMin': 1,
        'dmgMax': 4,
        'expMin': 1,
        'expMax': 3
    },
    {
        'name': 'crow',
        'name2': 'カラス',
        'ratio': 25.0,
        'hpMin': 12,
        'hpMax': 15,
        'dmgMin': 2,
        'dmgMax': 6,
        'expMin': 2,
        'expMax': 4
    },
    {
        'name': 'mouse',
        'name2': 'ネズミ',
        'ratio': 30.0,
        'hpMin': 16,
        'hpMax': 20,
        'dmgMin': 2,
        'dmgMax': 8,
        'expMin': 3,
        'expMax': 5
    },
    {
        'name': 'seed',
        'name2': 'エビルシード',
        'ratio': 20.0,
        'hpMin': 18,
        'hpMax': 23,
        'dmgMin': 4,
        'dmgMax': 10,
        'expMin': 5,
        'expMax': 8
    }
];
var mobPattern3 = [                   // 敵出現パターン3(ダンジョンMAP)
    {
        'name': 'tarantula',
        'name2': 'タランチュラ',
        'ratio': 25.0,
        'hpMin': 30,
        'hpMax': 35,
        'dmgMin': 9,
        'dmgMax': 14,
        'expMin': 10,
        'expMax': 14
    },
    {
        'name': 'bomb',
        'name2': 'ボム',
        'ratio': 35.0,
        'hpMin': 26,
        'hpMax': 32,
        'dmgMin': 12,
        'dmgMax': 15,
        'expMin': 9,
        'expMax': 13
    },
    {
        'name': 'tsuthinoko',
        'name2': 'ツチノコ',
        'ratio': 10.0,
        'hpMin': 30,
        'hpMax': 50,
        'dmgMin': 1,
        'dmgMax': 3,
        'expMin': 50,
        'expMax': 60
    },
    {
        'name': 'mole',
        'name2': 'モグラ',
        'ratio': 30.0,
        'hpMin': 32,
        'hpMax': 36,
        'dmgMin': 10,
        'dmgMax': 15,
        'expMin': 10,
        'expMax': 16
    }
];
var mobPattern4 = [                   // 敵出現パターン4(森MAP)
    {
        'name': 'alraune',
        'name2': 'マンドラゴラ',
        'ratio': 20.0,
        'hpMin': 20,
        'hpMax': 23,
        'dmgMin': 5,
        'dmgMax': 8,
        'expMin': 5,
        'expMax': 7
    },
    {
        'name': 'rafflesia',
        'name2': 'ラフレシア',
        'ratio': 10.0,
        'hpMin': 25,
        'hpMax': 29,
        'dmgMin': 8,
        'dmgMax': 12,
        'expMin': 10,
        'expMax': 14
    },
    {
        'name': 'dryad',
        'name2': 'ドリアード',
        'ratio': 30.0,
        'hpMin': 21,
        'hpMax': 24,
        'dmgMin': 5,
        'dmgMax': 9,
        'expMin': 6,
        'expMax': 9
    },
    {
        'name': 'caterpillar',
        'name2': 'キャタピラー',
        'ratio': 25.0,
        'hpMin': 20,
        'hpMax': 26,
        'dmgMin': 4,
        'dmgMax': 10,
        'expMin': 5,
        'expMax': 9
    },
    {
        'name': 'lizard',
        'name2': 'リザード',
        'ratio': 15.0,
        'hpMin': 23,
        'hpMax': 28,
        'dmgMin': 7,
        'dmgMax': 10,
        'expMin': 8,
        'expMax': 10
    }
];

/* フィールド関連 */
var battleEndFlg = 0;                 // 戦闘終了を判断するフラグ
var battleBossFlg = 0;                // ボス戦闘か判断するフラグ
var btlBgmPath = "./sound/battle";    // 戦闘BGM
var canvas;                           // キャンバス
var canvasHeight = 576;               // キャンバス高さ
var canvasWidth = 992;                // キャンバス幅
var counter;                          // 内部カウンター
var ctx;                              // キャンバスコンテキスト
var curPosX = 0;                      // 現在x座標
var curPosY = 0;                      // 現在y座標
var encountFlg = 0;                   // エンカウントしたか判断するフラグ
var encountMax = 100;                 // エンカウント乱数最大値
var encountMin = 0;                   // エンカウント乱数最小値
var encountRt = 10;                    // エンカウント率
var flame = 150;                      // フレーム速度
var haveKeyFlg = 0;                   // 扉の鍵を持っているか判断するフラグ
var key = new Object();               // キー入力オブジェクト
    key.up = false;
    key.down = false;
    key.right = false;
    key.left = false;
    key.push = '';
var keyCodeDown = 40;                 // キーコード（下）
var keyCodeEnter = 13;                // キーコード（エンター）
var keyCodeF5 = 116;                  // キーコード（F5）
var keyCodeLeft = 37;                 // キーコード（左）
var keyCodeRight = 39;                // キーコード（右）
var keyCodeUp = 38;                   // キーコード（上）
var keyOperation = 1;                 // キー操作可能にするかどうかのフラグ
var message;                          // メッセージ
var mouseState = -1;
var move = 0;                         // 移動値
var npc_pos_x = 832;                  // NPCx座標
var npc_pos_y = 352;                  // NPCy座標
var pos_x = 256;                      // プレイヤーx座標
var pos_y = 192;                      // プレイヤーy座標

/* 画像ファイル関連(共通)*/
var backImgBoss = "./img/boss.jpg"    // ボス背景画像
var backImgPath = "./img/forest"      // 背景画像
var mobImgPath = "./img/mob-"         // 敵画像
var playerImg = './img/hiyoco.png';   // プレイヤー画像
var mobImg = './img/mobchip.png'      // 敵画像
var npcImg = './img/chara.png'        // NPC画像
/* 画像ファイル関連(MAP)*/
var boxImg = './img/box.png';
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
var seaImg = './img/sea.png';

// 画像描画関連(プレイヤー)
var angle = 1;
var angle_x = 32;                     // プレイヤー画像x座標
var angle_y = 32;                     // プレイヤー画像y座標
var motion = 0;                       // プレイヤー画像変更用
var oldMotion = 0;                    // プレイヤー画像変更用(旧)
var player;                           // プレイヤー画像用オブジェクト
// 画像描画関連(敵)
var mob;                              // 敵画像用オブジェクト
// 画像描画関連(NPC)
var npc;                              // NPC画像用オブジェクト
var npc_angle_x = 32;                 // NPC画像x座標
var npc_angle_y = 64;                 // NPC画像y座標
var npc_motion = 0;                   // NPC画像変更用
var npc_oldMotion = 0;                // NPC画像変更用(旧)
// 画像描画関連(MAP)
var box;                              // 宝箱画像用オブジェクト
var door;                             // 扉画像用オブジェクト
var doorHideLeft = 256;
var doorHideRight = 288;
var doorHideY1 = 0;
var doorHideY2 = 32;
var mapchip2;
var mapchip3;
var mapchipDungeon
var mapchipDungeon2;
var mapchipDungeon3;
var mapchipForest
var mapchipForest2;
var mapchipForest3;
var sea;                            　// 海画像用オブジェクト

/* MAP関連 */
var curMap;                           // 現在のMAP
var openBoxDisp1 = 0;
var openBoxDisp2 = 0;
var openBoxFlg1 = 0;                  //　宝箱1を開けたか判断するフラグ
var openBoxFlg2 = 0;                  //　宝箱2を開けたか判断するフラグ
