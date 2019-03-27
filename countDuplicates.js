function duplicateCount(text){
    let count = {}
    text = text.toLowerCase().split("")
    text.forEach(i=>{
        count[i] = (count[i] || 0) + 1;
    })
    text = Object.values(count)
    text= text.filter(val => val > 1)
    return text.length
}

duplicateCount("abaaacc")