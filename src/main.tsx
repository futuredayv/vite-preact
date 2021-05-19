import { h, render } from 'preact';

import { App } from './app';

import '@Styles/global.scss';

const entryPoint = document.getElementById('app');

if (entryPoint) render(<App />, entryPoint);
