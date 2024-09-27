export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/AnonymousPro-Regular.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.BAoRPCuR.js","app":"_app/immutable/entry/app.C-WakJPb.js","imports":["_app/immutable/entry/start.BAoRPCuR.js","_app/immutable/chunks/entry.DUNe-Lqi.js","_app/immutable/chunks/runtime.Djh4Bja3.js","_app/immutable/entry/app.C-WakJPb.js","_app/immutable/chunks/runtime.Djh4Bja3.js","_app/immutable/chunks/disclose-version.DxF3jrmv.js","_app/immutable/chunks/proxy.BeBT-x_O.js","_app/immutable/chunks/index-client.DYA0y_D4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
