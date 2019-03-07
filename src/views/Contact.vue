<template>
  <div class="contact">
    <section id="contact">
      <h1 class="section-header">CONTACT</h1>

      <div class="contact-wrapper">
        <!---------------- 
      CONTACT PAGE LEFT 
        ----------------->
        <form class="form-horizontal" role="form" method="post" action="contact.php">
          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value
              >
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value
              >
            </div>
          </div>

          <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>
          
          <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <div class="button">
              <i class="fa fa-paper-plane"></i>
              <span class="send-text">SEND</span>
            </div>
          </button>
        </form>

        <!---------------- 
      CONTACT PAGE RIGHT 
        ----------------->
        <div class="direct-contact-container">
          <ul class="contact-list">
            <li class="list-item">
              <i class="fa fa-map-marker fa-2x">
                <span class="contact-text place">Sydney | NSW</span>
              </i>
            </li>

            <li class="list-item">
              <i class="fa fa-phone fa-2x">
                <span class="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">(041) 4652-404</a>
                </span>
              </i>
            </li>

            <li class="list-item">
              <i class="fa fa-envelope fa-2x">
                <span class="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">elli-motaghi@gmail.com</a>
                </span>
              </i>
            </li>
          </ul>

          <hr>
          <ul class="social-media-list">
            <li>
              <a href="https://github.com/ElliMoty" target="_blank" class="contact-icon">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ElliMotaghi" target="_blank" class="contact-icon">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" class="contact-icon">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/elli-motaghi/" target="_blank" class="contact-icon">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <hr>

          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: "contact"
};
</script>

<style scoped>
@import "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css";
@import "//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css";

#contact {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  font: 100 50px "Oswald", sans-serif;
  letter-spacing: 6px;
  color: #fcbec9;
  padding-bottom: 25px;
}

.contact-wrapper {
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
  max-width: 800px;
}

/* Begin Left Contact Page */
.form-horizontal {
  float: left;
  max-width: 400px;
  font-family: "Lato";
  font-weight: 400;
}

.form-control,
textarea {
  max-width: 400px;
  background-color: rgba(112, 112, 112, 0.6);
  color: rgb(255, 255, 255);
  letter-spacing: 1px;
  font-size: 16px;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.button {
  width: 400px;
  height: 34px;
  transition: all 0.2s ease-in-out;
}

#submit {
  background: #f5a1b1;
  border: 1px solid #f5a1b1;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 300 14px "Lato", sans-serif;
  letter-spacing: 2px;
}

.button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
  float: right;
  margin-top: 5px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: rgb(143, 142, 142);
  text-align: left;
}

.contact-text {
  font: 300 18px "Lato", sans-serif;
  letter-spacing: 1.9px;
  color: rgb(126, 124, 124);
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: rgb(126, 124, 124);
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: rgb(199, 197, 197);
  text-decoration: none;
}

/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 2.3rem;
  text-align: center;
  width: 100%;
}

.social-media-list li a {
  color: rgb(255, 254, 254);
}

.social-media-list li {
  position: relative;
  top: 0;
  left: -20px;
  display: inline-block;
  height: 70px;
  width: 70px;
  margin: 10px auto;
  line-height: 70px;
  border-radius: 50%;
  background-color: rgb(109, 107, 107);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 0 2px;
}

 .social-media-list li:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  line-height: 70px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #f5a1b1;
  transition: all 0.2s ease-in-out;
} 

 .social-media-list li:hover {
  background-color:#f5a1b1;
}  

 .social-media-list li:hover:after {
  opacity: 1;
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

 .social-media-list li:hover a {
  color: rgb(105, 104, 104);
} 

.copyright {
  font: 200 14px "Oswald", sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255, 255, 255, 0.8);
}

/* Begin Media Queries*/
@media screen and (max-width: 760px) {
  #contact {
    height: 1000px;
  }
  .section-header {
    font-size: 65px;
  }
  .direct-contact-container,
  .form-horizontal {
    float: none;
    margin: 10px auto;
  }
  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {
  #contact {
    height: 1200px;
  }
  .section-header {
    font-size: 50px;
    color: #f88a9e;
  }
  .direct-contact-container,
  .form-wrapper {
    float: none;
    margin: 0 auto;
  }
  .form-control,
  textarea {
    max-width: 340px;
    margin: 0 auto;
  }

  .name,
  .email,
  textarea {
    width: 280px;
  }
  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
</style>
