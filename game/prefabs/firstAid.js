'use strict';

var FirstAid = function(game, x, y, frame) {


  Phaser.Sprite.call(this, game, x, y, 'firstAid', frame);

  this.anchor.setTo(0.5, 0.5);
  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.collideWorldBounds = true;
  this.body.immovable = true;

};

FirstAid.prototype = Object.create(Phaser.Sprite.prototype);
FirstAid.prototype.constructor = FirstAid;

FirstAid.prototype.update = function() {
};

module.exports = FirstAid;
