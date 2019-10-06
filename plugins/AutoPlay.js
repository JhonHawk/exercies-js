function AutoPlay() {}
AutoPlay.prototype.run = function(player) {
  console.log(player.muted)
  console.log('se ejecuta este pedo')
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};

export default AutoPlay;
