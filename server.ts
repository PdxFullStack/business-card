import { serve } from 'bun';
import { config } from '@dotenvx/dotenvx';

config();

const port = parseInt(process.env.PORT || '3000', 10);

export const server = serve({
	port,
	fetch(req) {
		const url = new URL(req.url);
		const filePath = url.pathname === '/' ? '/index.html' : url.pathname;
		const file = Bun.file(`./dist${filePath}`);
		return new Response(file);
	}
});

console.log(`Ready to serve @ http://localhost:${server.port}`);
