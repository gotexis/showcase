import * as types from '../constants'

// Client-side actions
export const activateThread = (id=null, pm_id=null, pm=false) => ({
    type: types.ACTIVATE_THREAD,
    id,
    pm_id,
    pm,
})

export const switchComposing = composing => ({
    type: types.COMPOSING_SWITCH,
    composing
})


export const timerTick = () => ({
    type: types.TIMER_TICK
})

