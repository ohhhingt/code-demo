# Web APIs 第一天作业安排

## 练习答案写在 heima文件夹中

## 客观题

1. 下列选项中关于 document对象说法错误的是？(D)

   A. 是 DOM 里提供的一个对象，是DOM顶级对象

   B. document是个对象，所以里面有很多属性和方法，比如 document.write()

   C. document 作为网页内容的入口

   D. document  实际开发中不太常用

2. 如果我想获取第一个类名为box的元素，该使用哪一个方法？(C)

   A. document.querySelector('box')

   B. document.querySelectorAll('box')

   C. document.querySelector('.box')

   D. document.querySelectorAll('.box')

3. 如果我想获取所有类名为box的元素，该使用哪一个方法？(D)

   A. document.querySelector('box')

   B. document.querySelectorAll('box')

   C. document.querySelector('.box')

   D. document.querySelectorAll('.box')

4. 假设页面有两个类名为box的元素，以下哪一个语法会报错？(AC)

   A. document.querySelector('box').style.backgroundColor = 'red'

   B. document.querySelector('.box').style.backgroundColor = 'red'

   C. document.querySelectorAll('.box').style.backgroundColor = 'red'

   D. document.querySelectorAll('.box')[0].style.backgroundColor = 'red'

5. 关于innerText与innerHTML的区别，下列说法错误的是? (D)

   A.  innerText 只能获取元素文本，无法获取标签

   B.  innerHTML可以获取文本 + 标签

   C.  innerText 赋值时无法解析标签

   D.  innerText与innerHTML在设置的时候，作用一致。都可以解析文本中的标签样式

6. 关于元素HTML常用属性操作，下列说法错误的是? (D)

   A.  元素HTML属性指的是HTML标签本身的属性，比如 title ， alt等等

   B.  修改img标签的图片语法是:   元素.src = '图片路径'

   C.  修改a标签的链接语法是:   元素.href = '链接'

   D.  获取元素的类名语法是： 元素.class

7. 关于操作元素css属性操作，下列说法错误的是？（B）

   A.  我们可以通过style属性来修改常见样式

   B.  我们可以通过className修改类名时候，其实是追加类名，不影响以前类名

   C.  我们可以使用classList 来增加删除类名， 比如 元素.classList.add()等等

   D.  classList的优点是可以不影响原先类名，可以添加类、删除类和切换类

8. 下列设置元素css样式语法，哪些是错误的? (CDE)

   A.  元素.style.backgroundColor = 'red'

   B.  元素.style.backgroundColor = 'rgb(255,0,0)'

   C.  元素.style.background-color = 'red'

   D.  元素.style.width = 100

   E.   元素.style.src = './1.jpg'

9. 关于classList语法，下列说法正确的是(ABCDE)

   A.  classList的作用是操作元素的类名，包含新增、移除、切换类名等操作

   B.  新增类名：  元素.classList.add('类名')

   C.  移除类名：   元素.classList.remove('类名')

   D.  切换类名：  元素.classList.toggle('类名')

   E.    classList 相比较 className的优点是可以不影响原先类名

10. 关于表单属性语法，下列说法错误的是（A）

    A.  通过元素.innerText 属性也可以用于设置文本框的值

    B.  想要得到文本框的值是通过  文本框元素.value 获取

    C.  设置按钮禁用状态的语法是：  元素.style.disabled= true

    D.  设置表单选中状态的语法是：  元素.checked = true

11. 关于自定义属性说法错误的是？(D)

    A.  在html5中通过专门的 data- 实现自定义属性  

    B. 在标签上一律以data-开头， 比如 <标签 data-id='10'> 内容 </标签>

    C.  想要使用自定义属性的值可以通过  元素.dataset 得到 比如 元素.dataset.id 

    D.  其中dataset返回的是一个函数，可以调用函数得到里面的值

12. 关于间隔函数说法错误的是?(D)

    A.  间隔函数返回的值是数字型，而且间隔函数可以停止和开启，我们应该使用 let 声明

    B. 语法: setInterval(函数, 间隔时间)，其中间隔时间的单位是 ms 毫秒

    C.  间隔函数可以根据时间自动重复执行某些代码

    D.  停止间隔函数的语法:  clearInterval(函数, 间隔时间)

## 主观题

### 作业1：旋转的时钟

 <img src="./01_work_assets/222.gif">

重点练习操作样式属性，通过 transform: rotate(360deg) 实现

#### 流程
获取秒针

定义du变量

创建一个间隔函数(间隔一秒)

du变量自动迭代 6 (每个一秒加6)

当du大于360的时候 将du设置为0

设置秒针的transform = `rotate(${du}deg)` 旋转度数

### 作业2：自动播放轮播图

 <img src="./01_work_assets/111.gif">

#### 流程
获取图片 和 标题

设置一个i变量

设置一个间隔函数(每隔一秒执行一次)

用三元表达式 限制 i的长度只能小于数组的长度 一旦大于就会被重新设置为0 
没大于的时候 使用本身

根据i获取数组中的图片 和 标题 然后赋值给dom

## 排错题

### 排错题1

~~~html
<div class="box">1-同为寒窗苦读，谁愿甘拜下风</div>
<div class="box">2-临渊羡鱼,不如退而结网</div>

<script>
  /* 本案例需求: 给第2个box的字体颜色设置为红色
     (1)请找出下列代码产生的bug
     如何找出来的?
     原因分析:
     (2)如果想要实现正确的需求,应该如何实现
  */
  //1.
  const box = document.querySelectorAll('.box')
  //2.
  box[1].color = 'red'
</script>

~~~

### 排错题2

~~~html
<body>

  账号：<input type="text" placeholder="请输入用户名" value="admin">
  <br>
  密码：<input type="text" placeholder="请输入密码" value="123456">
  <br>
  <script>
    /* 本案例需求:  获取账号和密码,控制台打印一个对象。对象属性分别是用户名和密码
        (1)请找出下列代码产生的bug
            如何找出来的?
            原因分析:
        (2)如果想要实现正确的需求,应该如何实现
    */
    const username = document.querySelector('input')[0]
    const password = document.querySelector('input')[1]
    const user = {
      username: username,
      password: password
    }
    console.log(user)
  </script>
</body>
~~~

### 排错题3

~~~html
<body>
  <script>
    /*
      本案例需求:  开启定时器，每隔1s输出 hello 
      (1)请找出下列代码产生的bug
          如何找出来的?
          原因分析:
      (2)如果想要实现正确的需求,应该如何实现
    */
    function fn() {
      console.log('hello')
    }

    setInterval(fn(), 1000)
  </script>
</body>
~~~

### 排错题4

~~~html
<body>
  <script>
    /*
      本案例需求:  清除定时器
      (1)请找出下列代码产生的bug
          如何找出来的?
          原因分析:
      (2)如果想要实现正确的需求,应该如何实现
    */
    setInterval(function () {
      console.log('hello')
    }, 1000)

    clearInterval(id)
  </script>
</body>

~~~

### 排错题5

~~~html
<body>
  <div dataId="1">我要增加一个自定义属性</div>
  <script>
    /*
       本案例需求:  div上面自定义一个id属性赋值为1，要求输出这个值
      (1)请找出下列代码产生的bug
          如何找出来的?
          原因分析:
      (2)如果想要实现正确的需求,应该如何实现
    */
    const div = document.querySelector('div')
    console.log(div.id)  // 要求输出 1
  </script>
</body>

~~~

### 排错题6

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .red {
      color: #f00;
      font-size: 15px;
    }
  </style>
</head>

<body>
  <div class="box">我要添加类设置样式</div>
  <script>
    /*
       本案例需求:  给box盒子添加red类 (高频错误题)
      (1)请找出下列代码产生的bug
          如何找出来的?
          原因分析:
      (2)如果想要实现正确的需求,应该如何实现
    */
    const box = document.querySelector('box')
    box.classList.add('.red')
  </script>
</body>

</html>
~~~









