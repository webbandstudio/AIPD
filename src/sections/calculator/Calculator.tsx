import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from './Calculator.module.scss';
import sticker from '@assets/images/png/stickers/calculatorSticker.png';
import infoIcon from '@assets/images/png/infoIcon.png';

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
  const [price, setPrice] = useState(1000);
  const [commission, setCommission] = useState(0);
  const [returnedVat, setReturnedVat] = useState(0);
  const [totalResult, setTotalResult] = useState(0);

  const handleActiveVat = (vat: string) => setActiveVat(vat);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const handlePrice = (value: React.ChangeEvent<HTMLInputElement>) => {
    const num = value.target.value;

    value.target.value = String(num.length > 8 ? 99999999 : Number(value.target.value));
    setPrice(num.length > 8 ? 99999999 : Number(value.target.value));
  }

  useEffect(() => {
    const vat = Number(activeVat.slice(0, activeVat.length - 1));
    const commission = Number((price * 0.09).toFixed(2));
    const priceWithCommission = price + commission;
    const returnVat = Number(((priceWithCommission / (100 + vat)) * vat).toFixed(2));
    const result = Number((priceWithCommission - returnVat).toFixed(2));

    setCommission(commission);
    setReturnedVat(returnVat);
    setTotalResult(result);
  }, [activeVat, price]);

  return (
    <section id="calculator" className={styles.border}>
      <div className={styles.borderLeft} />
      <div className={styles.calculatorWrapper}>
        <div className={styles.titleCourse}>
          <h2 className={styles.title}>
            прикинь выгоду сам
            <Image className={styles.barcodeImage} src={sticker} alt="barcode sticker" />
          </h2>
          <div className={styles.coursesDesktop}>
            <p>Актуальные курсы валют</p>
            <p>1 USD = 4.21pln</p>
            <p>1 EUR = 4.35pln</p>
          </div>
        </div>
        <div className={styles.calculations}>
          <div className={styles.textGroup}>
            <p className="p1">стоимость, pln</p>
            <input type="number" onChange={handlePrice} value={price} />
          </div>
          <div className={styles.textGroup}>
            <p className={`p1 ${styles.descriptionText}`}>комиссия сервиса, 9%</p>
            <p className={`p1 ${styles.descriptionResult}`}>{commission}</p>
          </div>
          <div className={styles.textGroup}>
            <p className={`p1 ${styles.descriptionText}`}>к оплате в Польше, pln</p>
            <p className={`p1 ${styles.descriptionResult}`}>{(price + commission).toFixed(2)}</p>
          </div>
          <div className={styles.textGroup}>
            <div className={styles.tooltipWrapper}>
              <p className={`p1 ${styles.descriptionText}`}>{`VAT ${activeVat} к возврату, pln`}</p>
              <div>
                {isHovering && <div className={styles.tooltipWindow}>
                  <label>{`VAT ${activeVat} применяется на авто товары, колеса и стекла`}</label>
                </div>}
                <Image
                  src={infoIcon}
                  alt="info icon"
                  className={styles.tooltip}
                  onMouseLeave={onMouseLeave}
                  onMouseEnter={onMouseEnter}
                />
              </div>
            </div>
            <p className={`p1 ${styles.descriptionResult}`}>{returnedVat}</p>
          </div>
          <div className={styles.divider} />
          <div className={styles.textGroup}>
            <p className={`p1 ${styles.descriptionTextTotal}`}>конечная стоимость покупки, pln</p>
            <p className={`p1 ${styles.descriptionTotal}`}>{totalResult}</p>
          </div>
        </div>
        <div className={styles.vatWrapper}>
          <p>VAT:</p>
          {vatPercentage.map(vat => <VatElement
            key={vat}
            text={vat}
            activeVat={activeVat}
            handleActiveVat={handleActiveVat}
          />)}
        </div>
        <div className={styles.coursesMobile}>
          <p>Актуальные курсы валют</p>
          <div>
            <p>1 USD = 4.21pln</p>
            <p>1 EUR = 4.35pln</p>
          </div>
        </div>
      </div>
      <div className={styles.borderRight} />
    </section>
  );
};

export default Calculator;
