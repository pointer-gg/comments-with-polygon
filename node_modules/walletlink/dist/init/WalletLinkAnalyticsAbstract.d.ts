/**
 * An abstract class used to send events to track metrics / analytics
 */
export declare abstract class WalletLinkAnalyticsAbstract {
    abstract sendEvent(eventType: string, eventProperties?: any): void;
}
