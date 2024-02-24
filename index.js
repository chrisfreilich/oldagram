const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        id: 1
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        id: 2
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        id:3
    }
]

// Add all the posts to the DOM
const mainEl = document.getElementById('postings')

for (const post of posts) {

    // Wrapping posting element
    let postingEl = document.createElement('div')
    postingEl.className = "posting"

    // Posting header
    let postingHeaderEl = document.createElement('div')
    postingHeaderEl.className = "posting-header"
    
    // Avatar
    let avatarEl = document.createElement('img')
    avatarEl.className = 'avatar'
    avatarEl.src = post.avatar
    postingHeaderEl.appendChild(avatarEl)

    // Header info
    let postingHeaderInfoEl = document.createElement('div')
    postingHeaderInfoEl.className = 'posting-header-info'

    // Posting user
    let postingUserEl = document.createElement('h1')
    postingUserEl.textContent = post.name
    postingHeaderInfoEl.appendChild(postingUserEl)

    // Posting city
    let postingCityEl = document.createElement('h2')
    postingCityEl.textContent = post.location
    postingHeaderInfoEl.appendChild(postingCityEl)

    // Header complete
    postingHeaderEl.appendChild(postingHeaderInfoEl)
    postingEl.appendChild(postingHeaderEl)

    // main image
    let mainImageEl = document.createElement('img')
    mainImageEl.src = post.post
    mainImageEl.className = "posting-img"
    postingEl.appendChild(mainImageEl)

    // Footer Start
    let postingFooterEl = document.createElement('div')
    postingFooterEl.className = "posting-footer"

    // Footer icons
    let postingFooterIconsEl = document.createElement('div')
    postingFooterIconsEl.className = "posting-footer-icons"

    let iconHeartEl = document.createElement('img')
    iconHeartEl.src = "images/icon-heart.png"
    iconHeartEl.className = "like-icon"
    postingFooterIconsEl.appendChild(iconHeartEl)

    let iconCommentEl = document.createElement('img')
    iconCommentEl.src = "images/icon-comment.png"
    postingFooterIconsEl.appendChild(iconCommentEl)

    let iconDMEl = document.createElement('img')
    iconDMEl.src = "images/icon-dm.png"
    postingFooterIconsEl.appendChild(iconDMEl)

    postingFooterEl.appendChild(postingFooterIconsEl)

    let likesEl = document.createElement('p')
    likesEl.className = "likes"
    likesEl.innerHTML = `<span class="like-count">${post.likes}</span> likes</p>`
    postingFooterEl.appendChild(likesEl)

    let commentEl = document.createElement('p')
    commentEl.className = "comment"
    commentEl.innerHTML = `<span class="username">${post.username}</span> ${post.comment}</p>`
    postingFooterEl.appendChild(commentEl)

    // Footer complete
    postingEl.appendChild(postingFooterEl)

    // Listen for clicks on like icon
    postingFooterEl.addEventListener('click', function(event) {
        if (event.target.classList.contains('like-icon')) {
            let updateEl = this.querySelector('.like-count')
            updateEl.textContent = Number(updateEl.textContent) + 1
        }
    })

    // Listen for double-clicks on image
    postingEl.addEventListener('dblclick', function(event) {
        if (event.target.classList.contains('posting-img')) {
            let updateEl = this.querySelector('.like-count')
            updateEl.textContent = Number(updateEl.textContent) + 1
        }
    })

    // Posting complete
    mainEl.appendChild(postingEl)
}



