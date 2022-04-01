let wraperDiv=document.createElement('div')
wraperDiv.classList.add('wraper')
document.body.appendChild(wraperDiv)
fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            for (const user of users) {
           let userDiv=document.createElement('div')
                userDiv.classList.add('user')
                let anchor=document.createElement('a')
                anchor.innerText=`ID:${user.id}-Name:${user.name}`
                anchor.href=`./user-details.html?data=${JSON.stringify(user)}`
                userDiv.appendChild(anchor)
                wraperDiv.appendChild(userDiv)
            }
        });