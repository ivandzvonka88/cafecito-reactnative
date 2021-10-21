const initialstate = {
    role:'customer'
}

export default function auth(state = initialstate,action)
{
    switch(action.type)
    {
        case 'SELECT_ROLE':
            return {
                ...state,
                role:action.role
            }
        default:
            return state;
    }
    
}