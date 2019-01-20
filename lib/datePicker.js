/*
* @Author: FernwehNancy
* @Date:   2019-01-05 11:56:00
* @Last Modified by:   Fernweh
* @Last Modified time: 2019-01-20 11:20:43
*/

const date = new Date(); //获取日期的对象；
const year = date.getFullYear(); //获取当前年份；
const month = date.getMonth() + 1; //获取当前月份，因为月份是从0开始的，所以要加1；
const day = date.getDate(); //获取当前几号
const weekDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']; //星期的格式

/*
* 当小于10，则前面填充0，比如‘1’p成‘01’
*/
function withData(param) {

  return param < 10 ? '0' + param : ''+param;

}

/*
* 日期的数组
*/
function getMonth(start, end) {

  let array = [];

  let weekIndex = null;

  for (let i = start; i <= end; i++) {

    let dayT = getMonthDay(i);

    for (let j = 1; j <= dayT; j++) {

      weekIndex = new Date(`${year}-${i}-${j}`).getDay();

      if (i === month && j === day) {

        array.push('今天 ' + weekDay[weekIndex]);

      } else if (i === month && j === day + 1) {

        array.push('明天 ' + weekDay[weekIndex]);

      } else if (i === month && j === day + 2) {

        array.push('后天 ' + weekDay[weekIndex]);

      } else {

        array.push(withData(i) + '月' + withData(j) + '日 ' + weekDay[weekIndex]);

      }

    }

  }
  return array;

}


function getLoopArray(start, end) {
  var start = start || 0;

  var end = end || 1;

  var array = [];


  for (var i = start; i <= end; i++) {

    array.push(withData(i));

  }

  return array;
}

function getMonthDay(month) {

  var flag = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0), array = null;



  switch (month) {

    case 1:

    case 3:

    case 5:

    case 7:

    case 8:

    case 10:

    case 12:

      array = 31

      break;

    case 4:

    case 6:

    case 9:

    case 11:

      array = 30

      break;

    case 2:

      array = flag ? 29 : 28

      break;

    default:

      array = '月份格式不正确，请重新输入！'

  }

  return array;

}

function getNewDateArry() {

  // 当前时间的处理

  let newDate = new Date();

  // let newMonth = withData(newDate.getMonth() + 1),

    // newDate2 = withData(newDate.getDate()),

  let newDay = weekDay[newDate.getDay()],

    newHour = withData(newDate.getHours()),

    newMinu = withData(newDate.getMinutes()),

    newSeco = withData(newDate.getSeconds());

  return ['今天 ' + newDay, newHour, newMinu, newSeco];

}



function dateTimePicker() {

  // 返回默认显示的数组和联动数组的声明

  var dateTime = [], dateTimeArray = [[], [], [], []];

  // 默认开始显示数据

  var defaultDate = getNewDateArry();
  
  // 处理联动列表数据

  /*月日 时分秒*/

  let tempDate = new Date();

  dateTimeArray[0] = getMonth(1, 12);

  dateTimeArray[1] = getLoopArray(0, 23);

  dateTimeArray[2] = getLoopArray(0, 59);

  dateTimeArray[3] = getLoopArray(0, 59);


  dateTimeArray.forEach((current, index) => {
    //console.log(current+'-'+index);

    dateTime.push(current.indexOf(defaultDate[index]));

  });



  return {

    dateTimeArray: dateTimeArray,

    dateTime: dateTime

  }

}

module.exports = {

  date,

  year,

  month,

  day,

  dateTimePicker,

  withData,

}