let date = new Date()

function formatarData(data) {
    let day = data.getDate().toString().padStart(2, '0')
    let month = (data.getMonth() + 1).toString().padStart(2, '0')
    let year = (data.getFullYear()).toString().padStart(4, '0')

    return `${day}/${month}/${year}`
    
}

console.log(formatarData(date))