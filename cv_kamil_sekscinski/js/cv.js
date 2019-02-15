/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var hamIcon = document.querySelector('.ham-icon');
 var menuBar = document.querySelector('.menu');

 hamIcon.onclick = function() {
    menuBar.classList.toggle('hide');
    
 };
 