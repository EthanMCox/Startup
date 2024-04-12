import React from 'react';

import { GameEvent, GameEventNotifier } from './gameNotifier';
import './play.css';

export function Players(props) {
    const userName = props.userName;
    const [GameNotifier, setGameNotifier] = React.useState(new GameEventNotifier(userName));
    const [events, setEvent] = React.useState([]);





    React.useEffect(() => {
        GameNotifier.addHandler(handleGameEvent);

        return () => {
            GameNotifier.removeHandler(handleGameEvent);
        };
    });

    function handleGameEvent(event) {
        setEvent([...events, event]);
    }

    function createMessageArray() {
        const messageArray = [];
        for (const[i, event] of events.entries()) {
            let message = 'unknown';
            if (event.type === GameEvent.End) {
                message = `scored ${event.value.score}`;
            } else if (event.type === GameEvent.Start) {
                message = 'started a new game';
            } else if (event.type === GameEvent.System || event.type === GameEvent.Connect) {
                // Message will be either 'connected' or 'disconnected'
                message = event.value.msg;
            }

            messageArray.push(
                <div key={i} className="event">
                    <span className={`${event.type}-event`}>{event.from.split('@')[0]}</span> {message}
                </div>
            );
        }
        return messageArray;
    }

    return (
        <div className="players">
            Player: 
            <span className="player-name"> {userName}</span>
            <div id="player-notifications">{createMessageArray()}</div>
        </div>
    );
}