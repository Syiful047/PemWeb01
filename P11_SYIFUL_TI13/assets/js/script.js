// //menangkap semua elemen a
// document.querySelectorAll('#opts a').forEach((a) =>
//     //jika di kliknakan menjalankan fungsi computerChoise
//     a.addEventListener('click', (element) => {
//         computerChoise(element); 

//     }) 
// );
// function computerChoise(element) {
//     //tangkap pilihan user
//     let pilihanUser = element.target.innerText;

//     //menangkap element result dengan queryselector untuk menampung
//     //nilai hasil dari game
//     let pilihanComputer =document.querySelector('#result');

//     //membuat array pilhan untuk komputer
//     let choices = ['Rock', 'Papper', 'Scissor'];

//     //pilhan random untuk komputer
//     pilihanComputer.innerHTML =
//      choices[Math.round(Math.random() * choices.length)];
//      pilihanComputer = pilihanComputer.innerHTML;

//     //jika pilhan koomputer sama dengan pilhan user (draw)
//     if (pilihanUser == pilihanComputer) {
//         alert('DRAW');
//     }

//     // jika pilhan user yang menang 
//     if (pilihanUser == 'Rock' && pilihanComputer == 'Scissor') {
//         alert('YOU WIN');
//     }
//     else if (pilihanUser == 'Papper' && pilihanComputer == 'Rock') {
//         alert('YOU WIN');
//     }
//     else if (pilihanUser == 'Scissor' && pilihanComputer == 'Papper') {
//         alert('YOU WIN');
//     }

//     // jika komputer yang menag
//     if (pilihanUser == 'Rock' && pilihanComputer == 'Papper') {
//         alert('COMPUTER WIN');
//     }
//     else if (pilihanUser == 'Papper' && pilihanComputer == 'Scissor') {
//         alert('COMPUTER WIN');
//     }
//     else if (pilihanUser == 'Scissor' && pilihanComputer == 'Rock') {
//         alert('COMPUTER WIN');
//     }
// }

// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
    // jika di klik akan menjalankan fungsi computerChoice
    a.addEventListener("click", (element) =>{
        computerChoice(element);
    })
);
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML = 
     choices[Math.round(Math.random() * choices.length)];
     pilihanComputer.innerHTML;

    // Jika pilihan komputer sama dengan pilihan user (Draw)
    if (pilihanUser == pilihanComputer.innerHTML) {
        alert("DRAW");
    }

    // Jika pilihan user yang menang
    if (pilihanUser == "Rock" && pilihanComputer.innerHTML == "Scissors") {
        alert("YOU WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer.innerHTML == "Rock") {
        alert("YOU WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer.innerHTML == "Paper") {
        alert("YOU WIN");
    }

    // Jika pilihan komputer yang menang
    if (pilihanUser == "Rock" && pilihanComputer.innerHTML == "Paper") {
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer.innerHTML == "Scissors") {
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer.innerHTML == "Rock") {
        alert("COMPUTER WIN");
    }
}
