module.exports = {
	stories: ['../__stories__/**/*.stories.js', '../src/**/*.stories.js'],
	addons: [
		'@storybook/addon-knobs/register',
		'@storybook/addon-actions',
		'@storybook/addon-links',
	],
};
