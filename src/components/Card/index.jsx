import ContentLoader from "react-content-loader"

import styles from './Card.module.scss'

function Card({ title, price, imageUrl, onClickFavourite, onPlus, added, favourite, loading, order = false }) {

    const onClickPlus = () => {
        if (!added){
            onPlus();
        }
    }
    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader
                speed={2}
                width={155}
                height={250}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#060202">
                <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> : (
                    <>
                    <div className={styles.favourite} onClick={onClickFavourite}>
                        {order ? null : <img src={favourite ? "img/liked.svg" : "img/unliked.svg"} alt="Favourite" />}
                    </div>
                    <img width={133} height={112} src={imageUrl} alt="Sneakers" />
                    <h5>{title}</h5>
                    <div className='d-flex justify-between align-center'>
                        <div className='d-flex flex-column'>
                            <span>Price: </span>
                            <b>{price} $</b>
                        </div>
                        {order ? null : <img className='cu-p' onClick={onClickPlus}  src={added ? "img/btn-checked.svg" : "img/btn-plus.svg"} alt="Plus" />}
                    </div>
                    </>
                )
            }
            
        </div>
    )
}

export default Card;