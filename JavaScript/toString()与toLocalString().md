## Javascript toString()、toLocaleString()、valueOf()三个方法的区别
Array、Boolean、Date、Number等对象都具有toString()、toLocaleString()、valueOf()三个方法，那这三个方法有什么区别？？？

## 一、JS Array
例子：
  var array = new Array("niu","li","na");
  console.log(array.valueOf());
  console.log(array.toString());
  console.log(array.toLocaleString());
结果：

  valueOf：返回数组本身

  toString()：把数组转换为字符串，并返回结果，每一项以逗号分割。

  toLocalString()：把数组转换为本地数组，并返回结果。

## 二、JS Boolean
例子：
  var boolean = new Boolean();
  console.log(boolean.valueOf());
  console.log(boolean.toString());
结果：

　　

valueOf：返回 Boolean 对象的原始值。

toString()：根据原始布尔值或者 booleanObject 对象的值返回字符串 "true" 或 "false"。默认为"false"。

toLocalString()：Boolean对象没有toLocalString()方法。但是在Boolean对象上使用这个方法也不会报错。

## 三、JS Date
例子：
  var date = new Date();
  console.log(date.valueOf());
  console.log(date.toString());
  console.log(date.toLocaleString());
结果：

valueOf：返回 Date 对象的原始值，以毫秒表示。

toString()：把 Date 对象转换为字符串，并返回结果。使用本地时间表示。

toLocalString()：可根据本地时间把 Date 对象转换为字符串，并返回结果，返回的字符串根据本地规则格式化。

## 四、JS Math
例子：
console.log(Math.PI.valueOf());
结果：
  valueOf：返回 Math 对象的原始值。 
## 五、JS Number

例子：
  var num = new Number(1337);
  console.log(num.valueOf());
  console.log(num.toString());
  console.log(num.toLocaleString());
结果：

valueOf：返回一个 Number 对象的基本数字值。

toString()：把数字转换为字符串，使用指定的基数。

toLocalString()：把数字转换为字符串，使用本地数字格式顺序。

## 六、JS String
例子：　
  var string = new String("abc");
  console.log(string.valueOf());
  console.log(string.toString());
　　结果：



valueOf：返回某个字符串对象的原始值。

toString()：返回字符串。　　

## 七、toString()方法与toLocalString()方法区别：
toLocalString()是调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。

toString()方法获取的是String(传统字符串),而toLocaleString()方法获取的是LocaleString(本地环境字符串)。

如果你开发的脚本在世界范围都有人使用，那么将对象转换成字符串时请使用toString()方法来完成。

LocaleString()会根据你机器的本地环境来返回字符串，它和toString()返回的值在不同的本地环境下使用的符号会有微妙的变化。

所以使用toString()是保险的，返回唯一值的方法,它不会因为本地环境的改变而发生变化。如果是为了返回时间类型的数据，推荐使用LocaleString()。若是在后台处理字符串，请务必使用toString()。
