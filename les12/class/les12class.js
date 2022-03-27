// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let wraper = document.createElement('div')
        wraper.classList.add('wraper')
        for (const post of posts) {
            let postDiv = document.createElement('div')
            postDiv.classList.add('card')
            postDiv.innerHTML =
                `<h3>ID:${post.id}</h3>
                 <h4>Title:${post.title}</h4>
                 <h5>Body:${post.body}</h5>`;
            let btn = document.createElement('button')
            btn.innerText = 'Click to info'
            btn.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let divComment = document.createElement('div')
                                divComment.classList.add('divComent')
                                divComment.innerHTML = `
                                     <h3>ID:${comment.id}</h3>
                                     <h4>Name:${comment.name}</h4>
                                     <h5>Email:${comment.email}</h5>
                                     <h6>Body:${comment.body}</h6>
                                     `;
                                postDiv.append(divComment)
                            }
                            btn.disabled = true
                        }
                    })

            }
            postDiv.append(btn)
            wraper.append(postDiv)
            document.body.append(wraper)
        }
    })
