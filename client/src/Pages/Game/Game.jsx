import { InterfaceOne } from "./interfaceOne/InterfaceOne";
import { useEffect, useState } from 'react';

export function Game({...props}) {
    useEffect(() => {
      console.log('Game state changed:', props.gameState);
    }, [props.gameState]);
  
    return (
      <>
        {props.gameState ? (
          <InterfaceOne {...props} />
        ) : (
          <div>Hit it Dj</div>
        )}
      </>
    );
  }