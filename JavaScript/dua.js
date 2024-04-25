function hitung(a,b,c){
    return a+b-c;
  }
  
function tampil(){
  let a = parseInt(document.getElementById("nilai_a").innerHTML);
   let b = parseInt(document.getElementById("nilai_b").innerHTML);
   let c = parseInt(document.getElementById("nilai_c").innerHTML);
   let hasil = hitung(a,b,c)
   document.getElementById("hasil").innerHTML = hasil;
}
function hilang(){
document.getElementById("hasil").innerHTML = "";
}

function myFunction() {
    let text;
    let person = prompt("Ubah nilai a:");
    if (person == a || person == "") {
      t ext = ;
    } else {
      text = "Hello " + person + "! How are you today?";
    }
}
{
document.getElementById("demo").innerHTML = text;
}