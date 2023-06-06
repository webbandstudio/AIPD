import React, { useState } from 'react';
import Image from 'next/image';

import styles from './Dropdown.module.scss';
import dropdownImage from '@assets/images/svg/dropdownArrow.svg';

interface IDropdown {
  items: { id: number; category: string; }[];
  activeItem: number;
  handleItem: (id: number) => void;
}

const Dropdown: React.FC<IDropdown> = ({ items, activeItem, handleItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(prevState => !prevState);
  const handleSelectItem = (id: number) => {
    handleItem(id);
    setIsOpen(false);
  }

  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={handleOpen} className={styles.dropdownButton}>
        <p className={styles.buttonText}>{items.find(item => item.id === activeItem)?.category}</p>
        <Image className={isOpen ? styles.dropdownImageActive : styles.dropdownImage} src={dropdownImage} alt="dropdown image" />
      </button>
      <ul className={isOpen ? styles.itemsWrapper : styles.itemsWrapperClose}>
        {items.map(({ id, category}) =>
          <li key={id} className={styles.dropdownItem} onClick={() => handleSelectItem(id)}>
            <p>{category}</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
