            var i = 0;
            var str = "Everyone's memory of the deep ocean, there is a collection of time, but the time abandoned island. Where there is no wind and rain, no bitterness, no harm, only cherish all the happiness and warmth.每个人的记忆海洋深处，都有一座收藏着时光，却被时光遗弃的孤岛。哪里没有风雨，没有苦涩，也没有伤害，只珍藏着所有的快乐和温暖。";
            window.onload = function typing(){
                var mydiv = document.getElementById("display");
                mydiv.innerHTML += str.charAt(i);
                var oBtn = document.getElementById('btn');
                i++;
                var id = setTimeout(typing,100);
                if(i==str.length){
                    clearTimeout(id);
                    mydiv.value ="";
                    mydiv.innerHTML +=""
                    //alert("程序执行完毕！");
                }   
            }
 