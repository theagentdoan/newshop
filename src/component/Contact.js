import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div id="contact-page" className="container">
            <div className="bg">
              <div className="row">    		
                <div className="col-sm-12">    			   			
                  <h2 className="title text-center">Contact <strong>Us</strong></h2>    			    				    				
                  <div id="gmap" className="contact-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62706.8670302752!2d106.72373686332172!3d10.797584062781787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175263d580e4583%3A0x6d25e042c3aed063!2zVGjhuqNvIMSQaeG7gW4sIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2ssg!4v1630507458188!5m2!1svi!2ssg" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" />
                  </div>
                </div>			 		
              </div>    	
              <div className="row">  	
                <div className="col-sm-8">
                  <div className="contact-form">
                    <h2 className="title text-center">Get In Touch</h2>
                    <div className="status alert alert-success" style={{display: 'none'}} />
                    <form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
                      <div className="form-group col-md-6">
                        <input type="text" name="name" className="form-control" required="required" placeholder="Name" />
                      </div>
                      <div className="form-group col-md-6">
                        <input type="email" name="email" className="form-control" required="required" placeholder="Email" />
                      </div>
                      <div className="form-group col-md-12">
                        <input type="text" name="subject" className="form-control" required="required" placeholder="Subject" />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea name="message" id="message" required="required" className="form-control" rows={8} placeholder="Your Message Here" defaultValue={""} />
                      </div>                        
                      <div className="form-group col-md-12">
                        <input type="submit" name="submit" className="btn btn-primary pull-right" defaultValue="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="contact-info">
                    <h2 className="title text-center">Contact Info</h2>
                    <address>
                      <p>E-Shopper Inc.</p>
                      <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
                      <p>Newyork USA</p>
                      <p>Mobile: +2346 17 38 93</p>
                      <p>Fax: 1-714-252-0026</p>
                      <p>Email: info@e-shopper.com</p>
                    </address>
                    <div className="social-networks">
                      <h2 className="title text-center">Social Networking</h2>
                      <ul>
                        <li>
                          <a href="#"><i className="fa fa-facebook" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-twitter" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-google-plus" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-youtube" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>    			
              </div>  
            </div>	
          </div>
        );
      }
    }
