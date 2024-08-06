var posts=["2024/07/16/TEST/","2024/07/16/hello-world/","2024/07/27/test2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };