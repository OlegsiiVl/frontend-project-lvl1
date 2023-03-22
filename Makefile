install :
	npm ci
brain-games:
	node bin/brainGames.js
publish:
	npm publish --dry-run
lint:
	npx eslint .