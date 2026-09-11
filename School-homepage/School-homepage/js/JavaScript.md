JSで勉強になったこと。
〇document系
・document.xxxx
→基本的な使い方はプロパティやメソッドを通じて要素にアクセスします。
 document.headやdocument.bodyでページ構造の主要部分を取得できます。
 例：
 console.log(document.head) //<head>要素にアクセスする。
 console.log(document.body) //<body>要素時アクセスする。

・document.getElementById
→任意のHTMLタグで指定したIDにマッチするドキュメント要素を取得するメソッドです。
例：
<html>
 <body>
  <!-- pタグでHello worldを表示-->
  <p id="myid">Hello world!</p>
  <!-- jsでid=myidを取得して、コンソールに表示-->
  <script>
   console.log(document.getElementById("myid").textContent);
  </script>

 </body>
</html>



 〇定義
 ・const
 →再代入できない定数。
 例：
 →JavaScript
const TAX_RATE = 0.08;
TAX_RATE = 0.1; // エラー: 再代入は許可されていません

 ・fuction(関数)
 →入ってきた値に対して決められた処理をする。
 例：
→Javascript
 function greet(name) {
console.log(`こんにちは、${name}さん！`);
}
greet("太郎"); // 出力: こんにちは、太郎さん！

・XXXX.src(imgタグ)
→"XXXX.src" = と定義するとimageタグのsrcの要素が代入できる。
→例：
→HTML
<html>
    <img id="slide" src=imgae/school.jpg>
</html>
→JavaScript
const slide = document.getElementById("slide");
slide.src = "image/school.jpg";

・let
→宣言されたブロック{}の中だけ使える。
→Javascript
{
    let X = 10;
}

{
    X = 15;//←これは無理。
}
・var
→宣言されたブロック{}の外でも使える。
→Javascript
{
    let X = 10;
}

{
    X = 15;//←Xの値が15に変更される。
}


〇関数とは
・コールバック関数
→他の関数に引数として渡されて、その関数内で実行される関数のことを指す。
→例：
→JavaScript
setInterval(() => {

currentIndex++;

if (currentIndex >= images.length) {
currentIndex = 0;
}

showImage();

}, 3000);


・アロー型関数
→【通常のアロー型関数】
→JavaScript
let getTriangle = (base, height) => {
    return base * height / 2;
};
console.log(getTriangle(10,2));//出力:10

・setInterval()とは
→指定した間隔で関数を繰り返す実行するための関数です。
→setInterval(繰り返し実行したい関数, 関数を実行する間隔);
→例：
→JavaScript
//setIntervalの引数にあるコールバック関数により、関数が呼び出される。
setInterval(() => {
//currentIndexが1足される
currentIndex++;
//currentIndexが配列imagesの要素数以上になったら先頭に戻る
if (currentIndex >= images.length) {
currentIndex = 0;
}
//画像を表示させる
showImage();
//3秒間隔で自動でコールバック関数が表示される。
}, 3000);
