import { codegen } from 'shiki-codegen';

console.log('Generating optimized Shiki bundle...');

const { code } = await codegen({
    langs: ['javascript'],
    themes: ['github-light', 'github-dark'],
    engine: 'javascript',
    typescript: true,
});

// Write the generated bundle to src/lib/
const bundlePath = './src/lib/shiki-bundle.ts';

// Ensure the lib directory exists
try {
    await Deno.mkdir('./src/lib', { recursive: true });
} catch {
    // Directory already exists
}

await Deno.writeTextFile(bundlePath, code);

console.log(`✅ Shiki bundle generated at ${bundlePath}`);
console.log('Bundle includes:');
console.log('  - Languages: JavaScript');
console.log('  - Themes: GitHub Light, GitHub Dark');
console.log('  - Engine: JavaScript (browser-compatible)');
