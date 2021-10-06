import loadScript from 'load-script';

let initialized = false;
let queue = [];

export function fb(callback) {
    if (initialized) {
        callback(window.FB);
    } else {
        queue.push(callback);
        if (!window.fbAsyncInit) {
            window.fbAsyncInit = () => {
                window.FB.init({
                    xfbml: true,
                    version: 'v8.0',
                });
                initialized = true;
                queue.forEach(cb => cb(window.FB));
                queue = null;
            };

            const script = window.localStorage.getItem('fb:debug') === 'true'
                ? 'xfbml.customerchat/debug.js'
                : 'xfbml.customerchat.js';
            loadScript(`https://connect.facebook.net/th_TH/sdk/${script}`, { async: true });
        }
    }
}