export default function(createAccountContent = {}, action) {
    if(action.type === 'updateContent') return action.content
    else return createAccountContent
}