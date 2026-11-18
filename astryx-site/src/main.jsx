import React from 'react';
import {createRoot} from 'react-dom/client';
import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import {Theme} from '@astryxdesign/core/theme';
import {themes} from './astryx-themes';
import './pulsar-network.css';
import SpatialApp from './SpatialApp';
createRoot(document.getElementById('root')).render(<Theme theme={themes.neutral} mode="dark"><SpatialApp/></Theme>);
