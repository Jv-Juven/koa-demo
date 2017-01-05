var fn_token = async (ctx, next) => {
    ctx.set("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjowLCJpYXQiOjE0ODM1ODg3Mjl9.yXZuI-QVFC2gruqsBDX4ldPRqCPM-Nq5k4q_HK1ZxqU");
    ctx.body = {
        session: ctx.session,
        token: ctx.csrf,
        jwtToken: ctx.jwt || "jwt",
        state: ctx.state
    };
    // next();
};

module.exports = {
    'GET /token': fn_token
}
