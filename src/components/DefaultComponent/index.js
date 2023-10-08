import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./DefaultComponent.module.scss";

const cx = classNames.bind(styles);

function DefaultComponent() {
    return <div>Default Component</div>;
}

export default DefaultComponent;
