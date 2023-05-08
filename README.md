# react-tweet-netlify

A [react-tweet](https://github.com/vercel-labs/react-tweet/) serverless function for Netlify.

Before deploy, set the environment variable `AWS_LAMBDA_JS_RUNTIME` to `nodejs18.x`.

After depoly, you can add a redircet role like this:

```txt
/api/*  /.netlify/functions/:splat  200
```

It will redirect `/api/tweet/123456` to `/.netlify/functions/tweet/123456`, so you can visit `/api/tweet/:id` to get tweet's data.
