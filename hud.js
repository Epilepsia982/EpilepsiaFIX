function AddHud() {
    let hudStyleElement;
    let loadingNotification;

    function formatNumberWithDots(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function showLoadingNotification() {
        if (document.getElementById('loadingNotification')) return;
        loadingNotification = document.createElement('div');
        loadingNotification.id = 'loadingNotification';
        loadingNotification.style.position = 'fixed';
        loadingNotification.style.bottom = '10%';
        loadingNotification.style.left = '50%';
        loadingNotification.style.transform = 'translateX(-50%)';
        loadingNotification.style.display = 'flex';
        loadingNotification.style.alignItems = 'center';
        loadingNotification.style.padding = '10px 20px';
        loadingNotification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        loadingNotification.style.color = '#fff';
        loadingNotification.style.fontFamily = 'Arial, sans-serif';
        loadingNotification.style.fontSize = '16px';
        loadingNotification.style.borderRadius = '8px';
        loadingNotification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        loadingNotification.style.opacity = '0';
        loadingNotification.style.transition = 'opacity 2.5s';
        loadingNotification.style.zIndex = '1000';

        const spinner = document.createElement('div');
        spinner.style.width = '20px';
        spinner.style.height = '20px';
        spinner.style.border = '3px solid rgba(255, 255, 255, 0.3)';
        spinner.style.borderTop = '3px solid #fff';
        spinner.style.borderRadius = '50%';
        spinner.style.marginRight = '10px';
        spinner.style.animation = 'spin 1s linear infinite';
        const text = document.createElement('span');
        text.textContent = 'Wait Please Hud Is Initializing';
        loadingNotification.appendChild(spinner);
        loadingNotification.appendChild(text);
        document.body.appendChild(loadingNotification);
        const loadingStyle = document.createElement('style');
        loadingStyle.textContent = `
            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `;
        document.head.appendChild(loadingStyle);
        setTimeout(() => {
            loadingNotification.style.opacity = '1';
        }, 10);
    }
    
    showLoadingNotification();
    window.kimaze = window.kimaze || {};
    let notificationContainer;
    function createContainer() {
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.id = 'kimazeNotificationContainer';
            notificationContainer.style.position = 'fixed';
            notificationContainer.style.bottom = '14%';
            notificationContainer.style.left = '50%';
            notificationContainer.style.transform = 'translateX(-50%)';
            notificationContainer.style.zIndex = '1000';
            notificationContainer.style.display = 'flex';
            notificationContainer.style.flexDirection = 'column';
            notificationContainer.style.alignItems = 'center';
            document.body.appendChild(notificationContainer);
        }
    }
    kimaze.addLabel = function (message) {
        createContainer();
    
        const notification = document.createElement('div');
        notification.className = 'kimaze-notification';
        notification.style.position = 'relative';
        notification.style.padding = '10px 20px';
        notification.style.marginBottom = '10px';
        notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        notification.style.color = '#fff';
        notification.style.fontFamily = 'Arial, sans-serif';
        notification.style.fontSize = '16px';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 2.5s';
        notification.style.display = 'flex';
        notification.style.justifyContent = 'center';
        notification.style.alignItems = 'center';
    
        const icon = document.createElement('img');
        icon.src = 'https://i.ibb.co/BBNkjGn/imgonline-com-ua-Negativ-Qlm-LBd-Yi-QV.png';
        icon.style.width = '20px';
        icon.style.height = '20px';
        icon.style.marginRight = '10px';
        
        const text = document.createElement('span');
        text.textContent = message;
        
        notification.appendChild(icon);
        notification.appendChild(text);
    
        notificationContainer.appendChild(notification);
    
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
    
        setTimeout(() => {
            notification.style.opacity = '0';
    
            setTimeout(() => {
                if (notification) {
                    notification.remove();
                }
    
                if (notificationContainer && notificationContainer.children.length === 0) {
                    notificationContainer.remove();
                    notificationContainer = null;
                }
            }, 2500);
        }, 6000);
    };
    
    kimaze.addLabel("");
    const hudScript = document.currentScript;
    const hudElements = [];
    const oldRadmirConfig = {
        icons: {
            "active_wanted": "https://i.ibb.co/GtBwxxR/wanted-active.png",
            "armour": "https://i.ibb.co/d6rnsVT/armour.png",
            "breath": "https://i.ibb.co/485p98B/breath.png",
            "cash": "https://i.ibb.co/DbVzrb8/money.png",
            "circle": "https://i.ibb.co/550pcR0/circle.png",
            "health": "https://i.ibb.co/DbgHqwg/health.png",
            "hunger": "https://i.ibb.co/rM2c8qZ/hunger.png",
            "inactive_wanted": "https://i.ibb.co/W2pY3Nc/inactive-wanted.png",
            "wanted_back": "https://i.ibb.co/Js6Cj2j/wanted-back.png",
            "weapon_back": "https://i.ibb.co/D9wfsHp/weapon-back.png",
            "zone": "https://i.ibb.co/zNQr6wc/wanted-bg.png"
        },
        weapon: {
            "0": "https://i.imgur.com/fgB2pmw.png",
            "1": "https://i.ibb.co/4M4rghn/1.png",
            "2": "https://i.ibb.co/Ycg33S6/2.png",
            "3": "https://i.ibb.co/YdLdjRB/3.png",
            "4": "https://i.ibb.co/3C6D0Zw/4.png",
            "5": "https://i.ibb.co/gZFL5zn/5.png",
            "6": "https://i.ibb.co/PxppBxd/6.png",
            "7": "https://i.ibb.co/yVGfHMR/7.png",
            "8": "https://i.ibb.co/6YTC8qQ/8.png",
            "9": "https://i.ibb.co/gt9Z2sL/9.png",
            "10": "https://i.ibb.co/5k9JLWr/10.png",
            "11": "https://i.ibb.co/WBp8d27/11.png",
            "12": "https://i.ibb.co/LkCsGV7/12.png",
            "13": "https://i.ibb.co/WPJhtWg/13.png",
            "14": "https://i.ibb.co/fGh96cq/14.png",
            "15": "https://i.ibb.co/rbC65sT/15.png",
            "16": "https://i.ibb.co/jV85ySP/16.png",
            "17": "https://i.ibb.co/64GsLqh/17.png",
            "18": "https://i.ibb.co/58RMTMw/18.png",
            "19": "https://i.ibb.co/VvfNZZv/19.png",
            "20": "https://i.ibb.co/sH567VQ/20.png",
            "22": "https://i.ibb.co/94NZ4y1/22.png",
            "23": "https://i.ibb.co/8dktTPJ/23.png",
            "24": "https://i.imgur.com/mxnavaZ.png",
            "25": "https://i.imgur.com/TOkVZcW.png",
            "26": "https://i.ibb.co/tzHNHN9/26.png",
            "27": "https://i.ibb.co/ZmGqDrX/27.png",
            "28": "https://i.ibb.co/7VzYDMN/28.png",
            "29": "https://i.ibb.co/LYvTWWL/29.png",
            "30": "https://i.ibb.co/r5HjDQP/30.png",
            "31": "https://i.imgur.com/ROOMemd.png",
            "32": "https://i.ibb.co/T4wZ4kS/32.png",
            "33": "https://i.ibb.co/QQNwPbq/33.png",
            "34": "https://i.ibb.co/3B4TLGb/34.png",
            "35": "https://i.ibb.co/HpF5kz6/35.png",
            "36": "https://i.ibb.co/D7VNLsS/36.png",
            "37": "https://i.ibb.co/v1Zgmk4/37.png",
            "38": "https://i.ibb.co/fnkXQpp/38.png",
            "39": "https://i.ibb.co/Bz1Yc7f/39.png",
            "40": "https://i.ibb.co/tCrzrnN/40.png",
            "41": "https://i.ibb.co/7XLddBN/41.png",
            "42": "https://i.ibb.co/x1Zy8tN/42.png",
            "43": "https://i.ibb.co/FwQvZD3/43.png",
            "44": "https://i.ibb.co/hdTP3m4/44.png",
            "46": "https://i.ibb.co/g7Srgnc/46.png"
        },
        logo: {
            "1": "https://i.ibb.co/JtmFV74/1.png",
            "2": "https://i.ibb.co/YynmN08/2.png",
            "3": "https://i.ibb.co/vJ62R7w/3.png",
            "4": "https://i.ibb.co/9hPW459/4.png",
            "5": "https://i.ibb.co/tJgSTTw/5.png",
            "6": "https://i.ibb.co/HdqwnyP/6.png",
            "7": "https://i.ibb.co/KXzz1cW/7.png",
            "8": "https://i.ibb.co/jDq7sqF/8.png",
            "9": "https://i.ibb.co/nssvznj/9.png",
            "10": "https://i.ibb.co/N2R2zX9/10.png",
            "11": "https://i.ibb.co/51r6yrd/11.png",
            "12": "https://i.ibb.co/0CmYMFV/12.png",
            "13": "https://i.ibb.co/S7jJ0TR/13.png",
            "14": "https://i.ibb.co/hRDc8CP/14.png",
            "15": "https://i.ibb.co/vQK5tyd/15.png",
            "16": "https://i.ibb.co/6Z81JD8/16.png",
            "17": "https://i.ibb.co/9NS7jns/17.png",
            "18": "https://i.ibb.co/0DDNHRZ/18.png",
            "19": "https://i.ibb.co/ncQF0Ts/19.png",
            "20": "https://i.ibb.co/k6mdgZR/20.png"
        },
    };
    
    function createHud() {
        hudStyleElement = document.createElement("style");
        hudStyleElement.id = "hudStyles";
        hudStyleElement.innerHTML = `
@font-face{font-family:'GothamPro Light';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_light.ttf') format('truetype');font-weight:300;font-style:normal}@font-face{font-family:'GothamPro Light Italic';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_lightitalic.ttf') format('truetype');font-weight:300;font-style:italic}@font-face{font-family:'GothamPro Regular';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro.ttf') format('truetype');font-weight:_Update 400;font-style:normal}@font-face{font-family:'GothamPro Italic';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_italic.ttf') format('truetype');font-weight:400;font-style:italic}@font-face{font-family:'GothamPro Medium';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_medium.ttf') format('truetype');font-weight:500;font-style:normal}@font-face{font-family:'GothamPro Medium Italic';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_mediumitalic.ttf') format('truetype');font-weight:500;font-style:italic}@font-face{font-family:'GothamPro Bold';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_bold.ttf') format('truetype');font-weight:700;font-style:normal}@font-face{font-family:'GothamPro Bold Italic';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_bolditalic.ttf') format('truetype');font-weight:700;font-style:italic}@font-face{font-family:'GothamPro Black';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_black.ttf') format('truetype');font-weight:900;font-style:normal}@font-face{font-family:'GothamPro Black Italic';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_blackitalic.ttf') format('truetype');font-weight:900;font-style:italic}
      
      .Old-Fixed-Hud,
      .Old-Fixed-HudTop,
      .Old-Fixed-Logo,
      .Old-Fixed-Main,
      .Old-Fixed-Params,
      .Old-Fixed-Cash,
      .Old-Fixed-Params__all,
      .Old-Fixed-Param,
      .Old-Fixed-Weapon,
      .Old-Fixed-Wanted,
      .Old-Fixed-HudBottom{
      z-index: -1;
      }
      
      #app .hud-radmir-wanted {
        display: none;
      }
      
      body #app .hud-radmir-info {display: none}
      
      .hud-hassle-map .map-mask{
       display: none;
      }
      .Old-Fixed-Logo img,.Old-Fixed-HudTop{
       transform-origin:top right
      }
      .Ammo-in-clip{
       font-family:'GothamPro Bold Italic';
       font-weight:900;
       font-style:italic
      }
      .Old-Fixed-HudTop{
       position:absolute;
       right:1.4vw;
       top:3.4vh;
       display:flex;
       flex-direction:column;
       align-items:flex-end
      }
      .Old-Fixed-Logo{
       position:relative;
       margin-bottom:3vh
      }
      .Old-Fixed-Logo img{
       width:18.52vh;
       height:6.2vh;
       margin-right:2vh
      }
      .Old-Fixed-Bonus{
       background: radial-gradient(93.1% 93.1% at 126.72% 6.9%, #eb00ff 0, #eb00ff00 100%), linear-gradient(129.39deg, #f5be09 30.88%, #e9651b 98.06%);
       width: 32px;
       height: 32px;
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 16px;
       color: #fff;
       font-weight: 700;
       position: absolute;
       bottom: -5px;
       right: -2px;
       border-radius: 50%;
       font-family:'GothamPro Bold Italic';
       font-weight:900;
       font-size:1.3vh
      }
      .Old-Fixed-Main,.Old-Fixed-Cash,.Wanted_row{
       align-items:center;
       display:flex
      }
      .Old-Fixed-Main{
       margin-top:.46vh;
       margin-right:3.46vh
      }
      .Old-Fixed-Weapon{
       width:16.6vh;
       height:16.6vh;
       position:relative;
       display:flex;
       justify-content:flex-end;
       margin-left:-.93vh;
       margin-right:.46vh
      }
      .Ammo-in-clip,.old-param__icon{
       margin-right:1.11vh
      }
      .Old-Fixed-Weapon_back{
       position:absolute;
       right:-1.4vh;
       top:-1.6vh;
       z-index:-1
      }
      .Old-Fixed-Weapon_icon{
       width:37vh;
       height:16.6vh
      }
      .Old-Fixed-Weapon_ammo{
       position:absolute;
       bottom:3.6vh;
       right:5vh;
       display:flex;
       align-items:flex-end;
       color: #fff;
      }
      .Ammo-in-clip{
       font-size:2.31vh;
       line-height:1;
       text-shadow:0 0 .46vh #00000080
      }
      .Ammo-full{
       font-family:'GothamPro Light Italic';
       font-weight:300;
       font-style:italic;
       font-size:1.67vh;
       text-shadow:0 0 .46vh #000000b3
      }
      .Old-Fixed-Params{
       height:13.5vh;
       position:relative;
       z-index:1
      }
      .Old-Fixed-Cash{
       justify-content:flex-end;
       color: white;
       font-family:"GothamPro Black Italic";
       font-style:italic;
       font-size:2.59vh;
       text-shadow:0 0 .46vh #00000080
      }
      .Old-Fixed-Cash img{
       margin-right: 13px;
       margin-top: 1px
      }
      .Old-Fixed-Params__all{
       margin-top:1vh
      }
      .Old-Fixed-Param{
       display:flex;
       align-items:center;
       margin-top:.95vh
      }
      .Old-Fixed-Param.health{
        margin-top:0;
        margin-left:1.85vh
      }
      .Old-Fixed-Param.armour,.Old-Param-Values{
       margin-left:1vh
      }
      .Old-Param-Progress,.Old-Progress__Values{
       width:9.40vh;
       height:.46vh;
       background-color:#0000004d;
       border-radius:.46vh
      }
      .Old-Progress__Values{
       display:flex;
       justify-content:flex-end
      }
      .Old-Progress__Values .circle{
       width:.85vh;
       height:.93vh;
       margin-top:-.25vh;
       margin-right:-.28vh
      }
      .Old-Param-Values{
       font-family:"GothamPro Light Italic";
       font-weight:300;
       font-style:italic;
       color: white;
       width:3.24vh;
       font-size:1.67vh;
       text-shadow:0 0 .46vh #000000b3
      }
      .Old-Fixed-Freeze_text{
        margin-right:1vh;
      }
      .Old-Fixed-Freeze_value, .Old-Fixed-Freeze_text{
       font-family:"GothamPro Bold";
       font-weight:900;
       color:#c0ccec;
       font-size:2vh;
       text-shadow:0 0 2vh #000
      }
      .Old-Fixed-Param.hunger{
       margin-left:.09vh
      }
      .Old-Fixed-Param.breath{
       margin-left: 3px
      }
      .Old-Fixed-Param.health .Old-Progress__Values{
       background-color:#ed2e2e;
       box-shadow:#ed2e2e80 0 0 .46vh 0
      }
      .Old-Fixed-Param.armour .Old-Progress__Values{
       background-color:#526ee6;
       box-shadow:#526ee680 0 0 .46vh 0
      }
      .Old-Fixed-Param.hunger .Old-Progress__Values{
       width: 50%;
       box-shadow: hsl(26deg 100% 59% / 30%) 0 0 5px 0;
       background-color: #ff872e
      }
      .Old-Fixed-Param.breath .Old-Progress__Values{
        width: 99%;
        background-color: #fff;
        box-shadow: rgba(255, 255, 255, .5) 0 0 5px 0
      }
      .Old-Fixed-Param.health .old-param__icon{
       margin-left: 20px
      }
      .Old-Fixed-Param.armour .old-param__icon{
       margin-left: 14px
      }
      .Old-Fixed-Param.hunger .old-param__icon{
       margin-left: 1px
      }
      .Old-Fixed-Param.breath .old-param__icon{
       width:1.7vh;
       height:1.7vh
      }
      .Old-Fixed-Wanted{
       position:relative;
       margin-right:6vh;
       margin-top:-1.6vh
      }
      .Old-Fixed-Wanted_back{
       position:absolute;
       right:-1.2vh;
       top:-.66vh;
       z-index:-1
      }
      .Wanted_row img{
       width: 3.3vh;
       height:3.3vh;
       padding:.19vh .28vh
      }
      .Old-Fixed-HudBottom{
        transform-origin: right bottom;
        position: absolute;
        right: 0;
        top: 20px;
      }
      .Old-Fixed-ZZ{
       position:absolute;
       left:21.3vh;
       bottom:-98.9vh
      }
      .Old-Fixed-ZZ_icon{
       width:4.5vh;
       height:4.5vh
      }
      .Old-Fixed-Freeze {
        position: absolute;
        background: hsl(190deg 63% 66% / 40%);
        width: 26.1111vh;
        height: 0.65vh;
        border-radius: 1vh;
        outline: hsl(0deg 0% 0% / 20%) 0.2vh solid;
        outline-offset: 0.1vh;
        overflow: hidden;
        left: 11.1620vh;
        bottom: 2.7778vh;
      } 
      #app .hud-radmir-wanted{display:none}#app .hud-radmir-radar__radar-border{display:none}#app .hud-radmir-radar__radar-border_new-year{display:none}#app .hud-radmir-radar__radar-border_helloween {display:none}#app .hud-radmir-radar__radar-bats {display:none}#app .vignette {display:none}
      body .OLD-RADMIR-logo__bonus {
    background: #000000c5
}
      `;
  
      document.head.appendChild(hudStyleElement);
  
      const hudElement = document.createElement("div");
      hudElement.id = 'OldHudContainer';
  
      hudElement.innerHTML = `
      <div class="Old-Fixed-Hud">
      <div class="Old-Fixed-HudTop">
        <div class="Old-Fixed-Logo">
           <img src="${oldRadmirConfig.logo[1]}">
           <div class="Old-Fixed-Bonus">x3</div>
        </div>
        <div class="Old-Fixed-Main">
           <div class="Old-Fixed-Params">
              <div class="Old-Fixed-Cash"><img src="${oldRadmirConfig.icons.cash}"><span>0</span></div>
              <div class="Old-Fixed-Params__all">
                 <div class="Old-Fixed-Param health">
                    <img src="${oldRadmirConfig.icons.health}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param armour">
                    <img src="${oldRadmirConfig.icons.armour}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param hunger">
                    <img src="${oldRadmirConfig.icons.hunger}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param breath">
                    <img src="${oldRadmirConfig.icons.breath}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
              </div>
           </div>
           <div class="Old-Fixed-Weapon">
              <img src="${oldRadmirConfig.icons.wanted_back}" class="Old-Fixed-Weapon_back"> <img src="${oldRadmirConfig.weapon[0]}" class="Old-Fixed-Weapon_icon">
              <div class="Old-Fixed-Weapon_ammo"><span class="Ammo-in-clip">1</span><span class="Ammo-full">1</span></div>
           </div>
        </div>
        <div class="Old-Fixed-Wanted">
           <img src="${oldRadmirConfig.icons.weapon_back}" class="Old-Fixed-Wanted_back">
           <div class="Wanted_row"><img src="${oldRadmirConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${oldRadmirConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${oldRadmirConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${oldRadmirConfig.icons.active_wanted}" class="wanted-active"> <img src="${oldRadmirConfig.icons.active_wanted}" class="wanted-active"> <img src="${oldRadmirConfig.icons.active_wanted}" class="wanted-active"></div>
        </div>
      </div>
      <div class="Old-Fixed-HudBottom">
      <div class="Old-Fixed-ZZ"><img src="${oldRadmirConfig.icons.zone}" class="Old-Fixed-ZZ_icon"></div>
      <div class="Old-Fixed-Freeze">
      <span class="Old-Fixed-Freeze_text">Freeze:</span>
      <span class="Old-Fixed-Freeze_value">100</span>
      </div></div>
      `;
  
      document.body.appendChild(hudElement);
      hudElements.push(OldHudContainer);
    }
    const updateFunctions = {
        show: (value) => {
            const hudEl = document.querySelector(".Old-Fixed-Hud");
            if (hudEl) hudEl.style.display = +value >= 1 ? "" : "none";
        },
    
        showBars: (value) => {
            updateFunctions.show(value);
        },
    
        weapon: (value) => {
            const weaponIcon = document.querySelector(".Old-Fixed-Weapon_icon");
            if (weaponIcon) {
                const weaponSrc = oldRadmirConfig.weapon[value];
                if (weaponSrc) {
                    weaponIcon.src = weaponSrc;
                } 
            }
    
            const ammoEls = document.querySelectorAll(".Old-Fixed-Weapon_ammo span");
            ammoEls.forEach(el => {
                if (el) el.style.display = value >= 16 ? "" : "none";
            });
        },
    
        health: (value) => {
            updateParam("health", value);
        },
    
        armour: (value) => {
            updateParam("armour", value);
        },
    
        hunger: (value) => {
            updateParam("hunger", value);
        },
    
        breath: (value) => {
            const breathWrapper = document.querySelector(".Old-Fixed-Param.breath .Old-Param-Progress")?.parentElement;
            if (breathWrapper) breathWrapper.style.display = value < 99 ? "" : "none";
            updateParam("breath", value);
        },
        bonus: (bonusValue) => {
            const bonusEl = document.querySelector(".Old-Fixed-Bonus"); 
            if (bonusEl) {
                if (bonusValue <= 1) {
                    bonusEl.style.display = "none";
                } else {
                    bonusEl.style.display = "";
                    bonusEl.textContent = `x${bonusValue}`;
                }
            }
        },
        server: (serverId) => {
            const serverWrapper = document.querySelector(".Old-Fixed-Logo img");
            if (serverWrapper) {
                if (serverId <= 0) {
                    serverWrapper.style.display = "none"; 
                } else {
                    serverWrapper.style.display = ""; 
                    const serverLogo = oldRadmirConfig.logo[serverId];
                    if (serverLogo) {
                        serverWrapper.src = serverLogo; 
                    } 
                }
            }
        },
    
        money: (value) => {
            const moneyEl = document.querySelector(".Old-Fixed-Cash span");
            if (moneyEl) moneyEl.textContent = formatNumberWithDots(value);
        },
    
        wanted: (value) => {
            updateWanted(value);
            const wantedWrapper = document.querySelector(".Old-Fixed-Wanted");
            if (wantedWrapper) {
                if (value === 0 && !oldRadmirConfig.wantedAlwaysShow) {
                    wantedWrapper.style.display = "none";
                    return;
                }
                wantedWrapper.style.display = "";
            }
    
            const wantedEls = document.querySelectorAll(".Wanted_row img");
            wantedEls.forEach((el, index) => {
                if (el) {
                    if ((5 - index) / value >= 1 || (5 - index === 0 && value === 0)) {
                        el.src = oldRadmirConfig.icons.inactive_wanted;
                        el.className = "wanted-innactive";
                    } else {
                        el.src = oldRadmirConfig.icons.active_wanted;
                        el.className = "wanted-active";
                    }
                }
            });
        },
    
        ammoInClip: (value) => {
            const inClipEl = document.querySelector(".Ammo-in-clip");
            if (inClipEl) inClipEl.textContent = value;
        },
    
        totalAmmo: (value) => {
            const totalAmmoEl = document.querySelector(".Ammo-full");
            if (totalAmmoEl) totalAmmoEl.textContent = "/" + value;
        },
        
        freeze: (value) => {
            const freezeValueEl = document.querySelector(".Old-Fixed-Freeze_value");
        
            if (freezeValueEl) {
                const formattedValue = String(value).padStart(3, '0');
                freezeValueEl.textContent = formattedValue; 
            }
        },
        /*freeze2: () => {
            const freezeEl = document.querySelector(".Old-Fixed-Freeze");
            const isVisible = window.interface("Hud").isNewYear;
            if (freezeEl) {
                freezeEl.style.display = isVisible ? "" : "none";
            }
        },*/
        
        greenZone: (isVisible) => {
            const greenZoneEl = document.querySelector(".Old-Fixed-ZZ");
            if (greenZoneEl) {
                greenZoneEl.style.display = isVisible ? "" : "none"; 
            }
        },
    };
    
    function onInfoChange(type, value) {
        setTimeout(() => {
            loadingNotification.style.opacity = '0';
            setTimeout(() => {
                if (loadingNotification) {
                    loadingNotification.remove();
                }
            }, 2500);
        }, 1000);
        if (updateFunctions[type]) {
            updateFunctions[type](value);
        } 
        const hudInfo = window.interface("Hud").info;
        Object.entries(updateFunctions).forEach(([key, func]) => {
            if (typeof func === "function" && hudInfo.hasOwnProperty(key)) {
                func(hudInfo[key]);
            }
        });
    }
    
    function updateParam(paramClass, value) {
        const paramElement = document.querySelector(`.Old-Fixed-Param.${paramClass}`);
        if (paramElement) {
            const progressBar = paramElement.querySelector(".Old-Progress__Values");
            const valueText = paramElement.querySelector(".Old-Param-Values");
            progressBar.style.width = `${value}%`;
            valueText.textContent = value;
        }
    }
    
    function updateWanted(level) {
        const wantedIcons = document.querySelectorAll(".Wanted_row img");
        wantedIcons.forEach((icon, index) => {
            if (index < level) {
                icon.classList.remove("wanted-innactive");
                icon.classList.add("wanted-active");
            } else {
                icon.classList.remove("wanted-active");
                icon.classList.add("wanted-innactive");
            }
        });
    }
    
    function initializeHudProxy() {
        const checkInterval = setInterval(() => {
            if (typeof window.interface === "function" && window.interface("Hud").info) {
                clearInterval(checkInterval);
    
                const hudInfo = window.interface("Hud").info;
                const clonedHudInfo = JSON.parse(JSON.stringify(hudInfo));
    
                window.interface("Hud").info = new Proxy(clonedHudInfo, {
                    set(target, prop, value) {
                        if (target[prop] !== value) {
                            target[prop] = value;
                            onInfoChange(prop, value);
                        }
                        return Reflect.set(target, prop, value);
                    }
                });
                window.interface("Hud").setServer = (serverId) => {
                    onInfoChange("server", serverId);
                    window.interface("Hud").server = serverId;
                };
                window.interface("Hud").setBonus = (bonusValue) => {
                    onInfoChange("bonus", bonusValue);
                    window.interface("Hud").bonus = bonusValue;
                };
                window.interface("Hud").showGreenZoneTab = () => {
                    onInfoChange("greenZone", true);
                };
                
                window.interface("Hud").hideGreenZoneTab = () => {
                    onInfoChange("greenZone", false);
                };
            } 
        }, 100);
    }
    
    initializeHudProxy();
    
    createHud();
    window.onInfoChange = onInfoChange;
    setTimeout(() => {
        hudElements.forEach(el => el.remove());
        
        if (hudScript) {
            hudScript.remove();
        }
        if (hudStyleElement) {
            hudStyleElement.remove();
        }
    });
};
AddHud();