# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2022-04-12)


### Features

* **AppHeader:** add support for headerColor via pageProps for when using transparent header ([dc2e7eb](https://github.com/noaignite/create-ignite-app/commit/dc2e7eb00f9ea854674bfddac3ddbb051d624fda))
* **AppHeader:** replace custom useDimensions hook with @react-hook/size for more robust dimension tracking as it uses ResizeObserver ([c755ccd](https://github.com/noaignite/create-ignite-app/commit/c755ccd540467f8632cd2a18db03d62e478304d0))
* **babel:** add @emotion/babel-plugin & update babel config ([c12c729](https://github.com/noaignite/create-ignite-app/commit/c12c729f07d4a2d9598cd7145726b908fa42b958))
* **conventional-commits:** add git hooks, config files & release script ([16fed16](https://github.com/noaignite/create-ignite-app/commit/16fed1699419b044c7810e7cd73bf56553b25baf))
* **eslint:** now extends @noaignite/eslint-config ([a7d7c6a](https://github.com/noaignite/create-ignite-app/commit/a7d7c6a883736cc5fe76086fb58c83c34523fbbc))
* **Storybook pages:** auto-generate Storybook pages based on api/__mock__/pages ([fbdec0d](https://github.com/noaignite/create-ignite-app/commit/fbdec0dec743c65da42f1cc79147a4708f0d972a))
* **Storybook:** Add MUI breakpoints as viewport options ([8238676](https://github.com/noaignite/create-ignite-app/commit/82386760517ef0f4b4b3af925f4533690a72925b))


### Bug Fixes

* @mui/core was renamed to @mui/base ([2f47d4b](https://github.com/noaignite/create-ignite-app/commit/2f47d4b77a7c7c8d152872dfc9a51eac35bdb7c2))
* **App, AppCookieBar:** onCookieBarClose handler is now accessed correctly ([889ff51](https://github.com/noaignite/create-ignite-app/commit/889ff510bc5e22965c9016fc3c3094f31464fd1a))
* **App:** add correctly formatted webpackChunkName to get human readable chunk in network request ([1d592fa](https://github.com/noaignite/create-ignite-app/commit/1d592faaef826052acae8809cb4fbbca7ecd73b7))
* **AppFooter:** simplify footer nav html structure [#39](https://github.com/noaignite/create-ignite-app/issues/39) ([51884b5](https://github.com/noaignite/create-ignite-app/commit/51884b5aab01f9cc152d552b08806ca1f68fec6c))
* **App:** remove webpackChunkName comment to resolve build error ([25e40dd](https://github.com/noaignite/create-ignite-app/commit/25e40dd4eebc7cafd56d7d12c84fa35ce26347e9))
* **Backdrop:** remove backdrop color when using invisible Backdrop ([016fd69](https://github.com/noaignite/create-ignite-app/commit/016fd6902da491c7409e9f533631ed5f1ab1d598))
* **Badge:** overlap variant name is now circular and not circle ([b30d868](https://github.com/noaignite/create-ignite-app/commit/b30d868cf6c4f7241cc642c5237a66cfeb42eb05))
* **Button:** remove ripple element as it's disabled per default ([be08c09](https://github.com/noaignite/create-ignite-app/commit/be08c093a45d989b111408e40c6156779e7af422))
* **core:** downgrade embla-carousel-react from v6.* to v5.* to not have to define 'slidesToScroll' in js ([3bbcd46](https://github.com/noaignite/create-ignite-app/commit/3bbcd46b5751758e6b37c8e895cbc6513da561d0))
* **next.config:** Remove unused config ([e11f738](https://github.com/noaignite/create-ignite-app/commit/e11f738bdbebc8eb9b6a67aa88c1b64c39b4a6ef))
* **oui:** update affected templates due to @noaignite/oui@3.0.0 ([6119643](https://github.com/noaignite/create-ignite-app/commit/611964371ca0dba7840c9f5f971b44e84c30a2ed))
* **Storybook preview:** make use of accumulator within reduce function ([93df09e](https://github.com/noaignite/create-ignite-app/commit/93df09ed98aed868a28af76181217ab655e69770))
* **Storybook:** correct viewport object structure ([d1d4eb4](https://github.com/noaignite/create-ignite-app/commit/d1d4eb427543aa0ef6b8c3e680233171aaa80931))


### Code Refactoring

* **Storybook:** use reduce ([8af0147](https://github.com/noaignite/create-ignite-app/commit/8af014778a4734dc7c251151e434d20f01848d41))
* **Storybook:** viewports ([79bf7f1](https://github.com/noaignite/create-ignite-app/commit/79bf7f1fd717c247df5ed479666fae5d10bb2114))


### Styling

* **Hero:** add example of fluid typography use ([ca83a8a](https://github.com/noaignite/create-ignite-app/commit/ca83a8a97e7c17a3b73a9b3794c9b009df63d451))
* **mock:** rename mock dir to __mock__ and update affected templates ([8809fb0](https://github.com/noaignite/create-ignite-app/commit/8809fb066d39a4c04ccd0896501c2b4dd4c57abc))
* **pages.stories.js:** destruct imports and add a more descriptive comment ([f53f72d](https://github.com/noaignite/create-ignite-app/commit/f53f72dc9d9b9bcf60fa072233eb334a36af7a4e))
* **README:** fix typo ([de4a03a](https://github.com/noaignite/create-ignite-app/commit/de4a03a6b00d2f2606f2d59360afde1f3304007e))
* simplify video attributes spread ([49d4a43](https://github.com/noaignite/create-ignite-app/commit/49d4a438f7db9ae81ce2d7f21019442e0d6e7aaf))
* update cms mock data ([d9efa66](https://github.com/noaignite/create-ignite-app/commit/d9efa66c763af6825e4aeff26684c3afeffbc256))


### Build System

* **deps:** add commitizen, @commitlint/* & standard-version ([fe6654c](https://github.com/noaignite/create-ignite-app/commit/fe6654cc175dba1da123155170003b28f71d7039))
* **deps:** bump @emotion/* @mui/* to latest ([ceff9f0](https://github.com/noaignite/create-ignite-app/commit/ceff9f0bbd004c5fab2fab534aa6965c6658e6b7))
* **deps:** bump @mui/material from 5.5.0 to 5.6.0 ([fe194c9](https://github.com/noaignite/create-ignite-app/commit/fe194c9588dac5a6185f3dbd8d915bd574489bab))
* **deps:** bump @noaignite/* to latest ([132e38d](https://github.com/noaignite/create-ignite-app/commit/132e38dea2a11805d6a3049d17574df920d5370e))
* **deps:** bump @noaignite/eslint-config from 0.2.0 to 0.2.2 ([bbed47f](https://github.com/noaignite/create-ignite-app/commit/bbed47f37a6edb23fcd21220867058aeb571d953))
* **deps:** bump @storybook/* from 6.4.17 to 6.4.19 ([3e50e4f](https://github.com/noaignite/create-ignite-app/commit/3e50e4f3171b89c4da6ca8d19b26e13e80c6693a))
* **deps:** bump @storybook/* from 6.4.19 to 6.4.20 ([4d9ddb6](https://github.com/noaignite/create-ignite-app/commit/4d9ddb683aa172590666414ef8cf11d24039a921))
* **deps:** bump eslint from 7.32.0 to 8.12.0 ([0c90d73](https://github.com/noaignite/create-ignite-app/commit/0c90d73f040c52a618d4b5f0fb9e8fa9280bb90d))
* **deps:** bump minimist from 1.2.5 to 1.2.6 ([1778e9d](https://github.com/noaignite/create-ignite-app/commit/1778e9d95b6ab61a09901c8ad52cd145d076574f))
* **deps:** bump next packages from 12.0.9 to 12.1.0 ([7dc5b54](https://github.com/noaignite/create-ignite-app/commit/7dc5b549a2dccd9191dd22131fe000453e3b0694))
* **deps:** bump next packages from 12.1.0 to 12.1.4 ([87bf351](https://github.com/noaignite/create-ignite-app/commit/87bf351ef1a74d301d58f0afb1486bdffa45f795))
* **deps:** bump node-fetch from 2.6.1 to 2.6.7 ([99d0ac7](https://github.com/noaignite/create-ignite-app/commit/99d0ac7ef63a783261d2369e4ee221bae1b515d3))
* **deps:** remove unused @welldone-software/why-did-you-render package ([c0da4b2](https://github.com/noaignite/create-ignite-app/commit/c0da4b2ae60d5b623e0a2b941ba4c7a47e58e583))
* remove git add command from lint-staged commands ([cfcd0b4](https://github.com/noaignite/create-ignite-app/commit/cfcd0b4dd1c08327718e1d861063ea62e8fb1caf))


### Docs

* **babel:** add comment and reference to github issue ([8c1cc05](https://github.com/noaignite/create-ignite-app/commit/8c1cc050b8bcf1e9e273a141cbd4dec644475808))
* improve readme documentation ([394b32b](https://github.com/noaignite/create-ignite-app/commit/394b32ba72c79888cc1c67e4838b2e5cdc409719))
* **README:** add release section to readme file ([43ce941](https://github.com/noaignite/create-ignite-app/commit/43ce9416a2ea058d2b3d172b9eec63e63ff21efc))
* **README:** update based on reviewer feedback ([50a8afb](https://github.com/noaignite/create-ignite-app/commit/50a8afb4d2ee2c643c751b39d6f55b2edd98391e))
* **Typography:** update storybook default display to block for a better story overview ([b07385a](https://github.com/noaignite/create-ignite-app/commit/b07385ae521f24a2eafedd14b4ed0fe577817932))


### Others

* **api:** move centra & cms mock data into it's respective dirs ([cbe7d0a](https://github.com/noaignite/create-ignite-app/commit/cbe7d0a1334a15a59d6f27e1ed858dcfc0acd022))
* **AppMarketDialog:** use same dropdown variant ([9b67f8e](https://github.com/noaignite/create-ignite-app/commit/9b67f8e27248f1c5d8b07f607f0f0ab129d39a62))
* **AppNavDrawer:** add missing translation for close button ([7f961e5](https://github.com/noaignite/create-ignite-app/commit/7f961e5bfb379338d17b46219e9deb6ff2e4831e))
* **CartItem:** remove non-existent classnames ([d5b2ffa](https://github.com/noaignite/create-ignite-app/commit/d5b2ffa21ea8cf68aca633cd6c4cd4d89dcd42b9))
* **CheckoutContext:** update interface to mirror new @noaignite/react-centra-checkout ([9492b15](https://github.com/noaignite/create-ignite-app/commit/9492b15f954f37ecee4f2d496cd285fe093ff23a))
* conform eslint ([52e8e78](https://github.com/noaignite/create-ignite-app/commit/52e8e789eacf8570a989c8c26a74bcc2be3f4716))
* **context:** give temporary names as git is non case sensitive ([a65ef2e](https://github.com/noaignite/create-ignite-app/commit/a65ef2e4c10fd76b63c66e8b69027a115c284d3d))
* **context:** rename context subfolders to lowercase ([1bd4ba1](https://github.com/noaignite/create-ignite-app/commit/1bd4ba1f1a0f34126b61458705f8711e6305437a))
* **core:** bump @emotion/* @mui/* @noaignite/* to [@latest](https://github.com/latest) ([91f4948](https://github.com/noaignite/create-ignite-app/commit/91f4948d1f8b749c35e68d625675af17bdd7ba0a))
* **core:** bump @emotion/* and @mui/* packages to [@latest](https://github.com/latest) ([1b42d4e](https://github.com/noaignite/create-ignite-app/commit/1b42d4e8b28d692492cf896fe91dc34a6b113c1f))
* **core:** bump @noaignite/eslint-config from v0.1.1 to v0.1.4 ([d8f1381](https://github.com/noaignite/create-ignite-app/commit/d8f13818a34ab95611036d206bc17b1446d8d0ac))
* **core:** bump @noaignite/oui from v2.0.0 to v3.0.0 ([702626b](https://github.com/noaignite/create-ignite-app/commit/702626b73ef1545e7d855a0072d72f576b1fd6df))
* **core:** bump @noaignite/oui from v3.0.1 to v3.0.3 ([8b5d797](https://github.com/noaignite/create-ignite-app/commit/8b5d7977efc52bfe57c11d2e30e35cf9fea7213f))
* **core:** bump @storybook/* from v6.3.9 to v6.4.17 ([b9f3222](https://github.com/noaignite/create-ignite-app/commit/b9f32224b2ea21d3832fb8be79576640d31834ec))
* **core:** bump embla-carousel-react from v5.0.1 to v6.0.2 ([f8cefbb](https://github.com/noaignite/create-ignite-app/commit/f8cefbb0b1a3abededf357c7323d77677a5cff16))
* **core:** bump eslint-import-resolver-webpack from v0.13.1 to v0.13.2 to include node 17 ([afe9570](https://github.com/noaignite/create-ignite-app/commit/afe957093b883c577260746c47daf075a8b142e7))
* **core:** bump lint-staged from v11.0.0 to v12.3.2 ([fc182cb](https://github.com/noaignite/create-ignite-app/commit/fc182cb8abf52571128e5a3f7eae0bef47e97204))
* **core:** bump next & @next/bundle-analyzer from v11.1.2 v12.0.4 ([9dc48ca](https://github.com/noaignite/create-ignite-app/commit/9dc48ca2f326cc2ac967825bf8d80b64a71ff317))
* **core:** bump next packages from v12.0.4 to v12.0.9 ([fab277b](https://github.com/noaignite/create-ignite-app/commit/fab277bf47da35d8aba084ab2850d341a45cd491))
* **core:** bump prettier from v2.3.2 to v2.5.1 ([2488581](https://github.com/noaignite/create-ignite-app/commit/248858154d18defe6f2f820a973421c0227ecbf8))
* **core:** bump prop-types from v15.7.2 to v15.8.1 ([dce649c](https://github.com/noaignite/create-ignite-app/commit/dce649c9233874f4226ccbb6a8081d5028249db3))
* **createRenderBlock:** initialize props as empty object and rename key argument to idx ([f8fafb8](https://github.com/noaignite/create-ignite-app/commit/f8fafb84ce09a67d1e0ee2e1878536b21e8d1087))
* **Hero:** add alt tag for non video media ([509608b](https://github.com/noaignite/create-ignite-app/commit/509608b1069c6b0aa022f8150baf93b83ab50356))
* **I18n:** move i18n context into new 'context' dir ([90efb88](https://github.com/noaignite/create-ignite-app/commit/90efb881f1346782fdef0b2fd56b0b8d2dc5a133))
* **import:** create '~' alias and use for all local imports ([999d94d](https://github.com/noaignite/create-ignite-app/commit/999d94d871608e402eb1853db73bae188eaff2f8))
* **Media:** default to empty alt attribute if not of type video ([fca0cf9](https://github.com/noaignite/create-ignite-app/commit/fca0cf94b0091d53b320408795a82648f6c72125))
* **Media:** update mock data with responsive width & height ([c375056](https://github.com/noaignite/create-ignite-app/commit/c37505671edce9a2d2bea00c17e1bef489feba4e))
* **Media:** use generatePreload singleton ([1300b98](https://github.com/noaignite/create-ignite-app/commit/1300b98f1666c0c0447fb3c8f75eefbbd33e3901))
* move and rename api/Checkout to context/Centra ([567c8f2](https://github.com/noaignite/create-ignite-app/commit/567c8f2a42d8291c8857b648755bdf46b3109a62))
* move and rename api/Settings to context/Cms & containers/App/AppContext to context/Global ([7b3c758](https://github.com/noaignite/create-ignite-app/commit/7b3c758d17f77b6c5f4fc3f97bc6590b73478b86))
* move api helpers, such as fetchProducts, into the api dir ([20f2dbb](https://github.com/noaignite/create-ignite-app/commit/20f2dbb75de2b285c10268f228c8435de80588ea))
* **README:** update blocks & components definition ([04f034a](https://github.com/noaignite/create-ignite-app/commit/04f034a70d4bab710ecb29a6d5b390dc871437de))
* remove workflow ([8770e0c](https://github.com/noaignite/create-ignite-app/commit/8770e0cae3b0236f3c0fcd9a3a75b4b30beae31f))
* rename CmsContext to RemoteConfigContext and corresponding hooks ([93eb99c](https://github.com/noaignite/create-ignite-app/commit/93eb99c3ccb5585c7d33b755bec0ed593e39c484))
* reset repo version to 1.0.0 and remove empty changelog file ([f78e121](https://github.com/noaignite/create-ignite-app/commit/f78e1216cd5d26c8302f0b7ae0819259c9f1955e))
* update lint-staged setup ([fd2b430](https://github.com/noaignite/create-ignite-app/commit/fd2b43093b57ce400e9d12f12cace5efa2b67361))
* update readme ([e332e11](https://github.com/noaignite/create-ignite-app/commit/e332e11103fb41f1d1159421313f088b518d098b))
