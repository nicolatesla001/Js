let url=new URL(location.href)
let post=JSON.parse(url.searchParams.get('data'))
console.log(post)
let postContainer=document.createElement('div')
document.body.append(postContainer)
postContainer.classList.add('post')
postContainer.innerHTML=`<h2>User ID: ${post.userId}</h2>
            <h3>Post ID: ${post.id}</h3>
            <h3>Title: ${post.title}</h3>
            <p>Post: ${post.body}</p>`;

let comments=document.createElement('ol')
document.body.append(comments)
comments.classList.add('comments')
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
        .then(value => {
            console.log(value);
            for (const commentItem of value) {
                let commentLi=document.createElement('li')
                commentLi.innerText=commentItem.body
                comments.appendChild(commentLi)
                
            }
        });
