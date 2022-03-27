import React, { FunctionComponent } from "react";
import styles from '../styles/ItemContainer.module.css'

interface ItemContainerProps {
    children: any
    itemName: string
}
 
const ItemContainer: FunctionComponent<ItemContainerProps> = ({children, itemName}) => {
    return (
        <div className={`${styles.item_container} ${styles[itemName]}`}>
            {children}
        </div>
    );
}
 
export default ItemContainer;