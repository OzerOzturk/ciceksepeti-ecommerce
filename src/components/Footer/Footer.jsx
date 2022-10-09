import React from "react";

import phonePack from "../../assets/images/phone-pack.png";
import qrCode from "../../assets/images/qr-code.png";
import playStore from "../../assets/icons/playStore.svg";
import appStore from "../../assets/icons/appStore.svg";
import logo from "../../assets/icons/logo.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import blog from "../../assets/icons/blog.svg";

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
            <a href="https://play.google.com/store/apps/details?id=com.ciceksepeti.ciceksepeti">
              <img src={playStore} alt="playStore__icon" />
            </a>
            <a href="https://apps.apple.com/app/id723715907">
              <img src={appStore} alt="appStore__icon" />
            </a>
          </div>
        </div>
      </section>
      <section className="footer__bottom">
        <div className="footer__bottom__left">
          <img src={logo} alt="ciceksepeti__logo" />
          <div className="footer__bottom__left__social">
            <a href="https://www.facebook.com/ciceksepeti">
              <img src={facebook} alt="facebook__icon" />
            </a>
            <a href="https://twitter.com/ciceksepeti">
              <img src={twitter} alt="twitter__icon" />
            </a>
            <a href="https://www.instagram.com/ciceksepeti/">
              <img src={instagram} alt="instagram__icon" />
            </a>
            <a href="https://www.youtube.com/user/CicekSepeti">
              <img src={youtube} alt="youtube__icon" />
            </a>
            <a href="https://blog.ciceksepeti.com/">
              <img src={blog} alt="ciceksepeti__blog__icon" />
            </a>
          </div>
          <p className="footer__bottom__left__text">
            CicekSepeti.com olarak kişisel verilerinizin gizliliğini
            önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
            kapsamında oluşturduğumuz aydınlatma metnine&nbsp;
            <span>buradan</span>&nbsp;ulaşabilirsiniz.
          </p>
        </div>
        <hr />
        <div className="footer__bottom__right">
          <div className="footer__bottom__right__subheading">
            <h4>Faydalı Bilgiler</h4>
            <ul>
              <li>Çiçek Bakımı</li>
              <li>Çiçek Eşliğinde Notlar</li>
              <li>Çiçek Anlamları</li>
              <li>Özel Günler</li>
              <li>Mevsimlere Göre Çiçekler</li>
              <li>BonnyFood Saklama Koşulları</li>
              <li>Site Haritası</li>
            </ul>
          </div>
          <div className="footer__bottom__right__subheading">
            <h4>Kurumsal</h4>
            <ul>
              <li>Hakkımızda</li>
              <li>Kariyer</li>
              <li>ÇiçekSepeti’nde Satış Yap</li>
              <li>Kurumsal Müşterilerimiz</li>
              <li>Reklamlarımız</li>
              <li>Basında Biz</li>
              <li>Kampanyalar</li>
              <li>Vizyonumuz</li>
            </ul>
          </div>
          <div className="footer__bottom__right__subheading">
            <h4>İletişim</h4>
            <ul>
              <li>Bize Ulaşın</li>
              <li>Sıkça Sorulan Sorular</li>
            </ul>
          </div>
          <div className="footer__bottom__right__subheading">
            <h4>Gizlilik Sözleşmesi</h4>
            <ul>
              <li>Mesafeli Satış Sözleşmesi</li>
              <li>Bilgi Toplumu Hizmetleri</li>
              <li>Gizlilik Sözleşmesi</li>
              <li>Ödeme Seçenekleri</li>
              <li>Hesap Bilgileri</li>
            </ul>
          </div>
        </div>
      </section>
      <summary>
        Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi
        mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek
        Sepeti ile sevdiklerinize özel günlerde online çiçek gönderebilirsiniz.
        Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir
        yanına hızlı ve sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan
        mis kokulu şık çiçek aranjmanları arasından beğendiğiniz ürünü seçerek,
        hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum
        günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için
        yapmanız gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü,
        Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve
        lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü
        mutlu etmenin adresi; ÇiçekSepeti.
      </summary>
      <p className="footer__copyright">
        Copyright © 2022 Çiçek Sepeti İnternet Hizmetleri A.Ş.
      </p>
    </footer>
  );
};

export default Footer;
