import {defineConfig} from 'vite';
export default defineConfig({define:{'process.env.NODE_ENV':JSON.stringify('production')},build:{lib:{entry:'src/main.jsx',name:'PulsarPreview',formats:['iife'],fileName:()=> 'pulsar.js'},cssCodeSplit:false,rollupOptions:{onwarn(warning,warn){if(warning.code!=='MODULE_LEVEL_DIRECTIVE')warn(warning)}}}});
