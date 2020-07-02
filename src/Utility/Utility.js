export const modifyClickRateList = (click_rate_list, maxColumn) => {
    const length = click_rate_list.length;
    if (length != 0) {        
        let index = 0;
        while (index < maxColumn) {
            const clickTimeStart = convertToTimeObject(click_rate_list[index].clickTimeStart);
            const clickTimeEnd = convertToTimeObject(click_rate_list[index].clickTimeEnd);
            click_rate_list[index].time = buildTimeLine(clickTimeStart, clickTimeEnd);
            index++;
        }
    }
}

const convertToTimeObject = value => {
    const timeObject = {};
    if (value != undefined) {
        timeObject.year = value[0];
        timeObject.month = value[1];
        timeObject.day = value[2];
        timeObject.hour = value[3];
        timeObject.minute = value[4];
        timeObject.second = value[5];
        timeObject.millisecond = value[6];
        return timeObject;
    }
}

const buildTimeLine = (clickTimeStart, clickTimeEnd) => {
    return '[' + clickTimeStart.month + '/' + clickTimeStart.day + "] " + clickTimeStart.hour + ':' + clickTimeStart.minute + " - " + clickTimeEnd.hour + ":" + clickTimeEnd.minute;
}


export const sortRateListASC = click_rate_list => {
    click_rate_list.sort((a, b) => {
        const a_clickTimeStart = convertToTimeObject(a.clickTimeStart);
        const b_clickTimeStart = convertToTimeObject(b.clickTimeStart);       
        if (a_clickTimeStart.hour == b_clickTimeStart.hour)
            return a_clickTimeStart.minute - b_clickTimeStart.minute;
        return a_clickTimeStart.hour - b_clickTimeStart.hour;
    })
}