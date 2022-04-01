let url=new URL(location.href)
let user=JSON.parse(url.searchParams.get('data'))
function userInfo(point) {
    for (let pointKey in point) {
        if (typeof point[pointKey] !== 'object') {
            let pointContainer = document.createElement('div');
            pointContainer.innerText = point[pointKey];

            document.body.appendChild(pointContainer);
        } else if (typeof point[pointKey] === 'object'){
            userInfo(point[pointKey])
        }
    }
}

userInfo(user)

let btnPosts=document.createElement('button')
btnPosts.innerText='Post of current user'
let postsWraper=document.createElement('div')
postsWraper.classList.add('wraper')
document.body.append(postsWraper)
btnPosts.onclick=function (e){
   fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
           .then(response => response.json())
           .then(posts => {
               for (const post of posts) {
                   let postDiv=document.createElement('div')
                   postDiv.classList.add('post')
                   postDiv.innerText=post.title
                   postsWraper.appendChild(postDiv)
                   let btnDetailsPost=document.createElement('button')
                   btnDetailsPost.innerText='Post Details'
                   btnDetailsPost.classList.add('btn-post')
                   postDiv.append(btnDetailsPost)
                  this.style.display='none'
                   btnDetailsPost.onclick=function (e){
                       location.href=`./post-details.html?data=${JSON.stringify(post)}`
                   }

               }
           });
}
btnPosts.classList.add('btnPost')
document.body.append(btnPosts)