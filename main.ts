radio.onReceivedNumber(function (receivedNumber) {
    item = receivedNumber
})
let item = 0
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.forever(function () {
    if (item == 1) {
        while (item == 1) {
            RingbitCar.running_time(RingbitCar.Direction_run.forward, 0.01)
        }
    } else if (item == 2) {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 15)
    } else if (item == 3) {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 15)
    } else {
        item = 0
        RingbitCar.brake()
    }
})
