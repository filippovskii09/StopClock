const buttons = document.querySelectorAll('button');

let hour = 00;
let minute = 00;
let second = 00;
let mil = 00;

buttons[0].addEventListener('click', function() {
	timer = true;
	stopWatch()
})
buttons[1].addEventListener('click', function() {
	timer = false;
})
buttons[2].addEventListener('click', function() {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	mil = 0;
	document.querySelector('.hour').innerHTML = '00';
	document.querySelector('.minute').innerHTML = '00';
	document.querySelector('.seconds').innerHTML = '00';
	document.querySelector('.milseconds').innerHTML = '00';
})

function stopWatch() {
	if (timer) {
		mil++;

		if(mil == 100) {
			second++;
			mil = 0
		}

		if(second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
      let minString = minute;
      let secString = second;
      let countString = mil;
 
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (mil < 10) {
            countString = "0" + countString;
        }
 
        document.querySelector('.hour').innerHTML = hrString;
        document.querySelector('.minute').innerHTML = minString;
        document.querySelector('.seconds').innerHTML = secString;
        document.querySelector('.milseconds').innerHTML = countString;
        setTimeout(stopWatch, 10);
	}
}
