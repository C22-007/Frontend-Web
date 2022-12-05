// import "../../../src/assets/bootstrap/css/bootstrap.css"

class HeadBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="./assets/images/image-blog/Fi-logo-small.png" width="40" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-link" href="index.html">Beranda</a> 
            <a class="nav-link" href="https://alpiansyah1204-app-bodyfat-app-d9piml.streamlit.app/">Timbang</a>
            <a class="nav-link" href="blog.html">Blog</a>
            <a class="nav-link" href="about.html">Tentang Kami</a>
          </div>
        </div>
      </div>
    </nav>
      
      `;
    }
  }
   
  customElements.define('head-bar', HeadBar);