


document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor');


  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  const scaleFactorX = ((e.clientX + e.clientY) / (window.innerWidth + window.innerHeight)) * 20;
  const scaleFactorY = ((e.clientX + e.clientY) / (window.innerWidth + window.innerHeight)) * 20;

  cursor.style.width = `${scaleFactorX}rem`;
  cursor.style.height = `${scaleFactorY}rem`;

  cursor.style.borderRadius = '50%';


});



function changeCursorSize(width, height) {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.width = `${width}px`;
  cursor.style.height = `${height}px`;
}

// Add event listeners to specific elements for cursor size change
const elementsToHover = document.querySelectorAll('#elementId1, #elementId2');

elementsToHover.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    changeCursorSize(30, 30); // Change size as desired
  });

  element.addEventListener('mouseleave', () => {
    changeCursorSize(20, 20); // Return to default size
  });
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
  const circleElement1 = document.getElementById('circle-1');
  const circleElement2 = document.getElementById('circle-2');
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
    circleElement1.style.setProperty('--random-color', randomColor);
    circleElement2.style.setProperty('--random-color', randomColor);
    circleElement.style.backgroundColor = randomColor;
    circleElement1.style.backgroundColor = randomColor;
    circleElement2.style.backgroundColor = randomColor;
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
      circleElement1.style.backgroundColor = 'none';
      circleElement2.style.backgroundColor = 'none';
    } else if (animationTime >= 0.5 && animationTime < 0.6) {
      circleElement.style.display = 'block';
      circleElement1.style.display = 'block';
      circleElement2.style.display = 'block';
      circleElement.style.setProperty('--random-color', randomColor);
      circleElement1.style.setProperty('--random-color', randomColor);
      circleElement2.style.setProperty('--random-color', randomColor);
      customCursor.style.backgroundColor = randomColor;



      bottleElements.forEach((element) => {
        element.style.boxShadow = `2px 2px 5px ${randomColor}`;
      });

      languageSelect.style.boxShadow = `2px 2px 5px ${randomColor}`;


      circleElement.style.backgroundColor = randomColor;
      circleElement1.style.backgroundColor = randomColor;
      circleElement2.style.backgroundColor = randomColor;
      itsElement.style.color = randomColor;
      quaterElement.style.color = randomColor;
      timeElement.style.color = randomColor;
      waterElement.style.backgroundColor = randomColor;
    } else {
      circleElement.style.display = 'none';
      circleElement1.style.display = 'none';
      circleElement2.style.display = 'none';
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
const customCursor = document.getElementById('custom-cursor');
const waterElement = document.getElementById('water');
let cursorBackgroundColor = getRandomPastelColor();


let lastScrollTop = 0;


function toggleBackground() {
  if (body.style.backgroundColor === 'black') {
    body.style.backgroundColor = '#f0f0f0';

  } else {
    body.style.backgroundColor = 'black';

  }
}


window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    if (body.style.backgroundColor === 'black') {
      body.style.backgroundColor = '#f0f0f0';
      
    }
  } else if (scrollTop < lastScrollTop) {
    if (body.style.backgroundColor !== 'black') {
        body.style.backgroundColor = '#f0f0f0';
        
      }
    }

    lastScrollTop = scrollTop;
  });

dayNightToggle.addEventListener('click', () => {
  if (body.style.backgroundColor === 'black') {
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
    toggleImage.src = 'images/night.png';
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


console.log(lastScrollTop)












// Create random circles

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createRandomCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');


  const left = getRandomNumber(0, 60);
  const top = getRandomNumber(0, 60);

  circle.style.left = `${left}%`;
  circle.style.top = `${top}%`;

  return circle;
}

const circleContainer = document.querySelector('.circle-container');
for (let i = 0; i < 10; i++) {
  const circle = createRandomCircle();
  circleContainer.appendChild(circle);
}








// Spanish Language, I really need Copilot

const speakerButton = document.getElementById('speakerButton');
const languageSelect = document.getElementById('languageSelect');
const itsElement = document.getElementById('its');
const quaterElement = document.getElementById('quater');
const timeElement = document.getElementById('time');
let selectedLanguage = 'en';

function updateTextContentForLanguage() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  if (selectedLanguage === 'es') {
    const numbersInSpanish = [
      'CERO', 'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO',
      'SEIS', 'SIETE', 'OCHO', 'NUEVE', 'DIEZ',
      'ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE',
      'DIECISÉIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE'
    ];

    const tensInSpanish = [
      '', '', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA'
    ];

    let timeInWords = "IT'S";

    if (hours === 0) {
      timeInWords = 'MEDIANOCHE';
    } else if (hours === 12) {
      timeInWords = 'MEDIODÍA';
    } else if (hours < 12) {
      timeInWords = `${numbersInSpanish[hours]} DE LA MAÑANA`;
    } else {
      timeInWords = `${numbersInSpanish[hours - 12]} DE LA TARDE`;
    }

    if (minutes > 0) {
      if (minutes <= 19) {
        timeInWords += ` Y ${numbersInSpanish[minutes]}`;
      } else {
        const ten = Math.floor(minutes / 10);
        const unit = minutes % 10;
        timeInWords += ` Y ${tensInSpanish[ten]}`;
        if (unit > 0) {
          timeInWords += ` Y ${numbersInSpanish[unit]}`;
        }
      }
    }

    itsElement.textContent = 'ES';
    quaterElement.textContent = 'CUARTO';


    timeElement.textContent = timeInWords;
  } else {
    itsElement.textContent = 'IT\'S';
    quaterElement.textContent = 'QUARTER';

    timeElement.textContent = timeInWords;
  }
}

languageSelect.addEventListener('change', () => {
  selectedLanguage = languageSelect.value;
  updateTextContentForLanguage();
  speakTime();
});



function timetoSpanishWords(time) {
  const hours = time.getHours();
  const minutes = time.getMinutes();

  // Define the words for numbers in Spanish
  const numbersInSpanish = [
    'CERO', 'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO',
    'SEIS', 'SIETE', 'OCHO', 'NUEVE', 'DIEZ',
    'ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE',
    'DIECISÉIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE'
  ];

  // Define words for tens in Spanish
  const tensInSpanish = [
    '', '', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA'
  ];

  // Convert hours and minutes to Spanish words
  let timeInWords = "IT'S";

  if (hours === 0) {
    timeInWords = 'MEDIANOCHE';
  } else if (hours === 12) {
    timeInWords = 'MEDIODÍA';
  } else if (hours < 12) {
    timeInWords = `${numbersInSpanish[hours]} DE LA MAÑANA`;
  } else {
    timeInWords = `${numbersInSpanish[hours - 12]} DE LA TARDE`;
  }

  if (minutes > 0) {
    if (minutes <= 19) {
      timeInWords += ` Y ${numbersInSpanish[minutes]}`;
    } else {
      const ten = Math.floor(minutes / 10);
      const unit = minutes % 10;
      timeInWords += ` Y ${tensInSpanish[ten]}`;
      if (unit > 0) {
        timeInWords += ` Y ${numbersInSpanish[unit]}`;
      }
    }
  }

  return timeInWords;
}

function speakTime() {
  const itsElement = document.getElementById('its');
  const quaterElement = document.getElementById('quater');
  const timeElement = document.getElementById('time');

  let timeInWords;
  if (selectedLanguage === 'en') {

    timeInWords = `${itsElement.textContent} ${quaterElement.textContent} ${timeElement.textContent}`;
  } else if (selectedLanguage === 'es') {
    timeInWords = timetoSpanishWords(new Date());
  }



  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(timeInWords);

  if (selectedLanguage === 'es') {
    utterance.lang = 'es-ES';
  } else {
    utterance.lang = 'en-US';
  }

  synth.speak(utterance);
}


speakerButton.addEventListener('click', speakTime, true);


// Trigger the alarm sound

const alarmHour = 8;
const alarmMinute = 0;





