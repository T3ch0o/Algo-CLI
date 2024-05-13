import { AlgoliaSettings } from './config/algolia.settings';
import { Engine } from './engine/engine';
import { Logger } from './utils/logger.util';
import { ReflectiveInjector } from 'injection-js';
import { Bootstrap } from './bootstrap';
import { Settings } from './config/settings';
import { handlers } from './engine/handlers/injector.config';

export const classes = [
    Bootstrap, Settings, AlgoliaSettings, Engine,

    // Utils
    Logger,
];

// Configure injector (DIC)
export const injector = ReflectiveInjector.resolveAndCreate([...classes, ...handlers]);
