// import closeIcon from '../assets/close.png';
// import addComment from './addComment.js';
// import countComment from './commentCount.js';
// import showComments from './fetchComment.js';
const popUp = document.querySelector('.popup');

const popUpHandler = (arry) => {
// console.log(arry)
  const reserveBtn = document.querySelectorAll('.reserveBtn');
  reserveBtn.forEach( (reserve) => {
    //   console.log(reserve)
      console.log(reserve.dataset.id,arry.show.id)
    //   console.log(reserve.getAttribute('data-id'))
    //   console.log(arry.show.id)

    reserve.addEventListener('click',  () => {
        console.log('Onyeka Microverse aaa')

        if(parseInt(reserve.dataset.id,10) === arry.show.id){
            console.log('Onyeka Microverse bbbb')
            popUp.style.display = 'block';


            popUp.innerHTML = `
            <div class='popup_container'>
              <div class='popup-header'>
                <div class="img" style="background: url('${arry.show.image.medium}'); background-position: center; background-repeat: no-repeat; background-size: cover;">
                  <span>${arry.show.summary}</span>  
                </div>
                <div>
                  <h2 class='popup-title'>${arry.show.name}</h2>
                  <h4 class='popup-genres'>${arry.show.genres}</h4>
                  <form class="form">
                    <h2 class="form_heading">Add Your Comment<h2/>
                    <input type="text" class="username" placeholder="Your Name...">
                    <input type="text" name="comment" class="comment" placeholder="Your Insight...">
                    <button type='button' class='submit_button'><span class="button-top">Add Comment</span></button>
                  </form>
                </div>
              </div>
              
            </div>
            `;
                 }
                });
            });
          };

//       document.body.style.overflow = 'hidden';
//       const actualButton = arry.find((arry) => arry.id === +button.dataset.id);
//       popUpPage.classList.add('visible');
//     //   const comments = await showComments(button.dataset.id);
//       popUpPage.innerHTML = `
//       <div class='popup_container'>
//         <div class='popup-header'>
//           <div class="img" style="background: url('${actualButton.image.medium}'); background-position: center; background-repeat: no-repeat; background-size: cover;">
//             <span>${actualButton.summary}</span>  
//           </div>
//           <div>
//             <h2 class='popup-title'>${actualButton.name}</h2>
//             <h4 class='popup-genres'>${actualButton.genres}</h4>
//             <form class="form">
//               <h2 class="form_heading">Add Your Comment<h2/>
//               <input type="text" class="username" placeholder="Your Name...">
//               <input type="text" name="comment" class="comment" placeholder="Your Insight...">
//               <button type='button' class='submit_button'><span class="button-top">Add Comment</span></button>
//             </form>
//           </div>
//         </div>
//         <img class='close_icon' src='${closeIcon}'>
//         <div>
//           <div class='comment_section'>
//           <h2 class='comment_heading'>Comments (${comments.error ? 0 : comments.length})<h2/>
//           ${comments.error ? '<p class="no_comment"> No comment for this movie</p>' : ` 
//             ${comments.map((comment, idx) => `
//               <p class='comment_paragraph' key=${idx}>${comment.creation_date} ${comment.username}: "${comment.comment}"</p>
//             `).join('')}
//           `}
//           </div> 
//         </div>
//       </div>
//       `;

//       document.querySelector('.close_icon').addEventListener('click', () => {
//         popUpPage.classList.remove('visible');
//         popUpPage.innerHTML = '';
//         document.body.style.overflow = 'visible';
//       });

//       addComment(button.dataset.id);
//       countComment();
  

export default popUpHandler;