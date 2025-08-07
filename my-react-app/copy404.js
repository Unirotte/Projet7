import { copyFileSync } from 'fs';

try {
  copyFileSync('dist/index.html', 'dist/404.html');
  console.log('✅ 404.html créé avec succès.');
} catch (err) {
  console.error('❌ Erreur lors de la création de 404.html:', err);
}