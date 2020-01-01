import { DatePicker } from '../utils/datePicker';

const datePicker = new DatePicker();
const dateArr = datePicker.datePicker();

Page({
  data: {
    dateArray: null,//picker-rang的值
    dateIndex:null,//picker-value的值
    dateVal:null,//显示的时间
  },

  //加载时获取日期的组件
  onLoad(){
    this.set_date();
  },

  //监听点击日期组件的事件变化
  datePickerChange(e){
    let dateIndex=e.detail.value;
    this.setData({
      dateIndex,
      dateVal: datePicker.toDate(dateArr.dateAll,dateIndex),
    })
  },

  //赋值
  set_date(){
    
    this.setData({
      dateArray: dateArr.dateAll,
      dateIndex: dateArr.currentDateArr,
      dateVal: datePicker.toDate(dateArr.dateAll,dateArr.currentDateArr)
    })
    
  },
})