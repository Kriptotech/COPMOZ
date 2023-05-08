import { useState } from "react";
import { Modal } from "./modal/Index";
import style from "./styles.module.css";

export function Activities() {
    const [IMG, setIMG] = useState("");
    const [Open, setOpen] = useState(false);
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Nossas Actividades</h1>
            </div>

            <div className={style.box}>
                <div className={style.item}>
                    <img
                        src="/assets/works/1.jpg"
                        alt=""
                        onClick={() => {
                            setIMG("/assets/works/1.jpg");
                            setOpen(true);
                        }}
                    />
                </div>
                <div className={style.item}>
                    <img
                        src="/assets/works/2.jpg"
                        alt=""
                        onClick={() => {
                            setIMG("/assets/works/2.jpg");
                            setOpen(true);
                        }}
                    />
                </div>
                <div className={style.item}>
                    <img
                        src="/assets/works/3.jpg"
                        alt=""
                        onClick={() => {
                            setIMG("/assets/works/3.jpg");
                            setOpen(false);
                        }}
                    />
                </div>
                <div className={style.item}>
                    <img
                        src="/assets/works/4.jpg"
                        alt=""
                        onClick={() => {
                            setIMG("/assets/works/4.jpg");
                            setOpen(true);
                        }}
                    />
                </div>
                <div className={style.item}>
                    <img
                        src="/assets/works/5.jpg"
                        alt=""
                        onClick={() => {
                            setIMG("/assets/works/5.jpg");
                            setOpen(true);
                        }}
                    />
                </div>
                <div className={style.item}>
                    <img
                        src="/assets/works/6.jpg"
                        alt=""
                        onClick={() => {
                            setIMG("/assets/works/6.jpg");
                            setOpen(true);
                        }}
                    />
                </div>
            </div>

            {Open && <Modal IMG={IMG} close={() => setOpen(false)} />}
        </div>
    );
}
