(function(){
function format(n){
if(n===null || n===undefined || Number.isNaN(n)) return '—';
return Number.isFinite(n) ? parseFloat(n.toFixed(4)) : '—';
}


function calculate(){
const shape = shapeSelect.value;
const get = id => parseFloat(document.getElementById(id)?.value);


let area=null, per=null, vol=null;


if(shape==='circle'){
const r = get('radius');
if(r>0){ area = Math.PI * r * r; per = 2 * Math.PI * r; }
}


if(shape==='rectangle'){
const a=get('width'), b=get('height');
if(a>0 && b>0){ area=a*b; per=2*(a+b); }
}


if(shape==='square'){
const s=get('side');
if(s>0){ area=s*s; per=4*s; }
}


if(shape==='triangle'){
const b=get('base'), h=get('height'), a=get('sideA'), c=get('sideB');
if(b>0 && h>0){ area=(b*h)/2; }
// si los 3 lados están, calculamos perímetro
if(a>0 && b>0 && c>0){ per = a + b + c; }
}


if(shape==='cylinder'){
const r=get('radius'), h=get('height');
if(r>0 && h>0){ vol = Math.PI * r * r * h; per = 2 * Math.PI * r; area = 2 * Math.PI * r * (r + h); }
}


resultArea.textContent = 'Área: ' + format(area);
resultPerimeter.textContent = 'Perímetro / Superficie: ' + format(per);
resultVolume.textContent = 'Volumen: ' + format(vol);
}


function reset(){
inputsWrap.querySelectorAll('input').forEach(i=>i.value='');
resultArea.textContent = 'Área: —';
resultPerimeter.textContent = 'Perímetro / Superficie: —';
resultVolume.textContent = 'Volumen: —';
}


// eventos
shapeSelect.addEventListener('change', ()=>{
createInputs(shapeSelect.value);
reset();
});


calculateBtn.addEventListener('click', ()=>{ calculate(); });
resetBtn.addEventListener('click', reset);


// inicialización
createInputs(shapeSelect.value);
})();
