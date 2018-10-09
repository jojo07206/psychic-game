<script type="text/javascript">

    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t", "u","v","w","x","y","z"];

    var wins = 0;
    var losses = 0;
    var guessesleft = 9;
    var yourguessessofar = [];

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guesses-left-text");
    var yourguessessofarText = document.getElementById("your-guesses-so-far-text");

    document.onkeyup = function(event) {

      var userGuess = event.key;

      var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      if (userGuess === computerLetter) {
         (wins++) && (guessesleft = 9) && (yourguessessofar = [])
      }

      else if ((userGuess != computerLetter) && (guessesleft != 0)){
             ((yourguessessofar.push(userGuess)) && (guessesleft--))
      }

      else if ((userGuess != computerLetter) && (guessesleft === 0)){
             (losses++) && (guessesleft = 9) && (yourguessessofar = [])
      }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesleft;
        yourguessessofarText.textContent = "Your Guesses so far: " + yourguessessofar;
    };

</script>