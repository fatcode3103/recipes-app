import classNames from "classnames/bind";

import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

function Image(props) {
    const {
        src = "",
        alt = "",
        size = false,
        classNames,
        ...otherProps
    } = props;

    const classes = cx({
        [classNames]: classNames,
        [size]: size,
    });

    return <img src={src} alt={alt} className={classes} {...otherProps} />;
}

export default Image;
