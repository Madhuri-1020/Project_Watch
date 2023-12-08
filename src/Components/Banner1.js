function Banner1() {
    var counter = 1; // Initialize counter outside the setInterval
  
    return setInterval(function () {
      document.getElementById('radio' + counter).checked = true; // Use lowercase 'checked'
      counter++;
  
      if (counter > 3) {
        counter = 1;
      }
    }, 5000);
  }
  
  export default Banner1;
  