class CopyrightWebpackPlugin {
  constructor(options) {
    console.log(options);
    console.log("插件被使用了！");
  }
  apply(compiler) {
    compiler.hooks.compiler.tap("CopyrightWebpackPlugin", () => {
      console.log("complier");
    });
    compiler.hooks.emit.tapAsync("CopyrightWebpackPlugin", () => {
      debugger;
      compilation.assets["copyright.txt"] = {
        source: function() {
          return "copyright by jm";
        },
        size: function() {
          return 21;
        }
      };
    });
  }
}

module.exports = CopyrightWebpackPlugin;
