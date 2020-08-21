import { Subscription } from '@unimodules/core';
import { PermissionResponse, PermissionStatus } from 'unimodules-permissions-interface';
import { AVPlaybackStatus, AVPlaybackStatusToSet } from '../AV';
import { Sound } from './Sound';
export declare type RecordingOptions = {
    android: {
        extension: string;
        outputFormat: number;
        audioEncoder: number;
        sampleRate?: number;
        numberOfChannels?: number;
        bitRate?: number;
        maxFileSize?: number;
    };
    ios: {
        extension: string;
        outputFormat?: string | number;
        audioQuality: number;
        sampleRate: number;
        numberOfChannels: number;
        bitRate: number;
        bitRateStrategy?: number;
        bitDepthHint?: number;
        linearPCMBitDepth?: number;
        linearPCMIsBigEndian?: boolean;
        linearPCMIsFloat?: boolean;
    };
};
export declare const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT = 0;
export declare const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP = 1;
export declare const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4 = 2;
export declare const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB = 3;
export declare const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB = 4;
export declare const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF = 5;
export declare const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS = 6;
export declare const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP = 7;
export declare const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS = 8;
export declare const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM = 9;
export declare const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT = 0;
export declare const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB = 1;
export declare const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB = 2;
export declare const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC = 3;
export declare const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC = 4;
export declare const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD = 5;
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM = "lpcm";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3 = "ac-3";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3 = "cac3";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4 = "ima4";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC = "aac ";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP = "celp";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC = "hvxc";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ = "twvq";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3 = "MAC3";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6 = "MAC6";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW = "ulaw";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW = "alaw";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN = "QDMC";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2 = "QDM2";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM = "Qclp";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1 = ".mp1";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2 = ".mp2";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3 = ".mp3";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS = "alac";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE = "aach";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD = "aacl";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD = "aace";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR = "aacf";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2 = "aacg";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2 = "aacp";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL = "aacs";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR = "samr";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB = "sawb";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE = "AUDB";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC = "ilbc";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA = 1836253201;
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM = 1836253233;
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3 = "aes3";
export declare const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3 = "ec-3";
export declare const RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN = 0;
export declare const RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW = 32;
export declare const RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM = 64;
export declare const RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH = 96;
export declare const RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX = 127;
export declare const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT = 0;
export declare const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE = 1;
export declare const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED = 2;
export declare const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE = 3;
export declare const RECORDING_OPTIONS_PRESET_HIGH_QUALITY: RecordingOptions;
export declare const RECORDING_OPTIONS_PRESET_LOW_QUALITY: RecordingOptions;
export declare type RecordingStatus = {
    canRecord: boolean;
    isRecording: boolean;
    isDoneRecording: boolean;
    durationMillis: number;
};
export { PermissionResponse, PermissionStatus };
export declare function getPermissionsAsync(): Promise<PermissionResponse>;
export declare function requestPermissionsAsync(): Promise<PermissionResponse>;
export declare class Recording {
    _subscription: Subscription | null;
    _canRecord: boolean;
    _isDoneRecording: boolean;
    _finalDurationMillis: number;
    _uri: string | null;
    _onRecordingStatusUpdate: ((status: RecordingStatus) => void) | null;
    _progressUpdateTimeoutVariable: number | null;
    _progressUpdateIntervalMillis: number;
    _options: RecordingOptions | null;
    _cleanupForUnloadedRecorder: (finalStatus?: RecordingStatus | undefined) => Promise<RecordingStatus>;
    _pollingLoop: () => Promise<void>;
    _disablePolling(): void;
    _enablePollingIfNecessaryAndPossible(): void;
    _callOnRecordingStatusUpdateForNewStatus(status: RecordingStatus): void;
    _performOperationAndHandleStatusAsync(operation: () => Promise<RecordingStatus>): Promise<RecordingStatus>;
    getStatusAsync: () => Promise<RecordingStatus>;
    setOnRecordingStatusUpdate(onRecordingStatusUpdate: ((status: RecordingStatus) => void) | null): void;
    setProgressUpdateInterval(progressUpdateIntervalMillis: number): void;
    prepareToRecordAsync(options?: RecordingOptions): Promise<RecordingStatus>;
    startAsync(): Promise<RecordingStatus>;
    pauseAsync(): Promise<RecordingStatus>;
    stopAndUnloadAsync(): Promise<RecordingStatus>;
    getURI(): string | null;
    createNewLoadedSound(initialStatus?: AVPlaybackStatusToSet, onPlaybackStatusUpdate?: ((status: AVPlaybackStatus) => void) | null): Promise<{
        sound: Sound;
        status: AVPlaybackStatus;
    }>;
    createNewLoadedSoundAsync(initialStatus?: AVPlaybackStatusToSet, onPlaybackStatusUpdate?: ((status: AVPlaybackStatus) => void) | null): Promise<{
        sound: Sound;
        status: AVPlaybackStatus;
    }>;
}
