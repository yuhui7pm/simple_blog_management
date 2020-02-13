/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-12 12:49:08
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-12 12:49:37
 */
import {createGlobalStyle } from 'styled-components';//创建全局样式

//GlobalStyle要大写，不然会没有反应
export const NotFoundStyle=createGlobalStyle`
  body {
    margin: 0;
    font-size: 20px;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: white;
    color: black;
    font-family: arial, sans-serif;
    overflow: hidden;
  }

  .content {
    position: relative;
    width: 600px;
    max-width: 100%;
    margin: 20px;
    background: white;
    padding: 60px 40px;
    text-align: center;
    box-shadow: -10px 10px 67px -12px rgba(0, 0, 0, 0.2);
    opacity: 0;
    animation: apparition 0.8s 1.2s cubic-bezier(0.39, 0.575, 0.28, 0.995) forwards;
  }
  .content p {
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 0.6rem;
    letter-spacing: 0.1rem;
    color: #595959;
  }
  .content p:last-child {
    margin-bottom: 0;
  }
  .content button {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: 3px solid #595959;
    background: transparent;
    font-size: 1rem;
    color: #595959;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
  }

  .particle {
    position: absolute;
    display: block;
    pointer-events: none;
  }
  .particle:nth-child(1) {
    top: 25.3968253968%;
    left: 93.2286555447%;
    font-size: 19px;
    filter: blur(0.02px);
    animation: 28s float2 infinite;
  }
  .particle:nth-child(2) {
    top: 19.536019536%;
    left: 70.6575073602%;
    font-size: 19px;
    filter: blur(0.04px);
    animation: 22s floatReverse2 infinite;
  }
  .particle:nth-child(3) {
    top: 81.2575574365%;
    left: 73.0282375852%;
    font-size: 27px;
    filter: blur(0.06px);
    animation: 28s floatReverse2 infinite;
  }
  .particle:nth-child(4) {
    top: 95.2147239264%;
    left: 28.5714285714%;
    font-size: 15px;
    filter: blur(0.08px);
    animation: 22s float2 infinite;
  }
  .particle:nth-child(5) {
    top: 87.1670702179%;
    left: 48.7329434698%;
    font-size: 26px;
    filter: blur(0.1px);
    animation: 33s float infinite;
  }
  .particle:nth-child(6) {
    top: 89.6551724138%;
    left: 20.7509881423%;
    font-size: 12px;
    filter: blur(0.12px);
    animation: 38s float infinite;
  }
  .particle:nth-child(7) {
    top: 34.5252774353%;
    left: 32.6409495549%;
    font-size: 11px;
    filter: blur(0.14px);
    animation: 29s float infinite;
  }
  .particle:nth-child(8) {
    top: 34.188034188%;
    left: 70.6575073602%;
    font-size: 19px;
    filter: blur(0.16px);
    animation: 22s float2 infinite;
  }
  .particle:nth-child(9) {
    top: 10.7843137255%;
    left: 1.968503937%;
    font-size: 16px;
    filter: blur(0.18px);
    animation: 31s float2 infinite;
  }
  .particle:nth-child(10) {
    top: 12.7450980392%;
    left: 0.9842519685%;
    font-size: 16px;
    filter: blur(0.2px);
    animation: 34s float2 infinite;
  }
  .particle:nth-child(11) {
    top: 75.3977968176%;
    left: 56.0471976401%;
    font-size: 17px;
    filter: blur(0.22px);
    animation: 35s floatReverse2 infinite;
  }
  .particle:nth-child(12) {
    top: 79.322853688%;
    left: 43.8169425511%;
    font-size: 27px;
    filter: blur(0.24px);
    animation: 25s float2 infinite;
  }
  .particle:nth-child(13) {
    top: 16.52490887%;
    left: 76.2463343109%;
    font-size: 23px;
    filter: blur(0.26px);
    animation: 34s floatReverse infinite;
  }
  .particle:nth-child(14) {
    top: 36.3190184049%;
    left: 44.3349753695%;
    font-size: 15px;
    filter: blur(0.28px);
    animation: 38s floatReverse2 infinite;
  }
  .particle:nth-child(15) {
    top: 41.6464891041%;
    left: 16.5692007797%;
    font-size: 26px;
    filter: blur(0.3px);
    animation: 39s floatReverse infinite;
  }
  .particle:nth-child(16) {
    top: 91.7073170732%;
    left: 93.137254902%;
    font-size: 20px;
    filter: blur(0.32px);
    animation: 26s float infinite;
  }
  .particle:nth-child(17) {
    top: 86.7469879518%;
    left: 94.1747572816%;
    font-size: 30px;
    filter: blur(0.34px);
    animation: 40s floatReverse infinite;
  }
  .particle:nth-child(18) {
    top: 81.2729498164%;
    left: 20.6489675516%;
    font-size: 17px;
    filter: blur(0.36px);
    animation: 40s float2 infinite;
  }
  .particle:nth-child(19) {
    top: 38.4236453202%;
    left: 10.8695652174%;
    font-size: 12px;
    filter: blur(0.38px);
    animation: 30s float infinite;
  }
  .particle:nth-child(20) {
    top: 82.2249093108%;
    left: 73.0282375852%;
    font-size: 27px;
    filter: blur(0.4px);
    animation: 26s floatReverse2 infinite;
  }
  .particle:nth-child(21) {
    top: 3.8787878788%;
    left: 38.0487804878%;
    font-size: 25px;
    filter: blur(0.42px);
    animation: 30s float infinite;
  }
  .particle:nth-child(22) {
    top: 46.6585662211%;
    left: 60.6060606061%;
    font-size: 23px;
    filter: blur(0.44px);
    animation: 34s floatReverse infinite;
  }
  .particle:nth-child(23) {
    top: 55.9509202454%;
    left: 76.8472906404%;
    font-size: 15px;
    filter: blur(0.46px);
    animation: 39s float2 infinite;
  }
  .particle:nth-child(24) {
    top: 4.9321824908%;
    left: 83.0860534125%;
    font-size: 11px;
    filter: blur(0.48px);
    animation: 23s float infinite;
  }
  .particle:nth-child(25) {
    top: 42.3124231242%;
    left: 13.8203356367%;
    font-size: 13px;
    filter: blur(0.5px);
    animation: 29s float infinite;
  }
  .particle:nth-child(26) {
    top: 72.6380368098%;
    left: 15.763546798%;
    font-size: 15px;
    filter: blur(0.52px);
    animation: 31s floatReverse infinite;
  }
  .particle:nth-child(27) {
    top: 67.6328502415%;
    left: 40.8560311284%;
    font-size: 28px;
    filter: blur(0.54px);
    animation: 29s floatReverse2 infinite;
  }
  .particle:nth-child(28) {
    top: 49.156626506%;
    left: 62.1359223301%;
    font-size: 30px;
    filter: blur(0.56px);
    animation: 28s float infinite;
  }
  .particle:nth-child(29) {
    top: 16.7076167076%;
    left: 28.5996055227%;
    font-size: 14px;
    filter: blur(0.58px);
    animation: 26s floatReverse infinite;
  }
  .particle:nth-child(30) {
    top: 68.8484848485%;
    left: 96.5853658537%;
    font-size: 25px;
    filter: blur(0.6px);
    animation: 22s floatReverse2 infinite;
  }
  .particle:nth-child(31) {
    top: 76.0048721072%;
    left: 21.5475024486%;
    font-size: 21px;
    filter: blur(0.62px);
    animation: 27s floatReverse2 infinite;
  }
  .particle:nth-child(32) {
    top: 61.7647058824%;
    left: 0.9842519685%;
    font-size: 16px;
    filter: blur(0.64px);
    animation: 39s float infinite;
  }
  .particle:nth-child(33) {
    top: 38.7878787879%;
    left: 43.9024390244%;
    font-size: 25px;
    filter: blur(0.66px);
    animation: 29s floatReverse infinite;
  }
  .particle:nth-child(34) {
    top: 62.1454993835%;
    left: 59.3471810089%;
    font-size: 11px;
    filter: blur(0.68px);
    animation: 35s float infinite;
  }
  .particle:nth-child(35) {
    top: 89.4348894349%;
    left: 28.5996055227%;
    font-size: 14px;
    filter: blur(0.7px);
    animation: 36s floatReverse infinite;
  }
  .particle:nth-child(36) {
    top: 36.803874092%;
    left: 82.8460038986%;
    font-size: 26px;
    filter: blur(0.72px);
    animation: 35s floatReverse infinite;
  }
  .particle:nth-child(37) {
    top: 63.4920634921%;
    left: 50.0490677134%;
    font-size: 19px;
    filter: blur(0.74px);
    animation: 28s floatReverse infinite;
  }
  .particle:nth-child(38) {
    top: 71.9319562576%;
    left: 92.8641251222%;
    font-size: 23px;
    filter: blur(0.76px);
    animation: 30s float infinite;
  }
  .particle:nth-child(39) {
    top: 36.4532019704%;
    left: 26.6798418972%;
    font-size: 12px;
    filter: blur(0.78px);
    animation: 39s float2 infinite;
  }
  .particle:nth-child(40) {
    top: 54.1062801932%;
    left: 78.7937743191%;
    font-size: 28px;
    filter: blur(0.8px);
    animation: 30s float infinite;
  }
  .particle:nth-child(41) {
    top: 81.2575574365%;
    left: 69.1333982473%;
    font-size: 27px;
    filter: blur(0.82px);
    animation: 35s float2 infinite;
  }
  .particle:nth-child(42) {
    top: 87.7108433735%;
    left: 35.9223300971%;
    font-size: 30px;
    filter: blur(0.84px);
    animation: 24s float2 infinite;
  }
  .particle:nth-child(43) {
    top: 75.7281553398%;
    left: 30.2734375%;
    font-size: 24px;
    filter: blur(0.86px);
    animation: 27s floatReverse2 infinite;
  }
  .particle:nth-child(44) {
    top: 9.8039215686%;
    left: 57.0866141732%;
    font-size: 16px;
    filter: blur(0.88px);
    animation: 36s floatReverse2 infinite;
  }
  .particle:nth-child(45) {
    top: 49.5145631068%;
    left: 5.859375%;
    font-size: 24px;
    filter: blur(0.9px);
    animation: 37s floatReverse infinite;
  }
  .particle:nth-child(46) {
    top: 58.9371980676%;
    left: 36.9649805447%;
    font-size: 28px;
    filter: blur(0.92px);
    animation: 32s float infinite;
  }
  .particle:nth-child(47) {
    top: 56.3791008505%;
    left: 31.2805474096%;
    font-size: 23px;
    filter: blur(0.94px);
    animation: 36s floatReverse2 infinite;
  }
  .particle:nth-child(48) {
    top: 32.3529411765%;
    left: 29.5275590551%;
    font-size: 16px;
    filter: blur(0.96px);
    animation: 22s floatReverse2 infinite;
  }
  .particle:nth-child(49) {
    top: 43.3734939759%;
    left: 90.2912621359%;
    font-size: 30px;
    filter: blur(0.98px);
    animation: 24s floatReverse2 infinite;
  }
  .particle:nth-child(50) {
    top: 6.7714631197%;
    left: 55.5014605648%;
    font-size: 27px;
    filter: blur(1px);
    animation: 39s floatReverse2 infinite;
  }
  .particle:nth-child(51) {
    top: 41.9512195122%;
    left: 19.6078431373%;
    font-size: 20px;
    filter: blur(1.02px);
    animation: 23s floatReverse infinite;
  }
  .particle:nth-child(52) {
    top: 55.1390568319%;
    left: 92.5024342746%;
    font-size: 27px;
    filter: blur(1.04px);
    animation: 30s float infinite;
  }
  .particle:nth-child(53) {
    top: 49.3946731235%;
    left: 30.2144249513%;
    font-size: 26px;
    filter: blur(1.06px);
    animation: 35s floatReverse infinite;
  }
  .particle:nth-child(54) {
    top: 15.763546798%;
    left: 4.9407114625%;
    font-size: 12px;
    filter: blur(1.08px);
    animation: 35s floatReverse infinite;
  }
  .particle:nth-child(55) {
    top: 94.403892944%;
    left: 87.084148728%;
    font-size: 22px;
    filter: blur(1.1px);
    animation: 28s floatReverse2 infinite;
  }
  .particle:nth-child(56) {
    top: 80.490797546%;
    left: 46.3054187192%;
    font-size: 15px;
    filter: blur(1.12px);
    animation: 37s floatReverse2 infinite;
  }
  .particle:nth-child(57) {
    top: 5.8041112455%;
    left: 57.4488802337%;
    font-size: 27px;
    filter: blur(1.14px);
    animation: 38s float2 infinite;
  }
  .particle:nth-child(58) {
    top: 64.2335766423%;
    left: 68.4931506849%;
    font-size: 22px;
    filter: blur(1.16px);
    animation: 40s float2 infinite;
  }
  .particle:nth-child(59) {
    top: 52.6829268293%;
    left: 66.6666666667%;
    font-size: 20px;
    filter: blur(1.18px);
    animation: 25s floatReverse infinite;
  }
  .particle:nth-child(60) {
    top: 14.7783251232%;
    left: 87.9446640316%;
    font-size: 12px;
    filter: blur(1.2px);
    animation: 37s floatReverse2 infinite;
  }
  .particle:nth-child(61) {
    top: 55.9509202454%;
    left: 56.157635468%;
    font-size: 15px;
    filter: blur(1.22px);
    animation: 26s floatReverse infinite;
  }
  .particle:nth-child(62) {
    top: 57.3511543135%;
    left: 86.0215053763%;
    font-size: 23px;
    filter: blur(1.24px);
    animation: 21s floatReverse infinite;
  }
  .particle:nth-child(63) {
    top: 16.4848484848%;
    left: 84.8780487805%;
    font-size: 25px;
    filter: blur(1.26px);
    animation: 36s float2 infinite;
  }
  .particle:nth-child(64) {
    top: 67.4816625917%;
    left: 81.5324165029%;
    font-size: 18px;
    filter: blur(1.28px);
    animation: 29s floatReverse2 infinite;
  }
  .particle:nth-child(65) {
    top: 52.0481927711%;
    left: 13.5922330097%;
    font-size: 30px;
    filter: blur(1.3px);
    animation: 25s float2 infinite;
  }
  .particle:nth-child(66) {
    top: 91.8984280532%;
    left: 4.8685491723%;
    font-size: 27px;
    filter: blur(1.32px);
    animation: 37s float2 infinite;
  }
  .particle:nth-child(67) {
    top: 47.8632478632%;
    left: 35.3287536801%;
    font-size: 19px;
    filter: blur(1.34px);
    animation: 32s floatReverse infinite;
  }
  .particle:nth-child(68) {
    top: 10.6925880923%;
    left: 64.5161290323%;
    font-size: 23px;
    filter: blur(1.36px);
    animation: 39s float2 infinite;
  }
  .particle:nth-child(69) {
    top: 33.0900243309%;
    left: 8.8062622309%;
    font-size: 22px;
    filter: blur(1.38px);
    animation: 33s floatReverse infinite;
  }
  .particle:nth-child(70) {
    top: 83.8471023428%;
    left: 66.2710187933%;
    font-size: 11px;
    filter: blur(1.4px);
    animation: 23s floatReverse2 infinite;
  }
  .particle:nth-child(71) {
    top: 45.4655380895%;
    left: 76.9230769231%;
    font-size: 27px;
    filter: blur(1.42px);
    animation: 21s floatReverse infinite;
  }
  .particle:nth-child(72) {
    top: 67.8966789668%;
    left: 87.8578479763%;
    font-size: 13px;
    filter: blur(1.44px);
    animation: 38s floatReverse2 infinite;
  }
  .particle:nth-child(73) {
    top: 91.064871481%;
    left: 55.063913471%;
    font-size: 17px;
    filter: blur(1.46px);
    animation: 32s float2 infinite;
  }
  .particle:nth-child(74) {
    top: 85.1897184823%;
    left: 5.8997050147%;
    font-size: 17px;
    filter: blur(1.48px);
    animation: 35s float infinite;
  }
  .particle:nth-child(75) {
    top: 60.1212121212%;
    left: 3.9024390244%;
    font-size: 25px;
    filter: blur(1.5px);
    animation: 25s floatReverse infinite;
  }
  .particle:nth-child(76) {
    top: 65.8595641646%;
    left: 14.6198830409%;
    font-size: 26px;
    filter: blur(1.52px);
    animation: 22s float2 infinite;
  }
  .particle:nth-child(77) {
    top: 72.2891566265%;
    left: 56.3106796117%;
    font-size: 30px;
    filter: blur(1.54px);
    animation: 34s float infinite;
  }
  .particle:nth-child(78) {
    top: 50.2415458937%;
    left: 71.9844357977%;
    font-size: 28px;
    filter: blur(1.56px);
    animation: 29s floatReverse infinite;
  }
  .particle:nth-child(79) {
    top: 77.4818401937%;
    left: 25.3411306043%;
    font-size: 26px;
    filter: blur(1.58px);
    animation: 21s floatReverse2 infinite;
  }
  .particle:nth-child(80) {
    top: 0.9708737864%;
    left: 69.3359375%;
    font-size: 24px;
    filter: blur(1.6px);
    animation: 32s float infinite;
  }

  @keyframes apparition {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes float {
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(180px);
    }
  }
  @keyframes floatReverse {
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-180px);
    }
  }
  @keyframes float2 {
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(28px);
    }
  }
  @keyframes floatReverse2 {
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-28px);
    }
  }
`