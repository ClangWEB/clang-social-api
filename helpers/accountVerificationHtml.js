function accountVerificationHtml(name, url) {
    let html = `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    style="font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Account Verification</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500,800&display=swap&subset=cyrillic-ext"
        rel="stylesheet">
    <style type="text/css">
        .rollover div {
            font-size: 0;
        }

        .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
        }

        .rollover:hover .rollover-second {
            max-height: none !important;
            display: block !important;
        }

        #outlook a {
            padding: 0;
        }

        .es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        [data-ogsb] .es-button {
            border-width: 0 !important;
            padding: 13px 30px 13px 30px !important;
        }

        [data-ogsb] .es-button.es-button-1 {
            padding: 13px 20px !important;
        }

        @media only screen and (max-width:600px) {

            p,
            ul li,
            ol li,
            a {
                line-height: 150% !important
            }

            h1,
            h2,
            h3,
            h1 a,
            h2 a,
            h3 a {
                line-height: 120%
            }

            h1 {
                font-size: 30px !important;
                text-align: left
            }

            h2 {
                font-size: 24px !important;
                text-align: left
            }

            h3 {
                font-size: 20px !important;
                text-align: left
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 30px !important;
                text-align: left
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 24px !important;
                text-align: left
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px !important;
                text-align: left
            }

            .es-menu td a {
                font-size: 14px !important
            }

            .es-header-body p,
            .es-header-body ul li,
            .es-header-body ol li,
            .es-header-body a {
                font-size: 14px !important
            }

            .es-content-body p,
            .es-content-body ul li,
            .es-content-body ol li,
            .es-content-body a {
                font-size: 14px !important
            }

            .es-footer-body p,
            .es-footer-body ul li,
            .es-footer-body ol li,
            .es-footer-body a {
                font-size: 12px !important
            }

            .es-infoblock p,
            .es-infoblock ul li,
            .es-infoblock ol li,
            .es-infoblock a {
                font-size: 12px !important
            }

            *[class="gmail-fix"] {
                display: none !important
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3 {
                text-align: center !important
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3 {
                text-align: right !important
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3 {
                text-align: left !important
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important
            }

            .es-button-border {
                display: inline-block !important
            }

            a.es-button,
            button.es-button {
                font-size: 13px !important;
                display: inline-block !important
            }

            .es-adaptive table,
            .es-left,
            .es-right {
                width: 100% !important
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px !important
            }

            .es-adapt-td {
                display: block !important;
                width: 100% !important
            }

            .adapt-img {
                width: 100% !important;
                height: auto !important
            }

            .es-m-p0 {
                padding: 0 !important
            }

            .es-m-p0r {
                padding-right: 0 !important
            }

            .es-m-p0l {
                padding-left: 0 !important
            }

            .es-m-p0t {
                padding-top: 0 !important
            }

            .es-m-p0b {
                padding-bottom: 0 !important
            }

            .es-m-p20b {
                padding-bottom: 20px !important
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important
            }

            tr.es-desk-hidden,
            td.es-desk-hidden,
            table.es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important
            }

            tr.es-desk-hidden {
                display: table-row !important
            }

            table.es-desk-hidden {
                display: table !important
            }

            td.es-desk-menu-hidden {
                display: table-cell !important
            }

            .es-menu td {
                width: 1% !important
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important
            }

            table.es-social {
                display: inline-block !important
            }

            table.es-social td {
                display: inline-block !important
            }

            .es-m-p5 {
                padding: 5px !important
            }

            .es-m-p5t {
                padding-top: 5px !important
            }

            .es-m-p5b {
                padding-bottom: 5px !important
            }

            .es-m-p5r {
                padding-right: 5px !important
            }

            .es-m-p5l {
                padding-left: 5px !important
            }

            .es-m-p10 {
                padding: 10px !important
            }

            .es-m-p10t {
                padding-top: 10px !important
            }

            .es-m-p10b {
                padding-bottom: 10px !important
            }

            .es-m-p10r {
                padding-right: 10px !important
            }

            .es-m-p10l {
                padding-left: 10px !important
            }

            .es-m-p15 {
                padding: 15px !important
            }

            .es-m-p15t {
                padding-top: 15px !important
            }

            .es-m-p15b {
                padding-bottom: 15px !important
            }

            .es-m-p15r {
                padding-right: 15px !important
            }

            .es-m-p15l {
                padding-left: 15px !important
            }

            .es-m-p20 {
                padding: 20px !important
            }

            .es-m-p20t {
                padding-top: 20px !important
            }

            .es-m-p20r {
                padding-right: 20px !important
            }

            .es-m-p20l {
                padding-left: 20px !important
            }

            .es-m-p25 {
                padding: 25px !important
            }

            .es-m-p25t {
                padding-top: 25px !important
            }

            .es-m-p25b {
                padding-bottom: 25px !important
            }

            .es-m-p25r {
                padding-right: 25px !important
            }

            .es-m-p25l {
                padding-left: 25px !important
            }

            .es-m-p30 {
                padding: 30px !important
            }

            .es-m-p30t {
                padding-top: 30px !important
            }

            .es-m-p30b {
                padding-bottom: 30px !important
            }

            .es-m-p30r {
                padding-right: 30px !important
            }

            .es-m-p30l {
                padding-left: 30px !important
            }

            .es-m-p35 {
                padding: 35px !important
            }

            .es-m-p35t {
                padding-top: 35px !important
            }

            .es-m-p35b {
                padding-bottom: 35px !important
            }

            .es-m-p35r {
                padding-right: 35px !important
            }

            .es-m-p35l {
                padding-left: 35px !important
            }

            .es-m-p40 {
                padding: 40px !important
            }

            .es-m-p40t {
                padding-top: 40px !important
            }

            .es-m-p40b {
                padding-bottom: 40px !important
            }

            .es-m-p40r {
                padding-right: 40px !important
            }

            .es-m-p40l {
                padding-left: 40px !important
            }

            .es-m-margin {
                padding-left: 20px !important;
                padding-right: 20px !important;
                padding-top: 0px !important;
                padding-bottom: 0px !important
            }

            .es-desk-hidden {
                display: table-row !important;
                width: auto !important;
                overflow: visible !important;
                max-height: inherit !important
            }
        }
    </style>
</head>
<body
    style="width:100%;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#F9F9F9">
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F9F9F9">
            <tr>
                <td class="es-m-margin" valign="top" style="padding:0;Margin:0">
                    <table class="es-header" cellspacing="0" cellpadding="0" align="center"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-header-body" cellspacing="0" cellpadding="0" align="center"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                    <tr>
                                        <td align="left" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:600px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px;font-size:0">
                                                                    <table border="0" width="100%" height="100%"
                                                                        cellpadding="0" cellspacing="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr>
                                                                            <td
                                                                                style="padding:0;Margin:0;border-bottom:2px solid #ffffff;background:unset;height:1px;width:100%;margin:0px">
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-content-body" cellspacing="0" cellpadding="0" align="center"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:30px;padding-bottom:40px">
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" class="es-m-p20b"
                                                        style="padding:0;Margin:0;width:280px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704750/Email/banner_cc1xkp.gif"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="280" /></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellspacing="0" cellpadding="0" align="left" class="es-left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:300px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr class="es-mobile-hidden">
                                                                <td align="center" height="50"
                                                                    style="padding:0;Margin:0"></td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="es-m-txt-c"
                                                                    style="padding:0;Margin:0">
                                                                    <h1
                                                                        style="Margin:0;line-height:42px;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;font-size:35px;font-style:normal;font-weight:bold;color:#f51997">
                                                                        CLANG SOCIAL</h1>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="es-m-txt-c"
                                                                    style="padding:0;Margin:0;padding-top:15px">
                                                                    <span>
                                                                        Hello ${name},
                                                                    </span><br />
                                                                    <span>
                                                                        Welcome to the family.
                                                                    </span>
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                        Click on the below Verify Account button to
                                                                        get started.<br /></p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" class="es-m-txt-c"
                                                                style="padding:0;Margin:0;padding-top:15px"><span
                                                                    class="msohide es-button-border"
                                                                    style="border-style:solid;border-color:#060606;background:#000F26;border-width:0px;display:inline-block;border-radius:3px;width:auto;mso-hide:all"><a
                                                                        href=${url} class="es-button"
                                                                        target="_blank"
                                                                        style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:13px;border-style:solid;border-color:#000F26;border-width:13px 30px 13px 30px;display:inline-block;background:#000F26;border-radius:3px;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;font-weight:bold;font-style:normal;line-height:16px;width:auto;text-align:center">Verify
                                                                        Account ➙</a></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" class="es-m-txt-c"
                                                                style="padding:0;Margin:0;padding-top:15px"><span
                                                                    class="msohide es-button-border"
                                                                    style="border-style:solid;border-color:#060606;background:#000F26;border-width:0px;display:inline-block;border-radius:3px;width:auto;mso-hide:all"><a
                                                                        href="https://play.google.com/store/apps/details?id=com.casuals4fun.clang_social"
                                                                        class="es-button" target="_blank"
                                                                        style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:13px;border-style:solid;border-color:#000F26;border-width:13px 30px 13px 30px;display:inline-block;background:#000F26;border-radius:3px;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;font-weight:bold;font-style:normal;line-height:16px;width:auto;text-align:center">
                                                                        Download app ➙
                                                                    </a></span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="Margin:0;padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:30px">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top"
                                                    style="padding:0;Margin:0;width:560px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" class="es-m-txt-c"
                                                                style="padding:0;Margin:0">
                                                                <h2
                                                                    style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;font-size:28px;font-style:normal;font-weight:normal;color:#000F26">
                                                                    Popular Users</h2>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px">
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td class="es-m-p0r es-m-p20b" align="center"
                                                    style="padding:0;Margin:0;width:190px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:15px;background-color:#ffffff"
                                                        bgcolor="#ffffff" role="presentation">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px">
                                                                <img src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704748/Email/people1_joj3ap.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="77" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <strong>Angelina</strong>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em>100k&nbsp;Followers</em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="es-hidden" style="padding:0;Margin:0;width:15px"></td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td class="es-m-p0r es-m-p20b" align="center"
                                                    style="padding:0;Margin:0;width:190px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:15px;background-color:#ffffff"
                                                        bgcolor="#ffffff" role="presentation">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px">
                                                                <img src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704748/Email/people2_ld9v7t.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="77" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <strong>Diana</strong>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em>10k&nbsp;Followers</em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                            <tr>
                                                <td class="es-m-p0r" align="center"
                                                    style="padding:0;Margin:0;width:190px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:15px;background-color:#ffffff"
                                                        bgcolor="#ffffff" role="presentation">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px">
                                                                <img src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704748/Email/people3_kvicha.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="77" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <strong>Shubham</strong>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em>500k&nbsp;Followers</em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:20px">
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td class="es-m-p0r es-m-p20b" align="center"
                                                    style="padding:0;Margin:0;width:190px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:15px;background-color:#ffffff"
                                                        bgcolor="#ffffff" role="presentation">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px">
                                                                <img src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704749/Email/people4_g3gsw1.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="77" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <strong>Pratik</strong>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em>30k&nbsp;Followers</em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="es-hidden" style="padding:0;Margin:0;width:15px"></td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td class="es-m-p0r es-m-p20b" align="center"
                                                    style="padding:0;Margin:0;width:190px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:15px;background-color:#ffffff"
                                                        bgcolor="#ffffff" role="presentation">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px">
                                                                <img src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704749/Email/people5_sbapc4.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="77" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <strong>Marina</strong>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em>450k&nbsp;Followers</em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                            <tr>
                                                <td class="es-m-p0r" align="center"
                                                    style="padding:0;Margin:0;width:190px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:15px;background-color:#ffffff"
                                                        bgcolor="#ffffff" role="presentation">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px">
                                                                <img src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704750/Email/people6_yaapdb.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="77" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <strong>Aniket</strong>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em>800k&nbsp;Followers</em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="padding:0;Margin:0;padding-top:20px;padding-bottom:40px">
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td class="es-m-p20b" align="left"
                                                    style="padding:0;Margin:0;width:335px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-top:5px">
                                                                <h2
                                                                    style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;font-size:28px;font-style:normal;font-weight:normal;color:#000F26">
                                                                    About Us</h2>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-top:10px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    On Clang Social, you have Freedom of Speech and
                                                                    can post Anything at Anytime and from Anywhere.
                                                                    Our mantra is the above three AAAs. So what are
                                                                    you waiting for. Dive into immense world of
                                                                    benefitting from the thoughts of other people
                                                                    and share your thoughts for the brightest future
                                                                    ahead of us.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" height="18"
                                                                style="padding:0;Margin:0"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                            <tr>
                                                <td align="left" style="padding:0;Margin:0;width:245px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" height="25"
                                                                style="padding:0;Margin:0"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" bgcolor="#ffffff"
                                        style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;background-color:#ffffff;border-radius:15px">
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td class="es-m-p20b" align="left"
                                                    style="padding:0;Margin:0;width:312px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" height="38"
                                                                style="padding:0;Margin:0"></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" style="padding:0;Margin:0">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:18px;color:#ffffff;font-size:12px">
                                                                    <strong><span
                                                                        style="background-color:#073590;padding:3px">New</span></strong>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-top:5px">
                                                                <h2
                                                                    style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;font-size:28px;font-style:normal;font-weight:normal;color:#000F26">
                                                                    New features</h2>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-top:10px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    Will be added soon.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-top:10px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <a target="_blank"
                                                                        href="https://cs-demo.netlify.app"
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000F26;font-size:14px">Learn
                                                                        more ➙</a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                            <tr>
                                                <td align="left" style="padding:0;Margin:0;width:208px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;font-size:0px"><img
                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704750/Email/gifan2_l08wrl.gif"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="185" /></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style="padding:0;Margin:0">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top"
                                                    style="padding:0;Margin:0;width:600px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" height="40"
                                                                style="padding:0;Margin:0"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" bgcolor="#ffffff"
                                        style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;background-color:#ffffff;border-radius:15px">
                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                            <tr>
                                                <td align="left" style="padding:0;Margin:0;width:312px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" height="38"
                                                                style="padding:0;Margin:0"></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" style="padding:0;Margin:0">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:18px;color:#ffffff;font-size:12px">
                                                                    <strong><span
                                                                        style="background-color:#FFA23B;padding:3px">Update</span></strong>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-top:5px">
                                                                <h2
                                                                    style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;font-size:28px;font-style:normal;font-weight:normal;color:#000F26">
                                                                    New stories</h2>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-top:10px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    Updating Soon</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-top:10px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <a target="_blank"
                                                                        href="https://cs-demo.netlify.app"
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000F26;font-size:14px">Learn
                                                                        more ➙</a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td align="left" style="padding:0;Margin:0;width:208px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" class="es-m-p20t"
                                                                style="padding:0;Margin:0;font-size:0px"><img
                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704749/Email/gifan31_jg8wwi.gif"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="185" /></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:40px">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top"
                                                    style="padding:0;Margin:0;width:560px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" class="es-m-txt-c"
                                                                style="padding:0;Margin:0">
                                                                <h2
                                                                    style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;font-size:28px;font-style:normal;font-weight:normal;color:#000F26">
                                                                    Popular Posts</h2>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px">
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td class="es-m-p20b" align="left"
                                                    style="padding:0;Margin:0;width:290px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        bgcolor="#ffffff"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:15px"
                                                        role="presentation">
                                                        <tr>
                                                            <td align="center"
                                                                style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px">
                                                                <img class="adapt-img"
                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704750/Email/q1_lxc5e2.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;border-radius:15px;border-collapse:separate"
                                                                    width="250" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em><strong>@Pratik</strong></em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em>10k Followers</em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                                <table border="0" class="es-table cke_show_border"
                                                                    cellspacing="1" cellpadding="1"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td align="left"
                                                                            style="padding:0;Margin:0;width:35px;font-size:0px">
                                                                            <a target="_blank"
                                                                                href="https://cs-demo.netlify.app/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000F26;font-size:14px"><img
                                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704747/Email/hart1_gace1o.png"
                                                                                    alt
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                                    width="22" /></a>
                                                                        </td>
                                                                        <td align="left"
                                                                            style="padding:0;Margin:0;font-size:0px">
                                                                            <a target="_blank"
                                                                                href="https://cs-demo.netlify.app/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000F26;font-size:14px"><img
                                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704751/Email/us_eiuaz2.png"
                                                                                    alt
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                                    width="22" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                            <tr>
                                                <td align="left" style="padding:0;Margin:0;width:290px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        bgcolor="#ffffff"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:15px"
                                                        role="presentation">
                                                        <tr>
                                                            <td align="center"
                                                                style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px">
                                                                <img class="adapt-img"
                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704750/Email/q2_yntmnn.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;border-radius:15px;border-collapse:separate"
                                                                    width="250" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em><strong>@Marina</strong></em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em>100k Followers</em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                                <table border="0" class="es-table cke_show_border"
                                                                    cellspacing="1" cellpadding="1"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td align="left"
                                                                            style="padding:0;Margin:0;width:35px;font-size:0px">
                                                                            <a target="_blank"
                                                                                href="https://cs-demo.netlify.app/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000F26;font-size:14px"><img
                                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704747/Email/hart1_gace1o.png"
                                                                                    alt
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                                    width="22" /></a>
                                                                        </td>
                                                                        <td align="left"
                                                                            style="padding:0;Margin:0;font-size:0px">
                                                                            <a target="_blank"
                                                                                href="https://cs-demo.netlify.app/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000F26;font-size:14px"><img
                                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704751/Email/us_eiuaz2.png"
                                                                                    alt
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                                    width="22" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="padding:0;Margin:0;padding-top:10px;padding-bottom:30px">
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td class="es-m-p20b" align="left"
                                                    style="padding:0;Margin:0;width:290px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        bgcolor="#ffffff"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:15px"
                                                        role="presentation">
                                                        <tr>
                                                            <td align="center"
                                                                style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px">
                                                                <img class="adapt-img"
                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704750/Email/q3_w3ei8y.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;border-radius:15px;border-collapse:separate"
                                                                    width="250" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em><strong>@Shubham</strong></em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em>500k Followers</em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                                <table border="0" class="es-table cke_show_border"
                                                                    cellspacing="1" cellpadding="1"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td align="left"
                                                                            style="padding:0;Margin:0;width:35px;font-size:0px">
                                                                            <a target="_blank"
                                                                                href="https://cs-demo.netlify.app/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000F26;font-size:14px"><img
                                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704747/Email/hart1_gace1o.png"
                                                                                    alt
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                                    width="22" /></a>
                                                                        </td>
                                                                        <td align="left"
                                                                            style="padding:0;Margin:0;font-size:0px">
                                                                            <a target="_blank"
                                                                                href="https://cs-demo.netlify.app/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000F26;font-size:14px"><img
                                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704751/Email/us_eiuaz2.png"
                                                                                    alt
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                                    width="22" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                            <tr>
                                                <td align="left" style="padding:0;Margin:0;width:290px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        bgcolor="#ffffff"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:15px"
                                                        role="presentation">
                                                        <tr>
                                                            <td align="center"
                                                                style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px;font-size:0px">
                                                                <img class="adapt-img"
                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704750/Email/q41_rstt0u.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;border-radius:15px;border-collapse:separate"
                                                                    width="250" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em><strong>@Angelina</strong></em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    <em>450k Followers</em>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px">
                                                                <table border="0" class="es-table cke_show_border"
                                                                    cellspacing="1" cellpadding="1"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%"
                                                                    role="presentation">
                                                                    <tr>
                                                                        <td align="left"
                                                                            style="padding:0;Margin:0;width:35px;font-size:0px">
                                                                            <a target="_blank"
                                                                                href="https://cs-demo.netlify.app/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000F26;font-size:14px"><img
                                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704747/Email/hart1_gace1o.png"
                                                                                    alt
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                                    width="22" /></a>
                                                                        </td>
                                                                        <td align="left"
                                                                            style="padding:0;Margin:0;font-size:0px">
                                                                            <a target="_blank"
                                                                                href="https://cs-demo.netlify.app/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000F26;font-size:14px"><img
                                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704751/Email/us_eiuaz2.png"
                                                                                    alt
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                                    width="22" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table class="es-footer" cellspacing="0" cellpadding="0" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                    <tr>
                        <td align="center" style="padding:0;Margin:0">
                            <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                <tr>
                                    <td align="left" style="padding:0;Margin:0">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top"
                                                    style="padding:0;Margin:0;width:600px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" height="40"
                                                                style="padding:0;Margin:0"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;border-radius:15px;background-color:#ffffff"
                                        bgcolor="#ffffff">
                                        <table cellspacing="0" cellpadding="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td class="es-m-p0r" valign="top" align="center"
                                                    style="padding:0;Margin:0;width:560px">
                                                    <table width="100%" cellspacing="0" cellpadding="0"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" class="es-m-txt-c"
                                                                style="padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0px">
                                                                <img src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704747/Email/ClangSocial_Reset_t3xgbk_yjwb2k.png"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="119" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;font-size:0">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    class="es-table-not-adapt es-social"
                                                                    role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr>
                                                                        <td align="center" valign="top"
                                                                            style="padding:0;Margin:0"><a
                                                                                target="_blank"
                                                                                href="https://cs-demo.netlify.app"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img
                                                                                    src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704747/Email/icon_fhqf30.png"
                                                                                    alt="CS" title="Clang Social"
                                                                                    width="32"
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Montserrat, 'Google Sans', 'Segoe UI', Roboto, Arial, Ubuntu, sans-serif;line-height:21px;color:#000F26;font-size:14px">
                                                                    Post Anything | Anytime | Anywhere</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                                        <table width="100%" cellspacing="0" cellpadding="0"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td valign="top" align="center"
                                                    style="padding:0;Margin:0;width:560px">
                                                    <table width="100%" cellspacing="0" cellpadding="0"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td class="es-infoblock made_with" align="center"
                                                                style="padding:0;Margin:0;line-height:0px;font-size:0px;color:#CCCCCC">
                                                                <a target="_blank" href="mailto:clang.web@gmail.com"
                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img
                                                                        src="https://res.cloudinary.com/diqbu4moc/image/upload/v1671704751/Email/Transparent_Merry_Christmas_New_Year_z6zamw.png"
                                                                        alt width="125"
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" /></a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>
</body >
    `;

    return html;
}

module.exports = accountVerificationHtml;