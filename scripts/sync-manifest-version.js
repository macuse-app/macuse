#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

try {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  const manifest = JSON.parse(readFileSync('manifest.json', 'utf8'));
  manifest.version = pkg.version;
  writeFileSync('manifest.json', `${JSON.stringify(manifest, null, 2)}\n`);
  try {
    execSync('npx biome format --write manifest.json', { stdio: 'ignore' });
  } catch {}
  console.log(`Updated manifest.json version to ${pkg.version}`);
} catch (error) {
  console.error('Error syncing manifest version:', error.message);
  process.exit(1);
}

