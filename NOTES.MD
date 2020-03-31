# 338. Ensuring App Security
- For security reasons, it's better to find a better solution. An alternative to storing tokens in the `localStorage`
- Someone might steal your token and use it to login in into your account
- The best idea though is to store get a refreshToken and store it somewhere. Firebase provides a `refreshToken`
- You can use your refreshToken (send it to Firebase), and you'll get an idToken. That's better. 
- The instructor isn't using that too because it's not perfect. He just wanted to bring it to my attention. 
- No code here. It's best I learn about the best security for your website or web applications. I should store that in my to-do list. 