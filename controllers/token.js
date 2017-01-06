var fn_token = async (ctx, next) => {
    // ctx.set("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjowLCJpYXQiOjE0ODM1ODg3Mjl9.yXZuI-QVFC2gruqsBDX4ldPRqCPM-Nq5k4q_HK1ZxqU");
    // ctx.session.keys = "this is my keys: 225842255";
    // ctx.cookies.set("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjowLCJpYXQiOjE0ODM1ODg3Mjl9.yXZuI-QVFC2gruqsBDX4ldPRqCPM-Nq5k4q_HK1ZxqU");
    // ctx.session.cookie.test = "我来嘿嘿嘿";
    // ctx.response.cookies = ctx.session.cookie;
    ctx.body = {
        session: ctx.session,
        token: ctx.csrf,
        cookies: ctx.cookies.get("test"),
        // valid: ctx.session.valid("000"),
        jwtToken: ctx.jwt || "jwt",
        state: ctx.state,
    };
    // ctx.body = "ctx.header";
    // Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjowLCJpYXQiOjE0ODM1ODg3Mjl9.yXZuI-QVFC2gruqsBDX4ldPRqCPM-Nq5k4q_HK1ZxqU
};

module.exports = {
    'GET /token': fn_token
}
