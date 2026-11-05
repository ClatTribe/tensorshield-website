// robots.txt: open to search engines and AI crawlers so TensorShield can be found and cited.
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const aiBots = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'DuckAssistBot',
  'CCBot', 'meta-externalagent', 'cohere-ai', 'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }, ...aiBots.map((b) => ({ userAgent: b, allow: '/', disallow: '/api/' }))],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
