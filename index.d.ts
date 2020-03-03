
declare module "react-native-youtube" {
    import { StyleProp, ViewStyle } from "react-native";
   export type YouTubeEventState = "playing" | "paused" | "stopped" | "buffering" | "loading" | "adStarted" | "started" | "ended" | "queued" | "unstarted" | "unknown"; 

    export interface YouTubeProps {
        apiKey: string;
        videoId: string;                // The YouTube video ID
        play?: boolean;                  // control playback of video with true/false
        fullscreen?: boolean;           // control whether the video should play in fullscreen or inline
        loop?: boolean;                 // Loops the video. Default: false.
        controls?: 0 | 1 | 2;           // Sets the player's controls scheme. Supported values are 0, 1, 2. Default: 1. 
                                        // On iOS the numbers conform to https://developers.google.com/youtube/player_parameters?hl=en#controls.
                                        // On Android the mapping is 0 = CHROMELSEE, 1 = DEFAULT, 2 = MINIMAL (More Info).
        showFullscreenButton?: boolean; // Show or hide Fullscreen button. Default: true.
        rel?: boolean;                  // (iOS) Show related videos at the end of the video. Default: true.
        showinfo?: boolean;             // (iOS) Setting the parameter's value to false causes the player to not display information like the video title and uploader before the video starts playing. Default: true.
        modestbranding?: boolean;       // (iOS) This parameter lets you use a YouTube player that does not show a YouTube logo. Default: false.
        style?: StyleProp<ViewStyle>;
        fullscreenAlwaysAndroid?: boolean; 
        resumePlayAndroid?: boolean;

        onError?: (error: any) => void,
        onReady?: (event: { target: number }) => void,
        onChangeState?: (event: { target: number, state: YouTubeEventState}) => void,
        onChangeQuality?: (event: any) => void,
        onChangeFullscreen?: (event: { target: number, isFullscreen: boolean }) => void,
    }
    export default class YouTube extends React.Component<YouTubeProps> {

        public getDuration(): Promise<number>;
        public getCurrentTime(): Promise<number>;
        public seekTo(seconds: number): void;
    }
}