import {defineConfig} from 'vite';
export default defineConfig({define:{'process.env.NODE_ENV':JSON.stringify('production')},build:{outDir:'dist-d',lib:{entry:'src/PrecisionApp.jsx',name:'PulsarPrecision',formats:['iife'],fileName:()=> 'precision.js'},cssCodeSplit:false,rollupOptions:{onwarn(warning,warn){if(warning.code!=='MODULE_LEVEL_DIRECTIVE')warn(warning)}}}});
