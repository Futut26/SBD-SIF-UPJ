function loadHeader() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('header').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'components/header.html', true);
  xhttp.send();
}

function loadSidebar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('sidebar').innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', 'components/sidebar.html', true);
    xhttp.send();
  }

function loadFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('footer').innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', 'components/footer.html', true);
    xhttp.send();
  }

  function loadContent(file) {
    // membuat objek XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    // menetapkan callback function saat permintaan AJAX selesai
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // mengambil isi file HTML lain
        document.getElementById("main").innerHTML = this.responseText;
      }
    };

    // membuat permintaan AJAX untuk file HTML lain
    xhttp.open("GET", file, true);
    xhttp.send();
  }

