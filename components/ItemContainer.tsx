import React, { FunctionComponent } from "react";
import Image from 'next/image'
import styles from '../styles/ItemContainer.module.css'

interface ItemContainerProps {
    itemName: string
    handleClick?: any
}
 
const ItemContainer: FunctionComponent<ItemContainerProps> = ({itemName, handleClick}) => {
    return (
        <div onClick={() => handleClick(itemName)} className={`${styles.item_container} ${styles[itemName]}`}>
            <Image src={`/images/icon-${itemName}.svg`} alt="Item Icon" width={52} height={52} />
        </div>
    );
}
 
export default ItemContainer;