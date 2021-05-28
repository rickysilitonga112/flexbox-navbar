// Array pada javascript
// let dataMahasiswa = ['Ricky Silitonga', 'lulus', [3.53, 3.78, 3.54, 4, 3.55, 3.4, 3.2, 4]];

// function hitungIPK(IPS){
//     let total = 0;
//     for (let i=0; i<IPS.length; i++){
//         total += IPS[i];
//     }
//     return total/IPS.length;
// }

// console.log('Total ipk = '+ hitungIPK(dataMahasiswa[2]));

// let obj1 = {};
// obj1.printHalo = function() {
//     console.log('halo Ricky Silitonga');
// }

// obj1.printHalo();

// // constructor function
// function Halo(nama, kelas){
//     this.nama = nama;
//     this.kelas = kelas;
//     tampilkan = function(){
//         console.log(this);
//     }
// }
// murid2 = new Halo('Ricky Silitonga', 5);

const tombol = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
tombol.addEventListener('click', () => {
    nav.classList.toggle('slide');
});

let nama = (x) => console.log('Hi ' + x);

nama('ricky');