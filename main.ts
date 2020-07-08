sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 200)
    info.changeScoreBy(1)
    music.pewPew.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 5 5 5 f . . . . . . . . . . . 
5 5 5 f 8 8 8 8 8 8 8 2 . . . . 
. . 5 5 f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
    music.wawawawaa.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.baDing.play()
})
let mongkey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 8 2 . . . . . . . . . . . . . . . . . . . 
. . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . 
. . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . 
. 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 . . . . . . 
4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . 
. 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . 
. . 4 4 f 8 8 . . . . 8 8 8 8 6 6 6 6 6 6 . . . . 
. . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . 
. . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . 
. . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    mongkey = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f f . . . . 
. c d d d d d d e e d d f . . . 
. c d f d d f d e e b d c . . . 
c d d f d d f d e e b d c . f f 
c d e e d d d d e e f c . f e f 
c d d d d c d e e e f . . f e f 
. f c c c d e e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . f f e f e e f e e e e f . . 
. f e f f e e f f f e e e f . . 
f d d b d d c f f f f f f b f . 
f d d c d d d f . . f c d d f . 
. f f f f f f f . . . f f f . . 
`, SpriteKind.Enemy)
    mongkey.setVelocity(-100, 0)
    mongkey.setPosition(160, Math.randomRange(0, 120))
})
