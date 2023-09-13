document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    const backgroundScale = (e.clientX / window.innerWidth) * 10;

    
    cursor.style.width = `${50 + backgroundScale}px`;
    cursor.style.height = `${50 + backgroundScale}px`;
  });



  //This is the function
  function getRandomPastelColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `${r}, ${g}, ${b}`;
}

  function updateTimeText() {
    const itsElement = document.getElementById('its');
    const quaterElement = document.getElementById('quater');
    const timeElement = document.getElementById('time');
    const circleElement = document.getElementById('circle');
    const waterElement = document.getElementById('water');
    const bottleElements = document.querySelectorAll('.bottle');
    const customCursor = document.getElementById('custom-cursor');
    const languageSelect = document.getElementById('languageSelect');
    

    itsElement.textContent = 'IT\'S';
    quaterElement.textContent = 'QUATER';
    timeElement.textContent = 'PAST&nbsp TEN';
    //Get a random color


    const animationTime = (new Date().getSeconds() % 60) / 60;

    const randomColor = getRandomPastelColor();

    const isBlackBackground = document.body.style.backgroundColor === 'black';

    if (isBlackBackground) {
        circleElement.style.setProperty('--random-color', randomColor);
        circleElement.style.backgroundColor = randomColor;
        customCursor.style.backgroundColor = randomColor;
        
        
        
        bottleElements.forEach((element) => {
            element.style.boxShadow = `2px 2px 5px ${randomColor}`
        });

        languageSelect.style.boxShadow = `2px 2px 5px ${randomColor}`;


        itsElement.style.color = randomColor;
        quaterElement.style.color = randomColor;
        timeElement.style.color = randomColor;
        waterElement.style.backgroundColor = randomColor;
      } else {
        if ((animationTime >= 0.0 && animationTime < 0.3) || (animationTime >= 0.45 && animationTime < 0.55) || (animationTime >= 0.7 && animationTime <= 1)) {
          circleElement.style.backgroundColor = 'none';
        } else if (animationTime >= 0.5 && animationTime < 0.6) {
            circleElement.style.display = 'block';
            circleElement.style.setProperty('--random-color', randomColor);
            customCursor.style.backgroundColor = randomColor;
            
            
            
            bottleElements.forEach((element) => {
                element.style.boxShadow = `2px 2px 5px ${randomColor}`;
            });

            languageSelect.style.boxShadow = `2px 2px 5px ${randomColor}`;


            circleElement.style.backgroundColor = randomColor;
            itsElement.style.color = randomColor;
          quaterElement.style.color = randomColor;
          timeElement.style.color = randomColor;
          waterElement.style.backgroundColor = randomColor;
        } else {
            circleElement.style.display = 'none';
        }
      }



// Top text animated 

    const spaceBetweenWords = '50px';
    itsElement.style.marginRight = spaceBetweenWords;
    quaterElement.style.marginRight = spaceBetweenWords;
    timeElement.style.marginRight = spaceBetweenWords;



  



    // Get the current date and time
    const currentTime = new Date();

    // Call the timetoWords function to get the time in words
    const timeInWords = timetoWords(currentTime);

    // Update the time elements with the calculated time text
    const timeWords = timeInWords.split(' ');
    itsElement.textContent = timeWords[0];
    quaterElement.textContent = timeWords[1];
    timeElement.textContent = timeWords.slice(2, -1).join(' ');
  }

  // Function to convert time to words
  function timetoWords(time) {
    // ... (your existing timetoWords function) ...
  }

  // Initial call to set up the time text
  updateTimeText();

  // Update the time text every minute
  setInterval(updateTimeText, 60000);

  function timetoWords(time) {
    const hours = time.getHours();
  const minutes = time.getMinutes();
  const period = hours >= 12;

  const hourWords = [
    'TWELVE', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE',
    'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN'
  ];

  const minuteWords = [
    'o\'clock', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE',
    'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN',
    'TWELVE', 'THIRTEEN', 'FOURTEEN', 'QUARTER', 'SIXTEEN',
    'SEVENTEEN', 'EIGHTEEN', 'NINETEEN', 'TWENTY', 'TWENTY ONE',
    'TWENTY', 'TWENTY', 'TWENTY', 'TWENTY',
    'TWENTY', 'TWENTY', 'TWENTY', 'TWENTY', 'THIRTY'
  ];

  let timeInWords = "IT'S";

  if (minutes === 0) {
    timeInWords += `${hourWords[hours % 12]} O'CLOCK`;
  } else if (minutes === 15) {
    timeInWords += ` QUARTER PAST ${hourWords[hours % 12]}`;
  } else if (minutes === 30) {
    timeInWords += ` HALF PAST ${hourWords[hours % 12]}`;
  } else if (minutes === 45) {
    timeInWords += ` QUARTER TO ${hourWords[(hours % 12) + 1]}`;
  } else if (minutes <= 30) {
    if (minutes === 1) {
      timeInWords += ` ONE MINUTE PAST ${hourWords[hours % 12]}`;
    } else if (minutes <= 20) {
      timeInWords += `${minuteWords[minutes]} MINUTES PAST ${hourWords[hours % 12]}`;
    } else {
      const tens = Math.floor(minutes / 10);
      const ones = minutes % 10;
      timeInWords += `${minuteWords[20 + tens]} ${minuteWords[ones]} MINUTES PAST ${hourWords[hours % 12]}`;
    }
  } else if (minutes > 30) {
    const remainingMinutes = 60 - minutes;
    if (remainingMinutes === 1) {
      timeInWords += ` ONE MINUTE TO ${hourWords[(hours % 12) + 1]}`;
    } else if (remainingMinutes <= 20) {
      timeInWords += `${minuteWords[remainingMinutes]} MINUTES TO ${hourWords[(hours % 12) + 1]}`;
    } else {
      const tens = Math.floor(remainingMinutes / 10);
      const ones = remainingMinutes % 10;
      timeInWords += `${minuteWords[20 + tens]} ${minuteWords[ones]} MINUTES TO ${hourWords[(hours % 12) + 1]}`;
    }
  } else {
    timeInWords += `${minuteWords[minutes]} MINUTES PAST ${hourWords[hours % 12]}`;
  }

  timeInWords += ` ${period ? 'PM' : 'AM'}`;

  return timeInWords;
}





  // Night and Day  Toggle button
const dayNightToggle = document.getElementById('dayNightToggle');
const body = document.body;
const toggleImage = document.getElementById('toggleImage');
const speakerImage = document.querySelector('#speakerButton img');



dayNightToggle.addEventListener('click', () => {
    if(body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '#f0f0f0';
        toggleImage.src = 'images/day-and-night.png';
        speakerImage.src = 'images/medium-volume.png';
        speakerButton.style.backgroundColor = '#dadada';
        speakerButton.classList.remove('black-background');
        languageSelect.style.backgroundColor = '#f0f0f0';
        languageSelect.style.border = 'none';
        
        languageSelect.style.color = '#000'
        languageSelect.style.borderRadius = '0.5rem';
        applyShadowToBottle();

        
    } else {
        body.style.backgroundColor = 'black';
        toggleImage.src = 'images/night.png'
        speakerImage.src = 'images/medium-volume-DAY.png';
        speakerButton.style.backgroundColor = '#222';
        speakerButton.classList.add('black-background');
        languageSelect.style.backgroundColor = '#000';
        languageSelect.style.border = 'none';
        languageSelect.style.color = '#f0f0f0'
        languageSelect.style.borderRadius = '0.5rem';
        applyShadowToBottle();
    }
});




  




// white drop shadow on black background 







  

// Spanish Language, I really need Copilot


let selectedLanguage = 'english';

function setLanguage(language) {
    selectedLanguage = language;
}

  function timetoSpanishWords(time) {

  }

  function speakTime() {

    
    const itsElement = document.getElementById('its');
    const quaterElement = document.getElementById('quater');
    const timeElement = document.getElementById('time');
    
    let timeInWords;
    if (selectedLanguage === 'english') {

        timeInWords = `${itsElement.textContent} ${quaterElement.textContent} ${timeElement.textContent}`;
    } else if (selectedLanguage === 'spanish') {
        timeInWords = timetoSpanishWords(new Date());
    }


    
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(timeInWords);

    synth.speak(utterance);
  }

  const speakerButton = document.getElementById('speakerButton');
  speakerButton.addEventListener('click', speakTime, true);