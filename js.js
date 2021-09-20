
let pisteet;
let kierrosPisteet;
let aktivoituPelaaja;
let peliMenossa;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){

   if (peliMenossa) {

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var diceDOM=document.getElementById("dice1");
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/noppa' + dice1 + '.png';

    var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceDOM2=document.getElementById("dice2");
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'img/noppa' + dice2 + '.png';


       if (dice1 == 1 && dice2==1){
        kierrosPisteet += 25;
           document.querySelector('#current-' + aktivoituPelaaja).textContent = kierrosPisteet;
       }

       else if (dice1 == 2 && dice2==2 || dice1 == 3 && dice2==3 ||
           dice1 == 4 && dice2==4 ||dice1 == 5 && dice2==5 ||
           dice1 == 6 && dice2==6){
            kierrosPisteet += 12;
           document.querySelector('#current-' + aktivoituPelaaja).textContent = kierrosPisteet;
       }

        else if (dice1 !== 1 && dice2 !==1){
          kierrosPisteet += dice1+dice2;
          document.querySelector('#current-' + aktivoituPelaaja).textContent = kierrosPisteet;
        } else {
          nextPlayer();
        }
   }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if (peliMenossa) {
    pisteet[aktivoituPelaaja] += kierrosPisteet;

     document.querySelector('#score-' + aktivoituPelaaja).textContent = pisteet[aktivoituPelaaja];

     if (pisteet[aktivoituPelaaja] >= 100) {
      document.querySelector('#name-' + aktivoituPelaaja).textContent = 'Voittaja';


      peliMenossa = false;
     } else {
      nextPlayer();
     }
  }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  pisteet = [0,0];
  kierrosPisteet = 0;
  aktivoituPelaaja = 0;
  peliMenossa = true;


  document.querySelector('.dice1').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Khaled';
  document.getElementById('name-1').textContent = 'Tietokone';

  document.querySelector('.player-0-panel').classList.remove('Voittaja');
  document.querySelector('.player-1-panel').classList.remove('Voittaja');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}


function nextPlayer() {
  aktivoituPelaaja === 0 ? aktivoituPelaaja = 1 : aktivoituPelaaja = 0;
  kierrosPisteet = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

}
