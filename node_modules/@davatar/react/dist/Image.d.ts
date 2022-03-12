import { BaseProvider } from '@ethersproject/providers';
import { CSSProperties, ReactChild } from 'react';
export interface Props {
    size: number;
    uri?: string | null;
    address?: string | null;
    style?: CSSProperties;
    className?: string;
    graphApiKey?: string;
    provider?: BaseProvider | null;
    generatedAvatarType?: 'jazzicon' | 'blockies';
    defaultComponent?: ReactChild | ReactChild[];
}
export declare const getCachedUrl: (key: string) => string | null;
export declare const getGatewayUrl: (uri: string, tokenId?: string | undefined) => string;
export default function Avatar({ uri, style, className, size, address, provider, generatedAvatarType, defaultComponent, }: Props): JSX.Element;
