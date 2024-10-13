const canvas = document.getElementById("signatureCanvas")
const context = canvas.getContext('2d')
const clearButton = document.getElementById("clearButton")
const saveButton = document.getElementById("saveButton")
canvas.width=400;
canvas.height = 200;
let isDrawing = false;
canvas.addEventListener('mousedown',()=>{
    isDrawing=true;
});

canvas.addEventListener('mouseup',()=>{
    isDrawing=false;
    context.beginPath();
});

canvas.addEventListener('mousemove',(e)=>{
    if(!isDrawing) return;
    context.linewidth = 2;
    context.linecap = 'round';
    context.strokeStyle='#111111';

    context.lineTo(e.clientX - canvas.offsetLeft,e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft,e.clientY - canvas.offsetTop);
});
clearButton.addEventListener('click',()=>{
    context.clearRect(0,0,canvas.width,canvas.height)
});
saveButton.addEventListener('click',()=>{
    isDrawing=false;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href=dataURL;
    link.download='signature.png';
    link.click();
});