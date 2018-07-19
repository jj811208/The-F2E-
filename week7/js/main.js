var gameCanvas = document.getElementById('gameCanvas');
var ctx = gameCanvas.getContext('2d');

var gamewidth = 1200;
var gameheight = 800;
var enemyRed = '#E7465D'; //紅
var enemyYellow = '#F5AF5F'; //黃
var enemyBlue = '#3676BB'; //藍
var backgroundColor = '#001D2E';// 背景藍

gameCanvas.width=gamewidth;
gameCanvas.height=gameheight;

//背景
ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, gamewidth, gameheight);

//標題畫面 兩個圓圈
ctx.beginPath();
  ctx.strokeStyle = '#EBEEEE';
  ctx.arc(gamewidth/2,gameheight/2,240,0,2*Math.PI);
  ctx.stroke();
ctx.beginPath();
  ctx.strokeStyle = '#425766';
  ctx.arc(gamewidth/2,gameheight/2,350,0,2*Math.PI);
  ctx.stroke();

//標題畫面 標題
ctx.font="24px Microsoft JhengHei";
ctx.fillStyle='#fff';
ctx.textAlign="center"; 
ctx.fillText("Radio Defense",gamewidth/2,gameheight/2+10);
ctx.font="18px Microsoft JhengHei";
ctx.fillText("Start Game",gamewidth/2,gameheight/2+90);

ctx.beginPath();
  ctx.strokeStyle = '#fff';
  ctx.moveTo(gamewidth/2-50,gameheight/2+69);
  ctx.lineTo(gamewidth/2+48,gameheight/2+69);
  ctx.arc(gamewidth/2+48,gameheight/2+84,15,1.5*Math.PI,2.5*Math.PI);
  ctx.lineTo(gamewidth/2-50,gameheight/2+99);
  ctx.arc(gamewidth/2-50,gameheight/2+84,15,0.5*Math.PI,1.5*Math.PI);
  ctx.stroke();
ctx.closePath();

ctx.beginPath();
  ctx.strokeStyle = enemyYellow;
  ctx.fillStyle = enemyYellow;
  ctx.rect(gamewidth/2-65,gameheight/2-100,40,60);
  ctx.rect(gamewidth/2-65,gameheight/2-35,40,5);
  ctx.fill();
  ctx.stroke();
  
ctx.beginPath();
  ctx.strokeStyle = '#fff';
  ctx.fillStyle = '#fff';
  ctx.rect(gamewidth/2-55,gameheight/2-107,20,7);
  ctx.fill();
  ctx.stroke();
  
ctx.beginPath();
  ctx.strokeStyle = '#fff';
  ctx.fillStyle = '#fff';
  ctx.moveTo(gamewidth/2-45,gameheight/2-90);
  ctx.lineTo(gamewidth/2-55,gameheight/2-68);
  ctx.lineTo(gamewidth/2-43,gameheight/2-68);
  ctx.lineTo(gamewidth/2-45,gameheight/2-50);
  ctx.lineTo(gamewidth/2-35,gameheight/2-72);
  ctx.lineTo(gamewidth/2-47,gameheight/2-72);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  
ctx.beginPath();
  ctx.strokeStyle = '#fff';
  ctx.fillStyle = '#fff';
  ctx.moveTo(gamewidth/2,gameheight/2-30);
  ctx.lineTo(gamewidth/2,gameheight/2-140);
  ctx.lineTo(gamewidth/2+55,gameheight/2-140);
  ctx.arc(gamewidth/2+55,gameheight/2-110,30,1.5*Math.PI,2.4*Math.PI);
  ctx.bezierCurveTo(gamewidth/2+90, gameheight/2-80, gamewidth/2+75, gameheight/2-30, gamewidth/2+90, gameheight/2-30);
  ctx.lineTo(gamewidth/2+70,gameheight/2-30);
  ctx.bezierCurveTo(gamewidth/2+65, gameheight/2-35, gamewidth/2+65, gameheight/2-40, gamewidth/2+65, gameheight/2-60);
  ctx.bezierCurveTo(gamewidth/2+50, gameheight/2-57, gamewidth/2+50, gameheight/2-57, gamewidth/2+55, gameheight/2-73);
  ctx.lineTo(gamewidth/2+20, gameheight/2-73);
  ctx.lineTo(gamewidth/2+20, gameheight/2-30);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
ctx.beginPath();
  ctx.strokeStyle = backgroundColor;
  ctx.fillStyle = backgroundColor;
  ctx.moveTo(gamewidth/2+20,gameheight/2-90);
  ctx.lineTo(gamewidth/2+20,gameheight/2-126);
  ctx.lineTo(gamewidth/2+50,gameheight/2-126);
  ctx.arc(gamewidth/2+50,gameheight/2-108,18,1.5*Math.PI,2.5*Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();



//敵人紅
ctx.beginPath();
ctx.save();
ctx.strokeStyle = enemyRed;
ctx.fillStyle = enemyRed;
ctx.moveTo(100,175);
ctx.lineTo(150,160);
ctx.lineTo(195,180);
ctx.lineTo(200,205);
ctx.lineTo(175,245);
ctx.lineTo(120,225);
ctx.fill();
ctx.restore();
ctx.closePath();

//敵人黃
ctx.beginPath();
ctx.strokeStyle = enemyYellow;
ctx.fillStyle = enemyYellow;
ctx.arc(gamewidth-140,100,50,0,2*Math.PI);
ctx.fill();
ctx.stroke();

//敵人藍
ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = enemyBlue;
  ctx.fillStyle = enemyBlue;
  ctx.rotate(5*Math.PI/180);
  ctx.translate(-10,-40);
  ctx.moveTo(gamewidth-305,gameheight-100);
  ctx.lineTo(gamewidth-195,gameheight-100);
  ctx.lineTo(gamewidth-250,gameheight-200);
  ctx.fill();
  ctx.restore();
ctx.closePath();

//說明文字
ctx.font="18px Microsoft JhengHei";
ctx.fillStyle='#eee';
ctx.textAlign="left"; 
ctx.fillText("你身負著運送能量電池的任務",10,gameheight-80);
ctx.fillText("卻遭到幾何星人的埋伏",10,gameheight-50);
ctx.fillText("請協助從它們的手中奪回能量電池",10,gameheight-20);