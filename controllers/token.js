var fn_token = async (ctx, next) => {
    ctx.set("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjowLCJpYXQiOjE0ODM1ODg3Mjl9.yXZuI-QVFC2gruqsBDX4ldPRqCPM-Nq5k4q_HK1ZxqU");
    ctx.session.keys = "this is my keys: 2258415";
    ctx.cookies.set("aa", "aaabbb");
    ctx.body = {
        session: ctx.session,
        token: ctx.csrf,
        cookies: ctx.cookies.get("aa"),
        // valid: ctx.session.valid("000"),
        jwtToken: ctx.jwt || "jwt",
        state: ctx.state
    };
};

module.exports = {
    'GET /token': fn_token
}
