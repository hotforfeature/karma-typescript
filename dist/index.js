var Bundler = require("./lib/bundler"), Compiler = require("./dist/compiler"), Configuration = require("./dist/configuration"), Coverage = require("./lib/coverage"), Framework = require("./lib/framework"), Preprocessor = require("./lib/preprocessor"), Reporter = require("./lib/reporter"), sharedProcessedFiles = {}, configuration = new Configuration(), coverage = new Coverage(configuration), bundler = new Bundler(configuration, coverage), compiler = new Compiler(configuration), framework = new Framework(bundler, compiler, configuration, coverage), preprocessor = new Preprocessor(bundler, compiler, configuration, coverage, sharedProcessedFiles), reporter = new Reporter(configuration, sharedProcessedFiles);
module.exports = {
    "framework:karma-typescript": ["factory", framework.create],
    "preprocessor:karma-typescript": ["factory", preprocessor.create],
    "reporter:karma-typescript": ["type", reporter.create]
};
