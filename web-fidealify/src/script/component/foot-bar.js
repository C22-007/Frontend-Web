class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <hr>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 offset-sm-1">
                        <h4 class="title">Fidealify</h4>
                        <p>Satu dari rumahmu untuk mengukur kesehatan lemakmu.</p>
                        <ul class="social-icon">
                            <a href="#" class="social"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a>
                            <a href="#" class="social"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a>
                            <a href="#" class="social"><i class="fa fa-youtube-play" aria-hidden="true"></i>YouTube</a>
                        </ul>
                    </div>
                    <div class="col-sm-5 offset-sm-2">
                        <ul>
                            <li><a href="#"><i class="fa fa-cc-amex" aria-hidden="true"></i>Beranda</a></li>
                            <li><a href="#"><i class="fa fa-credit-card" aria-hidden="true"></i>Timbang</a></li>            
                            <li><a href="#"><i class="fa fa-paypal" aria-hidden="true"></i>Blog</a></li>
                            <li><a href="#"><i class="fa fa-cc-visa" aria-hidden="true"></i>Tentang Kami</a></li>
                        </ul>
                    </div>
                </div>
                
                
                <div class="row rule">
                    <div class="col-sm-4 offset-sm-1">
                        <p>Copyright © 2022 Fidealify. All rights reserved.</p>
                    </div>
                    <div class="col-sm-5 offset-sm-2 policy">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>            
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>     
                
                
            
        </footer>
        `;
    }
}

customElements.define('foot-bar', FootBar);