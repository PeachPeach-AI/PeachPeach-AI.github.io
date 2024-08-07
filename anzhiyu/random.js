var posts=["2024/07/16/TEST/","2024/07/16/hello-world/","2024/07/27/test2/","2024/07/16/7步搞定，高转化！促销商品主图工单模板详解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };