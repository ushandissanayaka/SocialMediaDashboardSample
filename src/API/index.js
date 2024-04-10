export const getProfile = () =>{
 return fetch('https://dummyjson.com/users')
.then(res => res.json())

};
export const getComments=() =>{
    return fetch('https://dummyjson.com/comments').then(res => res.json())
    
                
};
export const getPosts =  () =>{
    return fetch('https://dummyjson.com/posts').then(res => res.json())
    
};
export const getUsers = () =>{
    
return fetch('https://dummyjson.com/users')
.then(res => res.json())

}
export const getComment = () =>{
    return fetch('https://dummyjson.com/comments')
    .then(res => res.json())
   
}