


var items = [
   new Note('note'),

    new Event('event', 'Spring Break',1,'20/08/2019', '21/08/2019'),
    new Event('event', 'S@tferris Twitter Mention',2 ,'20/08/2019', '21/08/2019'),
    new Alert( 'alert', 55470 ,'21/08/2019 10:00 AM', 'is more than 10% above or below same time last fiscal quater'),
    new Post('post',"images/userCh.png", ` <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M13.7727 16.5H20.0949V0H0.035675V16.5H7.05641L10.3519 22L13.7727 16.5Z" fill="#37809F"/>
            </svg>`,'Guy Mariano', 'This Metric is a key indicator of our ability to retain users. Active for us means logged in and using the product for at least 10 minutes. The 10 minute marker allows us focus on dedicated users that are invested in the product.',
        '21/08/2019',0),
];


renderItems(items);

document.querySelector('#commentPost').addEventListener('click', function (e) {
    var comment = document.querySelector('#text').value;
    items.unshift( new Post('post',"images/Guy.png",` <svg class="wall__item-content__badge_book" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>`, 'Guy Mariano', comment,
        '21/08/2019',0));
    renderItems(items);
    document.querySelector('#text').value = null

});


function renderItems(items) {
    const container = document.querySelector('.wall-main');
    container.innerHTML = '';
    items.forEach((item, index) => {

        var itemDiv = creatElement(item, index);
        container.appendChild(itemDiv);

    });

}

function creatElement(item, index) {
    var container = document.createElement('div');
    container.className = 'wall__item wall__item-event';
    container.innerHTML = `
    <div class="wall__item wall__item-event">


       ${item.render()}

        <hr/>
        <div class="wall__item-actions">
          <div class="wall__item-actions__comment">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.68391 7.19507C2.15146 7.86674 2.80413 8.4405 3.64066 8.90262C3.58379 9.11279 3.51303 9.30862 3.42773 9.50445C3.35697 9.68655 3.28621 9.8406 3.21544 9.96657C3.15858 10.0788 3.07328 10.2185 2.96019 10.3588C2.84646 10.5123 2.7757 10.6108 2.71883 10.6663C2.66197 10.7368 2.56277 10.8347 2.43515 10.9607C2.30752 11.1004 2.23675 11.1983 2.19442 11.2407C2.17989 11.2407 2.16599 11.2688 2.13756 11.3105C2.09523 11.3386 2.0807 11.3667 2.0807 11.3667C2.0668 11.3804 2.05226 11.4085 2.02383 11.4502C1.99603 11.4783 1.99603 11.5064 1.99603 11.5207C1.99603 11.5344 1.99603 11.5482 1.9815 11.5906C1.9676 11.6323 1.9676 11.6741 1.9815 11.6885V11.7022C1.99603 11.7864 2.05226 11.8706 2.12366 11.9261C2.19442 11.9822 2.26519 12.0103 2.36438 11.9966C2.70493 11.9542 3.00252 11.8986 3.25778 11.8282C4.64778 11.4783 5.85329 10.8484 6.90274 9.93851C7.29952 9.98092 7.68241 9.99464 8.05139 9.99464C9.34156 9.99464 10.5186 9.77075 11.6111 9.32296C12.7028 8.8889 13.5539 8.27274 14.192 7.50315C14.8302 6.73294 15.1423 5.90723 15.1423 4.99732C15.1423 4.08741 14.8302 3.2617 14.192 2.49149C13.5539 1.7219 12.7028 1.10573 11.6111 0.671673C10.5186 0.223891 9.34156 0 8.05139 0C7.0866 0 6.17931 0.125978 5.29982 0.391653C4.42095 0.657952 3.66909 1.00782 3.03095 1.4556C2.40671 1.90338 1.8962 2.43536 1.52785 3.05153C1.14497 3.66707 0.96048 4.32502 0.96048 4.99732C0.96048 5.78125 1.20183 6.50905 1.68391 7.19507Z"/>
            </svg>
            <a href="/">Comments</a>

          </div>
          <div class="wall__item-actions__comment">
            <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.36751 0.013672C9.03845 0.0135157 8.70833 0.139461 8.45632 0.391484C7.95228 0.895498 7.95227 1.70983 8.45632 2.21387L10.9288 4.68632H1.57236C0.701155 4.68632 9.38752e-06 5.38745 0 6.25868C9.38752e-06 7.12988 0.701136 7.83104 1.57236 7.83104H10.9288L8.45632 10.3035C7.95229 10.8075 7.95229 11.6218 8.45632 12.1259C8.96036 12.6299 9.77467 12.6299 10.2787 12.1259C12.1231 10.2815 14.161 8.24362 15.9014 6.50315C16.0358 6.36876 16.0358 6.14863 15.9014 6.01421C13.995 4.1078 11.9443 2.0571 10.2787 0.391484C10.0267 0.139461 9.69657 0.0138283 9.36751 0.013672Z"/>
            </svg>

            <a href="/">Follow</a>

          </div>


          <svg onclick = "deletPost(${index})" class="wall__item-actions__delete" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>


        <div>
        </div>
      </div>
    
    `
    return container

}


function deletPost(index) {
    items.splice(index, 1);
    renderItems(items)

}


document.querySelector('#filterEverything').addEventListener('click', function (e){

    renderItems(items)
});

document.querySelector('#filterPost').addEventListener('click', function (e){
    var i = items.filter(e=>{
        return e.type === 'post'
    });
    renderItems(i)
});
document.querySelector('#filterEvent').addEventListener('click', function (e){
    var i = items.filter(e=>{
        return e.type === 'event'
    });
    renderItems(i)
});
document.querySelector('#filterAlert').addEventListener('click', function (e){
    var i = items.filter(e=>{
        return e.type === 'alert'
    });
    renderItems(i)
});


