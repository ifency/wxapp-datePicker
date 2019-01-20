const datePicker=require('../lib/datePicker');

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
    this.setData({
      dateIndex:e.detail.value,
    })
    this.set_newDateForm();
  },

  //赋值
  set_date(){
    let date=datePicker.dateTimePicker();
    date.dateTimeArray.pop();
    date.dateTime.pop();
    this.setData({
      dateArray: date.dateTimeArray,
      dateIndex: date.dateTime,
    })
    this.set_newDateForm();
  },

  //格式化现在的时间，比如今天改成xx月xx日
  set_newDateForm(){
    let tempDate=this.data.dateArray[0][this.data.dateIndex[0]];
    let month=datePicker.month;
    let day=datePicker.day;
    let time=this.data.dateArray[1][this.data.dateIndex[1]]+':'+this.data.dateArray[2][this.data.dateIndex[2]];
    if(tempDate.indexOf('今天')>-1){
      this.setData({
        dateVal: datePicker.withData(month) + '月' + datePicker.withData(day) + '日' + ' ' + time,
      })
    }else if(tempDate.indexOf('明天')>-1){
      this.setData({
        dateVal: datePicker.withData(month) + '月' + datePicker.withData((Number(day)+1)) + '日' + ' ' + time,
      })
    }else if(tempDate.indexOf('后天')>-1){
      this.setData({
        dateVal: datePicker.withData(month) + '月' + datePicker.withData((Number(day)+2)) + '日' + ' ' + time,
      })
    }else{
      this.setData({
        dateVal: tempDate + ' ' + time,
      })
    }
  }
})