let followers = 0;

let likes = 0;

let shares = 0;

const updateCounts = () => {

    document.getElementById('followersCount').innerText = followers;

    document.getElementById('likesCount').innerText = likes;

    document.getElementById('sharesCount').innerText = shares;
};


const follow = () => {
    followers++;
    updateCounts();
};


const unfollow = () => {
    if (followers > 0) {
        followers--;
    }
    updateCounts();
};


const like = () => {
    likes++;
    updateCounts();
};



const dislike = () => {
    if (likes > 0) {
        likes--;
    }
    updateCounts();
};

const share = () => {
    shares++;
    updateCounts();
};



