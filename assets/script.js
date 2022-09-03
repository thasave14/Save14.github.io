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

function logoClick() {
    location.href = "index.html";
}
function aboutmeClick() {
    location.href = "aboutme.html";
}
function openSocialsPage() {
    location.href = "socials.html";
}