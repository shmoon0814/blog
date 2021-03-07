import { Dispatch } from 'react';
import { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';

export type Http = AxiosInstance;
export type Config = AxiosRequestConfig;
export type Response = AxiosResponse;
export type Error = AxiosError;
export type Async = Promise<any>;
export type Apis = any;
