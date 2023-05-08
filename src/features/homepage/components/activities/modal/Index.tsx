import { XCircle } from "phosphor-react";
import style from "./styles.module.css";

export function Modal({ IMG, close }: any) {
    return (
        <div className={style.container}>
            <img src={IMG} alt="" />
            <XCircle
                color="white"
                weight="fill"
                size={30}
                onClick={() => close()}
            />
        </div>
    );
}
