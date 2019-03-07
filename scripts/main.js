// part 1 de l'exo
// fonction pour promouvoir le site 'Hey le site xxxvidsxxx est trop bien. Viens dessus stp please'
/*function affichePub() {
    setTimeout(function(){ alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please'); }, 3000);
  }
*/

// part 2 de l'exo avec affiche d'une autre page
function affichePub() {
      var monChoix = confirm('Hey le site xxxvidsxxx est trop bien.\nClique sur OK pour y aller, Annuler sinon');
      if (monChoix) {
            // ouvrir la vidéo
            open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      } 
}

