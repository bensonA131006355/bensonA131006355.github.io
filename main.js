var links = ["http://static4.businessinsider.com/image/5522c5e769bedde427f90bb4/the-25-mlb-players-who-have-the-greatest-value-to-their-teams.jpg" ,
             "http://4.bp.blogspot.com/-0ZjQhOy3lsY/Ve-qSugi-SI/AAAAAAAAAlA/RbB8jI9UNMY/s1600/alex-rodriguez-timeline-a-rod-162-game-ban-arbitator.jpg",
             "https://www.cheatsheet.com/wp-content/uploads/2016/05/BryceHarperWashingtonNationalsvKansassz3SDeqpMRwl.jpg",
             "http://www.yardbarker.com/media/b/2/b2a9a16574c8019150aed5215265345084c1db05/xl/Machado171977850.jpg",
             
"http://www.licey.com/wp-content/uploads/2015/08/Joseeee.jpg"
];
var titles = ["MIKE TROUT", "ALEX RODRIGUEZ", "GRACE HOPPER", "MANNY MACHADO", "José BAUTISTA"]
var index = 0;  
var autoplay = false;
function prePic() {
  var img = document.getElementById("pic");
  if(index <= 0){
    index = 5
  }
  index--;
  img.src = links[index % links.length];
  var title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
}
function nextPic() {
  var img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
  var title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  if (autoplay) {
  setTimeout(nextPic,4000);
  }
}
if (autoplay) {
  setTimeout(nextPic,4000);
  }
