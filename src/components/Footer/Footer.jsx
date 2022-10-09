import React from "react";

import phonePack from "../../assets/images/phone-pack.png";
import qrCode from "../../assets/images/qr-code.png";
import playStore from "../../assets/icons/playStore.svg";
import appStore from "../../assets/icons/appStore.svg";

const Footer = () => {
  return (
    <footer className="footer container">
      <section className="footer__top">
        <img
          src={phonePack}
          className="footer__top__image"
          alt="phone__image"
        />
        <div className="footer__top__right">
          <div className="footer__top__right__upper">
            <img src={qrCode} alt="qrCode__image" />
            <div className="footer__top__right__upper__text">
              <h4>Çiçek Sepeti Mobil Uygulamayı İndirin</h4>
              <p>Mobil Uygulamayı QR Kod ile İndirin</p>
            </div>
          </div>
          <div className="footer__top__right__lower">
            <img src={playStore} alt="playStore__icon" />
            <img src={appStore} alt="appStore__icon" />
          </div>
        </div>
      </section>
      <section className="footer__bottom">
        <div>
          <h1>hellooo</h1>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
