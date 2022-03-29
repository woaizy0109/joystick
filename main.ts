let newDot: game.LedSprite = null
let xpos = 0
let ypos = 0
let btnC = 0
let sasibaka = game.createSprite(2, 2)
basic.forever(function () {
    btnC = pins.digitalReadPin(DigitalPin.P2)
    ypos = pins.analogReadPin(AnalogPin.P0)
    xpos = pins.analogReadPin(AnalogPin.P1)
    if (xpos > 700) {
        sasibaka.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    if (xpos < 300) {
        sasibaka.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    if (ypos > 700) {
        sasibaka.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (ypos < 300) {
        sasibaka.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (btnC == 0) {
        newDot = game.createSprite(2, 2)
        basic.pause(1000)
    }
})
