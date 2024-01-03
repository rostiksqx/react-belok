import styles from './Card.module.scss'
import React from 'react'

function Card({ id, title, imageUrl, price, onPlus, onFavorite, favorited = false }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickHeart = () => {
        onFavorite({ id, title, imageUrl, price });
        setIsFavorite(!isFavorite);
    };

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickHeart}>
                <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Favorite Btn" />
            </div>
            <img width={133} height={113} src={imageUrl} alt="Whey Protein" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} грн.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                    alt="Plus"
                />
            </div>
        </div>
    );
}

export default Card;