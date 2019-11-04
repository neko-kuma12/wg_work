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
var curPosX = 0;
var curPosY = 0;
var encountFlg = 0;
var encountMax = 100;
var encountMin = 0;
var encountRt = 0;
var flame = 150;
var haveKeyFlg = 0;
var key = new Object();
    key.up = false;
    key.down = false;
    key.right = false;
    key.left = false;
    key.push = '';
var keyCodeDown = 40;
var keyCodeEnter = 13;
var keyCodeF5 = 116;
var keyCodeLeft = 37;
var keyCodeRight = 39;
var keyCodeUp = 38;
var message;
var mob;
var motion = 0;
var mouseState = -1;
var move = 0;
var oldMotion = 0;
var openBoxFlg1 = 0;
var openBoxFlg2 = 0;
var player;
var pos_x = 256;
var pos_y = 192;

var playerImg = './img/hiyoco.png';
var mobImg = './img/mobchip.png'

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
    ctx.drawImage(player,  angle_x - motion, angle_y, 32, 32, pos_x, pos_y, 32, 32); //下

    // ボスキャラ描画
    if (curMap === map3) {
        ctx.drawImage(mob, 5, 5, 70, 70, 832, 352, 40, 40);
    }

    // ステータ描画
    drawStatus(ctx);
    // メッセージ描画
    drawMessage(ctx);
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
    loadMapImage();
}

/**
 * 移動可能判定
 */
function movableJudge(y, x) {
    if ((curMap[y][x] === "FL01" || curMap[y][x] === "FL02" || curMap[y][x] === "FL04" || curMap[y][x] === "FL12" ||
          curMap[y][x] === "FL13" || curMap[y][x] === "FL14" || curMap[y][x] === "FL15" || curMap[y][x] === "FL16" ||
          curMap[y][x] === "FL18" || curMap[y][x] === "FL19" || curMap[y][x] === "FL20" || curMap[y][x] === "FL21" ||
          curMap[y][x] === "FL22" || curMap[y][x] === "FL23" || curMap[y][x] === "FL99" ||
          curMap[y][x] === "FT01" ||
          curMap[y][x] === "DG01" || curMap[y][x] === "DG99")
         || (haveKeyFlg >= 1 && (curMap[y][x] === "DG80" || curMap[y][x] === "DG81" || curMap[y][x] === "DG82" || curMap[y][x] === "DG83"))
       )  {
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
        if (message != "") {
            message = "";
        }
        move -= 32;
        if (key.push === 'left') pos_x -= 32;
        if (key.push === 'up') pos_y -= 32;
        if (key.push === 'right') pos_x += 32;
        if (key.push === 'down') pos_y += 32;
    }

    // マップとプレイヤーを描画
    drawMain(ctx);

    // マップ内イベント
    mapEvent(y, x);

//TODO デバッグ用
//    message = pos_x + ' , ' + pos_y;

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
    if (keyCode === keyCodeF5) {
        location.reload();
    }

    // エンターキーが押された場合
    if (keyCode === keyCodeEnter) {
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
        // エンカウント時のみ処理させる
        if (encountFlg == 1) {
            message = "";
            encountFlg = 2;
        }
        if (message != "") {
            message = "";
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
