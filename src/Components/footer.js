import React from 'react'
import '../style/footer.css'
import '../style/theam.css'
export default  ()=> {
  return (
    <>
    <div>
      <footer class="footer-section bg-blue mt-3">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget company-intro-widget">
              <a href="#" class="site-logo bg-white p-3 rounded-3"><img src="/img/teamlogo.jpg" alt="logo"/></a>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
              <ul class="company-footer-contact-list">
                <li><i class="fas fa-phone"></i>+91-9152654490</li>
                <li><i class="fas fa-clock"></i>Any Time</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget course-links-widget">
              <h5 class="widget-title">Popular Courses</h5>
              <ul class="courses-link-list">
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Academic English</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Web Technology</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>PC Systems</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Ui Web Design</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Web Development</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Apps Development</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget latest-news-widget">
              <h5 class="widget-title">Leatest Courses</h5>
              <ul class="small-post-list">
                <li>
                  <div class="small-post-item">
                    <a href="#" class="post-date">Fab 11, 2023</a>
                    <h6 class="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing.</a></h6>
                  </div>
                </li>
                <li>
                  <div class="small-post-item">
                    <a href="#" class="post-date">Jan 28, 2023</a>
                    <h6 class="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing</a></h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget newsletter-widget">
              <h5 class="widget-title">Updates</h5>
              <div class="footer-newsletter">
                <p>Sign Up to Our Platform to Get Latest Updates & Services</p>
                <form class="news-letter-form">
                  <input type="email" name="news-email" id="news-email" placeholder="Your email address"/>
                  <input type="submit" value="Send"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6 text-sm-left text-center">
              <span class="copy-right-text">© 2023 <a href="">Team Rocket</a> All Rights Reserved.</span>
            </div>
            <div class="col-md-6 col-sm-6">
              <ul class="terms-privacy d-flex justify-content-sm-end justify-content-center">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </footer>

    </div>
    </>
  )
}