import Image from 'next/image';

import styles from './DeliveryInstruction.module.scss';
import stickerHyper from '@assets/images/stickerHyper.png';
import iphone from '@assets/images/iphone.png';
import commissionSticker from '@assets/images/commission.png';
import fiveYearSticker from '@assets/images/fiveYearSticker.png';
import horizontalLine from '@assets/images/horisontalLine.png';
import verticalLine from '@assets/images/verticalLine.png';
import InstructionText from './instructionText/InstructionText';
import TelegramOrder from '@components/telegramOrder/TelegramOrder';

const instructions = [
  {
    id: 1,
    title: 'Закидываешь ссылку в телеграм бот',
    description: 'Супер просто и удобно. А наши менеджеры на всё ответят и помогут.',
  },
  {
    id: 2,
    title: 'Оплачиваешь через ссылку',
    description: 'Безопасная оплата через секьюрную индивидуальную ссылку.',
  },
  {
    id: 3,
    title: 'Выбираешь доставку',
    description: 'На твое усмотрение выбирай перевозчика и мы передадим контакты для дальнейшей коммуникации.',
  },
  {
    id: 4,
    title: 'Получаешь',
    description: 'Текст описание в несколько предложений.',
  },
];

const DeliveryInstruction = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headlineShadow} />
      <h2 className={styles.header}>
        запрыгивай в телегу и <br />
        заказывай в пару нажатий.<br />
        это
        <span className={styles.hyperStickerWrapper}>
          <Image className={styles.hyperSticker} src={stickerHyper} alt="hyper" />
        </span>
        удобно
      </h2>
      <Image className={styles.fiveYearSticker} src={fiveYearSticker} alt="5 лет доставляем товары" />
      <Image className={styles.commissionSticker} src={commissionSticker} alt="комиссия 9%" />
      <div className={styles.instructionContainer}>
        <div className={styles.phoneWrapper}>
          <Image className={styles.iphone} src={iphone} alt="iphone" />
          <div className={styles.purpleEllipse} />
        </div>
        <div className={styles.instructionWrapper}>
          <div className={styles.instructionImages}>
            <Image className={styles.horizontalLine} src={horizontalLine} alt="instruction route" />
            <Image className={styles.verticalLine} src={verticalLine} alt="instruction route" />
          </div>
          <div className={styles.instructions}>
            {instructions.map(elem =>
              <InstructionText
                title={elem.title}
                description={elem.description}
                key={elem.id}
              />
            )}
          </div>
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