import React from 'react';
import { Players } from './players';
import { MakeAMatchGame } from './game';

export function Play(props) {
    return (
        <main className='bg-secondary'>
            <Players userName={props.userName} />
            <MakeAMatchGame userName={props.userName} />
        </main>
    );
}