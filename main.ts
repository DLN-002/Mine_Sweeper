controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`Bomb`)) {
        info.changeScoreBy(-1)
        if (true) {
        	
        }
    } else {
        game.gameOver(false)
    }
})
info.onScore(0, function () {
    game.gameOver(true)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . 
    . f f . . . . . . . . . . 
    . f 1 f . . . . . . . . . 
    . f 1 1 f . . . . . . . . 
    . f 1 1 1 f . . . . . . . 
    . f 1 1 1 1 f . . . . . . 
    . f 1 1 1 1 1 f . . . . . 
    . f 1 1 1 1 1 1 f . . . . 
    . f 1 1 1 1 1 1 1 f . . . 
    . f 1 1 1 1 1 1 1 1 f . . 
    . f 1 1 1 1 1 1 1 1 1 f . 
    . f 1 1 1 1 1 f f f f f . 
    . f 1 1 f f 1 f . . . . . 
    . . f f . f 1 1 f . . . . 
    . . . . . . f f f . . . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level6`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 3))
info.setScore(13)
