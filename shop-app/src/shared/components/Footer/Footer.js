import React from "react";
import "./Footer.css";

const DUMMY_LINK = [1, 2, 3, 4];

const Footer = props => {
  return (
    <>
      <footer className="footer-container color-scheme-light">
        <aside className="footer-inside">
          <div className="textwidget">
            <p className="txt-footer">
              <img
                src="//cdn.shopify.com/s/files/1/1933/6253/files/logo-white_330x.png"
                alt="Basel"
                title="Basel"
                className="footer-img"
              />
            </p>
            <ul className="social-icons text-center social-share icons-design-default icons-size-default">
              <li className="social-facebook">
                <a href="https://support.the4.co/ticket/7257">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="social-twitter">
                <a href="http://twitter.com/share?url=https://demo-basel.myshopify.com">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="social-google">
                <a href="http://plus.google.com/share?url=https://demo-basel.myshopify.com">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li className="social-email">
                <a href="mailto:?subject=Check this https://demo-basel.myshopify.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="row footer-link">
            {DUMMY_LINK.map((link, index) => (
              <div
                className="footer-column footer-column-2 col-md-2 col-sm-6"
                key={index}
              >
                <div className="footer-widget widget_text">
                  <h5 className="widget-title">OUR STORES</h5>
                  <div className="textwidget">
                    <ul className="menu">
                      <li>
                        <a href="/">New York</a>
                      </li>
                      <li>
                        <a href="/">London SF</a>
                      </li>
                      <li>
                        <a href="/">Cockfosters BP</a>
                      </li>
                      <li>
                        <a href="/">Los Angeles</a>
                      </li>
                      <li>
                        <a href="/">Chicago</a>
                      </li>
                      <li>
                        <a href="/">Las Vegas</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="footer-column footer-about-store footer-column-6 col-md-4 col-sm-12">
              <div  className="footer-widget widget_text">
                <h5 className="widget-title">About The Store</h5>
                <div className="textwidget">
                  <p>
                    STORE - worldwide fashion store since 1978. We sell over
                    1000+ branded products on our web-site.
                  </p>
                  <div>
                    <i className="fa fa-location-arrow"></i>
                    451 Wall Street, USA, New York
                    <i className="fa fa-mobile"></i>
                    Phone: (064) 332-1233
                  </div>
                  <p>
                    <img
                      src="//cdn.shopify.com/s/files/1/1933/6253/files/payments_255x.png"
                      alt="Basel"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
