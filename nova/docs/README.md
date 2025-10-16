# Nova

# Nova Module Manifest/Structure
name: string
summary: string
description: string
icon/app_icon/thumbnail/icon_image/icon_url: string
author: string
license: string
version: string
depends_on/dependencies/require/requires: string[]
data_files/data: string[]
demo_files/demo: string[]
data: {
    data: string[],
    demo: string[],
    views: string[],
    security: string[],
    reports: string[],
    wizards: string[],
    templates: string[],
    menus: string[],
    actions: string[],
    static: string[],
    i18n: string[],
    others: string[],
}
assets
scripts: {
    pre_install_script/pre_install
    post_install_script/post_install
    pre_upgrade_script/pre_upgrade
    post_upgrade_script/post_upgrade
    uninstall_hook/uninstall
    pre_uninstall_script/pre_uninstall
    post_uninstall_script/post_uninstall
}
auto_install/install_automatically: boolean
is_app/is_application/app/application: boolean

# Module Folder Structure
controllers
models
data
  data
  demo
  views
  templates
  security
tests
docs
static
  css
  js
  assets
    images
    fonts
wizards
reports

index.ts/manifest.ts/module.ts/main.ts
