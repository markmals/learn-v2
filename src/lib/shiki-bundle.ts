/* Generate by @shikijs/codegen */
import type {
    DynamicImportLanguageRegistration,
    DynamicImportThemeRegistration,
    HighlighterGeneric,
} from '@shikijs/types';
import { createdBundledHighlighter, createSingletonShorthands } from '@shikijs/core';
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript';

type BundledLanguage = 'javascript' | 'js';
type BundledTheme = 'github-light' | 'github-dark';
type Highlighter = HighlighterGeneric<BundledLanguage, BundledTheme>;

const bundledLanguages = {
    javascript: () => import('@shikijs/langs/javascript'),
    js: () => import('@shikijs/langs/javascript'),
} as Record<BundledLanguage, DynamicImportLanguageRegistration>;

const bundledThemes = {
    'github-light': () => import('@shikijs/themes/github-light'),
    'github-dark': () => import('@shikijs/themes/github-dark'),
} as Record<BundledTheme, DynamicImportThemeRegistration>;

const createHighlighter = /* @__PURE__ */ createdBundledHighlighter<
    BundledLanguage,
    BundledTheme
>({
    langs: bundledLanguages,
    themes: bundledThemes,
    engine: () => createJavaScriptRegexEngine(),
});

const {
    codeToHtml,
    codeToHast,
    codeToTokensBase,
    codeToTokens,
    codeToTokensWithThemes,
    getSingletonHighlighter,
    getLastGrammarState,
} = /* @__PURE__ */ createSingletonShorthands<BundledLanguage, BundledTheme>(
    createHighlighter,
);

export {
    bundledLanguages,
    bundledThemes,
    codeToHast,
    codeToHtml,
    codeToTokens,
    codeToTokensBase,
    codeToTokensWithThemes,
    createHighlighter,
    getLastGrammarState,
    getSingletonHighlighter,
};
export type { BundledLanguage, BundledTheme, Highlighter };
