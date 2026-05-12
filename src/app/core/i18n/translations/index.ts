import { en } from './en';
import { es } from './es';
import { pt } from './pt';
import { it } from './it';
import { de } from './de';

export type Language = 'en' | 'es' | 'pt' | 'it' | 'de';
export type Translations = typeof en;

export const translations: Record<Language, Translations> = { en, es, pt, it, de };
