# TST Tab Drag Handle

![Build Status](https://github.com/piroor/tst-tab-drag-handle/actions/workflows/main.yml/badge.svg?branch=trunk)

* [Signed package on AMO](https://addons.mozilla.org/firefox/addon/tst-tab-drag-handle/)
* [Development builds for each commit are available at "Artifacts" of the CI/CD action](https://github.com/piroor/tst-tab-drag-handle/actions?query=workflow%3ACI%2FCD)

----

Provides UI in Tree Style Tab to start tab dragging for different purposes.

<strong>This is a helper addon for the <a href="https://addons.mozilla.org/firefox/addon/tree-style-tab/">Tree Style Tab</a> 3.4.0 and later, and depends on the <a href="https://github.com/piroor/treestyletab/wiki/Tab-Extra-Contents-API">Tab Extra Contents API</a> introduced at TST 3.4.0.</strong>

Due to technical reasons, it cannot be together to bookmark tabs and to detach tabs to a new window, when they are dragged from TST's sidebar. Detachable dragged tabs won't be bookmarked even if you drop them to the bookmarks toolbar, and bookmarkable tabs won't be detached even if you drop them outside the window. So TST provides ability to switch these actions by regular drag or dragging with the Shift key. This is annoying when you need to use only a mouse or something pointing device.

This helper addon provides small draggable handles on each tab, and it allows you to start dragging for each purpose: bookmarking or detaching.

This was a built-in feature of TST 2.6.0-3.3.6 but separated to a helper addon.

----

Tree Style Tabに対し、異なる目的ごとにドラッグ操作を開始するためのUIを提供します。

<strong>このアドオンは<a href="https://addons.mozilla.org/firefox/addon/tree-style-tab/">Tree Style Tab</a> 3.4.0以降用のヘルパーアドオンで、TST 3.4.0以降で導入された<a href="https://github.com/piroor/treestyletab/wiki/Tab-Extra-Contents-API">Tab Extra Contents API</a>に依存しています。</strong>

技術的な理由により、TSTのサイドバーからドラッグ操作を開始した場合、「タブをブックマークする」と「タブをウィンドウから切り離す」というそれぞれの動作は両立できません。ウィンドウから切り離せる状態でタブをドラッグ開始した場合はブックマークツールバーにドロップしてもブックマークを作成できず、ブックマークを作成できる状態でタブをドラッグ開始した場合はウィンドウ外にドロップしてもタブを別ウィンドウに分離できません。そのためTSTでは、通常のドラッグ操作とShiftキーを押しながらのドラッグ操作でこの両者を切り替えられるようになっていますが、マウスまたは何らかのポインティングデバイスのみを使用しないといけないような場面では、この操作は非常に煩わしいものがあります。

このヘルパーアドオンは、タブの上にドラッグ可能な小さなつまみを表示します。これを使うと、ブックマークするかウィンドウから切り離すか、それぞれの目的ごとにドラッグ操作を開始することができます。

この機能はTST 2.6.0～3.3.6の組み込みの機能でしたが、ヘルパーアドオンとして分離されました。
