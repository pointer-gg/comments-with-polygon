import { ReactChild, CSSProperties } from 'react';
export { default as Image } from './Image';
export interface DavatarProps {
    size: number;
    address: string;
    provider?: any;
    graphApiKey?: string;
    generatedAvatarType?: 'jazzicon' | 'blockies';
    defaultComponent?: ReactChild | ReactChild[];
    style?: CSSProperties;
}
export default function Davatar({ size, address, provider, graphApiKey, generatedAvatarType, defaultComponent, style, }: DavatarProps): JSX.Element;
