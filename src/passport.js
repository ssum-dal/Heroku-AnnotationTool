import passport from "passport";
import NaverStrategy from "passport-naver";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import { naverLoginCallback, kakaoLoginCallback } from "./controllers/userController";


passport.use(
    new NaverStrategy({
        clientID: process.env.NAVER_ID,
        clientSecret: process.env.NAVER_SECRET,
        callbackURL: '/auth/naver/callback'
    },
    naverLoginCallback)
);

passport.use(
    new KakaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback'
    },
    kakaoLoginCallback)
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());