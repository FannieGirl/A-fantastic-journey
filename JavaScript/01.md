Set 和 Map 数据结构

Set 本身是一个构造函数，用来生成 Set 数据结构。
```
const s = newSet();
[2,3,4,3,3,4,5].forEach(x=> s.add(x));
for(let i of s){
  console.log(i);
}

```
上面代码通过add方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。

```
const set = new Set([1,2,3,4,3,3]);
[...set]
```
Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化

```
const items = new Set([1,2,3,4,5,5,5,5]);
items.size
```
```
const set = new Set(document.querySelectorAll('div'));
set.size // 56
```
```
const set = new Set();
document.querySelectorAll('div').forEach(div=>set.add(x));
set.size
```

去除数组的重复成员
```
[... new Set([1,2,3,3])]
```
向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。

