# 小程序 - 日期时间选择器
含有今天，明天，后天的关键词，wepy，Taro，wepy或者原生都可引用

![日期时间选择器demo](/docs/IMB_1.GIF)

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

* 然后把dateArr传给range的值（dateArray);
```
this.setDate({
    dateArray: dateArr.dateAll,
})
```

* value这个值，如果不传的话，默认值就是当前时间
```
this.setDate({
    dateArray: dateArr.currentDateArr,
})
```

* 仅仅展示“今天 某某时间“，这倒可以的，但需要把这个时间传给接口时，这就需要转换为日期格式的，所以我这边还提供能转换日期格式的功能，使用如下：
```
//需要把range，当前选择的下标一起携带去
this.setData({
    dataVal: datePicker.toDate(dateArr.dateAll,dateArr.currentDateArr)
})
```

这样就可以了。

但如果只需要第一列只需要“今天，明天，后天”这三个的话，那实例化对象给个这三个的就可以了，如下：
```
const params={
    dateArr:['今天','明天','后天']
}
const datePicker = new DatePicker(params);
```
效果如下：
![日期时间选择器demo](/docs/IMB_2.GIF)

