var myCanvas = document.getElementById('canvas')
var contex = myCanvas.getContext('2d');
myCanvas.width=myCanvas.scrollWidth;
myCanvas.height=myCanvas.scrollHeight;

function draw() {
    //1
    var panjangPP1 = 100;
    var tinggiPP1 = 150;
    contex.fillStyle='red';
    contex.fillRect(10, 350, panjangPP1, tinggiPP1);
    
    //tutup
    var panjangPP2 = 100;
    var tinggiPP2 = 30;
    contex.fillStyle='gray';
    contex.fillRect(10, 320, panjangPP2, tinggiPP2);
}
