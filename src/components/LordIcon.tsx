import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

interface LordIconProps {
    icon: any;
    size?: number;
    trigger?: 'hover' | 'click' | 'loop' | 'morph' | 'boomerang';
    colors?: {
        primary?: string;
        secondary?: string;
    };
    delay?: number;
}

export default function LordIcon({
    icon,
    size = 48,
    trigger = 'hover',
    colors,
    delay = 0
}: LordIconProps) {
    const playerRef = useRef<Player>(null);

    useEffect(() => {
        if (trigger === 'loop' && playerRef.current) {
            const timer = setTimeout(() => {
                playerRef.current?.playFromBeginning();
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [trigger, delay]);

    const handleInteraction = () => {
        if (trigger === 'hover' || trigger === 'click') {
            playerRef.current?.playFromBeginning();
        }
    };

    return (
        <div
            style={{ width: size, height: size }}
            onMouseEnter={trigger === 'hover' ? handleInteraction : undefined}
            onClick={trigger === 'click' ? handleInteraction : undefined}
        >
            <Player
                ref={playerRef}
                icon={icon}
                size={size}
                colorize={colors?.primary}
            />
        </div>
    );
}
