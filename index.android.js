/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetModule
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;

JitsiMeetModule.call = (url, userInfo, token) => {
  userInfo = userInfo || {};
  token = token || {};
  call(url, userInfo, token);
}

JitsiMeetModule.audioCall = (url, userInfo, token) => {
  userInfo = userInfo || {};
  token = token || {};
  audioCall(url, userInfo, token);
}

export default JitsiMeetModule;
