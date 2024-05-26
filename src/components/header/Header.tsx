/* eslint-disable @next/next/no-img-element */
import { MouseEventHandler } from 'react'
import Styles from './Header.module.css'

interface ShowButtonMenu {
    action: MouseEventHandler<HTMLButtonElement> | undefined;
    setDisplayMenu: boolean;
    changeIcon: boolean;
}

export default function Header(props: ShowButtonMenu) {
    return (
        <header className={Styles.header}>
            <div className={Styles.logo}>
                <img src="images/logo.svg" alt="" />
            </div>
            <div className={Styles.links}>
                <ul>
                    <li><a href="#">product</a></li>
                    <li><a href="#">feature</a></li>
                    <li><a href="#">pricing</a></li>
                    <li><span></span></li>
                    <li><a href="#" className={Styles.last_anchor}>login</a></li>
                </ul>
            </div>
            <button className={Styles.menu_icon} onClick={props.action}>
                <img src={props.changeIcon ? "images/icon-close.svg" : "images/icon-hamburger.svg"} alt="" />
            </button>

            <div className={Styles.menu} style={{display: (props.setDisplayMenu ? "block" : "none")}}>
                <ul>
                    <li><a href="#">product</a></li>
                    <li><a href="#">feature</a></li>
                    <li><a href="#">pricing</a></li>
                    <li><span></span></li>
                    <li><a href="#" className={Styles.last_anchor}>login</a></li>
                </ul>
            </div>
        </header>
    )
}