enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    Snowpile,
    Tree,
    Scenary,
    Static,
    Goodies,
    Snowman
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Grass,
    SkierIdle,
    Snowpiles,
    SkierLeft,
    SkierRight,
    SnowmanIdle,
    SnowmanLeft,
    SnowmanRight
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Snowpile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.startEffect(effects.fountain, 200)
    Speed += -10
    ResetSpeeds()
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Snowman, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.startEffect(effects.fountain, 200)
    Speed += -10
    isSnowman = true
    Skier.startEffect(effects.fountain, 500)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Skier.vx += -8
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Skier.vx += 8
})
function SetupAnimations () {
    anim = animation.createAnimation(ActionKind.Grass, 100)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . 7 . . 7 . . . . 7 . . . . 
        . . . . 7 . 7 . 7 . 7 . 7 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . 7 . . . . . . . . . 7 . . 
        . . 7 . . 7 . . . 7 . 7 . . . . 
        . . . 7 7 . . . 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 . . . . . 
        . . . . . . . . . 7 . . . . . . 
        . . . . . . . . . 7 . . . . . . 
        . . . 7 . . . . . 7 . . . . . . 
        . . 7 . 7 7 . . 7 . . . . . . . 
        . . 7 . . 7 7 . 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . . 7 . . . . . 7 . 7 7 . . . 
        . 7 . 7 7 7 . . . 7 . 7 . . . . 
        . . . 7 7 7 . 7 . 7 . 7 7 . . . 
        . . . 7 . . . 7 . . . 7 . 7 7 . 
        . . 7 . . . 7 . . . 7 7 . . 7 . 
        . . . . . . . . . . 7 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    GrassController = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 . . . . 7 . . . . . . 
        . . . . 7 . . . 7 7 . . . . . . 
        . . . . 7 7 . . 7 . . . . . . . 
        . . . . . 7 . . . . . 7 . . . . 
        . . . . . 7 7 . . . . . . . . . 
        . . . . . 7 . . 7 7 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Static)
    GrassController.setPosition(-100, -100)
    animation.attachAnimation(GrassController, anim)
    animation.setAction(GrassController, ActionKind.Grass)
    anim = animation.createAnimation(ActionKind.Snowpiles, 100)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 . . . . . . . 
        . . . 9 9 1 1 1 1 9 9 . . . . . 
        . . 9 9 1 1 1 1 1 1 1 9 . . . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 . . . . . 9 9 9 . . 
        . . 9 1 1 9 . 9 9 9 9 1 1 1 9 . 
        . 9 1 1 1 1 9 1 1 1 9 1 1 1 9 . 
        . 9 1 1 1 9 1 1 1 9 9 1 1 1 9 . 
        . . 1 1 1 9 1 1 1 1 1 1 1 9 . . 
        . . . . . . . . 1 1 . 9 9 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 9 . . . . . . . . . . . . . 
        . . 1 1 . . . 9 . . . 9 9 . . . 
        . . 1 1 9 1 9 1 . 1 . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 . . 9 . . . . . . . . 
        . . . . . 9 9 . . . . . . . . . 
        . . . . . 9 9 . . . . . . . . . 
        . . . . 9 . . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 9 . . 9 . . . . 9 . . 9 . . . 
        . . 9 9 . . . . . . 9 9 . . . . 
        . . 9 9 . . . . . . 9 9 . . . . 
        . 9 . . 9 . . . . 9 . . 9 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    SnowController = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . 9 1 1 1 9 9 . . . . . 
        . . . 9 9 1 1 1 1 1 1 9 9 . . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 9 . . 
        . . 9 1 1 1 1 1 1 1 1 1 1 9 . . 
        . . 9 1 1 1 1 1 1 1 1 1 1 9 . . 
        . . 9 1 1 1 1 1 1 1 1 1 1 9 . . 
        . . 9 1 1 1 1 1 1 1 1 1 9 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Static)
    SnowController.setPosition(-100, -100)
    animation.attachAnimation(SnowController, anim)
    animation.setAction(SnowController, ActionKind.Snowpiles)
    anim2 = animation.createAnimation(ActionKind.SkierIdle, 500)
    anim2.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . f d d f . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . a a a a a a a a a a . . . . 
        . . . . a a a a a a . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . a . . a . . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim2.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . f d d f . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . a a a a a a a a a a . . . . 
        . . . . a a a a a a . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(Skier, anim2)
    anim3 = animation.createAnimation(ActionKind.SkierLeft, 500)
    anim3.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . f d d f . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . a a a a a a a a a a . . . . 
        . . . . a a a a a a . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . a 9 . a 9 . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . 9 . . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim3.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 . 2 . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . f d d f . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . a a a a a a a a a a . . . . 
        . . . . a a a a a a . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . a 9 a a 9 . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . 9 . . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(Skier, anim3)
    anim4 = animation.createAnimation(ActionKind.SkierRight, 500)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . f d d f . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . a a a a a a a a a a . . . . 
        . . . . a a a a a a . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . 9 a . 9 a . . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . . . 9 . . 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . 
        . . . 2 . 2 2 2 2 . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . f d d f . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . a a a a a a a a a a . . . . 
        . . . . a a a a a a . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . 9 a a 9 a . . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . . . 9 . . 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(Skier, anim4)
    anim4 = animation.createAnimation(ActionKind.SnowmanIdle, 500)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 1 2 . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 9 9 9 9 . . . . . . . 
        . . . . 9 f 1 1 f 9 . . . . . . 
        . . . . 9 9 4 1 9 9 . . . . . . 
        . . e . . 9 9 9 9 . . e . . . . 
        . e e e e 9 1 1 9 e e e e . . . 
        . . e . . 9 1 1 9 . . e . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        `)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 9 9 9 9 . . . . . . . 
        . . . . 9 f 1 1 f 9 . . . . . . 
        . . . . 9 9 4 1 9 9 . . . . . . 
        . . e . . 9 9 9 9 . . e . . . . 
        . e e e e 9 1 1 9 e e e e . . . 
        . . e . . 9 1 1 9 . . e . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        `)
    animation.attachAnimation(Skier, anim4)
    anim4 = animation.createAnimation(ActionKind.SnowmanLeft, 500)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 9 9 9 9 . . . . . . . 
        . . . . 9 f 1 1 f 9 . . . . . . 
        . . . . 9 9 4 1 9 9 . . . . . . 
        . . e . . 4 9 9 9 . e . . . . . 
        . e e e e 9 1 1 9 e e e . . . . 
        . . e . . 9 1 1 9 . e . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . 9 . . 9 . . . . . . . . 
        `)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 9 9 9 9 . . . . . . . 
        . . . . 9 f 1 1 f 9 . . . . . . 
        . . . . 9 9 4 1 9 9 . . . . . . 
        . . e . . 4 9 9 9 . e . . . . . 
        . e e e e 9 1 1 9 e e e . . . . 
        . . e . . 9 1 1 9 . e . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        `)
    animation.attachAnimation(Skier, anim4)
    anim4 = animation.createAnimation(ActionKind.SnowmanRight, 500)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 9 9 9 9 . . . . . . . 
        . . . . 9 f 1 1 f 9 . . . . . . 
        . . . . 9 9 1 4 9 9 . . . . . . 
        . . . e . 9 9 9 4 . . e . . . . 
        . . e e e 9 1 1 9 e e e e . . . 
        . . . e . 9 1 1 9 . . e . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . 9 9 9 9 9 9 9 . . . . . . 
        . . . . 9 9 . 9 9 . . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        `)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 9 9 9 9 . . . . . . . 
        . . . . 9 f 1 1 f 9 . . . . . . 
        . . . . 9 9 1 4 9 9 . . . . . . 
        . . . e . 9 9 9 4 . . e . . . . 
        . . e e e 9 1 1 9 e e e e . . . 
        . . . e . 9 1 1 9 . . e . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . . 9 1 1 1 1 9 . . . . . . 
        . . . 9 9 1 1 1 1 9 . . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        `)
    animation.attachAnimation(Skier, anim4)
}
function ThemeSong () {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    pause(100)
    music.rest(music.beat(BeatFraction.Half))
}
function ResetSpeeds () {
    sprite_list = sprites.allOfKind(SpriteKindLegacy.Tree)
    for (let value2 of sprite_list) {
        value2.setVelocity(0, Speed)
    }
    sprite_list = sprites.allOfKind(SpriteKindLegacy.Snowpile)
    for (let value3 of sprite_list) {
        value3.setVelocity(0, Speed)
    }
    sprite_list = sprites.allOfKind(SpriteKindLegacy.Scenary)
    for (let value4 of sprite_list) {
        value4.setVelocity(0, Speed)
    }
    sprite_list = sprites.allOfKind(SpriteKindLegacy.Snowman)
    for (let value4 of sprite_list) {
        value4.setVelocity(0, Speed)
    }
}
info.onLifeZero(function () {
    game.showLongText("You went " + Math.round(distance) + " feet!", DialogLayout.Center)
    music.powerDown.play()
    game.over(false)
})
function LaunchRabbit22 () {
    Rabbit = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . d d d . . . . . . . . . . 
        . . . d d d d d . . . . . . . . 
        . . . . . . d d d 3 . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . d d d d d . . . . . . . . 
        . . d d d d d d d d . . . . . . 
        . . d d d d d . . . . . . . . . 
        . . d d d d . . . . . . . . . . 
        . d d . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Player)
    Rabbit.setKind(SpriteKindLegacy.Goodies)
    Rabbit.y = scene.screenHeight()
    Rabbit.setVelocity(randint(-100, 100), randint(-100, -20))
    if (0 > Rabbit.vx) {
        Rabbit.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . d d d . . . . 
            . . . . . . . . d d d d . . . . 
            . . . . . 3 d d d d . . . . . . 
            . . . . . d d d d d d d . . . . 
            . . . . . . . . d d d d d . . . 
            . . . . . . d d d d d d d d d . 
            . . . . . . . . . . . d d d d . 
            . . . . . . . . . . . . d . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Tree, function (sprite, otherSprite) {
    sprite.startEffect(effects.rings, 500)
    info.changeLifeBy(-1)
    Speed += 5
    Speed = Math.max(Speed, -20)
    music.playTone(139, music.beat(BeatFraction.Half))
    ResetSpeeds()
    scene.cameraShake(4, 200)
    effects.blizzard.startScreenEffect(100)
    otherSprite.destroy(effects.halo, 500)
    isSnowman = false
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Goodies, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.startEffect(effects.fountain, 200)
    Speed += -10
    ResetSpeeds()
    music.baDing.play()
})
let projectile2: Sprite = null
let projectile: Sprite = null
let snowflake: Sprite = null
let potentialLevel = 0
let lastLevel = 0
let Rabbit: Sprite = null
let sprite_list: Sprite[] = []
let anim4: animation.Animation = null
let anim3: animation.Animation = null
let anim2: animation.Animation = null
let SnowController: Sprite = null
let GrassController: Sprite = null
let anim: animation.Animation = null
let isSnowman = false
let distance = 0
let Speed = 0
let Skier: Sprite = null
let sprite: Sprite = null
let otherSprite: Sprite = null
sprite = null
otherSprite = null
let value = 0
scene.setBackgroundColor(1)
Skier = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . f d d f . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . a a a a a a a a a a . . . . 
    . . . . a a a a a a . . . . . . 
    . . . . . a a a a . . . . . . . 
    . . . . . a a a a . . . . . . . 
    . . . . . a . . a . . . . . . . 
    . . . . . 9 . . 9 . . . . . . . 
    . . . . . 9 . . 9 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKindLegacy.Player)
Skier.setFlag(SpriteFlag.StayInScreen, true)
Skier.z = 100
Speed = -20
info.setLife(30)
SetupAnimations()
animation.setAction(Skier, ActionKind.SkierIdle)
Skier.say("Snowy Slopes", 2000)
ThemeSong()
distance = 0
let isSnowing = true
let snowAmount = 1
let level = 1
let treeChance = 20
isSnowman = false
forever(function () {
    lastLevel = level
    potentialLevel = Math.floor(distance / 1000) + 1
    if (lastLevel != potentialLevel) {
        Skier.say("Level " + level, 500)
        level += 1
        snowAmount += 2
        Speed += -5
        treeChance += 5
    }
    if (isSnowman) {
        if (Math.percentChance(10)) {
            Speed += -1
        }
    }
})
forever(function () {
    if (-5 > Skier.vx) {
        if (isSnowman) {
            animation.setAction(Skier, ActionKind.SnowmanLeft)
        } else {
            animation.setAction(Skier, ActionKind.SkierLeft)
        }
    } else if (5 < Skier.vx) {
        if (isSnowman) {
            animation.setAction(Skier, ActionKind.SnowmanRight)
        } else {
            animation.setAction(Skier, ActionKind.SkierRight)
        }
    } else {
        if (isSnowman) {
            animation.setAction(Skier, ActionKind.SnowmanIdle)
        } else {
            animation.setAction(Skier, ActionKind.SkierIdle)
        }
    }
})
forever(function () {
    if (isSnowing) {
        if (Math.percentChance(snowAmount)) {
            snowflake = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 . . . . . . . . 
                . . . . . . 9 9 9 . . . . . . . 
                . . . . . . . 9 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, -26, randint(1, 50))
            snowflake.y = 0
            snowflake.x = randint(0, scene.screenWidth() * 1.5)
            snowflake.z = 1000
        }
        if (Math.percentChance(snowAmount)) {
            snowflake = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 . . . . . . . . 
                . . . . . . 9 9 9 . . . . . . . 
                . . . . . . . 9 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, -26, randint(1, 50))
            snowflake.y = randint(0, scene.screenHeight())
            snowflake.x = scene.screenWidth()
            snowflake.z = 1000
        }
    }
})
forever(function () {
    pause(100)
    distance += Speed * -0.05
})
forever(function () {
    if (Math.percentChance(2)) {
        if (Math.percentChance(treeChance)) {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . 7 . . . . . . . . 
                . . . . . . 7 7 . . . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                . . . . . 6 7 7 7 . . . . . . . 
                . . . . 7 7 6 6 7 7 . . . . . . 
                . . . . 7 7 7 7 7 7 . . . . . . 
                . . . 7 6 7 7 6 7 7 7 . . . . . 
                . . . 7 7 6 7 6 6 7 7 . . . . . 
                . . 7 7 7 6 7 7 7 6 7 7 . . . . 
                . . . 7 6 6 7 7 7 7 7 . . . . . 
                . . . . . . e e . . . . . . . . 
                . . . . . . e e . . . . . . . . 
                . . . . . . e e . . . . . . . . 
                . . . . . . e e . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 0, Speed)
            projectile.x = randint(0, scene.screenWidth())
            projectile.setKind(SpriteKindLegacy.Tree)
        }
    }
    if (Math.percentChance(2)) {
        if (Math.percentChance(treeChance)) {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . . 6 7 7 . . . . . . . . 
                . . . . 7 7 7 7 7 7 . . . . . . 
                . . . 7 6 7 7 7 7 7 7 . . . . . 
                . . 7 7 7 7 7 7 7 7 7 7 . . . . 
                . 7 7 7 7 7 7 7 7 7 7 . . . . . 
                . . . 7 7 7 7 7 7 7 . . . . . . 
                . . . . . . e e . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 0, Speed)
            projectile.x = randint(0, scene.screenWidth())
            projectile.setKind(SpriteKindLegacy.Tree)
        }
    }
    if (Math.percentChance(1)) {
        projectile2 = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 . . . . . . . . . . . . 
            . . . . 7 . . . . . . . . . . . 
            . . . . . 7 . . 7 . . . . . . . 
            . . . . . . 7 . 7 . 7 7 7 . . . 
            . . . 7 . . 7 . 7 . 7 7 . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 0, Speed)
        projectile2.setImage(GrassController.image)
        projectile2.x = randint(0, scene.screenWidth())
        projectile2.z = -1
        projectile2.setKind(SpriteKindLegacy.Scenary)
    }
    if (Math.percentChance(1)) {
        if (Math.percentChance(90)) {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 9 9 9 9 . . . . . 
                . . . 9 1 1 1 1 1 1 1 9 9 . . . 
                . . . 9 1 1 1 1 1 1 1 1 1 9 . . 
                . . 9 1 1 1 1 1 1 1 1 1 1 9 . . 
                . . 9 1 1 1 1 1 1 1 1 1 1 9 . . 
                . . 9 1 1 1 1 1 1 1 1 1 1 9 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 0, Speed)
            projectile.setImage(SnowController.image)
            projectile.x = randint(0, scene.screenWidth())
            projectile.setKind(SpriteKindLegacy.Snowpile)
        }
    }
    if (Math.percentChance(1)) {
        if (Math.percentChance(30)) {
            LaunchRabbit22()
        }
    }
    if (Math.percentChance(1)) {
        if (Math.percentChance(50)) {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 . . . . . . . . . 
                . . . . . . 2 2 . . . . . . . . 
                . . . . . 2 2 2 2 . . . . . . . 
                . . . . . 9 9 9 9 . . . . . . . 
                . . . . 9 f 1 1 f 9 . . . . . . 
                . . . . 9 9 4 1 9 9 . . . . . . 
                . . e . . 9 9 9 9 . . e . . . . 
                . e e e e 9 1 1 9 e e e e . . . 
                . . e . . 9 1 1 9 . . e . . . . 
                . . . . 9 1 1 1 1 9 . . . . . . 
                . . . . 9 1 1 1 1 9 . . . . . . 
                . . . . 9 1 1 1 1 9 . . . . . . 
                . . . . 9 9 9 9 9 9 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 0, Speed)
            projectile.x = randint(0, scene.screenWidth())
            projectile.setKind(SpriteKindLegacy.Snowman)
        }
    }
})
