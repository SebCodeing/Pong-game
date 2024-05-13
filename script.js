//Global Variables
var DIRECTION = {
  IDLE: 0
  UP:1
  DOWN:2
  LEFT:3
  RIGHT:4
};
var rounds = [5, 5, 3, 2];
var colours = []

//The ball object (the cube that bounces back and fourth)
var Ball = {
  new: function (incrementedspeed) {
    return {
      width: 18,
      height: 18,
      x: (this.canvas.width / 2) -9,
      y: (this.canvas.width / 2) -9,
