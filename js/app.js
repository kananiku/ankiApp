$(function () {
  // 問題文と回答入力欄をdisplay,noneにする
  $('.quizBox').hide();
  $('.miss').hide();
  $('.miss2').hide();
  $('.hinto').hide();
  $('.tttt').hide();
  $('.spell').hide();
  $('.kotae').hide();
  $('.ankoku').hide();
  $('.result').hide();
  // 配列内の問題の番号を定義
  var questionnumber = 0;
  

  // 第１章の問題と回答
  var chapter1 = [
    ['リンゴ','apple'],
    ['バナナ','banana'],
    ['スイカ','watermelon'],
  ];

  var chapter2 = [
    ['apple','りんご'],
    ['banana','バナナ'],
    ['watermelon','スイカ'],
  ];

  var chapter13 = [
    
  ];

  var chapter14 = [
    
  ];

  var chapter5 = [
    
  ];

  var chapter6 = [
    
  ];

  var chapter7 = [
    
  ];

  var chapter8 = [
    
  ];

  var chapter9 = [
    
  ];

  var chapter10 = [
    
  ];

  var chapter11 = [
    
  ];

  var chapter12 = [
    
  ];

  var chapter13 = [
    
  ];

  var chapter14 = [
    
  ];

  var chapter15 = [
    
  ];

  var chapter16 = [
    
  ];


  var chapter17 = [
    
  ];

  var chapter18 = [
    ['「←→←→ba」と入力せよ',''],
  ]

  


  // 章がクリックされたときにクリックされた章の問題画面を表示する
  $('.ml').on('click', function () {
    $('.selectScreen').hide();
    // クリックされたときにクイズボックスを出現させる
    $('.quizBox').addClass("Screen").show();
    $('.a').change(function(){
      var text  = $(this).val();
      var hen = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){
                return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
                });
      $(this).val(hen);
      });
    // 自動フォーカス
    $('.a').focus();
    // クリックされた章が何番目か取得する
    var y = $('.ml').index(this);
    x = y + 1;

    for (i = 1; i <= 50; i++) {
      // どのchapterが選択されたか確認する
      if (x == i) {
        var selectedchapter = eval("chapter" + x);
        // そのchapterの一問目を出題する
        $('.q').text(selectedchapter[questionnumber][0]);
        // このchapterの問題数を取得する
        var qlength = selectedchapter.length;
      };
    };
    
    


    // 呪文によるヒントの出し方の表示
    var input = [];
    var rinput = [];
    konami = [37, 39, 37, 39, 66, 65];
    rkonami = [39, 37, 39, 37, 66, 65]
    $(window).keyup(function (e) {
      input.push(e.keyCode);
      if (input.toString().indexOf(konami) >= 0) {
        $(".audio").get(5).play();
        $('.spell').show();
        $('.ankoku').show();
        $('.a').val('');
        input = [];
      }
    });
    $(window).keyup(function (ek) {
      rinput.push(ek.keyCode);
      if (rinput.toString().indexOf(rkonami) >= 0) {
        $(".audio").get(5).play();
        $('.spell').hide();
        $('.ankoku').hide();
        rinput = [];
      }
    });

    var hoimi = 0;
    var zaraki = 0;
    var hinto = 0;
    var length = 0;
    var miss = 0;


    // 回答欄内でエンターキーが押されたら
    $('.a').keypress(function (e) {
      if (e.which == 13) {
        var inputvalue = $('.a').val();
        var answer = selectedchapter[questionnumber][1];
        $(".audio").get(0).play();

        setTimeout(function () {
          // 入力内容と答えがあってるかチェック
          if (inputvalue == answer) {
            // 正解
            $(".audio").get(6).play();
            questionnumber++;
            if (qlength == questionnumber) {
              setTimeout(function () {
                $('.audio').get(3).play();
                $('.result').show();
                $('.plength').text(length);
                $('.phinto').text(hinto);
                $('.pzaraki').text(zaraki);
                $('.phoimi').text(hoimi);
                $('.pmiss').text(miss);
                $('.qn').text(questionnumber);
                $('.rbtn').on('click',function(){
                  location.reload();
                });
                  
                }, 1000)
            }
            $('.q').text(selectedchapter[questionnumber][0]);
            $('.a').val("");
            $('.miss').hide();
            $('.miss2').hide();
            $('.hinto').hide();
            $('.tttt').hide();
          } else if (inputvalue == 'length') {
            length++;
            $('.hinto').show();
            $('.tttt').show();
            $('.tttt').text(answer.length);
            $('.a').val("");
          } else if (inputvalue == 'ヒント１') {
            hinto++;
            $('.hinto').show();
            $('.tttt').show();
            var str = answer;
            var result = str.substr(0, 1);
            $('.tttt').text(result);
            $('.a').val("");
          } else if (inputvalue == 'ヒント２') {
            hinto++;
            $('.hinto').show();
            $('.tttt').show();
            var str = answer;
            var result = str.substr(0, 2);
            $('.tttt').text(result);
            $('.a').val("");
          } else if (inputvalue == 'ヒント３') {
            hinto++;
            $('.hinto').show();
            $('.tttt').show();
            var str = answer;
            var result = str.substr(0, 3);
            $('.tttt').text(result);
            $('.a').val("");
          } else if (inputvalue == 'ヒント４') {
            hinto++;
            $('.hinto').show();
            $('.tttt').show();
            var str = answer;
            var result = str.substr(0, 4);
            $('.tttt').text(result);
            $('.a').val("");
          } else if (inputvalue == 'ヒント５') {
            hinto++;
            $('.hinto').show();
            $('.tttt').show();
            var str = answer;
            var result = str.substr(0, 5);
            $('.tttt').text(result);
            $('.a').val("");
          } else if (inputvalue == 'ヒント６') {
            hinto++;
            $('.hinto').show();
            $('.tttt').show();
            var str = answer;
            var result = str.substr(0, 6);
            $('.tttt').text(result);
            $('.a').val("");
          } else if (inputvalue == 'ヒント７') {
            hinto++;
            $('.hinto').show();
            $('.tttt').show();
            var str = answer;
            var result = str.substr(0, 7);
            $('.tttt').text(result);
            $('.a').val("");
          } else if (inputvalue == 'ヒント８') {
            hinto++;
            $('.hinto').show();
            $('.tttt').show();
            var str = answer;
            var result = str.substr(0, 8);
            $('.tttt').text(result);
            $('.a').val("");
          } else if (inputvalue == 'ヒント９') {
            hinto++;
            $('.hinto').show();
            $('.tttt').show();
            var str = answer;
            var result = str.substr(0, 9);
            $('.tttt').text(result);
            $('.a').val("");
          } else if (inputvalue == 'ヒント１０') {
            hinto++;
            $('.hinto').show();
            $('.tttt').show();
            var str = answer;
            var result = str.substr(0, 10);
            $('.tttt').text(result);
            $('.a').val("");
          } else if (inputvalue == "hoimi" || inputvalue == 'ホイミ' || inputvalue == 'ほいみ' || inputvalue == 'hoi') {
            hoimi++;
            $('.audio').get(8).play()
            $('.a').val(answer);
          } else if (inputvalue == 'zaraki' || inputvalue == 'ザラキ' || inputvalue == 'ざらき' || inputvalue == 'zar') {
            zaraki++;
            $(".audio").get(6).play();
            questionnumber++;
            if (qlength == questionnumber) {
              setTimeout(function () {
                $('.audio').get(3).play();
                $('.result').show();
                $('.plength').text(length);
                $('.phinto').text(hinto);
                $('.pzaraki').text(zaraki);
                $('.phoimi').text(hoimi);
                $('.pmiss').text(miss);
                $('.qn').text(questionnumber);
              }, 1000)
            }
            $('.q').text(selectedchapter[questionnumber][0]);
            $('.a').val("");
            $('.miss').hide();
            $('.miss2').hide();
            $('.hinto').hide();
            $('.tttt').hide();
          } else {
            // はずれ
            miss++;
            $('.miss2').hide();
            $(".audio").get(1).play();
            $('.a').val("");
            $('.miss').show().addClass('miss');
            setTimeout(function () {
              $('.miss2').show();
            }, 70);
            return false;
          };
        }, 1000);
      };
    });
  });
});