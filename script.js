const hoursHand = document.querySelector('.hand.hours');
const minutesHand = document.querySelector('.hand.minutes');
const secondsHand = document.querySelector('.hand.seconds');

const setRotation = (element, rotationPorcentage) => {
    element.style.setProperty("--rotation", rotationPorcentage * 360);


};

const setClock = () => {
    const currentDate = new Date();

    const secondsPorcentage = currentDate.getSeconds() / 60;
    const minutesPorcentage = currentDate.getMinutes() / 60;
    const hoursPorcentage = currentDate.getHours() / 12; 

    setRotation(secondsHand, secondsPorcentage);
    setRotation(minutesHand, minutesPorcentage);
    setRotation(hoursHand, hoursPorcentage);
};


setClock();

setInterval(setClock, 1000)