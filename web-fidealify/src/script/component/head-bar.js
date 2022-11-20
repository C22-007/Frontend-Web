// import "../../../src/assets/bootstrap/css/bootstrap.css"

class HeadBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
        <nav class="navbar navbar-custom navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand navbar-brand-custom" href="#">Fi</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item nav-item-custom">
                            <a class="nav-link nav-link-custom active" aria-current="page" href="#">Beranda</a>
                        </li>
                        <li class="nav-item nav-item-custom">
                            <a class="nav-link nav-link-custom" href="#">Timbang</a>
                        </li>
                        <li class="nav-item nav-item-custom">
                            <a class="nav-link nav-link-custom" href="#">Blog</a>
                        </li>
                        <li class="nav-item nav-item-custom">
                            <a class="nav-link nav-link-custom" href="#">Tentang</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      
      `;
    }
  }
   
  customElements.define('head-bar', HeadBar);