document.querySelector('.open-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').style.width = '250px';
    document.querySelector('.content').style.marginLeft = '250px';
  });
  
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').style.width = '0';
    document.querySelector('.content').style.marginLeft= '0';
  });