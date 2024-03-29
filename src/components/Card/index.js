import styles from './Card.module.scss'
import React from 'react'
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../App'

function Card({ 
    id, 
    title, 
    imageUrl, 
    price, 
    onPlus,
    favorited = false,
    loading = false
}) {
    const { isItemAdded, onAddToFavorite } = React.useContext(AppContext);
    const obj = { parentId: id, id, title, imageUrl, price };

    const onClickHeart = () => {
        onAddToFavorite(obj);
    };

    const onClickPlus = () => {
        onPlus(obj);
    };

    return (
        <div className={styles.card}>
            {
                loading ? 
                (<ContentLoader
                    speed={2}
                    width={155}
                    height={265}
                    viewBox='0 0 155 265'
                    backgroundColor='#f3f3f3'
                    foregroundColor='#ecebeb'
                >
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="238" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>) :
                (<>
                    {onAddToFavorite && (
                    <div className={styles.favorite} onClick={onClickHeart}>
                        <img src={ favorited ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Favorite Btn" />
                    </div>)}
                    <img width={133} height={113} src={imageUrl} alt="Whey Protein" />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} грн.</b>
                        </div>
                        {onPlus && <img
                            className={styles.plus}
                            onClick={onClickPlus}
                            src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                            alt="Plus"
                        />}
                    </div>
                </>)
            }
        </div>
    );
}

export default Card;