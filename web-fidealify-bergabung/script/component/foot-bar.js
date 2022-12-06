class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="">
        <section style="height:80px;"></section>
        <!----------- Footer ------------>
        <footer class="footer-bs">
            <div class="row">
              <div class="col-md-3 footer-brand animated fadeInLeft">
                <a href="#">
                  <h2><img src="./assets/images/Fi-logo-medium.png" class="logo-footer-custom" width="99" alt="logo fi"></h2>
                </a>
                    <p style="font-family: 'Inter', sans-serif; font-size: small; color: #838383;" >Such a honour to help all
                      of you discover of your bodyfat matter.</p>
                    <p style="font-family: 'Nunito', sans-serif;">© 2022 FIdealify, Indonesia. All rights reserved</p>
                </div>
              <div class="col-md-4 footer-nav animated fadeInRight">
                  <h4>Menu —</h4>
                  <div class="col-md-2">
                        <ul class="pages">                    
                          <li><a href="index.html">Beranda</a></li>
                          <li><a href="https://alpiansyah1204-app-bodyfat-app-d9piml.streamlit.app/" target="_blank">Timbang</a></li>
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="about.html">Tentang Kami</a></li>
                        </ul>
                    </div>
                </div>
              <div class="col-2 footer-social animated fadeInDown">
                  <h4>Follow Us</h4>
                  <ul>
                      <li><a href="https://id-id.facebook.com/login/device-based/regular/login/?login_attempt=1" target="_blank">Facebook</a></li>
                      <li><a href="https://twitter.com/login" target="_blank">Twitter</a></li>
                      <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                    </ul>
                </div>
              <div class="col-md-3 footer-ns animated fadeInRight">
                  <h4>Newsletter</h4>
                    <p>You are what you eat.</p>
                    <p>Let's defining food as be your medicine.</p>
                    <p>
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Search for...">
                          <span class="input-group-btn">
                            <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-envelope"></span></button>
                          </span>
                        </div><!-- /input-group -->
                      </p>
                </div>
            </div>
        </footer>
      </div>
        `;
    }
}

customElements.define('foot-bar', FootBar);