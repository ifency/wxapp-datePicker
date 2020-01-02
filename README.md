# 小程序 - 日期时间选择器
含有今天，明天，后天的关键词，wepy，Taro，wepy或者原生都可引用

![日期时间选择器demo](/docs/ckgfo-1sgha.gif)

### 使用的方法：
* 先引用js文件：

    * 第一种：
        * 复制utils文件夹下的datePicker.js所有代码，粘贴到自己的文件里
    * 第二种：
        * git clone https://github.com/FernwehNancy/wxapp-datePicker.git
        * 把datePicker.js文件复制到自己的项目里

* wxml文件插入picker多列选择器
```
<view class="section">
  <picker mode="multiSelector" range="{{dateArray}}" value="{{dateIndex}}" bindchange="datePickerChange">
  <view class="section-val">{{dateVal}}</view>
  </picker>
</view>
```

* 然后在js文件上引入日期选择的文件里实例化对象，如下
```
//引入datePicker的实例对象
import { DatePicker } from '../utils/datePicker2';

//实例化对象
const datePicker = new DatePicker();
//制造日期的数组数据
const dateArr = datePicker.datePicker();
```

* 赋值给业务上的数据

