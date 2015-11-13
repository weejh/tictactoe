(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var currentPlayer = 'one';
var body = document.querySelector('body');
body.addEventListener('click', function (event) {
  var tile = event.target;
  //
  // To clear board
  if (tile.className === 'button1') {
    reSet();
    document.querySelector('.status').textContent = 'It is X\'s turn';
    currentPlayer = 'one';
    // reload the page
    //    document.location.reload(true)
  }
  //
  //
  //  if (tile.className !== 'tile') return
  //
  // check for text content
  if (tile.textContent) return;
  //
  // check if status of current player
  if (currentPlayer === 'one') {
    // player one mark with 'x'
    tile.textContent = 'X';
    tile.style.backgroundColor = 'red';
    tile.style.color = 'black';
    tile.fontSize = 160;
    currentPlayer = 'two';
    document.querySelector('.status').textContent = 'It is O\'s turn';
  } else {
    // player two mark with 'o'
    tile.textContent = 'O';
    tile.style.backgroundColor = 'purple';
    tile.style.color = 'black';
    tile.fontSize = 160;
    currentPlayer = 'one';
    document.querySelector('.status').textContent = 'It is X\'s turn';
  }
  //
  // check for winner
  if (checkwinner() === 'X') {
    alert('Game over, X wins');
    fillUp();
  }
  if (checkwinner() === 'O') {
    alert('Game over, O wins');
    fillUp();
  }
});
//
// function to fill up the reminding tile so no input is accepted
function fillUp() {
  var divs1 = Array.from(document.querySelectorAll('.tile'));
  divs1.forEach(function (tile) {
    if (tile.textContent === '') {
      tile.textContent = '.';
      tile.style.color = 'black';
      tile.fontSize = 0;
    }
  });
}
//
// reset all tile
function reSet() {
  var divs1 = Array.from(document.querySelectorAll('.tile'));
  divs1.forEach(function (tile) {
    tile.textContent = '';
    tile.style.backgroundColor = 'black';
    //    tile.style.fontSize = 160
  });
}
//
// function to check for winner
function checkwinner() {
  // 1
  if (document.querySelector('#t22').textContent === document.querySelector('#t21').textContent) {
    if (document.querySelector('#t22').textContent === document.querySelector('#t23').textContent) {
      return document.querySelector('#t22').textContent;
    }
  }
  // 2
  if (document.querySelector('#t22').textContent === document.querySelector('#t33').textContent) {
    if (document.querySelector('#t22').textContent === document.querySelector('#t11').textContent) {
      return document.querySelector('#t22').textContent;
    }
  }
  // 3
  if (document.querySelector('#t22').textContent === document.querySelector('#t12').textContent) {
    if (document.querySelector('#t22').textContent === document.querySelector('#t32').textContent) {
      return document.querySelector('#t22').textContent;
    }
  }
  // 4
  if (document.querySelector('#t22').textContent === document.querySelector('#t13').textContent) {
    if (document.querySelector('#t22').textContent === document.querySelector('#t31').textContent) {
      return document.querySelector('#t22').textContent;
    }
  }
  // 5
  if (document.querySelector('#t11').textContent === document.querySelector('#t12').textContent) {
    if (document.querySelector('#t11').textContent === document.querySelector('#t13').textContent) {
      return document.querySelector('#t11').textContent;
    }
  }
  // 6
  if (document.querySelector('#t11').textContent === document.querySelector('#t21').textContent) {
    if (document.querySelector('#t11').textContent === document.querySelector('#t31').textContent) {
      return document.querySelector('#t11').textContent;
    }
  }
  // 7
  if (document.querySelector('#t13').textContent === document.querySelector('#t23').textContent) {
    if (document.querySelector('#t13').textContent === document.querySelector('#t33').textContent) {
      return document.querySelector('#t13').textContent;
    }
  }
  // 8
  if (document.querySelector('#t31').textContent === document.querySelector('#t32').textContent) {
    if (document.querySelector('#t31').textContent === document.querySelector('#t33').textContent) {
      return document.querySelector('#t31').textContent;
    }
  }
}

},{}]},{},[1]);
