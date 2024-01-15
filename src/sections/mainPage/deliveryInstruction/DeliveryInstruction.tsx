import Image from 'next/image';

import styles from './DeliveryInstruction.module.scss';
import stickerHyper from '@assets/images/png/stickers/stickerHyper.png';
import iphone from '@assets/images/png/iphone.png';
import commissionSticker from '@assets/images/png/stickers/commission.png';
import fiveYearSticker from '@assets/images/png/stickers/fiveYearSticker.png';
import horizontalLine from '@assets/images/png/horisontalLine.png';
import verticalLine from '@assets/images/png/verticalLine.png';
import InstructionText from '@sections/mainPage/deliveryInstruction/instructionText/InstructionText';
import TelegramOrder from '@components/telegramOrder/TelegramOrder';
import { INSTRUCTIONS } from '@constants/constants';

const DeliveryInstruction = () => {
  return (
    <section id="instruction" className={styles.container}>
      <div className={styles.headlineShadow} />
      <h2 className={styles.header}>
        Заказывайте через <br />
        телеграм-бот, быстро и <br />
        <span className={styles.hyperStickerWrapper}>
          <Image className={styles.hyperSticker} src={stickerHyper} alt="hyper" />
        </span>
        удобно
      </h2>
      <Image className={styles.fiveYearSticker} src={fiveYearSticker} alt="5 лет доставляем товары" />
      <Image className={styles.commissionSticker} src={commissionSticker} alt="комиссия 9%" />
      <div className={styles.instructionContainer}>
        <figure className={styles.phoneWrapper}>
          <Image className={styles.iphone} src={iphone} alt="iphone" />
          <div className={styles.purpleEllipse} />
        </figure>
        <div className={styles.instructionWrapper}>
          <figure className={styles.instructionImages}>
            <Image className={styles.horizontalLine} src={horizontalLine} alt="instruction route" />
            <Image className={styles.verticalLine} src={verticalLine} alt="instruction route" />
          </figure>
          <ul className={styles.instructions}>
            {INSTRUCTIONS.map(({ title, description, id }) =>
              <InstructionText
                title={title}
                description={description}
                key={id}
              />
            )}
          </ul>
        </div>
      </div>
      <div className={styles.telegramWrapperDesktop}>
        <TelegramOrder text="Оформить свой заказ" />
      </div>
      <div className={styles.telegramWrapperMobile}>
        <TelegramOrder text="Оформить заказ" />
      </div>
    </section>
  );
};

export default DeliveryInstruction;
