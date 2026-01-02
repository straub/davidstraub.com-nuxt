import fs from 'node:fs';
import path from 'node:path';
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  try {
    const toysDir = path.resolve('./public/toys');
    const toyFiles = fs.readdirSync(toysDir)
      .filter(file => file.endsWith('.html'))
      .map((file) => {
        const filePath = path.join(toysDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Extract description from meta description tag or content
        let description = '';
        const metaDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
        if (metaDescMatch && metaDescMatch[1]) {
          description = metaDescMatch[1];
        } else {
          // Try to extract first paragraph after body
          const bodyContentMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
          if (bodyContentMatch) {
            const paragraphMatch = bodyContentMatch[1].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
            if (paragraphMatch) {
              // Strip HTML tags
              description = paragraphMatch[1].replace(/<[^>]*>/g, '').trim();
            }
          }

          // If no description found, use a default
          if (!description) {
            description = 'An interactive web experiment';
          }
        }

        const name = file.replace(/-/g, ' ').replace('.html', '');
        return {
          path: `/toys/${file}`,
          name: name.charAt(0).toUpperCase() + name.slice(1),
          id: file.replace('.html', ''),
          description,
        };
      });

    return toyFiles;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error reading toys directory:', error);
    return [];
  }
});
