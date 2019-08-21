class Post {
    constructor(type,img, svg, author, text, created, insightfulCount) {
        this.type = type;
        this.img = img;
        this.svg = svg;
        this.author = author;
        this.text = text;
        this.created = created;
        this.insightfulCount = insightfulCount;


    }

    render() {
        return `<div class="wall__item-content">

          <div class="wall__item-content__badge">
           ${this.svg}
          </div>


          <div class="wall__item-content_main">

            <div class="wall__item-content-user wall__item-content_add">
              <img src=${this.img}>
              <div class="wall__item-content-user-main">

                <span class="wall__item-content-user-main_tittle wall__item-content_add_tittle">Note by ${this.author}</span>
                <span class="wall__item-content-user-main_description wall__item-content_add_description">${this.text}
                </span>
                <div class="wall__item-content-user-main-actions">
                  <div class="wall__item-content-user-main-actions-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                    </svg>
                    <a>Insightful (${this.insightfulCount})</a>
                  </div>
                  <div class="wall__item-content-user-main-actions-item">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.678014 8.83849C0.771302 9.22501 0.895687 9.55021 1.00418 9.82856C1.12787 10.1069 1.26746 10.3853 1.43814 10.6946C1.60883 10.9881 1.71732 11.1893 1.77951 11.2823C1.8417 11.3746 1.9032 11.4677 1.96539 11.5448C2.02759 11.622 2.08978 11.653 2.18307 11.653C2.21347 11.653 2.24457 11.653 2.29156 11.6378C2.41525 11.5758 2.47744 11.4828 2.46224 11.3436C2.19827 9.41103 2.41525 8.0496 3.11319 7.2614C3.76482 6.50352 5.037 6.13216 6.89793 6.13216H8.2786V7.7871C8.2786 8.03444 8.4023 8.20462 8.61928 8.29764C8.69736 8.32795 8.77476 8.3438 8.83695 8.3438C8.99174 8.3438 9.13133 8.28179 9.22462 8.17362L12.5595 4.86443C12.668 4.75557 12.7143 4.63224 12.7143 4.47722C12.7143 4.32289 12.668 4.19956 12.5595 4.0907L9.22462 0.781507C9.11613 0.673337 8.99174 0.611328 8.83695 0.611328C8.77476 0.611328 8.69736 0.626486 8.61928 0.65749C8.4023 0.750503 8.2786 0.920682 8.2786 1.16803V2.82297H6.89793C6.29329 2.82297 5.71905 2.85397 5.207 2.91529C4.67974 2.9773 4.21468 3.07031 3.81112 3.17848C3.42346 3.28665 3.06689 3.42583 2.74142 3.59601C2.41525 3.76619 2.15197 3.93637 1.9191 4.1217C1.70211 4.32289 1.50033 4.52407 1.32965 4.77141C1.15897 5.0036 1.01938 5.2351 0.926092 5.46729C0.817601 5.69948 0.740206 5.94682 0.678014 6.22517C0.616512 6.50352 0.585416 6.76602 0.55432 6.99821C0.538426 7.24556 0.523224 7.50875 0.523224 7.7871C0.523224 8.11161 0.569523 8.46713 0.678014 8.83849Z"/>
                    </svg>
                    <a>Share</a>
                  </div>
                  <div class="wall__item-content-user-main-actions_add">
                    <span>${this.created}</span>
                    <a href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                      </svg>
                    </a>
                    <a href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                           viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                      </svg>
                    </a>

                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>
      
    `
    }

}