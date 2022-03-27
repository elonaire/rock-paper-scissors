import React, { FunctionComponent } from "react";
import Image from 'next/image'
import styles from '../styles/ItemContainer.module.css'

interface ItemContainerProps {
    itemName: string
}
 
const ItemContainer: FunctionComponent<ItemContainerProps> = ({itemName}) => {
    return (
        <div className={`${styles.item_container} ${styles[itemName]}`}>
            <Image src={`/images/icon-${itemName}.svg`} alt="Item Icon" width={52} height={52} />
        </div>
    );
}
 
export default ItemContainer;