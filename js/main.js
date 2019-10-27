"use strict";

const CHRHEIGHT = 9; // �L�����̍���
const CHRWIDTH = 8; // �L�����̕�
const FONT = "12px monospace"; // �g�p�t�H���g
const FONTSTYLE = "#ffffff"; // �����F
const HEIGHT = 120; // ���z��ʂ̍���
const WIDTH = 128; // ���z��ʂ̕�
const INTERVAL = 33; // �t���[���Ăяo���Ԋu
const MAP_HEIGHT = 32; // �}�b�v����
const MAP_WIDTH = 32; // �}�b�v��
const SCR_HEIGHT = 8; // ��ʃ^�C���T�C�Y�̔����̍���
const SCR_WIDTH = 8;// ��ʃ^�C���T�C�Y�̔����̕�
const SCROLL = 1; // �X�N���[�����x
const SMOOTH = 0; // ��ԏ���
const START_HP = 20; // �J�nHP
const START_X = 15; // �J�n�ʒuX
const START_Y = 17; // �J�n�ʒuY
const TILECOLUMN = 4; // �^�C������
const TILEROW = 4; // �^�C���s��
const TILESIZE = 8; // �^�C���T�C�Y(�h�b�g�j
const WNDSTYLE = "rgba(0, 0, 0, 0.75)"; // �E�B���h�E�̐F

const gKey = new Uint8Array(0x100); // �L�[���̓o�b�t�@

let gAngle = 0; // �v���C���[�̌���
let gEx = 0; // �v���C���[�̌o���l
let gHP = START_HP; // �v���C���[��HP
let gMHP = START_HP; // �v���C���[�̍ő�HP
let gLv = 1; // �v���C���[�̃��x��
let gCursor = 0; // �J�[�\���ʒu
let gEnemyHP; // �GHP
let gEnemyType; // �G���
let gFrame = 0; // �����J�E���^
let gHeight; // ����ʂ̍���
let gWidth; // ����ʂ̕�
let gMessage1 = null; // �\�����b�Z�[�W�P
let gMessage2 = null; // �\�����b�Z�[�W�Q
let gMoveX = 0; // �ړ���X
let gMoveY = 0; // �ړ���Y
let gImgBoss; // ���X�{�X�摜
let gImgMap; // �}�b�v�摜
let gImgMonster; // �����X�^�[�摜
let gImgPlayer; // �v���C���[�摜
let gItem = 0; // �����A�C�e��
let gOrder; // �s����
let gPhase = 0; // �퓬�t�F�[�Y
let gPlayerX = START_X * TILESIZE + TILESIZE / 2; // �v���C���[���WX
let gPlayerY = START_Y * TILESIZE + TILESIZE / 2; // �v���C���[���WY
let gScreen; // ���z���

const gFileBoss = "./img/boss.png";
const gFileMap = "./img/map.png";
const gFileMonster = "./img/monster.png";
const gFilePlayer = "./img/player.png";

const gEncounter = [0, 0, 0, 1, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0]; // �G�G���J�E���g�m��
const gMonsterName = ["�X���C��", "������", "�i�C�g", "�h���S��", "����"]; // �����X�^�[����

// �}�b�v
const gMap = [
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 3, 6, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 3, 3, 6, 6, 7, 7, 7, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 6, 3, 0, 0, 0, 3, 3, 0, 6, 6, 6, 0, 0, 0,
 0, 0, 3, 3, 6, 6, 6, 7, 7, 2, 2, 2, 7, 7, 2, 2, 2, 7, 7, 6, 3, 3, 3, 6, 6, 3, 6,13, 6, 0, 0, 0,
 0, 3, 3,10,11, 3, 3, 6, 7, 7, 2, 2, 2, 2, 2, 2, 1, 1, 7, 6, 6, 6, 6, 6, 3, 0, 6, 6, 6, 0, 0, 0,
 0, 0, 3, 3, 3, 0, 3, 3, 3, 7, 7, 2, 2, 2, 2, 7, 7, 1, 1, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 7, 7, 7, 7, 2, 7, 6, 3, 1, 3, 6, 6, 6, 3, 0, 0, 0, 3, 3, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 7, 2, 7, 6, 3, 1, 3, 3, 6, 6, 3, 0, 0, 0, 3, 3, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 7, 7, 7, 6, 3, 1, 1, 3, 3, 6, 3, 3, 0, 0, 3, 3, 3, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 7, 7, 7, 6, 3, 1, 1, 3, 3, 6, 3, 3, 0, 3,12, 3, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 7, 7, 6, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 6, 6, 6, 6, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6, 6, 3, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 3, 3, 3, 6, 6, 6, 3, 3, 3, 1, 1, 1, 1, 1, 3, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 8, 9, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 1, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 3, 3, 3, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 3, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 3, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 3, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14, 6, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0,
 7,15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0,
 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7,
];

// �퓬�s������
function action() {
    gPhase++; // �t�F�[�Y�o��

    // �G�̍s�����̏ꍇ
    if (((gPhase + gOrder) & 1) == 0) {
        if (gPhase == 3) {
            const d = getDamage(gEnemyType + 2);
            setMessage(gMonsterName[gEnemyType] + "�̍U���I", d + " �̃_���[�W�I");
            gHP -= d; // �v���C���[��HP����
            // �v���C���[�����S�����ꍇ
            if (gHP <= 0) {
                gPhase = 7; // ���S�t�F�[�Y
            }
            return;
        }
    }

    // �v���C���[�̍s����
    if (gCursor == 0) { //�u�키�v�I����
        const d = getDamage(gLv + 1); // �_���[�W�v�Z���ʎ擾
        setMessage("���Ȃ��̍U���I", d + " �̃_���[�W�I");
        gEnemyHP -= d;
        if (gEnemyHP <= 0) {
            gPhase = 5;
        }
        return;
    }

    if (Math.random() < 0.5) { //�u������v������
        setMessage("���Ȃ��͓����o����", null);
        gPhase = 6;
        return;
    }

    // �u������v���s��
    setMessage("���Ȃ��͓����o����", "��������荞�܂ꂽ�I");
}

// �o���l���Z
function addExp(val) {
    gEx += val; // �o���l���Z
    // ���x���A�b�v�����𖞂����Ă���ꍇ
    while (gLv * (gLv + 1) * 2 <= gEx) {
        gLv++; // ���x���A�b�v
        gMHP += 4 + Math.floor(Math.random() * 3); // �ő�HP�㏸4�`6
    }
}

// �G�o������
function appearEnemy(t) {
    gPhase = 1; // �G�o���t�F�[�Y
    gEnemyHP = t * 3 + 5; // �GHP
    gEnemyType = t;
    setMessage("�G�����ꂽ�I", null);
}

// �퓬�R�}���h
function commandFight() {
    gPhase = 2; // �퓬�R�}���h�I���t�F�[�Y
    gCursor = 0;
    setMessage( "�@�키", "�@������" );
}

// �퓬��ʕ`�揈��
function drawFight(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // �G���������Ă���ꍇ
    if (gPhase <= 5) {
        // ���X�{�X�̏ꍇ
        if (isBoss()){
            ctx.drawImage(gImgBoss, WIDTH / 2 - gImgBoss.width / 2, HEIGHT / 2 - gImgBoss.height / 2);
        } else {
            let w = gImgMonster.width / 4;
            let h = gImgMonster.height;
            ctx.drawImage(gImgMonster, gEnemyType * w, 0, w, h, Math.floor( WIDTH / 2 - w / 2 ), Math.floor( HEIGHT / 2 - h / 2 ), w, h);
        }
    }
    // �X�e�[�^�X�`��
    drawStatus(ctx);
    // ���b�Z�[�W�`��
    drawMessage(ctx);

    // �퓬�t�F�[�Y���R�}���h�I�𒆂̏ꍇ
    if (gPhase == 2) {
        ctx.fillText("��", 6, 96 + 14 * gCursor); // �J�[�\���`��
    }
}

// �t�B�[���h�`�揈��
function drawField(ctx) {
    let mx = Math.floor(gPlayerX / TILESIZE); // �v���C���[�̃^�C�����WX
    let my = Math.floor(gPlayerY / TILESIZE); // �v���C���[�̃^�C�����WY

    for (let dy = -SCR_HEIGHT; dy <= SCR_HEIGHT; dy++ ) {
        let ty = my + dy; // �^�C�����WY
        let py = (ty + MAP_HEIGHT) % MAP_HEIGHT; // ���[�v��^�C�����WY
        for (let dx = -SCR_WIDTH; dx <= SCR_WIDTH; dx++) {
            let tx = mx + dx; // �^�C�����WX
            let px = (tx + MAP_WIDTH) % MAP_WIDTH; // ���[�v��^�C�����WX
            drawTile(ctx,
                    tx * TILESIZE + WIDTH / 2 - gPlayerX,
                    ty * TILESIZE + HEIGHT / 2 - gPlayerY,
                    gMap[py * MAP_WIDTH + px]);
        }
    }

    // �v���C���[
    ctx.drawImage(gImgPlayer,
                (gFrame >> 4 & 1) * CHRWIDTH, gAngle * CHRHEIGHT, CHRWIDTH, CHRHEIGHT,
                WIDTH / 2 - CHRWIDTH / 2, HEIGHT / 2 - CHRHEIGHT + TILESIZE / 2, CHRWIDTH, CHRHEIGHT);

    // �X�e�[�^�X�E�B���h�E
    ctx.fillStyle = WNDSTYLE;
    ctx.fillRect(2, 2, 44, 37);

    // �X�e�[�^�X�`��
    drawStatus(ctx);
    // ���b�Z�[�W�`��
    drawMessage(ctx); 
}

function drawMain() {
    // ���z��ʂ�2D�`��R���e�L�X�g���擾
    const ctx = gScreen.getContext('2d');

    // �}�b�v�ړ��t�F�[�Y�̏ꍇ
    if (gPhase <= 1) {
        // �}�b�v�`��
        drawField(ctx);
    } else {
        drawFight(ctx);
    }

/*
    // �E�B���h�E�̐F�ݒ�
    ctx.fillStyle = WNDSTYLE;
    ctx.fillRect(20, 3, 105, 15);

    // �����t�H���g�ݒ�
    ctx.font = FONT;
    ctx.fillStyle = FONTSTYLE;
    ctx.fillText("x=" + gPlayerX + " y=" + gPlayerY + " m=" + gMap[ my * MAP_WIDTH + mx ], 25, 15);
*/
}

// ���b�Z�[�W�`��
function drawMessage(ctx) {
    // ���b�Z�[�W���e�����݂��Ȃ��ꍇ
    if(!gMessage1){
        return;
    }

    // �E�B���h�E�̐F�ݒ�
    ctx.fillStyle = WNDSTYLE;
    ctx.fillRect(4, 84, 120, 30);

    // �����t�H���g�ݒ�
    ctx.font = FONT;
    ctx.fillStyle = FONTSTYLE;

    // ���b�Z�[�W�P�s�ڕ`��
    ctx.fillText(gMessage1, 6, 96);
    // ���b�Z�[�W�Q�s�ڕ`��
    if (gMessage2) {
        ctx.fillText(gMessage2, 6, 110);
    }
}

// �X�e�[�^�X�`��
function drawStatus(ctx) {
    // �����t�H���g�ݒ�
    ctx.font = FONT;
    ctx.fillStyle = FONTSTYLE;
    // �X�e�[�^�X��ݒ�
    ctx.fillText("Lv", 4, 13); // Lv
    drawTextR(ctx, gLv, 36, 13);
    ctx.fillText("HP", 4, 25); // HP
    drawTextR(ctx, gHP, 36, 25);
    ctx.fillText("Ex", 4, 37); // Ex
    drawTextR(ctx, gEx, 36, 37);
}

function drawTextR(ctx, str, x, y) {
    ctx.textAlign = "right";
    ctx.fillText(str, x, y);
    ctx.textAlign = "left";
}

function drawTile(ctx, x, y, idx) {
    const ix = (idx % TILECOLUMN) * TILESIZE;
    const iy = Math.floor(idx / TILECOLUMN ) * TILESIZE;
    ctx.drawImage(gImgMap, ix, iy, TILESIZE, TILESIZE, x, y, TILESIZE, TILESIZE);
}

// �_���[�W�ʎZ�o
function getDamage(a) {
    return(Math.floor(a * ( 1 + Math.random()))); // �U���͂̂P�`�Q�{
}

function isBoss() {
    return(gEnemyType == gMonsterName.length - 1);
}

function LoadImage() {
    // ���X�{�X�摜�ǂݍ���
    gImgBoss = new Image();
    gImgBoss.src = gFileBoss;
    // �}�b�v�摜�ǂݍ���
    gImgMap = new Image();
    gImgMap.src = gFileMap;
    // �����X�^�[�摜�ǂݍ���
    gImgMonster = new Image();
    gImgMonster.src = gFileMonster;
    // �v���C���[�摜�ǂݍ���
    gImgPlayer = new Image();
    gImgPlayer.src = gFilePlayer;
}

// function setMessage( v1, v2 = null ) // IE�Ή�
function setMessage(v1, v2) {
    gMessage1 = v1;
    gMessage2 = v2;
}

// IE�Ή�
function sign(val) {
    if(val == 0) {
        return(0);
    }
    if (val < 0) {
        return(-1);
    }
    return(1);
}

// �t�B�[���h�i�s����
function tickField() {

    if (gPhase != 0) {
        return;
    }

    // �ړ������̓��b�Z�[�W�\�����̏ꍇ
    if(gMoveX != 0 || gMoveY != 0 || gMessage1) {
    } else if(gKey[37]) {
        gAngle = 1;
        gMoveX = -TILESIZE; // ��
    } else if(gKey[38]) {
        gAngle = 3;
        gMoveY = -TILESIZE; // ��
    } else if(gKey[39]) {
        gAngle = 2;
        gMoveX =  TILESIZE; // �E
    } else if(gKey[40]) {
        gAngle = 0;
        gMoveY =  TILESIZE; // ��
    }

    // �ړ���̃^�C�����W����
    let mx = Math.floor((gPlayerX + gMoveX) / TILESIZE); // �ړ���̃^�C�����WX
    let my = Math.floor((gPlayerY + gMoveY) / TILESIZE); // �ړ���̃^�C�����WY
    mx += MAP_WIDTH; // �}�b�v���[�v����X
    mx %= MAP_WIDTH; // �}�b�v���[�v����X
    my += MAP_HEIGHT; // �}�b�v���[�v����Y
    my %= MAP_HEIGHT; // �}�b�v���[�v����Y
    let m = gMap[my * MAP_WIDTH + mx]; // �^�C���ԍ�
    // �N���s�̒n�`�̏ꍇ
    if (m < 3) {
        gMoveX = 0; // �ړ��֎~X
        gMoveY = 0; // �ړ��֎~Y
    }

    if (Math.abs( gMoveX ) + Math.abs( gMoveY ) == SCROLL ) { // �}�X�ڈړ����I��钼�O
        if (m == 8 || m == 9) { // ����
            gHP = gMHP; // HP�S��
            setMessage("������|���āI", null);
        }

        if (m == 10 || m == 11) { // �X
            gHP = gMHP; // HP�S��
            setMessage("���̉ʂĂɂ�����", "����܂�");
        }

        if (m == 12 ) { // ��
            gHP = gMHP; // HP�S��
            setMessage("�J�M�͓��A�ɂ���܂�", null);
        }

        if (m == 13) { // ���A
            gItem = 1; // �J�M����
            setMessage("�J�M����ɓ��ꂽ", null);
        }

        if (m == 14) { // ��
            // �J�M��ێ����Ă��Ȃ��ꍇ
            if (gItem == 0 ) {
                gPlayerY -= TILESIZE; // �P�}�X��ֈړ�
                setMessage("�J�M���K�v�ł�", null);
            } else {
                setMessage("�����J����", null);
            }
        }

        if (m == 15) { // �{�X
            appearEnemy(gMonsterName.length - 1);
        }

        // �����_���G���J�E���g
        if (Math.random() * 8 < gEncounter[m]) {
            let t = Math.abs(gPlayerX / TILESIZE - START_X) +
                    Math.abs(gPlayerY / TILESIZE - START_Y);
            // �}�b�v�^�C�v���т������ꍇ
            if (m == 6) {
                t += 8; // �G���x����0.5�㏸
            }

            // �}�b�v�^�C�v���R�������ꍇ
            if (m == 7) {
                t += 16; // �G���x����1�㏸
            }
            t += Math.random() * 8; // �G���x����0�`0.5�㏸
            t = Math.floor(t / 16);
            t = Math.min(t, gMonsterName.length - 2); // �������
            appearEnemy(t);
        }
    }

    gPlayerX += sign(gMoveX) * SCROLL; // �v���C���[���W�ړ�X
    gPlayerY += sign(gMoveY) * SCROLL; // �v���C���[���W�ړ�Y
    gMoveX -= sign(gMoveX) * SCROLL; // �ړ��ʏ���X
    gMoveY -= sign(gMoveY) * SCROLL; // �ړ��ʏ���Y

    // �}�b�v���[�v����
    gPlayerX += (MAP_WIDTH  * TILESIZE);
    gPlayerX %= (MAP_WIDTH  * TILESIZE);
    gPlayerY += (MAP_HEIGHT * TILESIZE);
    gPlayerY %= (MAP_HEIGHT * TILESIZE);
}

function paint() {
    drawMain();

    // canvas�̐ݒ�
    const canvas = $('#main').get(0);
    // �L�����o�X�̃R���e�L�X�g���擾
    const ctx = canvas.getContext('2d');
    // ���z��ʂ̃C���[�W������ʂ֓]��
    ctx.drawImage(gScreen, 0, 0, gScreen.width, gScreen.height, 0, 0,  gWidth, gHeight);
}

// ��ʃT�C�Y�ݒ�
function setSize() {
    var canvas = $('#main').get(0);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    // �h�b�g���N�b�L���\��
    ctx.imageSmoothingEnabled = ctx.msImageSmoothingEnabled = SMOOTH;

    // ����ʃT�C�Y���v���B�h�b�g�̃A�X�y�N�g����ێ������܂܂ł̍ő�T�C�Y���v������B
    gWidth = canvas.width;
    gHeight = canvas.height;
    if (gWidth / WIDTH < gHeight / HEIGHT) {
        gHeight = gWidth * HEIGHT / WIDTH;
    } else {
        gWidth = gHeight * WIDTH / HEIGHT;
    }
}

// �^�C�}�[�C�x���g�������̏���
function timer() {
    if (!gMessage1) {
        // �����J�E���^�����Z
        gFrame++;
        // �t�B�[���h�i�s����
        tickField();
    }
    // �`�揈��
    paint();
}

// �L�[����(DOWN)�C�x���g
$(window).keydown(function(ev) {
    // �L�[�R�[�h�擾
    let c = ev.keyCode;
    // ���ɉ������̏ꍇ�i�L�[���s�[�g�j
    if (gKey[c] != 0) {
        return;
    }
    gKey[c] = 1;

    // �G�����ꂽ�ꍇ
    if (gPhase == 1) {
        // �퓬�R�}���h
        commandFight();
        return;
    }

    // �퓬�R�}���h�I�𒆂̏ꍇ
    if (gPhase == 2) {
        // Enter�L�[�A����Z�L�[�̏ꍇ
        if (c == 13 || c == 90) {
            gOrder = Math.floor(Math.random() * 2); // �퓬�s����
            // �퓬�s������
            action();
        } else {
            gCursor = 1 - gCursor; // �J�[�\���ړ�
        }
        return;
    }

    if (gPhase == 3) {
        // �퓬�s������
        action();
        return;
    }

    if (gPhase == 4) {
        // �퓬�R�}���h
        commandFight();
        return;
    }

    if (gPhase == 5) {
        gPhase = 6;
        // �o���l���Z
        addExp(gEnemyType + 1);
        setMessage("�G����������I", null);
        return;
    }

    if (gPhase == 6) {
        // �G�����X�{�X�ŁA���u�키�v�I����
        if (isBoss() && gCursor == 0){
            setMessage("������|��", "���E�ɕ��a���K�ꂽ");
            return;
        }
        gPhase = 0; // �}�b�v�ړ��t�F�[�Y
    }

    if (gPhase == 7) {
        gPhase = 8;
        setMessage("���Ȃ��͎��S����", null);
        return;
    }

    if (gPhase == 8) {
        setMessage("�Q�[���I�[�o�[", null);
        return;
    }
    gMessage1 = null;
});

// �L�[����(UP)�C�x���g
$(window).keyup(function(ev) {
    gKey[ev.keyCode] = 0;
});

$(window).on('load', function() {
    LoadImage();

    // ���z��ʂ̐ݒ�
    gScreen = document.createElement('canvas');
    gScreen.width = WIDTH;
    gScreen.height = HEIGHT;

    // ��ʃT�C�Y������
    setSize();

    // �u���E�U�T�C�Y�ύX���AsetSize()���Ă΂��悤�w��
    $(window).on('resize', function(){setSize()});
    setInterval(function(){timer()}, 33); // 33ms�Ԋu�ŁAtimer()���Ăяo���悤�w��
});
