class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <hr>

        <div class="container">
            <div class="row">
                <div class="col-sm-4 offset-sm-1">
                    <h4 class="title">Fidealify</h4>
                    <p>Satu dari rumahmu untuk mengukur kesehatan lemakmu.</p>
                    <ul class="social-icon">
                        <a href="#" class="social"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" class="social"><i class="fa-brands fa-instagram" aria-hidden="true"></i></i></a>
                        <a href="#" class="social"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
                    </ul>
                </div>
                <div class="nav-bottom-custom col-sm-5 offset-sm-2">
                    <ul>
                        <li><a href="#">Beranda</a></li>
                        <li><a href="#">Timbang</a></li>            
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Tentang Kami</a></li>
                    </ul>
                </div>
            </div>
                
                
                <div class="rule-custom row">
                    <div class="copyright-custom col-sm-4 offset-sm-1">
                        <p>Copyright © 2022 Fidealify. All rights reserved.</p>
                    </div>
                    <div class="policy-custom col-sm-5 offset-sm-2">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>            
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>     
                
                
            

        `;
    }
}

customElements.define('foot-bar', FootBar);