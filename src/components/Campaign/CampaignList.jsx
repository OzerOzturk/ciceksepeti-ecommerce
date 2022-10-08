import React from "react";
import deliverer from "../../assets/images/deliverer.png";
import giftBox from "../../assets/images/gift-box.png";
import officeEquipment from "../../assets/images/office-equipment.png";
import CampaignCard from "./CampaignCard";

const CampaignList = () => {
  return (
    <>
      <hr className="straight__line"></hr>
      <article className="campaignList container">
        <CampaignCard
          title="75 TL Üzerine Teslimat Ücreti Bizden"
          info="Detaylı Bilgi"
          image={deliverer}
          backgroundColor="#FFEAE8"
        />
        <CampaignCard
          title="Hediye Kategorisi için Sepette %15 İndirim"
          info="Hediye Ürünleri"
          image={giftBox}
          backgroundColor="#E8F1FF"
        />
        <CampaignCard
          title="Kırtasiye Kategorisi için Sepette %15 İndirim"
          info="Detaylı Bilgi"
          image={officeEquipment}
          backgroundColor="#E2F7E1"
        />
      </article>
    </>
  );
};

export default CampaignList;
