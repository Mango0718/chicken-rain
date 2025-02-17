loops.forever(function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
})
mobs.onMobKilled(SHEEP, function () {
    mobs.kill(
    mobs.target(RANDOM_PLAYER)
    )
})
for (let index = 0; index < 1e+197; index++) {
    mobs.spawn(ARMADILLO, pos(100000, 1000, 100))
}
