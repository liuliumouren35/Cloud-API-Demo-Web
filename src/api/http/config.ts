export const CURRENT_CONFIG = {

  // license
  appId: import.meta.env.VITE_APP_ID || 'Please enter the app id.', // You need to go to the development website to apply.
  appKey: import.meta.env.VITE_APP_KEY || 'Please enter the app key.', // You need to go to the development website to apply.
  appLicense: import.meta.env.VITE_APP_LICENSE || 'Please enter the app license.', // You need to go to the development website to apply.

  // http
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:6789/', // This url must end with "/". Example: 'http://192.168.1.1:6789/'
  websocketURL: import.meta.env.VITE_WEBSOCKET_URL || 'ws://localhost:6789/api/v1/ws', // Example: 'ws://192.168.1.1:6789/api/v1/ws'

  // livestreaming
  // RTMP  Note: This IP is the address of the streaming server. If you want to see livestream on web page, you need to convert the RTMP stream to WebRTC stream.
  rtmpURL: 'Please enter the rtmp access address.', // Example: 'rtmp://192.168.1.1/live/'
  // GB28181 Note:If you don't know what these parameters mean, you can go to Pilot2 and select the GB28181 page in the cloud platform. Where the parameters same as these parameters.
  gbServerIp: 'Please enter the server ip.',
  gbServerPort: 'Please enter the server port.',
  gbServerId: 'Please enter the server id.',
  gbAgentId: 'Please enter the agent id',
  gbPassword: 'Please enter the agent password',
  gbAgentPort: 'Please enter the local port.',
  gbAgentChannel: 'Please enter the channel.',
  // RTSP
  rtspUserName: 'Please enter the username.',
  rtspPassword: 'Please enter the password.',
  rtspPort: '8554',
  // Agora
  agoraAPPID: 'Please enter the agora app id.',
  agoraToken: 'Please enter the agora temporary token.',
  agoraChannel: 'Please enter the agora channel.',

  // map
  // You can apply on the AMap website.
  amapKey: import.meta.env.VITE_AMAP_KEY || '1e68c65b8600e14045e1af2b716c0ece', // 请替换为您的高德地图 API Key

}
