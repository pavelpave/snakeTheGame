import { init } from '../../../initial-state/index'

function startApp (initState = init , actions){
    if(!actions){
        return initState
    }
    switch(actions){
        default:
            return initState
    }
}
export default startApp