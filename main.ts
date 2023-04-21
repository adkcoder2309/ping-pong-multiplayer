namespace SpriteKind {
    export const reflector = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.reflector, function (sprite, otherSprite) {
    Ball.vx = 0 + Ball.vx
    mySprite.ax += 0.1
    mySprite.ay += 0.1
    pause(1000)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Player_1.setStayInScreen(true)
    for (let index = 0; index < 4; index++) {
        Player_1.y += -3
        pause(100)
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Player_2.setStayInScreen(true)
    for (let index = 0; index < 4; index++) {
        Player_2.y += 3
        pause(100)
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Repeated, function () {
    Player_1.setStayInScreen(true)
    Player_1.y += -3
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    Ball.vx = 0 - Ball.vx
    mySprite.ax += 0.1
    mySprite.ay += 0.1
    pause(1000)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Player_2.setStayInScreen(true)
    for (let index = 0; index < 4; index++) {
        Player_2.y += -3
        pause(100)
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Repeated, function () {
    Player_2.setStayInScreen(true)
    Player_2.y += -3
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Repeated, function () {
    Player_1.setStayInScreen(true)
    Player_1.y += 3
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    game.splash("Player 2 has connected!")
    Player_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 2 2 1 . . . . . . 
        . . . . . . 2 1 1 2 . . . . . . 
        . . . . . . 1 1 1 2 . . . . . . 
        . . . . . . 1 1 2 1 . . . . . . 
        . . . . . . 1 2 1 1 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.reflector)
    Player_2.setPosition(9, 60)
    Ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    pause(1000)
    Ball.setBounceOnWall(true)
    Ball.setPosition(80, 60)
    mySprite = randint(1, 100)
    if (mySprite % 2 == 1) {
        game.splash("Player 1 will hit first")
        Ball.setVelocity(40, 40)
    } else {
        game.splash("Player 2 will hit first")
        Ball.setVelocity(-40, 40)
    }
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    Player_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 8 1 . . . . . . 
        . . . . . . 1 8 8 1 . . . . . . 
        . . . . . . 1 1 8 1 . . . . . . 
        . . . . . . 1 1 8 1 . . . . . . 
        . . . . . . 1 1 8 1 . . . . . . 
        . . . . . . 1 8 8 8 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Player_1.setPosition(147, 60)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Player_1.setStayInScreen(true)
    for (let index = 0; index < 4; index++) {
        Player_1.y += 3
        pause(100)
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Repeated, function () {
    Player_2.setStayInScreen(true)
    Player_2.y += 3
})
let Player_2: Sprite = null
let Player_1: Sprite = null
let mySprite: Sprite = null
let Ball: Sprite = null
scene.setBackgroundColor(6)
forever(function () {
    game.setGameOverEffect(true, effects.clouds)
    if (Ball.isHittingTile(CollisionDirection.Left)) {
        game.setGameOverMessage(true, "Player 1 wins!")
        game.gameOver(true)
    }
    if (Ball.isHittingTile(CollisionDirection.Right)) {
        game.setGameOverMessage(true, "Player 2 wins!")
        game.gameOver(true)
    }
})
