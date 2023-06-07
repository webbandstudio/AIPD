import styles from './InstructionText.module.scss';

interface IInstructionText {
  title: string,
  description: string,
}

const InstructionText: React.FC<IInstructionText> = ({ title, description }) => {
  return (
    <li className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

export default InstructionText;
