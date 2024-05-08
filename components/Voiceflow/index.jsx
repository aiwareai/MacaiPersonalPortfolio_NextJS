// import React, { useEffect } from 'react';

// const Voiceflow = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.onload = () => {
//       window.voiceflow.chat.load({
//         verify: { projectID: '655ca1fc06559d0007477401' },
//         url: 'https://general-runtime.voiceflow.com',
//         versionID: 'production'
//       });
//     };
//     script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
//     const firstScript = document.getElementsByTagName('script')[0];
//     firstScript.parentNode?.insertBefore(script, firstScript);
//   }, []);

//   return <div id="voiceflow-chat"/>;
// };

// export default Voiceflow;

// import React, { useEffect } from 'react';

// const Botpress = () => {
//   useEffect(() => {
//     const injectScript = document.createElement('script');
//     injectScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
//     injectScript.async = true;
//     document.body.appendChild(injectScript);

//     const configScript = document.createElement('script');
//     configScript.src = 'https://mediafiles.botpress.cloud/0ed3e116-09c3-4fe7-b14d-b025783d1cea/webchat/config.js';
//     configScript.async = true;
//     configScript.defer = true;
//     document.body.appendChild(configScript);

//     configScript.onload = () => {
//       window.botpressWebChat.init({
//         botId: "0ed3e116-09c3-4fe7-b14d-b025783d1cea",
//         hostUrl: "https://cdn.botpress.cloud/webchat/v1",
//         messagingUrl: "https://messaging.botpress.cloud",
//         clientId: "0ed3e116-09c3-4fe7-b14d-b025783d1cea",

//       });
//     };
//   }, []);

//   return <div id="webchat" />;
// };

// export default Botpress;