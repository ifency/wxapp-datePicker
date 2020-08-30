const weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']; //一周的格式
const strArr = ['今天','明天','后天'];

export class DatePicker{
    constructor( obj ){
        this.date = new Date;
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.week = this.date.getDay();
        this.dateArr = obj ? obj.dateArr || [] : [];
        this.defaultTime = obj ? obj.defaultTime || [] : [];
    }
    /** 补零 */
    withZero( params ){
        return params < 10 ? '0' + params : ''+params;
    }

    /* 
     *月份的数组
     */
    getMonth( start, end ){
        let array = [];
        let weekIndex = -1;

        if ( this.dateArr.length>0 ){
            this.dateArr.forEach( (item,index)=>{
                array.push(`${item} ${weekArr[this.week+index>6 ? this.week+index-7 : this.week+index]}`)
            })
            return array;
        } 
        
        for(let i = start; i <= end; i++){

            const days = this.getMonthDay(i);

            for(let j = 1; j <= days; j++){
                console.log('j:'+j);
                weekIndex = new Date(`${this.year}-${this.withZero(i)}-${this.withZero(j)}`).getDay();

                let str = '';
                if( i === this.month && j === this.day){
                    str = '今天';
                }else if( i === this.month && j === this.day + 1){
                    str = '明天';
                }else if( i === this.month && j === this.day + 2){
                    str = '后天';
                }else{
                    str = `${this.withZero(i)}月${this.withZero(j)}日`
                }

                array.push(`${str} ${weekArr[weekIndex]}`)
            }
        }    

        return array;
    }

    /* 
    数字循环
     */
    getLoopArray(start, end){
        let array = [];

        start = start || 0;
        end = end || 1;

        for( let i = start; i<=end ; i++){
            array.push(this.withZero(i));
        }

        return array;
    }

    /* 判断是不是闰年，或者30天/或者31天 */
    getMonthDay( month ){
        let flag = this.year % 400 == 0 || (this.year % 4 ==0 && this.year % 100 !=0);

        // let days = 0;

        switch (month) {

            case 1:
        
            case 3:
        
            case 5:
        
            case 7:
        
            case 8:
        
            case 10:
        
            case 12:
        
                return 31;
        
                break;
        
            case 4:
        
            case 6:
        
            case 9:
        
            case 11:
        
                return 30;
        
                break;
        
            case 2:
        
                return flag ? 29 : 28;
        
                break;
        
            default:
        
                return'月份格式不正确，请重新输入！'
        }

        // return days;
    }


    //获取当前时间
    getNowDate(){
        
        return [`今天 ${weekArr[this.week]}`,this.withZero(this.hours),this.withZero(this.minutes)];
    }

    datePicker(){
        let currentDateArr = [];
        let dateAll = [[],[],[]];

        let defaultDate = this.defaultTime.length>0 || this.getNowDate();
        

        dateAll[0] = this.getMonth(1, 12);//几月几日 星期几   
        dateAll[1] = this.getLoopArray(0, 23);//小时

        dateAll[2] = this.getLoopArray(0, 59);//分
        
        

        dateAll.find( (item,index) => {
            currentDateArr.push( item.indexOf( defaultDate[index] ));
        })
        
        

        return {
            dateAll,
            currentDateArr
        }
    }

    //转换成 Month月day日 HH:MM
    toDate(arrAll,currentDate){
        
        let tempDate = arrAll[0][currentDate[0]];
        let tempTime = `${arrAll[1][currentDate[1]]}:${arrAll[2][currentDate[2]]}`;
        let todayDay = this.getMonthDay(this.month);
        // console.log(tempTime);
        
        if(tempDate.indexOf('今天') > -1){
            return `${ this.withZero(this.month) }月${ this.withZero(this.day) }日 ${tempTime}`;
        }else if(tempDate.indexOf('明天') > -1){
            let nextMonth = this.day+1>todayDay ? this.month+1 : this.month;
            let nextDay = this.day+1>todayDay ? 1 : this.day+1;
            return `${ this.withZero(nextMonth) }月${ this.withZero(nextDay) }日 ${tempTime}`;
        }else if(tempDate.indexOf('后天') > -1){
            let nextMonth = this.day+2>todayDay ? this.month+1 : this.month;
            let nextDay = this.day+2>todayDay ? this.day+2-31 : this.day+2;
            return `${ this.withZero(nextMonth) }月${ this.withZero(nextDay) }日 ${tempTime}`
        }
        return `${tempDate} ${tempTime}`;
    }
}

