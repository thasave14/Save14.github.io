const APIKey = 'AIzaSyCNpKkaMvhmfDGbmv0eCTGdgs5flXi7JQc';
const Userid = 'UCmEYlnVSrSYIf6SsWNgVSCg';

let getdata = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        document.getElementById('subscriberCount').innerHTML = "Unisciti alle " + data["items"][0].statistics.subscriberCount + " persone iscritte al canale";
        
    })
}
getdata();

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

function checkIfMobile() {
    if(deviceType == mobile) {
        location.href = "mobileindex.html";
    }
}

function logoClick() {
    location.href = "index.html";
}
function aboutmeClick() {
    location.href = "aboutme.html";
}
function openSocialsPage() {
    location.href = "socials.html";
}