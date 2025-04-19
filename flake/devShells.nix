{inputs, ...}: {
  imports = [
    inputs.devshell.flakeModule
  ];

  perSystem = {pkgs, ...}: {
    devshells.default = {
      packages = builtins.attrValues {
        inherit
          (pkgs)
          vscode-langservers-extracted
          emmet-language-server
          typescript-language-server
          ;
        inherit (pkgs.nodePackages) prettier;
      };
    };
  };
}
