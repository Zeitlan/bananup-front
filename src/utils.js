export function toMMSS(seconds){
    const sec_count = parseInt(seconds, 10)
    let mins = Math.floor(sec_count / 60)
    let secs = sec_count - mins * 60
    
    if (mins < 10)
        mins = '0' + mins
    if (secs < 10)
        secs = '0' + secs
    return mins + ':' + secs
}