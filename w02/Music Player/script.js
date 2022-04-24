let track_image = document.querySelector('#track_image')
let present = document.querySelector('#present')
let total = document.querySelector('#total')
let title = document.querySelector('#title')
let artist = document.querySelector("#artist")
let pre = document.querySelector('#pre')
let play = document.querySelector('#play')
let next = document.querySelector('#next')
let auto = document.querySelector('#auto')
let duration_slider = document.querySelector('#duration_slider')
let volume_show = document.querySelector('#volume_show')

//預設為第一首歌,0代表是陣列第一個
let indexNumber = 0

//預設歌曲不撥放
let playingSong = false

//產生一個新的 audio HTML 標籤
let track = document.createElement('audio')

//產生一個陣列來放所有的歌
let allsong = [
    {
        name: '夜曲',
        src: 'music/nocturne.mp3',
        img: 'img/nocturne.jpeg',
        artist: '周杰倫'
    },
    {
        name: '挪威的森林',
        src: 'music/norwegian_forest.mp3',
        img: 'img/norwegian_forest.jpeg',
        artist: '伍佰'
    },
]

//寫一個方法來將陣列的資料轉換給 HTML 使用
function loadTrack(indexNumber) {
    track.src = allsong[indexNumber].src
    title.innerHTML = allsong[indexNumber].name
    track_image.src = allsong[indexNumber].img
    artist.innerHTML = allsong[indexNumber].artist
    total.innerHTML = allsong.length
    present.innerHTML = indexNumber + 1 //陣列第一項為0,因此需 +1
}

loadTrack(indexNumber)

function palySong() {
    track.play()
    playingSong = true
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true">'
}

function pauseSong() {
    track.pause()
    playingSong = false
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true">'
}

function justPlay() {
    if(playingSong==false){
        palySong()
    } else{
        pauseSong()

    }
}