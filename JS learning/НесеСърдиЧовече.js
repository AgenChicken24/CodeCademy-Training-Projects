let player = 0;
while (player !== 100) {
    let zar = Math.floor(Math.random() * 6)
    player += zar
    console.log(player)
    if (player > 100) {
        console.log('you won')
        break
    }
}