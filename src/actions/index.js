export const TIMER_TYPE = 'TIMER_TYPE'

export const READ_TIMER_SETTING = () => async dispatch => {
    const responce = {}
    dispatch({ type: TIMER_TYPE, responce })
}