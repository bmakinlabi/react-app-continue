# 330. Logging Users Out
- Note that `expirationTime` is `3600` and `setTimeout` expects to get seconds. So we have to multiply `3600` to `1000` to get minutes that will make the application log out at that minutes. Wow. This is really working well.
- Now, it's one hour before logging out. 