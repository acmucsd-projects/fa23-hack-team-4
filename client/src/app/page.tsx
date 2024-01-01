import React from 'react';
import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import Home from './home';

export default async function Index() {
    const session = await getServerSession(options);

    if(session) return (
        <div>
            <p>Welcome, {session.user.name}</p>
            <Home></Home>
        </div>
    );

    return <Home></Home>
}