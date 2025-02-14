# js进阶第二天作业

## 客观题

1.下面关于创建对象写法错误的是? (D)

 A： const obj = {}  利用字面量

 B： const obj = new Object({name: 'pink老师'})   利用对象构造函数

 C： function Person() {}  利用构造函数创建     const  obj = new Person()  

 D： const obj = new object()  创建了一个空对象

2.下面构造函数说法错误的是? (D)

 A： 构造函数是一种特殊的函数，主要用来初始化对象

 B： 构造函数我们约定命名以大写字母开头，并且需要new 关键字来实例化

 C： 构造函数内部无需写return，返回值即为新创建的对象

 D：构造函数只能使用一次

3.下面是 new 关键字实例化构造函数步骤的是? (ABCD)

 A： 创建新对象

 B： 构造函数this指向新对象

 C： 执行构造函数代码，修改this，添加新的属性

 D：返回新对象

4.下面关于静态成员和动态成员说法正确的是? (ABCD)

 A： 通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员

 B： 构造函数创建的实例对象彼此独立互不影响

 C： 构造函数的属性和方法被称为静态成员

 D：一般公共特征的属性或方法静态成员设置为静态成员

5.下面关于对象常见方法说法错误的是? (D)

 A： Object.keys 静态方法获取对象中所有属性（键） 

 B： Object.values 静态方法获取对象中所有属性值

 C： Object.assign  静态方法常用于对象拷贝

 D： Object.keys 和  Object.values  都会返回一个对象

5.下面关于数组常见方法说法错误的是? (C)

 A： map  迭代数组 经常用于处理数据，返回一个新的数组

 B： reduce 累计器， 经常用于数组求和之类的类计操作

 C： every   检查是否有元素符合指定查找条件，有元素就返回 true

 D： find  查找元素， 返回符合条件的第一个数组元素， 如果找不到就返回 undefined

6.下面关于字符串常见方法说法正确的是? (ABCD)

 A： split 方法可以将字符串拆分成数组

 B： substring 用于字符串截取

 C： startWith 检测是否以某字符开头

 D： includes 判断一个字符串是否包含在另外一个字符串里面，根据情况返回true或者 false



## 主观题

### 英雄列表案例改进

**需求：**

在数据中的id，都是唯一的，删除数据最好的方式是根据id来删除，因此请把昨天的作业，删除数据修改为根据id删除

~~~javascript
const list = [
  { id: 1, name: "大乔", gender: "男", age: 18 },
  { id: 2, name: "小乔", gender: "女", age: 20 },
  { id: 3, name: "鲁班", gender: "男", age: 48 },
  { id: 4, name: "后羿", gender: "女", age: 28 },
  { id: 8, name: "廉颇", gender: "男", age: 28 },
]
~~~

分析：

1. 渲染页面的时候，序号根据数据 id来渲染， 同时 删除按钮给的 data-index  也设置为数据 id 
2. 删除时候，要根据 删除按钮的  id 来找 寻找 数组中的对应对象。 关键点是利用findIndex 返回对象对应的索引号
3. 根据 findIndex 返回的索引号删除数据，然后重新渲染页面

效果如下：

![67837779484](02_work_assets/1678377794843.png)

### 购物车案例

<img src="./02_work_assets/11.gif">

**需求：**

1. 全选反选功能
2. 购买的个数可以点击新增和点击减少功能
3. 删除功能
4. 计算总额和总数量功能（注意只有勾选了复选框的商品，才计算总价和数量）

渲染函数 {
遍历数组 使用map+join正常渲染

如果小按钮都选上了 那么大按钮也选上

使用filter过滤出isChecked为true的数组 并对这些数组进行操作

我称之为状态数组

对这个状态数组进行reduce求出总价和总数

如果数组长度为0 把empty的设置为显示 否则设置为隐藏
}

tbody的ad事件

1. 删除业务
获取从删除按钮到外层自定义属性 并包装成id

如果点击的是删除按钮

数组.splice(id, 1)

渲染函数

2. 更新数组中isChecked的状态

如果勾选了复选框 那么将当前勾选的复选框设为checked 

并赋值给数组中对应id的isChecked 从而更新newArr的状态

3. 点击的是加号

把从当前加号位置到 外层自定义的id属性 包装成idNum

将数组中对应的num++

渲染函数

4. 点击的是减号

把从当前减号位置到 外层自定义的id属性 包装成idNum

将数组中对应的num--

渲染函数








