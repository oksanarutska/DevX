class Alert {
    constructor(type, money, date, to) {
        this.type = type;
        this.money = money;
        this.date = date;
        this.to = to


    }

    render() {
        return `<div class="wall__item-content">

          <div class="wall__item-content__badge">
            <svg class="wall__item-content__badge_danger" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
          </div>

          <div class="wall__item-content_main"><span class="wall__item-content_main__text-danger">${this.money}</span>
            on ${this.date}</span>
            <span class="wall__item-content_main__description"> ${this.to}</span>
          </div>
        </div>
      
    `
    }

}