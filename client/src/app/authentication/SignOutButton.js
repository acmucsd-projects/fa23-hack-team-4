'use client';

export default function SignOutButton() {
    return(
        <form action="http://localhost:5000/auth/logout"><button type='submit'>Sign out</button></form>
    );
} 