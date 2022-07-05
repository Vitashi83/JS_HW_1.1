while (true) {
    let n = Math.floor(Math.random() * 1000);

    console.log('Загадано число: ', n);

    let guess = prompt('Угадайте число от  0 до 999');

    console.log('Вы ввели: ', guess);

    if (guess == 'q') {
        break;
    } 
    if (isNaN(guess) || (guess > 999)) {
        alert('Вы ввели не число от 0 до 999!');
    } else if (n > guess) {
        alert('Вы ввели число меньше');
    } else if (n < guess) {
        alert('Вы ввели число больше');
    } else if (n === +guess) {
        alert('Вы угадали!  :))) ');
    } else {
        alert('Вы не угадали! :((( ')
    }
}
alert('Игра завершена!')
