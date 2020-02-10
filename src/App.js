/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 11:38:34
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-10 15:14:40
 */
import React from 'react';
import {hot} from 'react-hot-loader/root';
import styles from './app.scss';
import small_pic from './assets/1.jpg';
import bigger_pic from './assets/16.png';

function App(){
    return (
        <div className={`${styles.text} ${styles.fontBig}`}>
            hello react,this is App.js
            <img src={small_pic}/>
            <img src={bigger_pic}/>
        </div>
    )
}

export default hot(App);