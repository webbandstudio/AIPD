import Image from "next/image";
import React, { useState } from "react";

import styles from './Calculator.module.scss';
import sticker from '../../public/assets/images/png/stickers/calculatorSticker.png';
import infoIcon from '../../public/assets/images/png/infoIcon.png';

const vatPercentage = ['5%', '8%', '23%'];

interface IVat {
  text: string;
  handleActiveVat: (vat: string) => void;
  activeVat: string;
}

const VatElement:React.FC<IVat> = ({ text, handleActiveVat, activeVat }) => {
  const isActive = activeVat === text;

  return (
    <div
      className={isActive ? styles.vatElementWrapperActive : styles.vatElementWrapperNonActive}
      onClick={() => handleActiveVat(text)}
    >
      <p className={`p1 ${isActive ? styles.vatElementTextActive : styles.vatElementTextNonActive}`}>
        {text}
      </p>
    </div>
  );
}

const Calculator = () => {
  const [activeVat, setActiveVat] = useState(vatPercentage[0]);
  const [isHovering, setIsHovered] = useState(false);

  const handleActiveVat = (vat: string) => setActiveVat(vat);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <section className={styles.calculatorWrapper}>
      <section className={styles.titleCourse}>
        <h2 className={styles.title}>
          прикинь выгоду сам
          <Image className={styles.barcodeImage} src={sticker} alt="barcode sticker" />
        </h2>
        <div className={styles.courses}>
          <p>Актуальные курсы валют</p>
          <p>1 USD = 4.21pln</p>
          <p>1 EUR = 4.35pln</p>
        </div>
      </section>
      <section className={styles.calculations}>
        <div className={styles.textGroup}>
          <p className="p1">стоимость, pln</p>
          <input type="number"/>
        </div>
        <div className={styles.textGroup}>
          <p className={`p1 ${styles.descriptionText}`}>комиссия сервиса, 9%</p>
          <p className={`p1 ${styles.descriptionResult}`}>90</p>
        </div>
        <div className={styles.textGroup}>
          <p className={`p1 ${styles.descriptionText}`}>к оплате в Польше, pln</p>
          <p className={`p1 ${styles.descriptionResult}`}>1,090</p>
        </div>
        <div className={styles.textGroup}>
          <div className={styles.tooltipWrapper}>
            <p className={`p1 ${styles.descriptionText}`}>VAT 5% к возврату, pln</p>
            <div>
              {isHovering && <div className={styles.tooltipWindow}>
                <label>VAT 5% применяется на авто товары, колеса и стекла</label>
              </div>}
              <Image
                src={infoIcon}
                alt="info icon"
                className={styles.tooltip}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            </div>
          </div>
          <p className={`p1 ${styles.descriptionResult}`}>203</p>
        </div>
        <div className={styles.divider} />
        <div className={styles.textGroup}>
          <p className={`p1 ${styles.descriptionTextTotal}`}>конечная стоимость покупки, pln</p>
          <p className={`p1 ${styles.descriptionTotal}`}>890</p>
        </div>
      </section>
      <section className={styles.vatWrapper}>
        <p>VAT:</p>
        {vatPercentage.map((vat) => <VatElement
          text={vat}
          activeVat={activeVat}
          handleActiveVat={handleActiveVat}
        />)}
      </section>
    </section>
  );
};

export default Calculator;
