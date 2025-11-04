import React from 'react'
import styles from './Card.module.scss'

function Card({ title, price, imageUrl, onClickFavourite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus();
        setIsAdded(!isAdded);
    }

    // React.useEffect(() => {
    //     console.log("Var changed")
    // }, [isAdded])

    return (
        <div className={styles.card}>
            <div className={styles.favourite} onClick={onClickFavourite}>
                <img src="/img/unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Snealers" />
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Price: </span>
                    <b>{price} $</b>
                </div>
                <img className='cu-p' onClick={onClickPlus}  src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
            </div>
        </div>
    )
}

export default Card;