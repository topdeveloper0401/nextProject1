/* eslint-disable @next/next/no-img-element */

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';

import { Container, CssBaseline, Avatar, Typography, TextField, Button, Box } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import CircularProgress from '@material-ui/core/CircularProgress'

import ALink from '~/components/ALink';

const LoginPage = () => {
    

    return (
        <div className='main flex items-center justify-center'>
            <div className='login-wrapper bg-white flex flex-col items-center justify-center w-[512px] pt-[62px] pb-[42px] px-[52px]'>
            <img
                src="/images/logo.svg"
                className="w-[135px]"
                width={135}
                height={27}
                alt="icon-svg"
            />
                <form
                    className="flex justify-center flex-col w-full"
                >
                    <input
                        type="email"
                        className="bg-gray-[#eee] border-custom br-[20px] rounded-lg px-[14px] py-[10.5px] h-[1.475em] mt-2 mb-10 text-[#252525] "
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        className="bg-gray-[#eee] border-custom br-[20px] rounded-lg px-[14px] py-[10.5px] h-[1.475em] mb-6 text-[#252525] "
                        placeholder="Password"
                        required
                    />
                    <ALink
                        href="/"
                        className="forgot-text text-[12px] font-bold decoration-underline text-[#707070]"
                    >
                        Have you forgotten your password?
                    </ALink>
                    <button className='continue-button' type="submit">
                        <span data-testid="button-large__typography" >Continue</span>
                    </button>
                    <div className="divider flex items-center gap-3 text-gray-600 text-sm mb-4">
                        <div className="h-px bg-gray-300 flex-1"></div>
                        <p>or access with</p>
                        <div className="h-px bg-gray-300 flex-1"></div>
                    </div>
                    <div className='flex items-center'>
                        <button className="button-small">
                            <img src="/images/google-icon.svg" alt="google"></img>
                            <span id="id-4df33411-e33e-47d5-be45-3984710e8665">Google</span>
                        </button>
                        <button className="button-small apple-button">
                            <img src="/images/apple-icon.svg" alt="apple"></img>
                            <span id="id-4df33411-e33e-47d5-be45-3984710e8665">apple</span>
                        </button>
                    </div>
                    <div className='footer-text text-center'>
                        <span id="id-c33d2ad2-5ac3-42a4-932a-7fb7ca10502b">
                            Don't have an account yet?
                        </span>
                        <a href="/registro">
                            <span className='font-bold' id="id-636d4a2b-6a3c-4d56-b681-fb8c66d76c6e">
                                Sign up for free now
                            </span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default LoginPage;
