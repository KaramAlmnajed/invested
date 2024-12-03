import { initNavigation } from './modules/navigation.js';
import { initAnimations } from './modules/animations.js';
import { initForms } from './modules/forms.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();
    initForms();
});