export { default } from 'next-auth/middleware'

//Causes the user to be redirected to the sign-in page automatically when attempting to access a url included in matcher
//Exclude the line below if we want the user to be redirected from any url if they are not signed in. 
export const config = { matcher: ['/users', '/posts', '/hub']}