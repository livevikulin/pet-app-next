import styles from "./Rating.module.css";
import classnames from "classnames";
import { FunctionComponent, ReactElement, KeyboardEvent, useEffect, useState } from "react";
import { IRatingProps } from "./Rating.props";
import StarIcon from "./star.svg";

export const Rating:FunctionComponent<IRatingProps> = ({ isEditable=false, rating, setRating, ...props }) => {
    const [ratingArray, setRatingArray] = useState<ReactElement[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((el, index) => {
            return (
                <span
                    className={classnames(styles.star, {
                        [styles.filled]: index < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    onClick={() => onClickable(index + 1)}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                >
                    <StarIcon
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
                        tabIndex={isEditable ? 0 : -1}
                    />
                </span>
            );
        });

        setRatingArray(updatedArray);
    };

    const changeDisplay = (count: number) => {
        if ( !isEditable ) return;
        constructRating(count);
    };

    const onClickable = (count: number) => {
        if ( !isEditable || !setRating ) return;
        setRating(count);
    };

    const handleSpace = (count: number, e: KeyboardEvent<SVGElement>) => {
        if ( e.code !== "Space" || !setRating ) return;
        setRating(count);
    };

    return (
        <div {...props}>
            {ratingArray.map((el, index) => (
                <span key={index}>{el}</span>
            ))}
        </div>
    )
}