input.onButtonPressed(Button.A, function () {
    strike += 1
})
input.onButtonPressed(Button.AB, function () {
    out += 1
})
input.onButtonPressed(Button.B, function () {
    ball += 1
})
let out = 0
let strike = 0
let ball = 0
basic.forever(function () {
    if (ball == 4) {
        ball = 0
        basic.showString("walk")
    }
})
basic.forever(function () {
    if (strike == 3) {
        strike = 0
        out += 1
        basic.showString("out")
    }
})
basic.forever(function () {
    if (out == 0) {
        ball = 0
        basic.showString("switch")
        out = 0
        strike = 0
    }
})
