export const make_date = time => {
    return new Date(time).toDateString()
}

export const make_time = time => {
    return new Date(time).toLocaleTimeString()
}