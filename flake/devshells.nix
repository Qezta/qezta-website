{
  inputs,
  lib,
  ...
}: {
  imports = [inputs.devshell.flakeModule];

  perSystem = {
    pkgs,
    config,
    ...
  }: {
    devshells.default = {
      devshell = rec {
        name = "Qezta-Site";
        motd = "{202}Welcome to {91}${name} {202}devshell!{reset} \n $(menu)";
        startup = {
          git-hooks.text = ''
            ${config.pre-commit.installationScript}
          '';
        };
        packages = lib.attrsets.attrValues {
          inherit
            (pkgs)
            ### LSPs & Formatters
            nixd
            alejandra
            vscode-langservers-extracted
            emmet-language-server
            typescript-language-server
            svelte-language-server
            ;
          inherit (pkgs.nodePackages) prettier;
        };
      };
    };
  };
}