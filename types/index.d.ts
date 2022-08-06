
declare global {
  interface IAppOption {
    globalData: {
      userInfo?: WechatMiniprogram.UserInfo;
    };
    userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback;
  }
  type DataOption = Record<string, any>;
  type CustomOption = Record<string, any>;
}

export {};