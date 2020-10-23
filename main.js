
function myFunction() {
  let x = document.getElementById("home");
  let y = document.getElementById("start");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block"
  }
}
let reset = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Semaphore_Ready.svg";

let count= 0
let data=['a-y-a-h-','i-b-u-','a-d-e-']
let soal= data[count]


function switcImage() {
  
  soal= data[count]
  console.log(soal, count)
  let y= document.getElementsByClassName("flag");
  for(let i=0; i<soal.length; i++){

    for(let j=0; j<y.length; j++){
      if(y[j].childNodes[1].id === soal[i]){
        setTimeout(function timer() {
          // console.log( y[j].childNodes[1].src);
          let z= y[j].childNodes[1].src;
          document.getElementById("peraga").childNodes[1].src = z
        }, i * 1000);
      }
    }
  }
}

function isAlpha(kata){
  let output=''
  for(let i=0; i<kata.length; i++){
    let ch= kata[i]
    if(typeof ch === "string" && ch.length === 1 && (ch >= "a" && ch <= "z" || ch >= "A" &&ch <= "Z")){
      output+=ch
    }
  }
  return output
}

function cekJawaban(){
  let cek= document.getElementById("answer").value;
  let score= Number(document.getElementById("nilai").innerText);
  let datAlpha= isAlpha(soal)
  if(cek === datAlpha){
    document.getElementById("nilai").innerText = score+100
    count++
    document.getElementById("answer").value ='';
  }
  
}






