var posts=["2024/08/13/page/","2022/08/16/7步搞定，高转化！促销商品主图工单模板详解 - 副本/","2024/07/16/7步搞定，高转化！促销商品主图工单模板详解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };