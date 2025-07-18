console.log("Welcome To Pony Tribe");

// Initialize the Variables
let songIndex = 0;
// *** 修正1. 初始載入第一首歌的路徑 ***
let songs = [
  {
    songName: "大會舞1",
    filePath: "songs/豐年祭/大會舞/大會舞1.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞2",
    filePath: "songs/豐年祭/大會舞/大會舞2.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞3",
    filePath: "songs/豐年祭/大會舞/大會舞3.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞4",
    filePath: "songs/豐年祭/大會舞/大會舞4.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞5",
    filePath: "songs/豐年祭/大會舞/大會舞5.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞6",
    filePath: "songs/豐年祭/大會舞/大會舞6.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞7",
    filePath: "songs/豐年祭/大會舞/大會舞7.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞8",
    filePath: "songs/豐年祭/大會舞/大會舞8.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞9",
    filePath: "songs/豐年祭/大會舞/大會舞9.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞10",
    filePath: "songs/豐年祭/大會舞/大會舞10.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞11",
    filePath: "songs/豐年祭/大會舞/大會舞11.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞12",
    filePath: "songs/豐年祭/大會舞/大會舞12.wav",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "大會舞13",
    filePath: "songs/豐年祭/大會舞/大會舞13.wav",
    coverPath: "covers/1.jpg",
  },
];

let audioElement = new Audio(songs[songIndex].filePath); // 初始載入第一首歌

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      // *** 修正2. 點擊個別歌曲播放時的路徑引用 ***
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  // *** 修正3. next 按鈕的索引判斷和路徑引用 ***
  if (songIndex >= songs.length - 1) {
    // 當前索引如果已經是最後一首歌的索引，就回到第一首 (索引 0)
    songIndex = 0;
  } else {
    songIndex += 1; // 否則就播放下一首
  }
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  // *** 修正4. previous 按鈕的索引判斷和路徑引用 ***
  if (songIndex <= 0) {
    // 當前索引如果是第一首 (索引 0)
    songIndex = 0; // 停留在第一首 (如果您希望循環到最後一首，可以改為: songIndex = songs.length - 1;)
  } else {
    songIndex -= 1; // 否則就播放上一首
  }
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
