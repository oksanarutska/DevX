class Event {
    constructor(type, title, severity, from, to) {
        this.type = type;
        this.title = title;
        this.severity = severity;
        this.from = from;
        this.to = to;


    }

    render() {
        return `<div class="wall__item-content">

          <div class="wall__item-content__badge">
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.956512 0L14 21.913L27.0435 0H0.956512Z"/>
            </svg>
            <span> ${this.severity}</span>
          </div>


          <div class="wall__item-content_main">
            <span class="wall__item-content_main__tittle">${this.title}</span>
            <span class="wall__item-content_main__description">Monday ${this.from} - Tuesday ${this.to}</span>
          </div>
        </div>
      
    `
    }

}