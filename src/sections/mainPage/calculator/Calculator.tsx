import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from './Calculator.module.scss';
import sticker from '@assets/images/png/stickers/calculatorSticker.png';
import infoIcon from '@assets/images/svg/icons/infoIcon.svg';
import { VATS } from '@constants/constants';

interface IVat {
  percentage: string;
  description: string;
  handleActiveVat: (vat: string) => void;
  activeVat: string;
}

const vatTooltipStyle = (percentage: string, isButtons = false) => {
  switch (percentage) {
    case '5%':
      return isButtons ? styles.tooltipWindowButtons : styles.tooltipWindow;
    case '8%':
      return isButtons ? styles.tooltipWindowButtons8 : styles.tooltipWindow8;
    case '23%':
      return isButtons ? styles.tooltipWindowButtons23 : styles.tooltipWindow23;
  }
};

const VatElement:React.FC<IVat> = ({ percentage, description, handleActiveVat, activeVat }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const isActive = activeVat === percentage;

  return (
    <div
      className={isActive ? styles.vatElementWrapperActive : styles.vatElementWrapperNonActive}
      onClick={() => handleActiveVat(percentage)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering && <div className={vatTooltipStyle(percentage, true)}>
        <label>{`VAT ${percentage} применяется на ${description}`}</label>
      </div>}
      <p className={`p1 ${isActive ? styles.vatElementTextActive : styles.vatElementTextNonActive}`}>
        {percentage}
      </p>
    </div>
  );
};

const Calculator = () => {
  const [activeVat, setActiveVat] = useState(VATS[0].percentage);
  const [isHovering, setIsHovered] = useState(false);
  const [price, setPrice] = useState(1000);
  const [commission, setCommission] = useState(0);
  const [returnedVat, setReturnedVat] = useState(0);
  const [totalResult, setTotalResult] = useState(0);

  const handleActiveVat = (vat: string) => setActiveVat(vat);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = e.target.value;
    const slicedNum = Number(e.target.value.slice(0, 8));
    const finalValue = String(num.length > 8 ? slicedNum : Number(e.target.value))

    e.target.value = finalValue;
    setPrice(Number(finalValue));
  }

  useEffect(() => {
    const vat = Number(activeVat.slice(0, activeVat.length - 1));
    const currentCommission = Number((price * 0.06).toFixed(2));
    const commission = currentCommission < 39 ? 39 : currentCommission;
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
        <aside className={styles.titleCourse}>
          <h2 className={styles.title}>
            посчитайте выгоду сами
            <Image className={styles.barcodeImage} src={sticker} alt="barcode sticker" />
          </h2>
          <div className={styles.coursesDesktop}>
            <p>Минимальная сумма комиссии: 39 pln</p>
            <p>Актуальные курсы валют</p>
            <p>1 USD = 4.21pln</p>
            <p>1 EUR = 4.35pln</p>
          </div>
        </aside>
        <section className={styles.calculations}>
          <div className={styles.textGroup}>
            <p className="p1">стоимость, pln</p>
            <input type="number" onChange={handlePrice} value={price} />
          </div>
          <div className={styles.textGroup}>
            <p className={`p1 ${styles.descriptionText}`}>комиссия сервиса, 6%</p>
            <p className={`p1 ${styles.descriptionResult}`}>{commission.toFixed(2)}</p>
          </div>
          <div className={styles.textGroup}>
            <p className={`p1 ${styles.descriptionText}`}>к оплате в Польше, pln</p>
            <p className={`p1 ${styles.descriptionResult}`}>{(price + commission).toFixed(2)}</p>
          </div>
          <div className={styles.textGroup}>
            <div className={styles.tooltipWrapper}>
              <p className={`p1 ${styles.descriptionText}`}>{`VAT ${activeVat} к возврату, pln`}</p>
              <figure>
                {isHovering && <figcaption className={vatTooltipStyle(activeVat)}>
                  <label>{`VAT ${activeVat} применяется ${VATS.find(({ percentage }) => percentage === activeVat)?.description}`}</label>
                </figcaption>}
                <Image
                  src={infoIcon}
                  alt="info icon"
                  className={styles.tooltip}
                  onMouseLeave={onMouseLeave}
                  onMouseEnter={onMouseEnter}
                />
              </figure>
            </div>
            <p className={`p1 ${styles.descriptionResult}`}>{returnedVat}</p>
          </div>
          <div className={styles.divider} />
          <div className={styles.textGroup}>
            <p className={`p1 ${styles.descriptionTextTotal}`}>конечная стоимость покупки, pln</p>
            <p className={`p1 ${styles.descriptionTotal}`}>{totalResult}</p>
          </div>
        </section>
        <aside className={styles.vatWrapper}>
          <p>VAT:</p>
          {VATS.map(({ percentage, description }) => <VatElement
            key={percentage}
            percentage={percentage}
            description={description}
            activeVat={activeVat}
            handleActiveVat={handleActiveVat}
          />)}
        </aside>
        <aside className={styles.coursesMobile}>
          <p>Актуальные курсы валют</p>
          <div>
            <p>1 USD = 4.21pln</p>
            <p>1 EUR = 4.35pln</p>
          </div>
        </aside>
      </div>
      <div className={styles.borderRight} />
    </section>
  );
};

export default Calculator;
