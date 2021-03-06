/*page-main-calculate*/


let sum = document.querySelector('#sum');
let sumValue = document.querySelector('#sum-result');
let time = document.querySelector('#time');
let timeValue = document.querySelector('#time-result');

let firstRangeTrack = document.querySelector('.page-main-calculate__sliders-first-range-track');
let sumTrumb = document.querySelector('#sum').value;
let sumTrumbMax = document.querySelector('#sum').max;
let sumTrumbMin = document.querySelector('#sum').min;

let colorTrack = document.querySelector('.page-main-calculate__sliders-second-range-track');
let timeTrumb = document.querySelector('#time').value;
let timeTrumbMax = document.querySelector('#time').max;
let timeTrumbMin = document.querySelector('#time').min;

let windowWidth= window.innerWidth;
let sumRangeTrack;
let rangeTrack;
if (windowWidth > 1440) {
    sumRangeTrack = String(540*(sumTrumb-sumTrumbMin)/(sumTrumbMax-sumTrumbMin));
    rangeTrack = String(540*(timeTrumb-timeTrumbMin)/(timeTrumbMax-timeTrumbMin));
} else {
    sumRangeTrack = String(311*(sumTrumb-sumTrumbMin)/(sumTrumbMax-sumTrumbMin));
    rangeTrack = String(311*(timeTrumb-timeTrumbMin)/(timeTrumbMax-timeTrumbMin));
}


firstRangeTrack.style.width = sumRangeTrack + 'px';
colorTrack.style.width = rangeTrack + 'px';

sum.addEventListener('mousemove', () => {
    sumValue.value = String(sum.value);
    sumTrumb = document.querySelector('#sum').value;
    sumRangeTrack = String(540*(sumTrumb-sumTrumbMin)/(sumTrumbMax-sumTrumbMin));
    firstRangeTrack.style.width = sumRangeTrack + 'px';
})
sum.addEventListener('touchmove', () => {
    sumValue.value = String(sum.value);
    sumTrumb = document.querySelector('#sum').value;
    sumRangeTrack = String(311*(sumTrumb-sumTrumbMin)/(sumTrumbMax-sumTrumbMin));
    firstRangeTrack.style.width = sumRangeTrack + 'px';
})

time.addEventListener('mousemove', () => {
    timeValue.value = String(time.value);
    timeTrumb = document.querySelector('#time').value
    rangeTrack = String(540*(timeTrumb-timeTrumbMin)/(timeTrumbMax-timeTrumbMin));
    colorTrack.style.width = rangeTrack + 'px';
})

time.addEventListener('touchmove', () => {
    timeValue.value = String(time.value);
    timeTrumb = document.querySelector('#time').value
    rangeTrack = String(311*(timeTrumb-timeTrumbMin)/(timeTrumbMax-timeTrumbMin));
    colorTrack.style.width = rangeTrack + 'px';
})

let scrollButton = document.querySelector('.container_button');
document.addEventListener('scroll', () =>{
    let scrollValue = document.scrollingElement.scrollTop;
    if (scrollValue >= 300) {
        scrollButton.classList.add('container-fixed');
    } else {
        if (scrollValue < 300) {
            scrollButton.classList.remove('container-fixed');
        }
    }
});

