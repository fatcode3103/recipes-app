import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button(props) {
    const {
        children,
        className,
        size,
        onClick,
        href,
        to,
        outline = false,
        onlyLink = false,
        normal = false,
        disable = false,
        btnCancel = false,
        none = false,
        fitContent = false,
    } = props;

    let Comp = "div";

    let prop = { onClick: onClick };

    if (href) {
        Comp = "a";
        prop.href = href;
    } else if (to) {
        Comp = Link;
        prop.to = to;
    }

    const classes = cx({
        [className]: className,
        [size]: size,
        outline: outline,
        onlyLink: onlyLink,
        normal: normal,
        disable: disable,
        btnCancel: btnCancel,
        none: none,
        fitContent: fitContent,
    });

    return (
        <Comp className={classes} {...prop}>
            {children}
        </Comp>
    );
}

export default Button;
