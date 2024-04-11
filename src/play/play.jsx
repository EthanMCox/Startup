import React from 'react';
import { Players } from './players';

export function Play(props) {
    return (
        <main className='bg-secondary'>
            <Players username={props.userName} />
        </main>
    );
}