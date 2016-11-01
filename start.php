<?php

if (setting('cm_sticky_enabled') && strtolower(Phpfox_Request::instance()->get('req1')) != Phpfox::getParam('admincp.admin_cp')) {
    $sJsData = 'window.cmStickyBlocksSelector = \'' . setting('cm_sticky_selector', '#right, #left') . '\';';
    $sJsData .= 'window.cmStickyOffsetTop = \'' . setting('cm_offset_top', 15) . '\';';
    asset('<script type="text/javascript">' . $sJsData . '</script>');
}

route('/admincp/cmsticky', function(){
    auth()->isAdmin(true);

    if (!cache()->exists('cm_sticky_info')) {
        $oHttp = new \Core\HTTP('https://store.phpfox.com/techie/u/ecodemaster');
        $sResponse = $oHttp->get();
        $sCMContent = simplexml_import_dom(@DOMDocument::loadHTML($sResponse))
            ->xpath('//div[@class="holder_main"]')[0]->saveXML();
        $sCMContent = str_replace('href="codemake.org"', 'href="http://codemake.org"', $sCMContent);
        cache()->set('cm_sticky_info', view('@CM_Sticky/info.html', ['sCMContent' => $sCMContent]));
    }

    echo cache()->get('cm_sticky_info', 60 * 24);
    return 'controller';
});