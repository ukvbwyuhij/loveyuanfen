  var firebaseConfig = {
      apiKey: "AIzaSyDx6nPiafuTixixWgXyNN8Uu5mffuMLOwE",
      authDomain: "confessionwall-a2b19.firebaseapp.com",
      databaseURL: "https://yuanfen-3cd80-default-rtdb.firebaseio.com/",
      projectId: "confessionwall-a2b19",
      storageBucket: "confessionwall-a2b19.appspot.com",
      messagingSenderId: "382792753188",
      appId: "1:382792753188:web:3a422f7f36cd80a6e578b1",
      measurementId: "G-Z9XXWFW7SM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  



function submit(){
  let name1=document.getElementById('name1').value
  let name2 = document.getElementById('name2').value

  i = 0
  sum1 = 0
  while(i < name1.length){
    sum1+=name1.charCodeAt(i)
    i++
  }

  j= 0
  sum2 = 0
  while(j < name2.length){
    sum2+=name2.charCodeAt(j)
    j++
  }
  resultNumber = Math.abs(sum1-sum2)%9
  console.log(resultNumber)



  if (resultNumber == 0){
    document.getElementById('result').innerHTML = "你们其中一个对另一个有感情，但是另一个完全没感觉或根本不之情，最后都成为了别人的伴侣，你们之间的记忆随风消散"
  }
  if (resultNumber == 1){
    document.getElementById('result').innerHTML = "你认识他，但他不认识你，你不是很敢接近他，只是把对他的喜欢深深埋入心中"
  }
  if (resultNumber == 2){
    document.getElementById('result').innerHTML = "你们曾经有过一段点头之交，你们可能一起出去玩过一两次，但是缘分很浅"
  }
  if (resultNumber == 3){
    document.getElementById('result').innerHTML = "你们是互相的朋友，社交软件上可能聊过几次天，可能坐在一起吃午饭或者是同桌，但你们的缘分较浅，随着毕业或者工作的变迁，就慢慢不联系了"
  }
  if (resultNumber == 4){
    document.getElementById('result').innerHTML = "你们之间曾经有过或者会有一段很不错的友情，但她看上去对和你更近一步并不感兴趣，你们最终有缘无份"
  }
  if (resultNumber == 5){
        document.getElementById('result').innerHTML = "你们之间的关系曾经如胶似漆，你们或许甚至成为了男女朋友，"
  }

  if (resultNumber == 6){
    document.getElementById('result').innerHTML = "你们成为了或几乎成为了男女朋友，你们互相相爱，互相喜欢，但是短则一年，长则三年，或者因为异地，你们的感情殆尽，就分头而去了"
  }

  if (resultNumber == 7){
    document.getElementById('result').innerHTML = "你们是板上钉钉的男女朋友，别人眼里的恩爱对子，你们可能有机会结婚，但结婚了大概率的结果是离婚，或者貌合神离434"
  }
    if (resultNumber == 8){
    document.getElementById('result').innerHTML = "你们会相爱一辈子互相不离弃，但最终百年之后，两人也都会死去"
  }
  if (resultNumber == 9){
    document.getElementById('result').innerHTML = "你们是神仙眷侣，化不可能为可能，我不知道你是怎么做到的，但是你们不会死并且永远会在一起"
  }

    firebase.database().ref(new Date().getTime()).set({
      name1: name1,
      name2: name2 

    })


}
    
