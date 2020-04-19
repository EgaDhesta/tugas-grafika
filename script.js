var myCanvas = document.getElementById('canvas')
var contex = myCanvas.getContext('2d');
myCanvas.width=myCanvas.scrollWidth;
myCanvas.height=myCanvas.scrollHeight;

contex.font = '35pt Times New Rowan';
contex.fillStyle = 'black';
contex.fillText('BUANGLAH SAMPAH PADA TEMPATNYA',290 ,150);

// tong 1
contex.font = '24pt Times New Rowan';
contex.fillStyle = 'black';
contex.fillText('TUTUP',5 ,550);

// tong 2
contex.font = '24pt Times New Rowan';
contex.fillStyle = 'black';
contex.fillText('SETENGAH',165 ,550);

contex.font = '24pt Times New Rowan';
contex.fillStyle = 'black';
contex.fillText('BUKA',205 ,580);

// tong 3
contex.font = '24pt Times New Rowan';
contex.fillStyle = 'black';
contex.fillText('BUKA',410 ,550);



function draw() {

//1
var pPP1 = 100;
var tPP1 = 150; 

// badan
contex.fillStyle='salmon';
contex.fillRect(10, 350, pPP1, tPP1);

contex.fillStyle='#A9E1E9';
contex.fillRect(200, 350, pPP1, tPP1);

contex.fillStyle='#B6B8F1';
contex.fillRect(400, 350, pPP1, tPP1);
   
//tutup
var pPP2 = 100;
var tPP2 = 30;
contex.fillStyle='black';
contex.fillRect(10, 320, pPP2, tPP2);

//pegangan
var pPP3 = 23;
var tPP3 = 18;
contex.fillStyle='blue';
contex.fillRect(50, 302, pPP3, tPP3);

// bayangan tutup 2 bawah
contex.strokeStyle='gray';
contex.strokeRect(200, 320, pPP2, tPP2);

// bayangan pegangan tutup 2 bawah
contex.strokeStyle='gray';
contex.strokeRect(240, 300, pPP3, tPP3);


// 2

contex.translate(313,-66);                        
contex.rotate((Math.PI/100) * 25); 
contex.translate(-150, -80); 

// tutup
contex.fillStyle='black';
contex.fillRect(325, 365, pPP2, tPP2)

//pegangan
contex.fillStyle='#A9E1E9';
contex.fillRect(361, 347, pPP3, tPP3);


// 3

contex.translate(313,-70); 
contex.rotate(Math.PI/4); 
contex.translate(-99, -330); 

// bayang tutup 2 atas
contex.strokeStyle='gray';
contex.strokeRect(407, 566, pPP2, tPP2)

//bayangan pegangan tutup 2 atas
contex.strokeStyle='gray';
contex.strokeRect(445, 547, pPP3, tPP3);


// tutup
contex.fillStyle='black';
contex.fillRect(407, 365, pPP2, tPP2)

//pegangan
contex.fillStyle='#B6B8F1';
contex.fillRect(445, 347, pPP3, tPP3);

}
draw();

