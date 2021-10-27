import {
  Direction,
  DirectionProvider as ComponentsDirectionProvider,
} from '@transferwise/components';
import { createContext, Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

type DirectionContextType = [Direction, Dispatch<SetStateAction<Direction>>];

export const DirectionContext = createContext<DirectionContextType | undefined>(undefined);

export const DirectionProvider: React.FC = ({ children }) => {
  const [direction, setDirection] = useState(Direction.LTR);

  useEffect(() => {
    // @ts-expect-error 2339
    setDirection(window.__direction);

    // @ts-expect-error 2339
    window.__onDirectionChange = (newDirection: Direction) => {
      setDirection(newDirection);
    };
  }, []);

  const memoizedContextValue = useMemo<DirectionContextType>(
    () => [
      direction,
      (newDirection) => {
        // @ts-expect-error 2339
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        window.__setDirection(newDirection);
      },
    ],
    [direction],
  );

  return (
    <DirectionContext.Provider value={memoizedContextValue}>
      <ComponentsDirectionProvider direction={memoizedContextValue[0]}>
        {children}
      </ComponentsDirectionProvider>
    </DirectionContext.Provider>
  );
};
