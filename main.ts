input.onPinPressed(TouchPin.P0, function () {
    index = 4
    while (index >= 0) {
        led.plot(index, 4 - index)
        index += -1
        basic.pause(100)
    }
})
input.onButtonPressed(Button.A, function () {
    number = 5
    while (number >= 0) {
        basic.showNumber(number)
        number += -1
    }
    music.playMelody("C E G C5 G A B C ", 120)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Happy)
        music.playTone(294, music.beat(BeatFraction.Double))
    }
    basic.clearScreen()
})
let number = 0
let index = 0
let sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        sprite.move(2)
        basic.pause(100)
        sprite.turn(Direction.Left, 90)
        basic.pause(100)
    }
})
